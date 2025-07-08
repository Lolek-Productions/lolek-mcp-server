# Custom Components Documentation

This documentation covers custom React components and comprehensive project setup guidance to help AI agents build Next.js applications quickly and consistently. The MCP server provides tools, components, and configuration patterns for shadcn/ui, Tailwind CSS, and Supabase authentication.

## 1. Application Context Components

### AppContextProvider
Application context provider for global state management with Supabase authentication integration

## 2. Public Page Components

### PublicFooter
Simple footer component for public-facing pages with company branding

### PublicHeader
Navigation header for public pages with responsive mobile menu and login button

## 3. Layout and Container Components

### CenteredFormCard
Reusable centered card container for forms and content with customizable max-width

### PageContainer
Page layout container with optional card wrapper and consistent page structure

## 4. Navigation Components

### MainHeader
Main application header for authenticated pages with breadcrumb navigation

### MainSidebar
Complete application sidebar with navigation structure and user profile integration

### CollapsibleNavSection
Collapsible navigation section for sidebar menus with expand/collapse animation

## 5. User Interface Components

### CopyButton
Button component for copying text to clipboard with visual feedback

### UserProfile
User profile dropdown with Supabase authentication and user management

## 6. Component System Architecture

### Architecture Overview
- Navigation components and layout patterns
- MainHeader and breadcrumb system integration
- Dynamic navigation with React Context
- Component integration workflows

### Implementation Patterns
- MainLayout usage for consistent structure
- Breadcrumb configuration and cleanup
- useEffect hooks for navigation updates
- Mobile-responsive design considerations

### Best Practices
- Always use MainLayout for main application pages
- Set breadcrumbs in useEffect with proper cleanup
- Follow breadcrumb configuration patterns
- Test mobile responsiveness thoroughly

## 7. Component Dependencies

### Common Dependencies
- shadcn/ui components (Button, Card, Sidebar, Avatar, DropdownMenu)
- Tailwind CSS for styling
- Lucide React for icons
- Next.js for routing and optimization
- Supabase for authentication
- Radix UI primitives

### Design Patterns
- Responsive design principles
- TypeScript interfaces
- Compound component architecture
- Error handling and loading states

## 8. Technology Stack

### Frontend Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components

### Backend Stack
- Supabase (PostgreSQL + Authentication)
- Server Actions for API

### Development Guidelines
- Always use custom components before shadcn/ui
- Follow TypeScript patterns
- Maintain responsive design
- Integrate with Supabase Auth

## 9. Setup Requirements

### Required Files
- Company logo in public directory
- Supabase configuration
- shadcn/ui components

### Environment Setup
- Next.js 13+ with App Router
- Tailwind CSS configured
- Supabase client configuration

### Database Setup
- PostgreSQL hosted at Supabase
- Schema documentation workflow
- Database refresh procedures
- Automated database documentation generator script

## 10. Authentication Configuration

### Authentication Setup
- Supabase authentication provider
- Protected and public routes
- Middleware configuration

### Supabase Configuration
- Email verification settings
- Redirect URL configuration
- User management procedures

## 11. Data Architecture

### App Structure Options
- Individual structure (user_id scoping)
- Team structure (team_id scoping)

### Settings Tables
- User settings for individual apps
- Team settings for team-based apps

### Architecture Guidelines
- Consistent data scoping
- Proper table relationships

## 12. Infrastructure & Deployment

### Version Control
- GitHub integration
- SSH key management

### Deployment Pipeline
- GitHub to Vercel workflow
- Environment variables
- Custom domain setup

### DNS Configuration
- NameCheap DNS setup
- SSL certificate management

## 13. Branding & Assets

### Logo Design
- Design tool recommendations
- Icon integration guidelines
- File format requirements

### Favicon Creation
- Complete favicon workflow
- Multi-platform testing
- PWA support

## 14. Purpose & Usage Context

### MCP Server Purpose
This MCP server is designed to help AI agents build applications quickly and consistently by providing:
- Pre-built, production-ready React components
- Complete project setup and configuration guidance
- Standardized development patterns and workflows
- Infrastructure and deployment procedures

### Component Library Context
The custom components provide common application patterns including:
- Authentication workflows (login, signup, user profiles)
- Navigation structures (headers, sidebars, breadcrumbs)
- Layout containers (forms, pages, cards)
- UI interactions (copy buttons, collapsible sections)

### Example Applications
The components include examples from a church management application (contacts, parishes, campaigns) but are designed to be generic and adaptable for any business application requiring user authentication, data management, and responsive design.

### AI Agent Benefits
- **Rapid Development**: Start with working components instead of building from scratch
- **Consistent Patterns**: Follow established TypeScript, styling, and architectural patterns
- **Complete Stack**: From database setup to deployment, all guidance is provided
- **Best Practices**: Security, accessibility, and performance considerations built-in