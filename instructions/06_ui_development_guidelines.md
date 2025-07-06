# Chapter 6: UI Development Guidelines

## Overview

This chapter establishes UI development standards and patterns for building consistent, accessible, and user-friendly web applications. UI guidelines ensure that components, layouts, and interactions follow established design principles while maintaining consistency across the entire application.

## Purpose

Create cohesive user interface standards that:
- Provide consistent component patterns and behaviors
- Ensure accessibility and mobile responsiveness across all views
- Establish clear design systems and styling approaches
- Support complex user workflows through wizards and multi-step processes
- Maintain visual consistency through standardized branding and assets

---

<!-- TODO: Many sections below need expanded content with detailed examples and implementation guidance -->

## How to make a table
Tables shoudl have a search bar, pagination, and the ability to sort by key columns.  The table should also have a button to be able to create a new item.  That button may redirect the user to the /create page.  The table should produce a link to the /edit page.  Also, the table should allow the user to delete items.

## Toast
Use toasts.  Sonner is the currently recommend toast at shadcn/ui

## How to construct a module
for example: Petitions Module
Root folder for Petitions: /src/app/(main)/petitions
List view: /petitions
Create view: /petitions/create (usually will create name and description)
Edit/Wizard view: /petitions/[id]/edit or /petitions/[id]/wizard

## How to construct (main)
Main is the name for the area that contains the sidebar.
the main area should contain a dashboard

## How to construct (print)
The print view is a view section in the app that does NOT use the app.  There are no visual components by default in the (print) part of the app.

## mobile friendly
all views should be mobile friendly

## Wizard
Whene there is a complex task, a wizard should be used.  Here are some of the key features of the wizard:
- the steps are represented visually at the top of the ux
- the step number is present in the url
- tasks happen automatically between steps

## Buttons
Buttons should give immediate feedback when clicked, that they have been clicked.  This especially pertains to "submit" or other buttons that handle significant tasks on the page.  

## Headings
AI agent, look at this app on how to describe a module heading.

## How to construct a module:
- page component
- centered carad component

## how to use tables:
use shadcn

## Styling
Use shadcn

## Design
Use lucide-react icons where posssible

## Development Guidelines for AI Agents
- Ordinarily use Form-Field for input components
- Use a toast whenever appropriate to give feedback to the user
- Use shadcn components consistently throughout the application

## Branding and Assets

### Logo Design Guidelines
- **Design Tools**: Use Affinity Designer 2 or Canva for logo creation
- **Icon Integration**: Lucide-react SVG code can be pasted directly into Affinity Designer 2 for customization
- **Icon Libraries**: Use lucide-react icons for consistent styling throughout the app
- **Custom Logos**: Ensure logos work at multiple sizes (16px to 200px)
- **File Formats**: Provide SVG for scalability, PNG for fallbacks
- **Color Variants**: Design for light/dark themes if applicable

### Favicon Creation
1. **Recommended Tool**: Use favicon.io for generating favicons from images, text, or emojis

2. **Design Process**
   - Create logo/icon in Affinity Designer 2 or Canva
   - Export as PNG (minimum 512x512 pixels for best quality)
   - Upload to favicon.io to generate complete favicon package
   - Download generated files (includes multiple sizes and formats)

3. **Implementation**
   - Place favicon.ico in public directory root
   - Add other generated files (apple-touch-icon.png, etc.) to public directory
   - Include generated manifest.json for PWA support
   - Use the provided HTML tags from favicon.io in your layout

4. **Testing**
   - Test on various devices and browsers
   - Verify appearance in browser tabs and bookmarks
   - Check mobile home screen icon appearance

