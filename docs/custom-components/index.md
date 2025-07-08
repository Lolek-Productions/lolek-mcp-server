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
- **Schema Documentation**: Run `/scripts/generate-database-docs.sh` to refresh the database schema
- **Schema Reference**: View the current schema at `/DATABASE.md`
- **Important**: Always refresh database docs before starting development to ensure you have the latest schema

### Refresh the Database Structure
Run the following file to refresh the schema for the postgres database hosted at Supabase:
```bash
/scripts/generate-database-docs.sh
```
Once this file is run, you can view the schema at `DATABASE.md`
Find the example at `/DATABASE.md`

### Authentication Setup
- **Authentication Provider**: Supabase
- **Authentication Pages**: `/signup`, `/login`
- **Protected Routes**: All routes except public paths
- **Public Paths**: `['/login', '/signup', '/']`
- **Post-Authentication Redirect**: `/dashboard`
- **Email Verification**: Not currently required

### Middleware Configuration
The application uses middleware to protect routes with these public paths:
```javascript
publicPaths = ['/login', '/signup', '/']
```
All other routes require authentication and redirect to `/dashboard` after login.

### Supabase Configuration Steps

#### Disable Email Verification
1. Go to Supabase Dashboard > Authentication > Settings
2. Under "Email Confirmations", disable "Enable email confirmations"
3. Save changes

#### Configure Redirect URLs
1. Go to Authentication > URL Configuration
2. Add your development URL (e.g., http://localhost:3000)
3. Add your production URL
4. Set Site URL to your main domain

#### Configure Auth Settings
1. Set "Minimum password length" as needed
2. Configure "Password requirements" 
3. Set "Session timeout" (default 24 hours)
4. Enable/disable "Allow new users to sign up" based on requirements

### Administer Supabase Users
1. Go to your Supabase Dashboard
2. Navigate to Authentication > Users
3. Here you can view, edit, and manage user accounts
4. Actions available: view user details, reset passwords, delete users

### Application Structure
- **Landing Page**: Navigation on the "/" page
- **Authentication Flow**: Login → Dashboard (main application)
- **User Management**: Handled through Supabase Dashboard
- **Session Management**: Server-side session handling with Supabase Auth

### App Structure

#### Individual Structure
- Each main record everywhere (excluding pivot tables) should have a `user_id`
- Data is scoped to individual users
- Direct user ownership of all records

#### Team Structure
- Each main record everywhere (excluding pivot tables) should have a `team_id` (or equivalent)
- Data is scoped to teams/organizations
- Shared access within team boundaries

### Settings Tables

#### User Settings
Ordinarily there will be a `user_settings` table for individual user preferences and configuration.

#### Team Settings
If this is a team structured application, there should ordinarily be a `team_settings` table for team-wide configuration and preferences.

### Data Architecture Considerations
- **Choose one structure**: Either individual-based OR team-based, not both
- **Consistent scoping**: Apply the chosen structure consistently across all main tables
- **Pivot tables**: Exclude pivot/junction tables from the scoping requirement
- **Settings separation**: Use appropriate settings table based on chosen structure

### GitHub Integration

Projects are hosted in GitHub for version control and seamless deployment integration.

### SSH Key Management

#### How to Add SSH Key to Digital Ocean
1. Generate SSH key pair locally: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Copy public key: `cat ~/.ssh/id_rsa.pub`
3. Log into Digital Ocean dashboard
4. Go to Settings > Security > SSH Keys
5. Click "Add SSH Key" and paste your public key
6. Name the key and save

#### How to Add SSH Key to GitHub
1. Generate SSH key if not already done: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Copy public key: `cat ~/.ssh/id_rsa.pub`
3. Go to GitHub > Settings > SSH and GPG keys
4. Click "New SSH key"
5. Paste key, add title, and save
6. Test connection: `ssh -T git@github.com`

### Project Deployment Setup

#### How to Start a New Project Linking GitHub and Vercel
1. **Create GitHub Repository**
   - Create new repository on GitHub
   - Clone locally: `git clone [repository-url]`
   - Add your project files and commit

2. **Connect to Vercel**
   - Sign up/login to Vercel with GitHub account
   - Click "Import Project" on Vercel dashboard
   - Select your GitHub repository
   - Configure build settings (usually auto-detected)
   - Deploy

3. **Configure Environment Variables**
   - Go to Vercel project settings
   - Add environment variables under "Environment Variables"
   - Redeploy if necessary

### Domain Configuration

#### How to Add Custom Domain to Vercel
1. Go to Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain (e.g., yourapp.com)
4. Follow DNS configuration instructions
5. Verify domain ownership

#### How to Add Credentials to Vercel
1. **Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add variables for development, preview, and production
   - Common variables: DATABASE_URL, API_KEYS, etc.

2. **Secrets Management**
   - Use Vercel's built-in secrets management
   - Never commit secrets to GitHub
   - Use different values for different environments

#### DNS Configuration with NameCheap
1. **Access DNS Management**
   - Log into NameCheap account
   - Go to Domain List > Manage
   - Navigate to Advanced DNS tab

2. **Configure DNS Records**
   - Delete existing records if setting up new domain
   - Add new "A" record:
     - Host: "@" (for root domain)
     - Value: Vercel IP address (e.g., 76.76.19.61)
     - TTL: Automatic
   - Add "CNAME" record for www:
     - Host: "www"
     - Value: "cname.vercel-dns.com"

3. **Verify Configuration**
   - DNS changes may take 24-48 hours to propagate
   - Use tools like `dig` or online DNS checkers to verify
   - Confirm SSL certificate is issued automatically

### Branding and Assets

#### Logo Design Guidelines
- **Design Tools**: Use Affinity Designer 2 or Canva for logo creation
- **Icon Integration**: Lucide-react SVG code can be pasted directly into Affinity Designer 2 for customization
- **Icon Libraries**: Use lucide-react icons for consistent styling throughout the app
- **Custom Logos**: Ensure logos work at multiple sizes (16px to 200px)
- **File Formats**: Provide SVG for scalability, PNG for fallbacks
- **Color Variants**: Design for light/dark themes if applicable

#### Favicon Creation
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

## 9. Usage Context

These components are designed for a church management application ("Lolek Productions - Serving the Church") with features for:
- Managing contacts, parishes, and campaigns
- User authentication and profile management
- Administrative functions and user management
- Responsive design for desktop and mobile devices

All components follow consistent design patterns and can be easily adapted for other applications by modifying navigation items, branding, and authentication providers.