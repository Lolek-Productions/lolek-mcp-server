# Chapter 3: App Architecture

## Overview

This chapter defines the foundational architecture patterns for building scalable web applications. App architecture encompasses database design, user isolation, component organization, and application structure. A well-designed architecture ensures maintainability, security, and scalability as your application grows.

## Purpose

Establish a robust application architecture that:
- Provides clear separation between different user types and access levels
- Implements proper data isolation and security patterns
- Organizes components and pages in a logical, maintainable structure
- Supports both individual and team-based applications
- Creates consistent patterns for navigation and user experience

---

## App Structure:

### Individual structure
-Each main record everywhere (excluding pivot tables) should have a user_id

### Team structure
-Each main record everywhere (excluding pivot tables) should have a team_id (or equivalent)

## User Settings
ordinarily there will be a user_settings table

## Team Settings
if this a team structured application, there should ordinarily be a team_settings table

## Regarding the storing of Team Settings
There needs to be consideration for the storing of the current_team for the user in Supabase and in the browser.  This is an area that still needs work.  TODO

## Public Pages
//Note that public pages should be set as an array in the middleware file

### Components
- public header
- Public footer

## App Pages area

### Components
- main header

## Sidebar Definition

The sidebar provides navigation for the authenticated area of the application. Key characteristics:

### Structure and Layout
- **Scope**: Surrounds all content in the "(main)" folder but not shown on landing page "/"
- **Components**: Uses shadcn/ui Sidebar components with proper semantic structure
- **Responsive**: Automatically handles mobile/desktop behavior with collapse functionality

### Organization Pattern
- **Header**: Logo/branding with link to dashboard
- **Grouped Navigation**: Organize menu items into logical groups (Application, Administration)
- **Collapsible Sections**: Use Radix UI Collapsible for expandable menu groups
- **Footer**: User profile and account management

### Menu Item Structure
```typescript
// Data structure for menu items
const menuItems = [
  {
    title: "Module Name",
    url: "/module-path",
    icon: LucideIcon,
  }
]
```

### Collapsible Groups Pattern
- **State Management**: Use useState for each collapsible section
- **Visual Indicators**: ChevronDown/ChevronRight icons for expand/collapse state
- **Nested Navigation**: SidebarMenuSub for sub-items within groups

### Mobile Behavior
- **Auto-close**: Close sidebar on mobile after navigation
- **Touch-friendly**: Proper touch targets and spacing
- **Responsive Icons**: Clear visual hierarchy on small screens

### Implementation Guidelines
- Use consistent icon patterns (Sparkles for "Create", module-specific icons for main items)
- Group related functionality together (e.g., Contacts, Parishes, Campaigns)
- Maintain clear visual hierarchy with SidebarGroupLabel
- Include user profile management in footer
- Handle link clicks with mobile awareness

### Navigation Structure Example
```
MODULE_NAME (FileText icon) - Collapsible dropdown:
- Create ENTITY - /entities/create (Sparkles icon)
- My ENTITIES - /entities (FileText icon)

Settings (Settings icon) - Collapsible dropdown:
- Module Definitions - /settings/module-definitions (FileText icon)
- System Settings - /settings/system (Cog icon)
```

**Pattern Notes:**
- Use descriptive module names with appropriate lucide-react icons
- Create actions always use Sparkles icon for consistency
- List views use the module's primary icon
- Settings grouped separately at bottom of navigation

## Definition of AppContextProvider
-Gives the user and userSettings

## Entity Module:
-index page
-create page - redireccts to Edit page
-edit page

## Route Structure Patterns

### Standard Route Organization
- **Public routes**: `/` (landing), `/login`, `/signup` - accessible without authentication
- **Protected routes**: All routes under `/(main)/` - require authentication
- **Print-optimized routes**: Special layouts under `/(print)/` - minimal UI for printing

### Route Architecture Benefits
- **Clear separation**: Public vs authenticated content
- **Consistent patterns**: Predictable URL structure
- **Print support**: Dedicated layouts for document generation
- **Middleware protection**: Automatic route protection based on folder structure

## Architecture Highlights

### Key Architectural Patterns
- **Two-tier layout system**: Separate public and authenticated areas
- **Server Actions**: Secure data operations with built-in validation
- **Comprehensive authentication flow**: Middleware protection for all routes
- **Modern React patterns**: Server Components where possible for better performance

### Implementation Benefits
- **Security**: Server-side data operations prevent client-side vulnerabilities
- **Performance**: Server Components reduce client-side JavaScript
- **Maintainability**: Clear separation of concerns between public and private areas
- **Scalability**: Consistent patterns that scale with application growth

## Dashboard Definition: ???