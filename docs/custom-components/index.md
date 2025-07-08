# Custom Components Documentation

This documentation covers all custom React components found in the `/examples` folder, designed for a Next.js application with shadcn/ui, Tailwind CSS, and Supabase authentication.

## 1. Application Context Components

### AppContextProvider
- Application context provider for global state management
- Centralized user authentication state with Supabase integration
- Application settings management (theme, sidebar, notifications)
- Persistent settings storage with localStorage
- Custom hook (useAppContext) for accessing state and methods
- Automatic auth state listening and session management

## 2. Public Page Components

### PublicFooter
- Simple footer component for public-facing pages
- Company branding with copyright information
- No props required, fully self-contained

### PublicHeader
- Navigation header for public pages
- Responsive mobile menu with hamburger toggle
- Logo, navigation links, and login button
- Requires company logo in public folder

## 3. Layout and Container Components

### CenteredFormCard
- Reusable centered card container for forms and content
- Customizable max-width options (sm to 7xl)
- Uses shadcn/ui Card components for consistent styling
- Perfect for login forms, signup pages, and centered content

### PageContainer
- Page layout container with optional card wrapper
- Provides consistent page title and description layout
- Can wrap content in CenteredFormCard when needed
- Supports custom max-width and additional CSS classes

## 4. Navigation Components

### MainHeader
- Main application header for authenticated pages
- Sidebar trigger integration for responsive design
- Dynamic breadcrumb navigation support
- Optional sidebar toggle control

### MainSidebar
- Complete application sidebar with navigation structure
- Company branding in header section
- Organized navigation groups (Application, Administration)
- Integrates CollapsibleNavSection and UserProfile components
- Mobile-responsive with auto-close behavior

### CollapsibleNavSection
- Collapsible navigation section for sidebar menus
- Expand/collapse animation with chevron icons
- Mobile-aware sidebar integration
- Supports custom icons and navigation items array

## 5. User Interface Components

### CopyButton
- Button component for copying text to clipboard
- Visual feedback with "Copied!" state (2-second timeout)
- Error handling for clipboard operations
- Customizable button variants and sizes

### UserProfile
- User profile dropdown with Supabase authentication
- User avatar with email initials
- Dropdown menu with settings and logout functionality
- Loading states and error handling
- Automatic redirect on logout

## 6. Component Dependencies

### Common Dependencies Across Components:
- **shadcn/ui**: Extensive use of Button, Card, Sidebar, Avatar, DropdownMenu components
- **Tailwind CSS**: All styling uses Tailwind utility classes
- **Lucide React**: Icon library used throughout (Menu, Home, Users, Settings, Copy, Check, etc.)
- **Next.js**: Router, Link, and Image optimization
- **Supabase**: Authentication integration (UserProfile component)
- **Radix UI**: Collapsible component for navigation

### Design Patterns:
- **Responsive Design**: All components include mobile-responsive behavior
- **TypeScript**: Strong typing with interfaces for props
- **Compound Components**: Components designed to work together
- **State Management**: Local state with React hooks where needed
- **Error Handling**: Proper error boundaries and fallbacks

## 7. Recommended Technology Stack

### Frontend Stack
- **Framework**: Next.js 15 (App Router) - See [Next.js documentation](../nextjs/) for implementation details
- **Language**: TypeScript for type safety and developer experience
- **Styling**: Tailwind CSS for utility-first styling
- **Components**: shadcn/ui components - See [shadcn/ui documentation](../shadcn/) for usage patterns

### Backend Stack
- **Database & Auth**: Supabase (PostgreSQL + Authentication)
- **Authentication**: Supabase Auth with server-side session management
- **API**: Server Actions for secure data operations

### UI Library
- **Component System**: Radix UI primitives with shadcn/ui styling
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Development Guidelines
- **Always use custom components** before falling back to shadcn/ui components
- **Follow TypeScript patterns** established in existing components
- **Maintain responsive design** across all new components
- **Integrate with Supabase Auth** for user-facing features
- **Use consistent design patterns** from existing component library

## 8. Setup Requirements

### Required Files:
- `/public/Lolek-logo.png` - Company logo for headers and sidebar
- Supabase configuration for authentication features
- shadcn/ui components properly installed and configured

### Environment Setup:
- Next.js 13+ with App Router
- Tailwind CSS configured
- shadcn/ui components library
- Supabase client configuration
- Lucide React icons package

### Database Setup:
- **Database**: PostgreSQL hosted at Supabase
- **Schema Documentation**: Create and run `/scripts/generate-database-docs.sh` to refresh the database schema
- **Schema Reference**: Generated schema will be available at `/DATABASE.md`
- **Setup Required**: The database documentation script and DATABASE.md file need to be created
- **Important**: Always refresh database docs before starting development to ensure you have the latest schema

## 9. Usage Context

These components are designed for a church management application ("Lolek Productions - Serving the Church") with features for:
- Managing contacts, parishes, and campaigns
- User authentication and profile management
- Administrative functions and user management
- Responsive design for desktop and mobile devices

All components follow consistent design patterns and can be easily adapted for other applications by modifying navigation items, branding, and authentication providers.