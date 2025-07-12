TITLE: PublicFooter Component
DESCRIPTION: Simple footer component for public-facing pages with company branding and copyright information. Provides consistent footer layout across all public pages.
SOURCE: /examples/components/PublicFooter.jsx
LANGUAGE: jsx
CODE:
```jsx
import React from 'react';

const PublicFooter = () => {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Lolek Productions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default PublicFooter;
```
USAGE: Place at the bottom of public layout components. No props required.
DEPENDENCIES: None (pure React component)

----------------------------------------

TITLE: PublicHeader Component
DESCRIPTION: Navigation header for public pages with responsive mobile menu, logo, navigation links, and login button. Handles mobile menu state and provides consistent public page navigation.
SOURCE: /examples/components/PublicHeader.jsx
LANGUAGE: jsx
CODE:
```jsx
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const PublicHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Lolek-logo.png"
              alt="Lolek Productions"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-xl">Lolek Productions</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-600 hover:text-gray-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Button asChild className="w-fit">
                <Link href="/login">Login</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default PublicHeader;
```
USAGE: Place at the top of public layout components. Requires /Lolek-logo.png in public folder.
DEPENDENCIES: shadcn/ui Button, Next.js Link/Image, Lucide React Menu icon

----------------------------------------

TITLE: CenteredFormCard Component
DESCRIPTION: Reusable centered card container for forms and content. Provides consistent centered layout with customizable max-width and card styling using shadcn/ui components.
SOURCE: /examples/components/centered-form-card.tsx
LANGUAGE: tsx
CODE:
```tsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CenteredFormCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const CenteredFormCard: React.FC<CenteredFormCardProps> = ({
  title,
  children,
  className,
  maxWidth = '4xl',
}) => {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  };

  return (
    <div className={cn('flex justify-center items-center min-h-screen p-4', className)}>
      <Card className={cn('w-full', maxWidthClasses[maxWidth])}>
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
};

export default CenteredFormCard;
```
USAGE: Wrap forms or content that need centered card layout. Customize maxWidth for different content sizes.
DEPENDENCIES: shadcn/ui Card components, cn utility function

----------------------------------------

TITLE: CollapsibleNavSection Component
DESCRIPTION: Collapsible navigation section for sidebar menus with expand/collapse animation. Integrates with sidebar context for mobile behavior and supports custom icons and navigation items.
SOURCE: /examples/components/collapsible-nav-section.tsx
LANGUAGE: tsx
CODE:
```tsx
import React from 'react';
import Link from 'next/link';
import { LucideIcon, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar } from '@/components/ui/sidebar';

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

interface CollapsibleNavSectionProps {
  name: string;
  icon: LucideIcon;
  items: NavItem[];
  defaultOpen?: boolean;
}

const CollapsibleNavSection: React.FC<CollapsibleNavSectionProps> = ({
  name,
  icon: Icon,
  items,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const { setOpenMobile } = useSidebar();

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <Icon />
            <span>{name}</span>
            {isOpen ? <ChevronDown className="ml-auto" /> : <ChevronRight className="ml-auto" />}
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {items.map((item) => (
              <SidebarMenuSubItem key={item.title}>
                <SidebarMenuSubButton asChild>
                  <Link 
                    href={item.url}
                    onClick={() => setOpenMobile(false)}
                  >
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

export default CollapsibleNavSection;
```
USAGE: Create collapsible navigation sections in sidebars. Pass array of NavItem objects with title, url, and icon.
DEPENDENCIES: Radix UI Collapsible, shadcn/ui Sidebar components, Lucide React icons, Next.js Link

----------------------------------------

TITLE: CopyButton Component
DESCRIPTION: Button component for copying text to clipboard with visual feedback. Shows "Copied!" state for 2 seconds after successful copy operation with error handling for clipboard failures.
SOURCE: /examples/components/copy-button.tsx
LANGUAGE: tsx
CODE:
```tsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CopyButtonProps {
  content: string;
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const CopyButton: React.FC<CopyButtonProps> = ({
  content,
  className,
  variant = 'outline',
  size = 'sm',
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleCopy}
      className={cn(className)}
    >
      {isCopied ? (
        <>
          <Check className="w-4 h-4 mr-1" />
          Copied!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-1" />
          Copy
        </>
      )}
    </Button>
  );
};

export default CopyButton;
```
USAGE: Add copy functionality to any text content. Provide content prop with text to copy.
DEPENDENCIES: shadcn/ui Button, Lucide React Copy/Check icons, cn utility function

----------------------------------------

TITLE: Loading Component
DESCRIPTION: Flexible loading component with multiple display variants including spinner, skeleton cards, and skeleton lists. Provides consistent loading states throughout the application with customizable size, centering, and styling options.
SOURCE: /examples/components/loading.tsx
LANGUAGE: tsx
CODE:
```tsx
import { Loader2 } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

interface LoadingProps {
  message?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
  centered?: boolean
  variant?: 'spinner' | 'skeleton-cards' | 'skeleton-list'
}

export function Loading({ 
  message = "Loading...", 
  className,
  size = 'md',
  centered = true,
  variant = 'spinner'
}: LoadingProps) {
  const sizeClasses = {
    'sm': 'h-4 w-4',
    'md': 'h-6 w-6', 
    'lg': 'h-8 w-8'
  }

  const containerClasses = cn(
    "flex items-center gap-2",
    centered && "justify-center py-8",
    className
  )

  if (variant === 'skeleton-cards') {
    return (
      <div className={cn("space-y-6", className)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (variant === 'skeleton-list') {
    return (
      <div className={cn("space-y-4", className)}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  // Default spinner variant
  return (
    <div className={containerClasses}>
      <Loader2 className={cn("animate-spin text-muted-foreground", sizeClasses[size])} />
      <span className="text-muted-foreground">{message}</span>
    </div>
  )
}
```
USAGE: Use for loading states throughout the application. Choose variant based on content type: 'spinner' for general loading, 'skeleton-cards' for card layouts, 'skeleton-list' for list layouts. Customize size, message, and positioning as needed.
DEPENDENCIES: shadcn/ui Skeleton component, Lucide React Loader2 icon, cn utility function

----------------------------------------

TITLE: MainHeader Component
DESCRIPTION: Main application header with sidebar trigger and breadcrumb navigation. Provides consistent header layout for authenticated application pages with optional sidebar toggle and dynamic breadcrumbs.
SOURCE: /examples/components/main-header.tsx
LANGUAGE: tsx
CODE:
```tsx
import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface MainHeaderProps {
  showSidebarTrigger?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

const MainHeader: React.FC<MainHeaderProps> = ({
  showSidebarTrigger = true,
  breadcrumbs = [{ label: 'Dashboard', active: true }],
}) => {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      {showSidebarTrigger && <SidebarTrigger className="-ml-1" />}
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={index}>
              {index > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {crumb.active ? (
                  <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};

export default MainHeader;
```
USAGE: Place at top of authenticated pages. Pass breadcrumbs array for navigation context.
DEPENDENCIES: shadcn/ui Breadcrumb and Sidebar components

