TITLE: PublicFooter Component
DESCRIPTION: Simple footer component for public-facing pages with company branding and copyright information. Provides consistent footer layout across all public pages.
SOURCE: /examples/PublicFooter.jsx
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
SOURCE: /examples/PublicHeader.jsx
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
SOURCE: /examples/CenteredFormCard.tsx
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
SOURCE: /examples/CollapsibleNavSection.tsx
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
SOURCE: /examples/CopyButton.tsx
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

TITLE: MainHeader Component
DESCRIPTION: Main application header with sidebar trigger and breadcrumb navigation. Provides consistent header layout for authenticated application pages with optional sidebar toggle and dynamic breadcrumbs.
SOURCE: /examples/MainHeader.tsx
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
SOURCE: /examples/MainSidebar.tsx
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
SOURCE: /examples/PageContainer.tsx
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
SOURCE: /examples/UserProfile.tsx
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
SOURCE: /examples/AppContextProvider.tsx
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