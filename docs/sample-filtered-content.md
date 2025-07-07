# Content Filtering with <!-- IGNORE -->

This document explains how to use `<!-- IGNORE -->` directives in `index.md` files to filter content from corresponding `content.md` files.

## How It Works

The filtering system works by:
1. Reading `<!-- IGNORE -->` markers from `index.md` files
2. Identifying which titles should be filtered
3. Removing those titles and their content from the `content.md` when fetched

## Example 1: Ignoring an Entire Section

In your `index.md` file:

```markdown
## 1. Authentication and User Management

<!-- IGNORE -->
### Basic Authentication
- Supabase User Authentication via Email and Password (JavaScript)
- Supabase Auth: Sign in with Email Magic Link
- Sign in Anonymously with Supabase
- Link Email or Phone Identity to Anonymous User (Supabase Auth)
- Signing in with phone OTP
- Verify OTP and Session on Server-Side with Supabase JS Client
- Verify OTP in Express.js
- Verify OTP with Supabase Auth (Next.js & Express)
- Supabase Verify OTP Success Session Response

### OAuth and Social Authentication
- Handle OAuth Callback and Code Exchange (Next.js TypeScript)
- Supabase Auth: Sign In with Discord OAuth Provider
```

When content is fetched, all the titles listed under "Basic Authentication" will be filtered out from the `content.md` file because the section is marked with `<!-- IGNORE -->`.

## Example 2: Ignoring Individual Items

In your `index.md` file:

```markdown
### OAuth and Social Authentication
- Handle OAuth Callback and Code Exchange (Next.js TypeScript)
- Handle OAuth Callback and Code Exchange (SvelteKit TypeScript)
<!-- IGNORE -->
- Supabase Auth: Sign In with Discord OAuth Provider
- Sign In with GitLab using Supabase OAuth
- Implement Google Sign-in with Chrome Identity API and Supabase (TypeScript)
<!-- IGNORE -->
- Handle Google Sign-in Callback with Supabase (Nonce Included)
- Create Flask Route for GitHub OAuth Sign-in
```

Result:
- "Supabase Auth: Sign In with Discord OAuth Provider" - **filtered out**
- "Handle Google Sign-in Callback with Supabase (Nonce Included)" - **filtered out**
- All other items remain in the content

## What Gets Filtered

When a title is marked as ignored in `index.md`, the filtering removes from `content.md`:
- The `TITLE: [title name]` line
- All content following that title until the next `TITLE:` line or section divider (`---`)

## Complete Example

### index.md
```markdown
# Supabase Documentation Index

## 1. Authentication and User Management

### Basic Authentication
- Supabase User Authentication via Email and Password (JavaScript)
<!-- IGNORE -->
- Supabase Auth: Sign in with Email Magic Link
- Sign in Anonymously with Supabase
```

### content.md (before filtering)
```
TITLE: Supabase User Authentication via Email and Password (JavaScript)
DESCRIPTION: Shows how to authenticate...
SOURCE: https://github.com/...
[code content]
----------------------------------------

TITLE: Supabase Auth: Sign in with Email Magic Link
DESCRIPTION: Demonstrates magic link...
SOURCE: https://github.com/...
[code content]
----------------------------------------

TITLE: Sign in Anonymously with Supabase
DESCRIPTION: Anonymous auth...
SOURCE: https://github.com/...
[code content]
```

### content.md (after filtering)
```
TITLE: Supabase User Authentication via Email and Password (JavaScript)
DESCRIPTION: Shows how to authenticate...
SOURCE: https://github.com/...
[code content]
----------------------------------------

TITLE: Sign in Anonymously with Supabase
DESCRIPTION: Anonymous auth...
SOURCE: https://github.com/...
[code content]
```

The "Supabase Auth: Sign in with Email Magic Link" entry is completely removed because it was marked with `<!-- IGNORE -->` in the index.

## Benefits

- **Simple**: Just add `<!-- IGNORE -->` before any item or section you want to hide
- **Centralized**: All filtering decisions are made in the `index.md` file
- **Clean**: The `content.md` file remains unchanged; filtering happens at runtime
- **Flexible**: Can ignore entire sections or individual items