----------------------------------------

TITLE: MainSidebar Component
DESCRIPTION: Main application sidebar with navigation and user profile. Provides organized navigation groups for application features with company branding, collapsible sections, and user profile integration.
SOURCE: /examples/components/main-sidebar.tsx
LANGUAGE: tsx
CODE:
```tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Users, Building, Megaphone, Settings, Users as UsersIcon } from 'lucide-react';
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import CollapsibleNavSection from '@/components/collapsible-nav-section';
import UserProfile from '@/components/user-profile';

const MainSidebar = () => {
  const applicationNavItems = [
    { title: 'Contacts', url: '/contacts', icon: Users },
    { title: 'Parishes', url: '/parishes', icon: Building },
    { title: 'Campaigns', url: '/campaigns', icon: Megaphone },
  ];

  const administrationNavItems = [
    { title: 'Users', url: '/admin/users', icon: UsersIcon },
  ];

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="flex items-center space-x-2 px-2">
          <Image
            src="/Lolek-logo.png"
            alt="Lolek Productions"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-lg">Lolek Productions</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/dashboard">
                    <Home />
                    <span>Dashboard</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <CollapsibleNavSection
                name="Application"
                icon={Home}
                items={applicationNavItems}
                defaultOpen={true}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <CollapsibleNavSection
                name="Administration"
                icon={Settings}
                items={administrationNavItems}
                defaultOpen={false}
              />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserProfile />
      </SidebarFooter>
    </Sidebar>
  );
};

export default MainSidebar;
```
USAGE: Main navigation component for authenticated application. Requires /Lolek-logo.png in public folder.
DEPENDENCIES: shadcn/ui Sidebar components, CollapsibleNavSection, UserProfile, Lucide React icons, Next.js Link/Image

----------------------------------------

TITLE: PageContainer Component
DESCRIPTION: Page layout container with optional card wrapper for consistent page layouts. Provides page title, description, and optional card wrapping for form-like content with customizable max-width.
SOURCE: /examples/components/page-container.tsx
LANGUAGE: tsx
CODE:
```tsx
import React from 'react';
import CenteredFormCard from '@/components/centered-form-card';
import { cn } from '@/lib/utils';

interface PageContainerProps {
  title: string;
  description?: string;
  cardTitle?: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
}

const PageContainer: React.FC<PageContainerProps> = ({
  title,
  description,
  cardTitle,
  children,
  className,
  maxWidth = '4xl',
}) => {
  const content = (
    <div className={cn('space-y-6', className)}>
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-2">{description}</p>
        )}
      </div>
      {children}
    </div>
  );

  if (cardTitle) {
    return (
      <CenteredFormCard title={cardTitle} maxWidth={maxWidth}>
        {content}
      </CenteredFormCard>
    );
  }

  return content;
};

export default PageContainer;
```
USAGE: Wrap page content for consistent layout. Use cardTitle prop to wrap content in centered card.
DEPENDENCIES: CenteredFormCard component, cn utility function

----------------------------------------

TITLE: UserProfile Component
DESCRIPTION: User profile dropdown with authentication integration for Supabase. Displays user avatar with email initials, dropdown menu with settings and logout functionality, and handles loading states.
SOURCE: /examples/components/user-profile.tsx
LANGUAGE: tsx
CODE:
```tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, Settings, LogOut } from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (loading) {
    return (
      <div className="flex items-center space-x-2 p-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const initials = user.email
    ? user.email.split('@')[0].slice(0, 2).toUpperCase()
    : 'U';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-full justify-start">
          <Avatar className="w-8 h-8">
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span className="ml-2 truncate">{user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
```
USAGE: Place in sidebar footer or header for user authentication features. Requires Supabase configuration.
DEPENDENCIES: Supabase client, shadcn/ui Button/Avatar/DropdownMenu, Lucide React icons, Next.js navigation

----------------------------------------

TITLE: AppContextProvider Component
DESCRIPTION: Application context provider that wraps the entire app with global state management. Provides centralized state for user authentication, application settings, and shared data across components using React Context API.
SOURCE: /examples/contexts/AppContextProvider.tsx
LANGUAGE: tsx
CODE:
```tsx
import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { supabase } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';

interface AppState {
  user: User | null;
  loading: boolean;
  error: string | null;
  settings: {
    theme: 'light' | 'dark' | 'system';
    sidebarCollapsed: boolean;
    notifications: boolean;
  };
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateSettings: (settings: Partial<AppState['settings']>) => void;
  clearError: () => void;
}

type AppAction =
  | { type: 'SET_USER'; payload: User | null }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'UPDATE_SETTINGS'; payload: Partial<AppState['settings']> }
  | { type: 'CLEAR_ERROR' }
  | { type: 'TOGGLE_SIDEBAR' };

const initialState: AppState = {
  user: null,
  loading: true,
  error: null,
  settings: {
    theme: 'system',
    sidebarCollapsed: false,
    notifications: true,
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'UPDATE_SETTINGS':
      return { 
        ...state, 
        settings: { ...state.settings, ...action.payload } 
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    case 'TOGGLE_SIDEBAR':
      return { 
        ...state, 
        settings: { 
          ...state.settings, 
          sidebarCollapsed: !state.settings.sidebarCollapsed 
        } 
      };
    default:
      return state;
  }
};

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect(() => {
    // Get initial user session
    const getInitialSession = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error) throw error;
        dispatch({ type: 'SET_USER', payload: session?.user ?? null });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Authentication error' });
      }
    };

    getInitialSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        dispatch({ type: 'SET_USER', payload: session?.user ?? null });
        
        if (event === 'SIGNED_OUT') {
          // Clear any cached data when user signs out
          dispatch({ type: 'UPDATE_SETTINGS', payload: initialState.settings });
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    // Load settings from localStorage on mount
    const savedSettings = localStorage.getItem('app-settings');
    if (savedSettings) {
      try {
        const settings = JSON.parse(savedSettings);
        dispatch({ type: 'UPDATE_SETTINGS', payload: settings });
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    }
  }, []);

  useEffect(() => {
    // Save settings to localStorage whenever they change
    localStorage.setItem('app-settings', JSON.stringify(state.settings));
  }, [state.settings]);

  const login = async (email: string, password: string) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) throw error;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Login failed' });
    }
  };

  const logout = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error instanceof Error ? error.message : 'Logout failed' });
    }
  };

  const updateSettings = (newSettings: Partial<AppState['settings']>) => {
    dispatch({ type: 'UPDATE_SETTINGS', payload: newSettings });
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value: AppContextType = {
    state,
    dispatch,
    login,
    logout,
    updateSettings,
    clearError,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

export default AppContextProvider;
```
USAGE: Wrap your entire application with this provider in your root layout or _app.tsx file. Access state and methods using useAppContext hook.
DEPENDENCIES: Supabase client, Supabase auth types, React Context API, localStorage for settings persistence

