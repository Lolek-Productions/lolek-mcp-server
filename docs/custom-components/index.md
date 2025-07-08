# Custom Components Documentation

This documentation covers all custom React components and project setup guidance for Next.js applications with shadcn/ui, Tailwind CSS, and Supabase authentication.

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

## 6. Component Dependencies

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

## 7. Technology Stack

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

## 8. Setup Requirements

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

## 9. Authentication Configuration

### Authentication Setup
- Supabase authentication provider
- Protected and public routes
- Middleware configuration

### Supabase Configuration
- Email verification settings
- Redirect URL configuration
- User management procedures

## 10. Data Architecture

### App Structure Options
- Individual structure (user_id scoping)
- Team structure (team_id scoping)

### Settings Tables
- User settings for individual apps
- Team settings for team-based apps

### Architecture Guidelines
- Consistent data scoping
- Proper table relationships

## 11. Infrastructure & Deployment

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

## 12. Branding & Assets

### Logo Design
- Design tool recommendations
- Icon integration guidelines
- File format requirements

### Favicon Creation
- Complete favicon workflow
- Multi-platform testing
- PWA support

## 13. Usage Context

These components are designed for a church management application with features for managing contacts, parishes, campaigns, and user authentication. All components follow consistent design patterns and can be adapted for other applications.