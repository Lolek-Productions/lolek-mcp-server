# Component Documentation

This directory contains comprehensive documentation for custom application components, their implementation patterns, and usage guidelines.

## Overview

This documentation covers the component architecture used in the main application area, focusing on:

- **Navigation components** (MainHeader, Sidebar, Breadcrumbs)
- **Layout patterns** and integration workflows  
- **Common implementation problems** and their solutions
- **Best practices** for component development

## Component System Architecture

### MainHeader Component
The primary navigation header that appears at the top of every page in the main folder structure. It includes:

- **Sidebar toggle button** - Controls sidebar open/close state
- **Breadcrumb navigation** - Shows current page hierarchy  
- **Responsive layout** - Adapts to different screen sizes

### Breadcrumb System
A dynamic navigation system that:

- **Updates automatically** when pages load via useEffect hooks
- **Supports dynamic content** (user names, IDs, etc.)
- **Follows configuration** defined in breadcrumbConfig.js
- **Integrates with React Context** for state management

### Integration Pattern
Every page in the main folder should follow this pattern:

1. **Import MainLayout** - Provides consistent header/sidebar structure
2. **Set up breadcrumbs** - Use useEffect to configure page hierarchy
3. **Handle cleanup** - Clear breadcrumbs when component unmounts

## Documentation Structure

- **`index.md`** - Organized sections and categories
- **`content.md`** - Detailed implementation examples and code
- **`breadcrumb.md`** - Complete breadcrumb implementation requirements and patterns
- **`README.md`** - This overview and getting started guide

## Quick Start

To implement MainHeader on a new page:

```jsx
import React, { useEffect } from 'react';
import { useBreadcrumb } from '../contexts/BreadcrumbContext';
import { getBreadcrumbItems } from '../config/breadcrumbConfig';
import MainLayout from '../layouts/MainLayout';

const MyNewPage = () => {
  const { setBreadcrumbItems } = useBreadcrumb();

  useEffect(() => {
    const breadcrumbItems = getBreadcrumbItems('/main/my-new-page');
    setBreadcrumbItems(breadcrumbItems);
    
    return () => setBreadcrumbItems([]);
  }, [setBreadcrumbItems]);

  return (
    <MainLayout>
      <h1>My New Page</h1>
      {/* Page content */}
    </MainLayout>
  );
};
```

## Using the MCP Server

Query this documentation through the MCP server tools:

```bash
# List all component documentation
get-headings --topic=components

# Get component sections  
get-sections --topic=components

# Search for specific components
search-content --query="MainHeader" --scope=docs
```

## Best Practices

1. **Always use MainLayout** for pages in the main folder
2. **Set breadcrumbs in useEffect** with proper cleanup
3. **Follow the breadcrumb configuration** pattern
4. **Test mobile responsiveness** for all header implementations
5. **Handle dynamic content** properly in breadcrumbs

## Common Issues

See the "Common Problems and Solutions" section in the content documentation for detailed troubleshooting of:

- Breadcrumb update timing issues
- Sidebar state synchronization problems  
- Mobile responsiveness challenges
- Z-index conflicts with other components