----------------------------------------

TITLE: Component System Architecture
DESCRIPTION: Overview of component architecture, navigation patterns, and implementation guidelines for custom components.

## Component System Overview
This documentation covers the component architecture used in application development, focusing on:
- Navigation components (MainHeader, Sidebar, Breadcrumbs)
- Layout patterns and integration workflows  
- Common implementation problems and their solutions
- Best practices for component development

## MainHeader Component Architecture
The primary navigation header that appears at the top of every page includes:
- **Sidebar toggle button** - Controls sidebar open/close state
- **Breadcrumb navigation** - Shows current page hierarchy  
- **Responsive layout** - Adapts to different screen sizes

## Breadcrumb System
A dynamic navigation system that:
- **Updates automatically** when pages load via useEffect hooks
- **Supports dynamic content** (user names, IDs, etc.)
- **Follows configuration** defined in breadcrumbConfig.js
- **Integrates with React Context** for state management

## Integration Pattern
Every page in the main folder should follow this pattern:
1. **Import MainLayout** - Provides consistent header/sidebar structure
2. **Set up breadcrumbs** - Use useEffect to configure page hierarchy
3. **Handle cleanup** - Clear breadcrumbs when component unmounts

## Quick Start Implementation
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

## Best Practices
1. **Always use MainLayout** for pages in the main folder
2. **Set breadcrumbs in useEffect** with proper cleanup
3. **Follow the breadcrumb configuration** pattern
4. **Test mobile responsiveness** for all header implementations
5. **Handle dynamic content** properly in breadcrumbs

## Common Implementation Issues
- **Breadcrumb update timing issues**: Ensure useEffect dependencies are correct
- **Sidebar state synchronization problems**: Use consistent context providers
- **Mobile responsiveness challenges**: Test across device sizes
- **Z-index conflicts**: Maintain proper layering hierarchy

## MCP Server Documentation Access
Query this documentation through the MCP server tools:
- `get-sections --topic=development-guide` - Get development sections  
- `search-content --query="MainHeader" --scope=docs` - Search for specific components
- `load-documentation-context` - Load all development guidance

----------------------------------------

TITLE: Technology Stack Details
DESCRIPTION: Comprehensive technology stack and development guidelines for Next.js applications with Supabase integration.

## Frontend Stack
- **Framework**: Next.js 15 (App Router) - See [Next.js documentation](../nextjs/) for implementation details
- **Language**: TypeScript for type safety and developer experience
- **Styling**: Tailwind CSS for utility-first styling
- **Components**: shadcn/ui components - See [shadcn/ui documentation](../shadcn/) for usage patterns

## Project Structure
```
src/
├── app/                     # Next.js App Router
│   ├── (main)/             # Main app route group
│   │   ├── layout.tsx      # Main layout wrapper
│   │   └── contacts/       # Contacts feature
│   │       ├── page.tsx    # Contact list
│   │       ├── [id]/       # Dynamic contact detail
│   │       └── create/     # Create new contact
│   ├── (public)/           # Public routes group
│   │   ├── layout.tsx      # Public layout
│   │   ├── page.tsx        # Public homepage
│   │   └── about/          # About page
│   └── (print)/            # Print-specific routes
├── components/             # Reusable components
└── lib/                    # Utility functions
```

## Backend Stack
- **Database & Auth**: Supabase (PostgreSQL + Authentication)
- **Authentication**: Supabase Auth with server-side session management
- **API**: Server Actions for secure data operations

## UI Library
- **Component System**: Radix UI primitives with shadcn/ui styling
- **Icons**: Lucide React for consistent iconography
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Development Guidelines
- **Always use custom components** before falling back to shadcn/ui components
- **Follow TypeScript patterns** established in existing components
- **Maintain responsive design** across all new components
- **Integrate with Supabase Auth** for user-facing features
- **Use consistent design patterns** from existing component library

----------------------------------------

TITLE: Setup Requirements
DESCRIPTION: Complete setup requirements for development environment and project configuration.

## Required Files
- `/public/Lolek-logo.png` - Company logo for headers and sidebar
- Supabase configuration for authentication features
- shadcn/ui components properly installed and configured

## Environment Setup
- Next.js 13+ with App Router
- Tailwind CSS configured
- shadcn/ui components library
- Supabase client configuration
- Lucide React icons package

## Creating New Applications

**Important**: When creating a new application, use the Supabase template as your starting point.

### Supabase Template Setup
- Navigate to Supabase dashboard and create a new project
- Use the "Create from template" option when available
- This provides pre-configured authentication, database structure, and environment settings
- Ensures consistent setup across all applications
- Includes proper Row Level Security (RLS) policies and authentication flows

### Benefits of Using Templates
- **Consistent Architecture**: All applications follow the same patterns
- **Pre-configured Security**: RLS policies and authentication already set up
- **Faster Development**: Skip manual configuration and focus on features
- **Best Practices**: Templates include proven security and performance configurations

## Database Setup
- **Database**: PostgreSQL hosted at Supabase
- **Schema Documentation**: Run `/scripts/generate-database-docs.sh` to refresh the database schema
- **Schema Reference**: View the current schema at `/DATABASE.md`
- **Important**: Always refresh database docs before starting development to ensure you have the latest schema

## Database Documentation Generator
A comprehensive script that automatically generates database schema documentation by querying Supabase's REST API and creating a complete DATABASE.md file.

### Quick Usage
```bash
./scripts/generate-database-docs.sh
```

### What the Script Does
- **Automatically discovers tables** from the live Supabase database via REST API
- **Generates comprehensive documentation** including table schemas, column types, and accessibility status
- **Requires only environment variables** - no database client tools needed
- **Creates read-only output** to prevent accidental edits
- **Provides security information** about RLS (Row Level Security) implementation

### Requirements
- Environment variables: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- curl command (standard on most systems)
- Optional: jq for enhanced JSON parsing (fallback parsing included)

### Script Features
- **Dynamic Table Discovery**: Fetches actual table list from information_schema
- **Schema Analysis**: Extracts column information from OpenAPI definitions
- **Accessibility Testing**: Checks which tables are accessible via public API
- **Error Handling**: Graceful fallbacks when API calls fail
- **Security-First**: Uses only public endpoints with anonymous key
- **Output Protection**: Sets generated file to read-only (chmod 444)

