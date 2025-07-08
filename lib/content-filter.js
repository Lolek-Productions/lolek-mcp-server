/**
 * Content Filter for Documentation
 * Simple filtering based on <!-- IGNORE --> directives in index.md files
 */

const { readFileSync } = require("fs");

class ContentFilter {
  /**
   * Parse IGNORE directives from index.md
   * Returns a set of titles that should be ignored
   */
  parseIgnoredItems(indexContent) {
    const ignoredTitles = new Set();
    const lines = indexContent.split('\n');
    let skipSection = false;
    let currentSectionLevel = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this line is a heading
      const headingMatch = line.match(/^(#{1,6})\s+/);
      
      if (headingMatch) {
        const level = headingMatch[1].length;
        
        // Check if we should stop skipping (found a heading at same or higher level)
        if (skipSection && level <= currentSectionLevel) {
          skipSection = false;
        }
        
        // Check if the previous line has IGNORE
        if (i > 0 && lines[i - 1].trim() === '<!-- IGNORE -->') {
          skipSection = true;
          currentSectionLevel = level;
          continue;
        }
      }
      
      // If we're in a skipped section, collect all list items
      if (skipSection && (trimmedLine.startsWith('-') || trimmedLine.match(/^\d+\./))) {
        const itemText = trimmedLine.replace(/^[-\d.]\s*/, '').trim();
        if (itemText) {
          ignoredTitles.add(itemText);
        }
      }
      
      // Check for individual ignored items
      if ((trimmedLine.startsWith('-') || trimmedLine.match(/^\d+\./)) && i > 0 && lines[i - 1].trim() === '<!-- IGNORE -->') {
        const itemText = trimmedLine.replace(/^[-\d.]\s*/, '').trim();
        if (itemText) {
          ignoredTitles.add(itemText);
        }
      }
    }
    
    return ignoredTitles;
  }

  /**
   * Filter content based on ignored titles from index.md
   * Removes content for titles marked as ignored
   */
  filterContent(content, indexContent = null) {
    if (!indexContent) {
      return content;
    }

    const ignoredTitles = this.parseIgnoredItems(indexContent);
    
    if (ignoredTitles.size === 0) {
      return content;
    }

    const lines = content.split('\n');
    const filteredLines = [];
    let skipUntilNextTitle = false;
    let lastLineWasDivider = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const titleMatch = line.match(/^TITLE:\s*(.+)$/);
      const isDivider = line.match(/^-{3,}$/);
      
      if (titleMatch) {
        const title = titleMatch[1].trim();
        if (ignoredTitles.has(title)) {
          skipUntilNextTitle = true;
          // Remove the previous divider if it exists
          if (lastLineWasDivider && filteredLines.length > 0) {
            filteredLines.pop();
          }
          continue;
        } else {
          skipUntilNextTitle = false;
        }
      }
      
      // Handle divider lines
      if (isDivider) {
        if (skipUntilNextTitle) {
          // Skip this divider, it belongs to ignored content
          skipUntilNextTitle = false;
          continue;
        }
        lastLineWasDivider = true;
      } else {
        lastLineWasDivider = false;
      }
      
      if (!skipUntilNextTitle) {
        filteredLines.push(line);
      }
    }
    
    // Clean up any trailing dividers and empty lines before them
    while (filteredLines.length > 0) {
      const lastLine = filteredLines[filteredLines.length - 1];
      if (lastLine.match(/^-{3,}$/) || lastLine.trim() === '') {
        filteredLines.pop();
      } else {
        break;
      }
    }
    
    return filteredLines.join('\n');
  }

  /**
   * Get filtered headings from content
   */
  getFilteredHeadings(content, type = "titles", indexContent = null) {
    // For content.md files, apply filtering first
    const filteredContent = this.filterContent(content, indexContent);
    
    let headings;
    if (type === "titles") {
      // Extract TITLE: lines from filtered content
      headings = filteredContent
        .split("\n")
        .filter(line => line.trim().startsWith("TITLE:"))
        .map(line => line.trim().replace("TITLE: ", ""));
    } else {
      // Extract markdown headings from filtered content
      headings = filteredContent
        .split("\n")
        .filter(line => line.trim().match(/^#+\s/))
        .map(line => line.trim());
    }
    
    return headings;
  }

  /**
   * Get filtered sections from index content
   */
  getFilteredSections(indexContent) {
    const ignoredTitles = this.parseIgnoredItems(indexContent);
    
    // Extract all sections from index
    const lines = indexContent.split("\n");
    const sections = [];
    let skipSection = false;
    let currentSectionLevel = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const sectionMatch = line.trim().match(/^##\s+\d+\.\s+(.+)$/);
      
      if (sectionMatch) {
        const sectionName = sectionMatch[1];
        
        // Check if this section should be skipped
        let shouldSkip = false;
        if (i > 0 && lines[i - 1].trim() === '<!-- IGNORE -->') {
          shouldSkip = true;
        }
        
        if (!shouldSkip) {
          sections.push(sectionName);
        }
      }
    }
    
    return sections;
  }

  /**
   * Check if a topic is available (always true in simplified version)
   */
  isTopicAllowed(topic) {
    return true;
  }
}

module.exports = ContentFilter;