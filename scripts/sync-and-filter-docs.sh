#!/bin/bash

# Sync and Filter Documentation Script
# This script syncs documentation from Context 7 and applies content filtering

set -e

# Configuration
CONTEXT7_SOURCE="${CONTEXT7_SOURCE:-/path/to/context7/docs}"
DOCS_DIR="$(dirname "$0")/../docs"
FILTER_CONFIG="$DOCS_DIR/filter-config.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to backup existing docs
backup_docs() {
    if [ -d "$DOCS_DIR" ]; then
        local backup_dir="$DOCS_DIR.backup.$(date +%Y%m%d_%H%M%S)"
        log "Backing up existing docs to $backup_dir"
        cp -r "$DOCS_DIR" "$backup_dir"
    fi
}

# Function to sync from Context 7
sync_from_context7() {
    if [ ! -d "$CONTEXT7_SOURCE" ]; then
        error "Context 7 source directory not found: $CONTEXT7_SOURCE"
        error "Set CONTEXT7_SOURCE environment variable to the correct path"
        exit 1
    fi

    log "Syncing documentation from Context 7..."
    
    # Create full docs directory for complete sync
    mkdir -p "$DOCS_DIR/full"
    
    # Sync all documentation from Context 7
    rsync -av --delete "$CONTEXT7_SOURCE/" "$DOCS_DIR/full/"
    
    log "Sync from Context 7 completed"
}

# Function to apply filtering and create public docs
apply_filtering() {
    log "Applying content filtering..."
    
    # Check if filter config exists
    if [ ! -f "$FILTER_CONFIG" ]; then
        warn "Filter config not found at $FILTER_CONFIG"
        warn "Copying full docs without filtering"
        cp -r "$DOCS_DIR/full"/* "$DOCS_DIR/"
        return
    fi
    
    # Use Node.js to apply filtering
    if command -v node >/dev/null 2>&1; then
        node "$(dirname "$0")/filter-docs.js" \
            --source "$DOCS_DIR/full" \
            --target "$DOCS_DIR" \
            --config "$FILTER_CONFIG" \
            --profile "default"
    else
        warn "Node.js not found, copying docs without filtering"
        cp -r "$DOCS_DIR/full"/* "$DOCS_DIR/"
    fi
    
    log "Content filtering completed"
}

# Function to validate docs structure
validate_docs() {
    log "Validating documentation structure..."
    
    local topics=0
    local files=0
    
    for topic_dir in "$DOCS_DIR"/*/; do
        if [ -d "$topic_dir" ] && [ "$(basename "$topic_dir")" != "full" ]; then
            topics=$((topics + 1))
            
            if [ -f "$topic_dir/content.md" ]; then
                files=$((files + 1))
            fi
            
            if [ -f "$topic_dir/index.md" ]; then
                files=$((files + 1))
            fi
        fi
    done
    
    log "Found $topics topics with $files documentation files"
    
    if [ $topics -eq 0 ]; then
        error "No documentation topics found!"
        exit 1
    fi
}

# Function to test MCP server
test_mcp_server() {
    log "Testing MCP server with filtered content..."
    
    if [ -f "$(dirname "$0")/test-client.mjs" ]; then
        node "$(dirname "$0")/test-client.mjs" localhost:3000 || warn "MCP server test failed"
    else
        warn "MCP test client not found, skipping test"
    fi
}

# Main execution
main() {
    log "Starting documentation sync and filtering process..."
    
    # Parse command line arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --no-backup)
                BACKUP=false
                shift
                ;;
            --dry-run)
                DRY_RUN=true
                shift
                ;;
            --source)
                CONTEXT7_SOURCE="$2"
                shift 2
                ;;
            --help)
                echo "Usage: $0 [OPTIONS]"
                echo "Options:"
                echo "  --no-backup    Skip backing up existing docs"
                echo "  --dry-run      Show what would be done without making changes"
                echo "  --source DIR   Specify Context 7 source directory"
                echo "  --help         Show this help message"
                exit 0
                ;;
            *)
                error "Unknown option: $1"
                exit 1
                ;;
        esac
    done
    
    if [ "$DRY_RUN" = true ]; then
        log "DRY RUN MODE - No changes will be made"
    fi
    
    # Execute sync process
    if [ "$BACKUP" != false ] && [ "$DRY_RUN" != true ]; then
        backup_docs
    fi
    
    if [ "$DRY_RUN" != true ]; then
        sync_from_context7
        apply_filtering
        validate_docs
        test_mcp_server
    else
        log "Would sync from: $CONTEXT7_SOURCE"
        log "Would apply filtering using: $FILTER_CONFIG"
        log "Would validate docs in: $DOCS_DIR"
    fi
    
    log "Documentation sync and filtering completed successfully!"
}

# Run main function
main "$@"