### Generated Documentation Structure
The script creates a DATABASE.md file containing:
- **Database Overview**: High-level architecture description
- **Tables Overview**: List of all discovered tables
- **Table Schemas**: Detailed column information with types and constraints
- **Security Information**: RLS implementation details
- **Data Types Reference**: Common PostgreSQL types used
- **Development Notes**: Schema management and migration guidance

### Environment Setup
The script automatically loads environment variables from:
1. `.env.local` in current directory
2. `../.env.local` in parent directory
3. System environment variables

### Output Example
```markdown
# Database Schema Documentation
*Generated automatically - do not edit manually*
**Generated on:** Mon Jan 8 15:30:45 UTC 2024
**Method:** Supabase REST API

## Database Overview
This PostgreSQL database supports a liturgical management application...

### Table: `contacts`
**Column Schema:**
| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| `id` | uuid | NO | uuid_generate_v4() |
| `email` | text | YES | none |
| `created_at` | timestamp | NO | timezone('utc'::text, now()) |
```

### Best Practices
- **Run before development**: Always refresh database docs before starting new features
- **Regular updates**: Re-run when database schema changes
- **Version control**: Commit the generated DATABASE.md to track schema evolution
- **Team coordination**: Share updated docs with team members after schema changes

----------------------------------------

TITLE: Authentication Configuration
DESCRIPTION: Complete Supabase authentication setup and configuration guidelines.

## Authentication Setup
- **Authentication Provider**: Supabase
- **Authentication Pages**: `/signup`, `/login`
- **Protected Routes**: All routes except public paths
- **Public Paths**: `['/login', '/signup', '/']`
- **Post-Authentication Redirect**: `/dashboard`
- **Email Verification**: Not currently required

## Middleware Configuration
The application uses middleware to protect routes with these public paths:
```javascript
publicPaths = ['/login', '/signup', '/']
```
All other routes require authentication and redirect to `/dashboard` after login.

## Supabase Configuration Steps

### Disable Email Verification
1. Go to Supabase Dashboard > Authentication > Settings
2. Under "Email Confirmations", disable "Enable email confirmations"
3. Save changes

### Configure Redirect URLs
1. Go to Authentication > URL Configuration
2. Add your development URL (e.g., http://localhost:3000)
3. Add your production URL
4. Set Site URL to your main domain

### Configure Auth Settings
1. Set "Minimum password length" as needed
2. Configure "Password requirements" 
3. Set "Session timeout" (default 24 hours)
4. Enable/disable "Allow new users to sign up" based on requirements

## Administer Supabase Users
1. Go to your Supabase Dashboard
2. Navigate to Authentication > Users
3. Here you can view, edit, and manage user accounts
4. Actions available: view user details, reset passwords, delete users

## Application Structure
- **Landing Page**: Navigation on the "/" page
- **Authentication Flow**: Login → Dashboard (main application)
- **User Management**: Handled through Supabase Dashboard
- **Session Management**: Server-side session handling with Supabase Auth

----------------------------------------

TITLE: Data Architecture Guidelines
DESCRIPTION: Data architecture patterns and database design guidelines for scalable applications.

## App Structure Options

### Individual Structure
- Each main record everywhere (excluding pivot tables) should have a `user_id`
- Data is scoped to individual users
- Direct user ownership of all records

### Team Structure
- Each main record everywhere (excluding pivot tables) should have a `team_id` (or equivalent)
- Data is scoped to teams/organizations
- Shared access within team boundaries

## Settings Tables

### User Settings
Ordinarily there will be a `user_settings` table for individual user preferences and configuration.

### Team Settings
If this is a team structured application, there should ordinarily be a `team_settings` table for team-wide configuration and preferences.

## Data Architecture Considerations
- **Choose one structure**: Either individual-based OR team-based, not both
- **Consistent scoping**: Apply the chosen structure consistently across all main tables
- **Pivot tables**: Exclude pivot/junction tables from the scoping requirement
- **Settings separation**: Use appropriate settings table based on chosen structure

----------------------------------------

TITLE: Infrastructure & Deployment
DESCRIPTION: Complete infrastructure setup including GitHub integration, Vercel deployment, and domain configuration.

## GitHub Integration
Projects are hosted in GitHub for version control and seamless deployment integration.

## SSH Key Management

### How to Add SSH Key to Digital Ocean
1. Generate SSH key pair locally: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Copy public key: `cat ~/.ssh/id_rsa.pub`
3. Log into Digital Ocean dashboard
4. Go to Settings > Security > SSH Keys
5. Click "Add SSH Key" and paste your public key
6. Name the key and save

### How to Add SSH Key to GitHub
1. Generate SSH key if not already done: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Copy public key: `cat ~/.ssh/id_rsa.pub`
3. Go to GitHub > Settings > SSH and GPG keys
4. Click "New SSH key"
5. Paste key, add title, and save
6. Test connection: `ssh -T git@github.com`

## Project Deployment Setup

### How to Start a New Project Linking GitHub and Vercel
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

## Domain Configuration

### How to Add Custom Domain to Vercel
1. Go to Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain (e.g., yourapp.com)
4. Follow DNS configuration instructions
5. Verify domain ownership

### How to Add Credentials to Vercel
1. **Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add variables for development, preview, and production
   - Common variables: DATABASE_URL, API_KEYS, etc.

2. **Secrets Management**
   - Use Vercel's built-in secrets management
   - Never commit secrets to GitHub
   - Use different values for different environments

### DNS Configuration with NameCheap
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

----------------------------------------

TITLE: Branding & Assets
DESCRIPTION: Complete branding guidelines including logo design and favicon creation workflows.

## Logo Design Guidelines
- **Design Tools**: Use Affinity Designer 2 or Canva for logo creation
- **Icon Integration**: Lucide-react SVG code can be pasted directly into Affinity Designer 2 for customization
- **Icon Libraries**: Use lucide-react icons for consistent styling throughout the app
- **Custom Logos**: Ensure logos work at multiple sizes (16px to 200px)
- **File Formats**: Provide SVG for scalability, PNG for fallbacks
- **Color Variants**: Design for light/dark themes if applicable

## Favicon Creation
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

----------------------------------------

TITLE: MCP Server Purpose & Usage Context
DESCRIPTION: Purpose and context for the MCP server and component library designed to help AI agents build applications quickly and consistently.

## MCP Server Purpose
This MCP server is designed to help AI agents build applications quickly and consistently by providing:
- Pre-built, production-ready React components
- Complete project setup and configuration guidance
- Standardized development patterns and workflows
- Infrastructure and deployment procedures

## Component Library Context
The custom components provide common application patterns including:
- Authentication workflows (login, signup, user profiles)
- Navigation structures (headers, sidebars, breadcrumbs)
- Layout containers (forms, pages, cards)
- UI interactions (copy buttons, collapsible sections)

## Example Applications
The components include examples from a church management application (contacts, parishes, campaigns) but are designed to be generic and adaptable for any business application requiring:
- User authentication and profile management
- Data management with individual or team-based scoping
- Administrative functions and user management
- Responsive design for desktop and mobile devices

## AI Agent Benefits
- **Rapid Development**: Start with working components instead of building from scratch
- **Consistent Patterns**: Follow established TypeScript, styling, and architectural patterns
- **Complete Stack**: From database setup to deployment, all guidance is provided
- **Best Practices**: Security, accessibility, and performance considerations built-in

## Adaptability
All components follow consistent design patterns and can be easily adapted for other applications by:
- Modifying navigation items and menu structures
- Updating branding and styling
- Changing authentication providers or workflows
- Adapting data models for different business domains

----------------------------------------

TITLE: Example Management Tools
DESCRIPTION: MCP tools for discovering and retrieving code examples from the organized examples directory structure. Provides efficient access to production-ready React components, utility functions, and development scripts.

## Overview
The MCP server includes two specialized tools for managing and accessing code examples stored in the `/examples` directory. These tools provide organized access to all available components, contexts, library files, and scripts.

## Tool: list-examples
**Purpose**: Discover all available code examples organized by category
**Parameters**: None required
**Returns**: Organized listing of all example files by category

### Categories Provided
- **🧩 Components**: React components (JSX/TSX files)
- **🔄 Contexts**: React context providers and state management
- **📜 Scripts**: Development and utility scripts
- **📚 Library Files**: Utility functions and service configurations

### Usage Example
```
Claude, use list-examples to see all available code examples.
```

### Sample Output Structure
```
## 🧩 Components
- `components/PublicHeader.jsx` - Public Header
- `components/main-sidebar.tsx` - Main Sidebar
- `components/copy-button.tsx` - Copy Button

## 🔄 Contexts
- `contexts/AppContextProvider.tsx` - App Context Provider

## 📜 Scripts  
- `scripts/generate-database-docs.sh` - Database Documentation Generator

## 📚 Library Files
### supabase/
- `lib/supabase/client.ts` - Supabase Client Configuration
- `lib/supabase/server.ts` - Supabase Server Configuration
```

## Tool: get-example
**Purpose**: Retrieve the complete source code of a specific example file
**Parameters**: 
- `file` (required): Path to the example file relative to `/examples` directory

### Features Provided
- **Complete source code** with syntax highlighting
- **File description** explaining the component's purpose
- **Usage notes** with implementation guidance
- **Related files** showing cross-references
- **Dependencies** listing required packages

### Usage Examples
```
Claude, use get-example with file "components/PublicHeader.jsx" to get the header component.

Claude, use get-example with file "contexts/AppContextProvider.tsx" to see the context implementation.

Claude, use get-example with file "lib/supabase/client.ts" to get the Supabase configuration.
```

### Output Structure
Each `get-example` call returns:
1. **File metadata** (path, description)
2. **Complete source code** with proper syntax highlighting  
3. **Usage notes** with practical implementation guidance
4. **Related files** for discovering connected components
5. **Dependencies** and setup requirements

## Directory Structure
The examples are organized in a clear hierarchy:
```
examples/
├── components/          # React UI components
│   ├── PublicHeader.jsx
│   ├── main-sidebar.tsx
│   └── [other components...]
├── contexts/           # React context providers
│   └── AppContextProvider.tsx
├── lib/               # Utility libraries
│   ├── supabase/      # Supabase configurations
│   ├── actions/       # Server actions
│   └── utils.ts       # Utility functions
└── scripts/           # Development scripts
    └── generate-database-docs.sh
```

## Integration with Development Workflow
These tools integrate seamlessly with the existing MCP server capabilities:

### Discovery Workflow
1. **`list-examples`** → See all available examples
2. **`get-example`** → Retrieve specific code
3. **`search-content`** → Find related documentation
4. **`get-workflow-template`** → Get development workflows

### Best Practices
- **Start with list-examples** to discover available components
- **Use get-example** to retrieve complete implementations
- **Check usage notes** for proper integration guidance
- **Review related files** to understand component dependencies
- **Reference documentation** for additional context

## Security Features
- **Path validation** ensures files remain within examples directory
- **Read-only access** prevents accidental modifications
- **Organized structure** makes discovery safe and predictable

## Development Benefits
- **Rapid prototyping** with production-ready components
- **Consistent patterns** following established architecture
- **Complete implementations** including error handling and TypeScript
- **Cross-references** for understanding component relationships
- **Practical guidance** for real-world usage scenarios

----------------------------------------

TITLE: Layout Components
DESCRIPTION: Complete layout system providing application structure for different page types. Includes root layout with theming, authenticated main layout with sidebar, and public layout for marketing pages.
SOURCE: /examples/layouts/

**Important**: In actual Next.js implementation, these files are named `layout.tsx` and placed in specific route groups:
- `app-layout.tsx` → `app/layout.tsx` (root layout)
- `main-layout.jsx` → `app/(main)/layout.tsx` (authenticated layout)  
- `public-layout.jsx` → `app/(public)/layout.tsx` (public layout)

## App Layout (Root Layout)
**File**: `app-layout.tsx` (Example) → `app/layout.tsx` (Implementation)
**Purpose**: Root HTML layout with theme provider, analytics, and global styling
**Usage**: Primary Next.js App Router layout component

### Features
- **Font Integration**: Geist font family with optimized loading
- **Theme Support**: Next-themes integration with system theme detection
- **Analytics**: Vercel Analytics integration for production
- **Toast System**: Global toast notifications with shadcn/ui Toaster
- **SEO Metadata**: Complete Open Graph and Twitter card setup

### Code Structure
```tsx
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "Application Title",
  description: "Application Description",
  openGraph: { /* SEO config */ },
  twitter: { /* Twitter card config */ }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="antialiased">
        {process.env.NODE_ENV === "production" && <Analytics />}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
```

### Usage Notes
- Place in `app/layout.tsx` for Next.js App Router (root layout)
- Customize metadata for your application branding
- Analytics only loads in production environment
- Supports light/dark/system theme modes
- Global toast positioning and styling

## Main Layout (Authenticated Layout)
**File**: `main-layout.jsx` (Example) → `app/(main)/layout.tsx` (Implementation)
**Purpose**: Layout for authenticated application pages with sidebar navigation
**Usage**: Wrap authenticated page content with sidebar and main content area

### Features
- **Sidebar Integration**: Uses shadcn/ui SidebarProvider for responsive behavior
- **Main Content Area**: Flexible container for page content
- **Mobile Responsive**: Automatic sidebar collapse on mobile devices
- **Clean Structure**: Minimal, focused layout for application pages

### Code Structure
```jsx
import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/main-sidebar";

export default function MainLayout({children}) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <div className="flex-1">
        {children}
      </div>
    </SidebarProvider>
  );
}
```

### Usage Notes
- Place in `app/(main)/layout.tsx` for authenticated route group
- Requires MainSidebar component from examples/components
- SidebarProvider handles mobile/desktop state management
- Children content fills remaining space after sidebar
- Integrates with MainHeader component for breadcrumbs

## Public Layout (Marketing Layout)
**File**: `public-layout.jsx` (Example) → `app/(public)/layout.tsx` (Implementation)
**Purpose**: Layout for public-facing pages with header and footer
**Usage**: Wrap marketing pages, landing pages, and authentication pages

### Features
- **Public Header**: Navigation with logo and login button
- **Public Footer**: Branding and copyright information
- **Simple Structure**: Header-content-footer layout pattern
- **No Authentication**: Suitable for unauthenticated users

### Code Structure
```jsx
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";

export default function PublicLayout({ children }) {
  return (
    <>
      <PublicHeader />
      {children}
      <PublicFooter />
    </>
  );
}
```

### Usage Notes
- Place in `app/(public)/layout.tsx` for public route group
- Uses PublicHeader and PublicFooter from examples/components
- No sidebar or complex navigation
- Suitable for landing pages, about pages, login/signup
- Header includes responsive mobile menu

## Layout Usage Patterns

### Next.js App Router Integration
```
app/
├── layout.tsx                 # Root layout (app-layout.tsx example)
├── (main)/
│   ├── layout.tsx            # Authenticated layout (main-layout.jsx example)
│   └── dashboard/page.tsx    # Uses authenticated layout
└── (public)/
    ├── layout.tsx            # Public layout (public-layout.jsx example)
    └── about/page.tsx        # Uses public layout
```

### Component Dependencies
- **Root Layout** (app/layout.tsx): next-themes, @vercel/analytics, shadcn/ui toaster
- **Main Layout** (app/(main)/layout.tsx): shadcn/ui sidebar, MainSidebar component
- **Public Layout** (app/(public)/layout.tsx): PublicHeader, PublicFooter components

### Implementation Example
```tsx
// app/(main)/layout.tsx - Authenticated pages
import { SidebarProvider } from "@/components/ui/sidebar";
import { MainSidebar } from "@/components/main-sidebar";

export default function MainLayout({ children }) {
  return (
    <SidebarProvider>
      <MainSidebar />
      <div className="flex-1">
        {children}
      </div>
    </SidebarProvider>
  );
}

// app/(public)/layout.tsx - Public pages  
import PublicHeader from "@/components/PublicHeader";
import PublicFooter from "@/components/PublicFooter";

export default function PublicLayout({ children }) {
  return (
    <>
      <PublicHeader />
      {children}
      <PublicFooter />
    </>
  );
}
```

### Best Practices
- **Route Groups**: Use `(main)` and `(public)` route groups for layout organization
- **Layout Naming**: All layout files must be named `layout.tsx` in Next.js App Router
- **Theme Integration**: Leverage theme provider in root layout only
- **Performance**: Analytics and heavy features only in production
- **Accessibility**: Proper HTML structure and ARIA support
- **Mobile First**: Responsive design across all layouts

----------------------------------------

TITLE: Page Components
DESCRIPTION: Complete CRUD page templates and components for building data management interfaces. Includes list tables, edit forms, and page templates with authentication, search, filtering, and responsive design.
SOURCE: /examples/pages/

## EditForm Component
**File**: `EditForm.tsx`
**Purpose**: Reusable form component for creating and editing entities
**Usage**: Handles both create and update operations with unified interface

### Features
- **Dual Mode**: Create new entities or edit existing ones
- **Loading States**: Submit button shows loading during operations
- **Form Validation**: Client-side validation with TypeScript
- **Navigation Integration**: Automatic redirect after successful operations
- **Error Handling**: Integrates with action result patterns

### Code Structure
```tsx
interface NoteFormProps {
  note?: {
    id: string;
    note: string;
  };
}

export default function EditForm({ note }: NoteFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [content, setContent] = useState(note?.note || "");

  const handleSubmit = async (e: React.FormEvent) => {
    // Form submission logic
    let result;
    if (note) {
      result = await updateNote(note.id, values);
    } else {
      result = await createNote(values);
    }
    
    if (result.success) {
      router.push("/notes"); // Redirect to index page
    }
  };
}
```

### Usage Notes
- Pass existing entity for edit mode, omit for create mode
- Follows redirect-to-index pattern after successful creation
- Uses shadcn/ui form components (Button, Input, Textarea, Label)
- Integrates with Server Actions for data operations
- TypeScript interfaces ensure type safety

## ListTable Component
**File**: `ListTable.jsx`
**Purpose**: Comprehensive data table with search, filtering, and actions
**Usage**: Display lists of entities with CRUD operations

### Features
- **Search Functionality**: Real-time search across entity content
- **Responsive Grid**: Card-based layout that adapts to screen size
- **Action Buttons**: Delete operations with confirmation dialogs
- **Empty States**: Helpful messaging when no data exists
- **Toast Integration**: Success/error notifications using toast utilities
- **Date Formatting**: Relative date display (Today, Yesterday, etc.)

### Code Structure
```jsx
export default function ListTable({ notes, onUpdate }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const { handleResponse, error } = useNotify();

  const filteredNotes = useMemo(() => {
    return notes.filter(note => 
      note.note.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [notes, searchTerm]);

  const handleDelete = async () => {
    const result = await deleteNote(noteToDelete);
    handleResponse(result, { 
      successTitle: "Note Deleted", 
      errorTitle: "Delete Failed" 
    });
  };
}
```

### Usage Notes
- Requires toast utilities from examples/lib/toast-utils
- Uses shadcn/ui Dialog for confirmation dialogs
- Accepts onUpdate callback for custom refresh logic
- Implements responsive card grid instead of traditional table
- Search functionality with debounced filtering

## Create Page Template
**File**: `create-page.tsx`
**Purpose**: Complete page template for entity creation
**Usage**: Server component with authentication and proper layout structure

### Features
- **Authentication Check**: Redirects unauthenticated users to sign-in
- **Breadcrumb Navigation**: Shows current location in app hierarchy
- **Page Container**: Consistent layout with title and description
- **Component Integration**: Uses reusable form components

### Code Structure
```tsx
export default async function CreateNotePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  return (
    <>
      <MainHeader 
        breadcrumbs={[
          { label: "Notes", href: "/notes" },
          { label: "Create" }
        ]} 
      />
      <PageContainer 
        title="Create Note" 
        description="Start a new note"
        maxWidth="3xl"
      >
        <NoteForm />
      </PageContainer>
    </>
  );
}
```

### Usage Notes
- Server component with async authentication
- Uses Supabase auth with automatic redirection
- Integrates MainHeader and PageContainer components
- Customizable maxWidth for different content types

## Edit Page Template
**File**: `edit-page.jsx`
**Purpose**: Complete page template for entity editing
**Usage**: Server component with data fetching and error handling

### Features
- **Data Fetching**: Loads entity by ID with error handling
- **404 Handling**: Automatic notFound() for missing entities
- **Authentication**: Protects edit operations
- **Form Pre-population**: Passes existing data to form component

### Code Structure
```jsx
export default async function EditNotePage({ params }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  const noteResult = await fetchNoteById(params.noteId);
  
  if (!noteResult.success || !noteResult.data) {
    notFound();
  }

  return (
    <>
      <MainHeader breadcrumbs={[/* breadcrumb config */]} />
      <PageContainer title="Edit Note">
        <NoteForm note={note} />
      </PageContainer>
    </>
  );
}
```

### Usage Notes
- Dynamic route parameter handling with params.noteId
- Error boundaries with notFound() for missing data
- Same form component used for both create and edit
- Proper breadcrumb navigation showing context

## List Page Template
**File**: `list-page.jsx`
**Purpose**: Complete page template for entity listing
**Usage**: Server component with data loading and table integration

### Features
- **Data Loading**: Server-side data fetching with error handling
- **Suspense Integration**: Loading states for async components
- **Authentication**: Protects list access
- **Table Integration**: Passes data to list table component

### Code Structure
```jsx
export default async function ListPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  if (!user) {
    redirect("/sign-in");
  }

  const notesResult = await fetchNotes();
  const notes = notesResult.success ? notesResult.data : [];

  return (
    <>
      <MainHeader breadcrumbs={[{ label: "Notes" }]} />
      <PageContainer title="Notes" maxWidth="5xl">
        <Suspense fallback={<div>Loading notes...</div>}>
          <NotesTable notes={notes} />
        </Suspense>
      </PageContainer>
    </>
  );
}
```

### Usage Notes
- Graceful error handling with fallback empty arrays
- Suspense boundaries for loading states
- Wider maxWidth (5xl) for table layouts
- Server component pattern with data fetching

## CRUD Implementation Pattern

### Complete CRUD Structure
```
app/notes/
├── page.jsx                  # ListPage template
├── create/page.tsx           # CreatePage template
├── [id]/edit/page.jsx       # EditPage template
├── components/
│   ├── NotesTable.jsx       # ListTable component
│   └── NoteForm.tsx         # EditForm component
└── actions.ts               # Server actions
```

### Integration Benefits
- **Consistent UI**: All pages use same layout components
- **Type Safety**: TypeScript interfaces across components
- **Authentication**: Built-in auth checks and redirects
- **Error Handling**: Comprehensive error states and messaging
- **Performance**: Server components with optimal data loading
- **Accessibility**: Proper HTML structure and ARIA support

### Best Practices
- **Component Reuse**: Same form for create/edit operations
- **Navigation Patterns**: Consistent breadcrumbs and redirects
- **Data Patterns**: Server actions with standardized result formats
- **Toast Integration**: User feedback for all operations
- **Mobile Responsive**: Card grids instead of complex tables

----------------------------------------

TITLE: Authentication Pages
DESCRIPTION: Complete authentication page templates for login and signup flows using Supabase Auth. Provides ready-to-use authentication UI with proper error handling and navigation.
SOURCE: /examples/pages/

## Login Page Component
**File**: `login-page.tsx`
**Purpose**: Complete login page with Supabase authentication
**Usage**: Client component for user authentication with email/password

### Features
- **Supabase Integration**: Direct authentication with Supabase client
- **Form State Management**: Loading states and error handling
- **Navigation Flow**: Automatic redirect to dashboard on success
- **Visual Design**: Centered card layout with branding
- **Link to Signup**: Seamless navigation to registration

### Code Structure
```tsx
'use client'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/dashboard')
    }
    setLoading(false)
  }
}
```

### Visual Components
- **Logo Header**: Church icon with app branding
- **Card Container**: Clean white card on gray background
- **Form Fields**: Email and password inputs with labels
- **Error Display**: Red text for authentication errors
- **Loading States**: Disabled button with loading text

### Usage Notes
- Client component with 'use client' directive
- Requires Supabase client configuration
- Uses custom FormField component for inputs
- Responsive design with mobile-first approach
- Integrates with shadcn/ui Card and Button components

## Signup Page Component
**File**: `signup-page.tsx`
**Purpose**: Complete registration page with Supabase authentication
**Usage**: Client component for new user registration

### Features
- **Account Creation**: Supabase signUp with email/password
- **Auto-login Logic**: Handles both confirmed and unconfirmed email flows
- **Error Handling**: Comprehensive error states and fallback flows
- **Success Messaging**: Green success messages with timed redirects
- **Password Requirements**: Visual hint for minimum password length

### Code Structure
```tsx
const handleSignup = async (e: React.FormEvent) => {
  e.preventDefault()
  setLoading(true)
  setError('')
  setMessage('')

  const supabase = createClient()
  
  try {
    // First try to sign up
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    })

    if (signUpError) {
      setError(signUpError.message)
      return
    }

    // If email confirmation is disabled, user should be automatically signed in
    if (signUpData.session) {
      setMessage('Account created successfully! Redirecting to dashboard...')
      setTimeout(() => {
        router.replace('/dashboard')
      }, 2000)
    } else {
      // Try to sign in manually (fallback)
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      
      if (signInError) {
        setError('Account created but failed to sign in. Please try logging in manually.')
        setTimeout(() => router.push('/login'), 2000)
      } else {
        setMessage('Account created successfully! Redirecting to dashboard...')
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 2000)
      }
    }
  } catch {
    setError('An unexpected error occurred. Please try again.')
  }
  setLoading(false)
}
```

### Advanced Features
- **Email Confirmation Handling**: Works with or without email confirmation
- **Fallback Authentication**: Tries manual login if auto-login fails
- **Timed Redirects**: 2-second delay for user feedback
- **Window Location Fallback**: Uses window.location for hard navigation
- **Try-Catch Safety**: Catches unexpected errors gracefully

### Usage Notes
- Handles both email-confirmed and instant-access scenarios
- Password field includes helpful description text
- Success and error messages with appropriate styling
- Links back to login page for existing users
- Same visual design as login page for consistency

----------------------------------------

TITLE: Global Styles Configuration
DESCRIPTION: Modern CSS configuration using Tailwind CSS v4 with custom theme variables and dark mode support. Implements oklch color system for better color consistency.
SOURCE: /examples/pages/globals.css

## CSS Architecture
**File**: `globals.css`
**Purpose**: Global styles with Tailwind v4 and custom design tokens
**Usage**: Import in root layout for application-wide styling

### Features
- **Tailwind v4 Imports**: Modern import syntax for Tailwind
- **Custom Variant**: Dark mode support with custom variant syntax
- **Theme Inline**: CSS custom properties mapped to Tailwind
- **OKLCH Colors**: Perceptually uniform color space
- **Design Tokens**: Comprehensive color and radius system

### Theme Configuration
```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  /* ... additional theme mappings */
}
```

### Color System
- **OKLCH Format**: Better color interpolation and consistency
- **Semantic Colors**: primary, secondary, muted, accent, destructive
- **Component Colors**: card, popover, sidebar specific colors
- **Chart Colors**: 5 distinct chart colors for data visualization
- **Dark Mode**: Complete dark theme with adjusted lightness values

### Usage Notes
- Import as first stylesheet in application
- Supports automatic dark mode switching
- Works with shadcn/ui component system
- Includes sidebar-specific color tokens
- Base styles apply borders and backgrounds automatically

----------------------------------------

TITLE: Development Scripts
DESCRIPTION: Utility scripts for development workflow automation. Includes automatic restart on errors for better development experience.
SOURCE: /examples/scripts/

## Watch and Restart Script
**File**: `watch-and-restart.sh`
**Purpose**: Automatically restart commands on failure or error patterns
**Usage**: Wrapper script for development servers and long-running processes

### Features
- **Error Pattern Detection**: Configurable patterns to watch for
- **Automatic Restart**: Restarts command after configurable delay
- **Maximum Restart Limit**: Prevents infinite restart loops
- **Command Line Interface**: Full CLI with help and options
- **Default Error Patterns**: Common Node.js and build errors

### Usage Examples
```bash
# Basic usage
./scripts/watch-and-restart.sh -- npm run dev

# With custom error patterns
./scripts/watch-and-restart.sh -p "TypeError:" -p "ReferenceError:" -- npm run dev

# With custom restart delay (5 seconds)
./scripts/watch-and-restart.sh -d 5 -- npm run dev

# With maximum restart limit
./scripts/watch-and-restart.sh -m 20 -- npm run dev

# Combine multiple options
./scripts/watch-and-restart.sh -p "Custom Error" -d 3 -m 10 -- npm run build
```

### Script Options
- `-p, --pattern PATTERN`: Add error pattern to watch (can use multiple times)
- `-d, --delay SECONDS`: Set delay between restarts (default: 2)
- `-m, --max-restarts NUM`: Maximum restart attempts (default: 10, 0 for unlimited)
- `-h, --help`: Show help message with examples

### Default Error Patterns
- "Error:"
- "error"
- "failed"
- "Failed"
- "ELIFECYCLE"
- "ENOENT"
- "Cannot find module"

### Implementation Details
```bash
# Main monitoring loop
while true; do
  # Run command and capture output
  OUTPUT=$(eval "$COMMAND" 2>&1)
  EXIT_CODE=$?
  
  # Check for errors
  if [[ $EXIT_CODE -ne 0 ]] || contains_error "$OUTPUT"; then
    RESTART_COUNT=$((RESTART_COUNT + 1))
    
    # Check restart limit
    if [[ $MAX_RESTARTS -gt 0 && $RESTART_COUNT -gt $MAX_RESTARTS ]]; then
      echo "Reached maximum number of restarts ($MAX_RESTARTS). Exiting."
      exit 1
    fi
    
    echo "Error detected. Restarting in $RESTART_DELAY seconds..."
    sleep $RESTART_DELAY
  else
    echo "Command completed successfully. Exiting."
    exit 0
  fi
done
```

### Usage Notes
- Make script executable: `chmod +x scripts/watch-and-restart.sh`
- Use `--` to separate script options from command
- Captures both stdout and stderr for error detection
- Shows restart count and maximum limit
- Useful for development servers that crash on syntax errors
- Can monitor any command, not just Node.js processes

### Common Use Cases
1. **Development Server**: Auto-restart on TypeScript errors
2. **Build Watching**: Restart build on configuration changes
3. **Test Runner**: Re-run tests on test framework errors
4. **Database Migrations**: Retry on connection errors
5. **Long-running Scripts**: Handle transient failures

## Database Documentation Generator
**File**: `generate-database-docs.sh`
**Purpose**: Automatically generate DATABASE.md from live Supabase schema
**Location**: `/scripts/generate-database-docs.sh`

### Features
- **Live Schema Discovery**: Fetches table information from Supabase REST API
- **Automatic Environment Loading**: Loads variables from .env.local
- **Column Schema Detection**: Extracts column types, defaults, and nullable status
- **RLS Status Checking**: Shows which tables are protected by Row Level Security
- **Read-only Output**: Sets generated file to read-only to prevent accidental edits

### Usage
```bash
# Generate or update DATABASE.md
./scripts/generate-database-docs.sh

# Make executable if needed
chmod +x scripts/generate-database-docs.sh
```

### Requirements
- **Environment Variables**: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Tools**: `curl` (standard on most systems)
- **Optional**: `jq` for better JSON parsing

### What It Does
1. **Loads Environment**: Automatically reads .env.local file
2. **Discovers Tables**: Queries Supabase information_schema for table list
3. **Analyzes Schema**: For each table, extracts column information
4. **Checks Access**: Tests which tables are accessible via REST API
5. **Generates Documentation**: Creates complete DATABASE.md with live schema

### Output Structure
```markdown
# Database Schema Documentation
## Database Overview
- Authentication overview
- Main feature areas
- Data relationships

## Tables Overview
- List of all discovered tables

## Table Schemas
### Table: users
**Column Schema:**
| Column | Type | Nullable | Default |
|--------|------|----------|---------|
| id | uuid | NO | uuid_generate_v4() |
| email | text | NO | none |
| created_at | timestamp | NO | now() |

## Security
- RLS policies overview
- Data isolation notes

## Notes
- Generation timestamp
- Maintenance instructions
```

### When to Use
- **Schema Changes**: After adding/modifying database tables
- **Documentation Updates**: When DATABASE.md is missing or outdated  
- **New Team Members**: To generate current schema overview
- **Deployment Prep**: Before deploying with schema changes

### Important Notes
- **Overwrites DATABASE.md**: Completely regenerates the file each run
- **Uses Anon Key**: Only accesses publicly available schema information
- **No Database Connection**: Works through REST API, no direct DB access needed
- **Version Control**: Commit the generated DATABASE.md to track schema evolution

### Troubleshooting
- **Missing Environment Variables**: Check .env.local file exists with Supabase credentials
- **Empty Schema**: Verify Supabase project is accessible and has tables
- **Permission Denied**: Ensure script is executable with `chmod +x`
- **No Tables Found**: Check Supabase URL and anon key are correct

### Agent Usage
**When asked to "update DATABASE.md"**, agents should:
1. Use this script: `./scripts/generate-database-docs.sh`
2. Verify the generated file contains expected schema information
3. Commit the updated DATABASE.md file
4. Inform user that database documentation has been regenerated from live schema