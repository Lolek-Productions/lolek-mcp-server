TITLE: MainHeader Component
DESCRIPTION: Primary header component that includes sidebar toggle functionality and breadcrumb navigation. Required at the top of every page in the main folder structure.
SOURCE: Internal component documentation
LANGUAGE: jsx
CODE:
```
import React from 'react';
import { SidebarToggle } from './SidebarToggle';
import { Breadcrumb } from './Breadcrumb';

const MainHeader = ({ onSidebarToggle, sidebarOpen }) => {
  return (
    <header className="main-header">
      <div className="header-left">
        <SidebarToggle 
          onClick={onSidebarToggle}
          isOpen={sidebarOpen}
        />
      </div>
      
      <div className="header-center">
        <Breadcrumb />
      </div>
      
      <div className="header-right">
        {/* Additional header actions */}
      </div>
    </header>
  );
};

export default MainHeader;
```

----------------------------------------

TITLE: Sidebar Toggle Implementation
DESCRIPTION: Button component within MainHeader that controls the sidebar open/close state. Handles visual state changes and triggers sidebar state updates.
SOURCE: Internal component documentation
LANGUAGE: jsx
CODE:
```
import React from 'react';

const SidebarToggle = ({ onClick, isOpen }) => {
  return (
    <button 
      className={`sidebar-toggle ${isOpen ? 'open' : 'closed'}`}
      onClick={onClick}
      aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
    >
      <div className="hamburger">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </div>
    </button>
  );
};

export default SidebarToggle;
```

----------------------------------------

TITLE: Breadcrumb Component Design
DESCRIPTION: Navigation breadcrumb component that displays the current page hierarchy. Integrates with a centralized breadcrumb configuration system and updates dynamically based on page context.
SOURCE: Internal component documentation
LANGUAGE: jsx
CODE:
```
import React, { useContext } from 'react';
import { BreadcrumbContext } from '../contexts/BreadcrumbContext';
import { ChevronRight } from '../icons';

const Breadcrumb = () => {
  const { breadcrumbItems } = useContext(BreadcrumbContext);

  if (!breadcrumbItems || breadcrumbItems.length === 0) {
    return null;
  }

  return (
    <nav className="breadcrumb" aria-label="Breadcrumb navigation">
      <ol className="breadcrumb-list">
        {breadcrumbItems.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && (
              <ChevronRight className="breadcrumb-separator" />
            )}
            {item.href && index < breadcrumbItems.length - 1 ? (
              <a href={item.href} className="breadcrumb-link">
                {item.label}
              </a>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
```

----------------------------------------

TITLE: Breadcrumb Configuration
DESCRIPTION: Centralized configuration system for defining breadcrumb structures and hierarchies. Provides a mapping between routes and their corresponding breadcrumb paths.
SOURCE: Internal component documentation
LANGUAGE: javascript
CODE:
```
// breadcrumbConfig.js
export const breadcrumbConfig = {
  // Main section routes
  '/main': [
    { label: 'Home', href: '/' }
  ],
  
  '/main/dashboard': [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/main/dashboard' }
  ],
  
  '/main/users': [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/main/users' }
  ],
  
  '/main/users/create': [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/main/users' },
    { label: 'Create User', href: null }
  ],
  
  '/main/settings': [
    { label: 'Home', href: '/' },
    { label: 'Settings', href: '/main/settings' }
  ],
  
  // Dynamic route patterns
  '/main/users/:id': [
    { label: 'Home', href: '/' },
    { label: 'Users', href: '/main/users' },
    { label: 'User Details', href: null }
  ]
};

// Helper function to get breadcrumb items for a route
export const getBreadcrumbItems = (pathname, dynamicData = {}) => {
  // Check for exact match first
  if (breadcrumbConfig[pathname]) {
    return breadcrumbConfig[pathname];
  }
  
  // Check for dynamic route patterns
  for (const [pattern, items] of Object.entries(breadcrumbConfig)) {
    if (pattern.includes(':')) {
      const regex = new RegExp(
        '^' + pattern.replace(/:[^/]+/g, '([^/]+)') + '$'
      );
      
      if (regex.test(pathname)) {
        return items.map(item => ({
          ...item,
          label: item.label.includes('User Details') && dynamicData.userName 
            ? dynamicData.userName 
            : item.label
        }));
      }
    }
  }
  
  return [];
};
```

----------------------------------------

TITLE: Page-Level Breadcrumb Setup
DESCRIPTION: Standard pattern for implementing breadcrumb updates in page components using useEffect. This ensures breadcrumbs are updated when the page loads and cleaned up when the component unmounts.
SOURCE: Internal component documentation
LANGUAGE: jsx
CODE:
```
import React, { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { BreadcrumbContext } from '../contexts/BreadcrumbContext';
import { getBreadcrumbItems } from '../config/breadcrumbConfig';
import MainHeader from '../components/MainHeader';

const UserDashboardPage = () => {
  const router = useRouter();
  const { setBreadcrumbItems } = useContext(BreadcrumbContext);

  useEffect(() => {
    // Set breadcrumb items when component mounts
    const breadcrumbItems = getBreadcrumbItems('/main/dashboard');
    setBreadcrumbItems(breadcrumbItems);

    // Cleanup function to clear breadcrumbs when component unmounts
    return () => {
      setBreadcrumbItems([]);
    };
  }, [setBreadcrumbItems]);

  return (
    <div className="page-container">
      <MainHeader 
        onSidebarToggle={handleSidebarToggle}
        sidebarOpen={sidebarOpen}
      />
      
      <main className="page-content">
        {/* Page content here */}
        <h1>User Dashboard</h1>
        {/* Rest of page components */}
      </main>
    </div>
  );
};

export default UserDashboardPage;
```

----------------------------------------

TITLE: Dynamic Breadcrumb Updates
DESCRIPTION: Advanced pattern for updating breadcrumbs with dynamic data such as user names, IDs, or other contextual information that isn't available at initial page load.
SOURCE: Internal component documentation
LANGUAGE: jsx
CODE:
```
import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { BreadcrumbContext } from '../contexts/BreadcrumbContext';
import { getBreadcrumbItems } from '../config/breadcrumbConfig';
import { fetchUserData } from '../api/users';

const UserDetailPage = () => {
  const router = useRouter();
  const { setBreadcrumbItems } = useContext(BreadcrumbContext);
  const [user, setUser] = useState(null);
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      // Fetch user data and update breadcrumbs with dynamic content
      const loadUserAndUpdateBreadcrumbs = async () => {
        try {
          const userData = await fetchUserData(id);
          setUser(userData);
          
          // Update breadcrumbs with user name
          const breadcrumbItems = getBreadcrumbItems('/main/users/:id', {
            userName: userData.name
          });
          setBreadcrumbItems(breadcrumbItems);
        } catch (error) {
          console.error('Failed to load user data:', error);
          
          // Fallback breadcrumbs without dynamic data
          const breadcrumbItems = getBreadcrumbItems('/main/users/:id');
          setBreadcrumbItems(breadcrumbItems);
        }
      };

      loadUserAndUpdateBreadcrumbs();
    }

    return () => {
      setBreadcrumbItems([]);
    };
  }, [id, setBreadcrumbItems]);

  return (
    <div className="page-container">
      <MainHeader 
        onSidebarToggle={handleSidebarToggle}
        sidebarOpen={sidebarOpen}
      />
      
      <main className="page-content">
        {user ? (
          <>
            <h1>{user.name}</h1>
            <p>User ID: {user.id}</p>
            {/* User details content */}
          </>
        ) : (
          <div>Loading user...</div>
        )}
      </main>
    </div>
  );
};

export default UserDetailPage;
```

----------------------------------------

TITLE: Header Layout Patterns
DESCRIPTION: CSS and styling patterns for the MainHeader component that ensure consistent layout across different screen sizes and integration with sidebar components.
SOURCE: Internal component documentation
LANGUAGE: css
CODE:
```
/* MainHeader base styles */
.main-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 64px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  min-width: 200px;
}

.header-center {
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 800px;
}

.header-right {
  display: flex;
  align-items: center;
  min-width: 200px;
  justify-content: flex-end;
}

/* Sidebar toggle button */
.sidebar-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.sidebar-toggle:hover {
  background-color: #f3f4f6;
}

.hamburger {
  width: 18px;
  height: 14px;
  position: relative;
}

.line {
  display: block;
  height: 2px;
  width: 100%;
  background: #374151;
  border-radius: 1px;
  transition: all 0.3s ease;
  position: absolute;
}

.line-1 { top: 0; }
.line-2 { top: 6px; }
.line-3 { top: 12px; }

/* Animated hamburger when sidebar is open */
.sidebar-toggle.open .line-1 {
  transform: rotate(45deg);
  top: 6px;
}

.sidebar-toggle.open .line-2 {
  opacity: 0;
}

.sidebar-toggle.open .line-3 {
  transform: rotate(-45deg);
  top: 6px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-header {
    padding: 0 0.5rem;
    height: 56px;
  }
  
  .header-center {
    margin: 0 1rem;
  }
  
  .header-left,
  .header-right {
    min-width: auto;
  }
}
```

----------------------------------------

TITLE: Breadcrumb Styling
DESCRIPTION: CSS styles for the breadcrumb component that provide clear visual hierarchy and responsive behavior within the MainHeader.
SOURCE: Internal component documentation
LANGUAGE: css
CODE:
```
/* Breadcrumb container */
.breadcrumb {
  max-width: 100%;
  overflow: hidden;
}

.breadcrumb-list {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  white-space: nowrap;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
}

.breadcrumb-link {
  color: #6b7280;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.breadcrumb-link:hover {
  color: #374151;
  background-color: #f3f4f6;
}

.breadcrumb-current {
  color: #374151;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
}

.breadcrumb-separator {
  width: 16px;
  height: 16px;
  margin: 0 0.25rem;
  color: #9ca3af;
  flex-shrink: 0;
}

/* Responsive breadcrumb */
@media (max-width: 640px) {
  .breadcrumb-list {
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  
  .breadcrumb-list::-webkit-scrollbar {
    display: none;
  }
  
  .breadcrumb-item {
    flex-shrink: 0;
  }
}

/* Truncate long breadcrumb text */
@media (max-width: 480px) {
  .breadcrumb-link,
  .breadcrumb-current {
    max-width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
```

----------------------------------------

TITLE: BreadcrumbContext Implementation
DESCRIPTION: React Context implementation for managing breadcrumb state across the application. Provides centralized state management for breadcrumb updates and access.
SOURCE: Internal component documentation
LANGUAGE: jsx
CODE:
```
import React, { createContext, useState, useContext } from 'react';

// Create the breadcrumb context
const BreadcrumbContext = createContext();

// Custom hook for using breadcrumb context
export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);
  if (!context) {
    throw new Error('useBreadcrumb must be used within a BreadcrumbProvider');
  }
  return context;
};

// Breadcrumb provider component
export const BreadcrumbProvider = ({ children }) => {
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  
  const updateBreadcrumb = (items) => {
    setBreadcrumbItems(items);
  };
  
  const clearBreadcrumb = () => {
    setBreadcrumbItems([]);
  };
  
  const addBreadcrumbItem = (item) => {
    setBreadcrumbItems(prev => [...prev, item]);
  };
  
  const removeBreadcrumbItem = (index) => {
    setBreadcrumbItems(prev => prev.filter((_, i) => i !== index));
  };

  const value = {
    breadcrumbItems,
    setBreadcrumbItems,
    updateBreadcrumb,
    clearBreadcrumb,
    addBreadcrumbItem,
    removeBreadcrumbItem
  };

  return (
    <BreadcrumbContext.Provider value={value}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export { BreadcrumbContext };
```

----------------------------------------

TITLE: Main Layout Pattern
DESCRIPTION: Standard layout structure that combines MainHeader with sidebar and content areas. This pattern should be used consistently across all pages in the main folder.
SOURCE: Internal component documentation
LANGUAGE: jsx
CODE:
```
import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children, pageTitle }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(prev => !prev);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="main-layout">
      <MainHeader 
        onSidebarToggle={handleSidebarToggle}
        sidebarOpen={sidebarOpen}
      />
      
      <div className="layout-body">
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
        />
        
        <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
          <div className="content-container">
            {children}
          </div>
        </main>
      </div>
      
      {/* Mobile overlay for sidebar */}
      {sidebarOpen && (
        <div 
          className="sidebar-overlay"
          onClick={handleSidebarClose}
        />
      )}
    </div>
  );
};

export default MainLayout;
```

----------------------------------------

TITLE: Common Problems and Solutions
DESCRIPTION: Documentation of frequently encountered issues when implementing the MainHeader and breadcrumb system, along with their solutions.
SOURCE: Internal component documentation
LANGUAGE: markdown
CODE:
```
# Common MainHeader and Breadcrumb Issues

## Problem: Breadcrumbs not updating on route change

**Symptoms:**
- Breadcrumbs show incorrect or stale information
- Page changes but breadcrumb remains the same

**Solution:**
```jsx
useEffect(() => {
  const updateBreadcrumbs = () => {
    const items = getBreadcrumbItems(router.pathname);
    setBreadcrumbItems(items);
  };
  
  updateBreadcrumbs();
  
  // Listen for route changes
  router.events.on('routeChangeComplete', updateBreadcrumbs);
  
  return () => {
    router.events.off('routeChangeComplete', updateBreadcrumbs);
  };
}, [router.pathname, router.events, setBreadcrumbItems]);
```

## Problem: Sidebar state not syncing with toggle button

**Symptoms:**
- Toggle button shows wrong state
- Sidebar opens/closes but button animation is incorrect

**Solution:**
Ensure state is properly lifted up to parent component:
```jsx
// In parent component
const [sidebarOpen, setSidebarOpen] = useState(false);

// Pass both state and setter to components
<MainHeader 
  sidebarOpen={sidebarOpen}
  onSidebarToggle={() => setSidebarOpen(prev => !prev)}
/>
<Sidebar 
  isOpen={sidebarOpen}
  onClose={() => setSidebarOpen(false)}
/>
```

## Problem: Header z-index conflicts

**Symptoms:**
- Header appears behind modals or dropdowns
- Sidebar overlaps header incorrectly

**Solution:**
Set proper z-index hierarchy:
```css
.main-header { z-index: 100; }
.sidebar { z-index: 90; }
.sidebar-overlay { z-index: 85; }
.modal { z-index: 200; }
.dropdown { z-index: 150; }
```

## Problem: Mobile responsiveness issues

**Symptoms:**
- Header content overlaps on small screens
- Breadcrumbs cut off or wrap poorly

**Solution:**
Implement responsive design patterns:
```css
@media (max-width: 768px) {
  .header-center {
    display: none; /* Hide breadcrumb on mobile */
  }
  
  .mobile-breadcrumb {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-bottom: 1px solid #e5e7eb;
  }
}
```
```

----------------------------------------

TITLE: Component Integration Workflow
DESCRIPTION: Step-by-step guide for integrating MainHeader and breadcrumb components into new pages within the main folder structure.
SOURCE: Internal component documentation
LANGUAGE: markdown
CODE:
```
# MainHeader Integration Workflow

## Step 1: Page Component Setup

1. Create your page component in the appropriate main subfolder
2. Import required dependencies:

```jsx
import React, { useEffect } from 'react';
import { useBreadcrumb } from '../contexts/BreadcrumbContext';
import { getBreadcrumbItems } from '../config/breadcrumbConfig';
import MainLayout from '../layouts/MainLayout';
```

## Step 2: Breadcrumb Configuration

1. Add your route to `breadcrumbConfig.js`:

```javascript
'/main/your-new-page': [
  { label: 'Home', href: '/' },
  { label: 'Your Section', href: '/main/your-section' },
  { label: 'New Page', href: null }
]
```

2. For dynamic routes, use parameter placeholders:

```javascript
'/main/users/:id/edit': [
  { label: 'Home', href: '/' },
  { label: 'Users', href: '/main/users' },
  { label: 'Edit User', href: null }
]
```

## Step 3: Page Implementation

```jsx
const YourNewPage = () => {
  const { setBreadcrumbItems } = useBreadcrumb();

  useEffect(() => {
    const breadcrumbItems = getBreadcrumbItems('/main/your-new-page');
    setBreadcrumbItems(breadcrumbItems);

    return () => {
      setBreadcrumbItems([]);
    };
  }, [setBreadcrumbItems]);

  return (
    <MainLayout pageTitle="Your New Page">
      <div className="page-content">
        <h1>Your New Page</h1>
        {/* Page content */}
      </div>
    </MainLayout>
  );
};
```

## Step 4: Testing Checklist

- [ ] Header appears at top of page
- [ ] Sidebar toggle works correctly
- [ ] Breadcrumbs show correct hierarchy
- [ ] Mobile responsiveness works
- [ ] Navigation links function properly
- [ ] Page unmount clears breadcrumbs

## Step 5: Common Patterns

### For pages with data loading:
```jsx
useEffect(() => {
  if (data) {
    const breadcrumbItems = getBreadcrumbItems(pathname, {
      dynamicLabel: data.name
    });
    setBreadcrumbItems(breadcrumbItems);
  }
}, [data, pathname, setBreadcrumbItems]);
```

### For nested pages:
```jsx
useEffect(() => {
  const baseBreadcrumbs = getBreadcrumbItems('/main/parent-page');
  const childBreadcrumb = { label: childData.name, href: null };
  setBreadcrumbItems([...baseBreadcrumbs, childBreadcrumb]);
}, [childData, setBreadcrumbItems]);
```
```

----------------------------------------

TITLE: Breadcrumb Trail Implementation Requirements
DESCRIPTION: Comprehensive requirements for implementing hierarchical breadcrumb navigation using existing breadcrumb component to replace all "back to" buttons in the webapp.
SOURCE: Internal component requirements documentation
LANGUAGE: markdown
CODE:
```
# BREADCRUMB TRAIL IMPLEMENTATION REQUIREMENTS

## OBJECTIVE
Implement hierarchical breadcrumb navigation using existing breadcrumb component to replace all "back to" buttons in the webapp.

## CORE RULES
1. Remove all existing "back to" buttons from all pages
2. Add breadcrumb setBreadcrumbs call to every page's useEffect
3. Use provided breadcrumb component pattern
4. Last breadcrumb item should NOT have href (represents current page)
5. All other breadcrumb items MUST have href for navigation
6. DO NOT include Dashboard in breadcrumbs for base modules (e.g., Contacts, Users, etc.)
```

----------------------------------------

TITLE: List Pages Breadcrumb Pattern
DESCRIPTION: Standard breadcrumb implementation for base module list pages. These represent the top level of each module and should only show the module name.
SOURCE: Internal component requirements documentation
LANGUAGE: jsx
CODE:
```
// List Pages (Base Module)
// URL: /contacts
useEffect(() => {
  setBreadcrumbs([
    { label: 'Contacts' }
  ])
}, [setBreadcrumbs])

// URL: /users  
useEffect(() => {
  setBreadcrumbs([
    { label: 'Users' }
  ])
}, [setBreadcrumbs])

// URL: /projects
useEffect(() => {
  setBreadcrumbs([
    { label: 'Projects' }
  ])
}, [setBreadcrumbs])
```

----------------------------------------

TITLE: Create Pages Breadcrumb Pattern
DESCRIPTION: Breadcrumb implementation for create/new pages. Should show the parent module with a link back to the list, and the current create action without a link.
SOURCE: Internal component requirements documentation
LANGUAGE: jsx
CODE:
```
// Create Pages
// URL: /contacts/create
useEffect(() => {
  setBreadcrumbs([
    { label: 'Contacts', href: '/contacts' },
    { label: 'Create New Contact' }
  ])
}, [setBreadcrumbs])

// URL: /users/create
useEffect(() => {
  setBreadcrumbs([
    { label: 'Users', href: '/users' },
    { label: 'Create New User' }
  ])
}, [setBreadcrumbs])

// URL: /projects/create
useEffect(() => {
  setBreadcrumbs([
    { label: 'Projects', href: '/projects' },
    { label: 'Create New Project' }
  ])
}, [setBreadcrumbs])
```

----------------------------------------

TITLE: Edit Pages Breadcrumb Pattern
DESCRIPTION: Breadcrumb implementation for edit/detail pages. Should show the parent module with a link and use the actual item name from loaded data as the current page.
SOURCE: Internal component requirements documentation
LANGUAGE: jsx
CODE:
```
// Edit Pages
// URL: /contacts/123
useEffect(() => {
  setBreadcrumbs([
    { label: 'Contacts', href: '/contacts' },
    { label: contactName } // Use actual contact name from data
  ])
}, [setBreadcrumbs, contactName])

// URL: /users/456
useEffect(() => {
  setBreadcrumbs([
    { label: 'Users', href: '/users' },
    { label: userName } // Use actual user name from data
  ])
}, [setBreadcrumbs, userName])

// URL: /projects/789
useEffect(() => {
  setBreadcrumbs([
    { label: 'Projects', href: '/projects' },
    { label: projectName } // Use actual project name from data
  ])
}, [setBreadcrumbs, projectName])
```

----------------------------------------

TITLE: Dashboard Pages Breadcrumb Pattern
DESCRIPTION: Breadcrumb implementation for dashboard pages. Dashboard pages should only show "Dashboard" and do not include additional hierarchy.
SOURCE: Internal component requirements documentation
LANGUAGE: jsx
CODE:
```
// Dashboard Pages
// URL: /dashboard
useEffect(() => {
  setBreadcrumbs([
    { label: 'Dashboard' }
  ])
}, [setBreadcrumbs])

// URL: /dashboard/analytics
useEffect(() => {
  setBreadcrumbs([
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Analytics' }
  ])
}, [setBreadcrumbs])

// URL: /dashboard/reports
useEffect(() => {
  setBreadcrumbs([
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Reports' }
  ])
}, [setBreadcrumbs])
```

----------------------------------------

TITLE: Implementation Tasks Checklist
DESCRIPTION: Complete checklist of tasks required to implement breadcrumb navigation across the entire webapp and remove existing "back to" buttons.
SOURCE: Internal component requirements documentation
LANGUAGE: markdown
CODE:
```
# IMPLEMENTATION TASKS

## Phase 1: Audit and Remove
- [ ] Scan all page components and identify existing "back to" buttons
- [ ] Create inventory of all pages that need breadcrumb implementation
- [ ] Remove all existing "back to" buttons from identified pages

## Phase 2: Implement Breadcrumbs
- [ ] Add setBreadcrumbs call to every page's useEffect
- [ ] Follow the specific pattern for each page type:
  - [ ] List pages (base module pattern)
  - [ ] Create pages (parent + create pattern)
  - [ ] Edit pages (parent + item name pattern)
  - [ ] Dashboard pages (dashboard hierarchy pattern)

## Phase 3: Data Integration
- [ ] Ensure edit pages use actual item names from loaded data
- [ ] Handle loading states for breadcrumbs on edit pages
- [ ] Implement fallback breadcrumbs for failed data loads

## Phase 4: Testing
- [ ] Test breadcrumb navigation flow on all pages
- [ ] Verify all breadcrumb links function correctly
- [ ] Confirm current page has no href property
- [ ] Validate base modules do not include Dashboard in breadcrumbs
- [ ] Test responsive behavior on mobile devices

## Phase 5: Validation
- [ ] Confirm no "back to" buttons exist anywhere in the application
- [ ] Verify every page calls setBreadcrumbs in useEffect
- [ ] Check breadcrumbs accurately reflect page hierarchy
- [ ] Ensure consistent styling and behavior across all pages
```

----------------------------------------

TITLE: Breadcrumb Data Loading Patterns
DESCRIPTION: Patterns for handling breadcrumb updates when page data is loaded asynchronously, including loading states and error handling.
SOURCE: Internal component requirements documentation
LANGUAGE: jsx
CODE:
```
// Pattern for Edit Pages with Async Data Loading
const ContactEditPage = ({ contactId }) => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContact = async () => {
      try {
        setLoading(true);
        const contactData = await fetchContact(contactId);
        setContact(contactData);
        
        // Set breadcrumbs with actual contact name
        setBreadcrumbs([
          { label: 'Contacts', href: '/contacts' },
          { label: contactData.name }
        ]);
      } catch (error) {
        console.error('Failed to load contact:', error);
        
        // Fallback breadcrumbs without contact name
        setBreadcrumbs([
          { label: 'Contacts', href: '/contacts' },
          { label: 'Contact Details' }
        ]);
      } finally {
        setLoading(false);
      }
    };

    if (contactId) {
      loadContact();
    }

    // Cleanup
    return () => {
      setBreadcrumbs([]);
    };
  }, [contactId, setBreadcrumbs]);

  // Component render logic...
};

// Pattern for Create Pages with Parent Context
const ProjectCreatePage = ({ parentClientId }) => {
  const [parentClient, setParentClient] = useState(null);

  useEffect(() => {
    if (parentClientId) {
      // Load parent context for more specific breadcrumbs
      fetchClient(parentClientId).then(clientData => {
        setBreadcrumbs([
          { label: 'Clients', href: '/clients' },
          { label: clientData.name, href: `/clients/${clientData.id}` },
          { label: 'Create New Project' }
        ]);
      }).catch(() => {
        // Fallback to basic breadcrumbs
        setBreadcrumbs([
          { label: 'Projects', href: '/projects' },
          { label: 'Create New Project' }
        ]);
      });
    } else {
      // Standard create page breadcrumbs
      setBreadcrumbs([
        { label: 'Projects', href: '/projects' },
        { label: 'Create New Project' }
      ]);
    }

    return () => {
      setBreadcrumbs([]);
    };
  }, [parentClientId, setBreadcrumbs]);
};
```

----------------------------------------

TITLE: Validation Criteria and Testing
DESCRIPTION: Complete validation criteria and testing procedures to ensure breadcrumb implementation meets all requirements and functions correctly across the webapp.
SOURCE: Internal component requirements documentation
LANGUAGE: markdown
CODE:
```
# VALIDATION CRITERIA

## Functional Requirements
✅ **No "back to" buttons exist anywhere in the application**
- Perform global search for "back to", "← Back", "Return to" text
- Check all button components for back navigation functionality
- Verify removal from all page templates and components

✅ **Every page calls setBreadcrumbs in useEffect**
- Audit all page components in main application routes
- Confirm useEffect includes setBreadcrumbs call
- Verify cleanup function removes breadcrumbs on unmount

✅ **All breadcrumb navigation links function correctly**
- Click test every breadcrumb link on every page
- Verify href attributes navigate to correct routes
- Confirm current page breadcrumb has no href property

✅ **Current page has no href property**
- Check last breadcrumb item on all pages
- Ensure it renders as text, not clickable link
- Verify styling difference for current vs. navigable items

✅ **Base modules do not include Dashboard in breadcrumbs**
- Test /contacts, /users, /projects, etc.
- Confirm breadcrumbs start with module name only
- Verify no "Dashboard > Contacts" patterns exist

✅ **Breadcrumbs accurately reflect page hierarchy**
- Verify logical progression: List → Create/Edit
- Confirm parent-child relationships are correct
- Check nested module breadcrumbs follow proper hierarchy

## Technical Requirements
✅ **Loading states handled properly**
- Test breadcrumbs during data loading on edit pages
- Verify fallback breadcrumbs for failed data loads
- Confirm no broken breadcrumb states during transitions

✅ **Memory leaks prevented**
- Verify setBreadcrumbs([]) in cleanup functions
- Test navigation between pages clears old breadcrumbs
- Check for proper dependency arrays in useEffect

✅ **Mobile responsiveness**
- Test breadcrumb display on mobile devices
- Verify touch targets are appropriately sized
- Check overflow behavior for long breadcrumb chains

## Performance Requirements
✅ **No unnecessary re-renders**
- Monitor breadcrumb updates during component lifecycle
- Verify setBreadcrumbs only called when necessary
- Check memoization of breadcrumb data where appropriate

✅ **Fast navigation**
- Confirm breadcrumb links provide instant navigation
- Verify no loading delays for breadcrumb interactions
- Test smooth transitions between breadcrumb states
```

----------------------------------------

TITLE: Common Breadcrumb Implementation Errors
DESCRIPTION: Documentation of frequently encountered errors during breadcrumb implementation and their solutions to help avoid common pitfalls.
SOURCE: Internal component requirements documentation
LANGUAGE: markdown
CODE:
```
# COMMON BREADCRUMB IMPLEMENTATION ERRORS

## Error: Current Page Has href Property
**Problem:** Last breadcrumb item includes href, making it clickable
```jsx
// ❌ WRONG - Current page should not be clickable
setBreadcrumbs([
  { label: 'Contacts', href: '/contacts' },
  { label: 'John Doe', href: '/contacts/123' } // Should not have href
]);

// ✅ CORRECT - Current page has no href
setBreadcrumbs([
  { label: 'Contacts', href: '/contacts' },
  { label: 'John Doe' } // No href property
]);
```

## Error: Including Dashboard in Base Module Breadcrumbs
**Problem:** Base modules incorrectly include Dashboard in hierarchy
```jsx
// ❌ WRONG - Don't include Dashboard for base modules
setBreadcrumbs([
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Contacts' }
]);

// ✅ CORRECT - Base modules start with module name only
setBreadcrumbs([
  { label: 'Contacts' }
]);
```

## Error: Missing Cleanup Function
**Problem:** Breadcrumbs not cleared when component unmounts
```jsx
// ❌ WRONG - No cleanup, breadcrumbs persist
useEffect(() => {
  setBreadcrumbs([
    { label: 'Contacts', href: '/contacts' },
    { label: 'Create New Contact' }
  ]);
}, [setBreadcrumbs]);

// ✅ CORRECT - Cleanup function clears breadcrumbs
useEffect(() => {
  setBreadcrumbs([
    { label: 'Contacts', href: '/contacts' },
    { label: 'Create New Contact' }
  ]);

  return () => {
    setBreadcrumbs([]);
  };
}, [setBreadcrumbs]);
```

## Error: Setting Breadcrumbs Before Data Loads
**Problem:** Using undefined/null data in breadcrumb labels
```jsx
// ❌ WRONG - contactName might be undefined
useEffect(() => {
  setBreadcrumbs([
    { label: 'Contacts', href: '/contacts' },
    { label: contactName } // undefined on first render
  ]);
}, [setBreadcrumbs]); // Missing contactName dependency

// ✅ CORRECT - Wait for data and include in dependencies
useEffect(() => {
  if (contactName) {
    setBreadcrumbs([
      { label: 'Contacts', href: '/contacts' },
      { label: contactName }
    ]);
  }
}, [setBreadcrumbs, contactName]); // Include contactName dependency
```

## Error: Forgetting to Remove "Back To" Buttons
**Problem:** Old navigation buttons remain after breadcrumb implementation
```jsx
// ❌ WRONG - Remove all instances like this
return (
  <div>
    <button onClick={() => router.push('/contacts')}>
      ← Back to Contacts
    </button>
    {/* Page content */}
  </div>
);

// ✅ CORRECT - No back buttons, breadcrumbs handle navigation
return (
  <div>
    {/* Page content - breadcrumbs in header provide navigation */}
  </div>
);
```

## Error: Incorrect Dependency Arrays
**Problem:** useEffect dependencies don't match breadcrumb data usage
```jsx
// ❌ WRONG - Missing dependencies or unnecessary ones
useEffect(() => {
  setBreadcrumbs([
    { label: 'Users', href: '/users' },
    { label: user.name }
  ]);
}, [setBreadcrumbs]); // Missing user.name dependency

// ✅ CORRECT - Include all used variables in dependencies
useEffect(() => {
  setBreadcrumbs([
    { label: 'Users', href: '/users' },
    { label: user.name }
  ]);

  return () => setBreadcrumbs([]);
}, [setBreadcrumbs, user.name]); // All dependencies included
```
```

----------------------------------------

TITLE: Main Header Component Overview
DESCRIPTION: The main header component used in the authenticated area (App Pages) of the application. Provides navigation and branding for users after login.
SOURCE: Guides documentation - App Architecture
LANGUAGE: markdown
CODE:
```
# Main Header Component

## Overview
The main header component is used in the authenticated area (App Pages area) of the application, distinguished from the public header used on unauthenticated pages.

## Usage Context
- **Scope**: Used in all pages within the "(main)" folder structure
- **Authentication**: Only appears for authenticated users
- **Exclusion**: Not shown on the landing page "/"
- **Distinction**: Separate from "public header" used on login/signup pages

## Integration with App Architecture
- Part of the two-tier layout system (public vs authenticated areas)
- Works in conjunction with the main sidebar component
- Provides consistent navigation experience across protected routes
- Integrates with AppContextProvider for user and userSettings access
```

----------------------------------------

TITLE: Main Header Layout Structure
DESCRIPTION: Structural requirements and layout patterns for the main header component within the authenticated application area.
SOURCE: Guides documentation - App Architecture
LANGUAGE: jsx
CODE:
```
// Main Header Layout Pattern
const MainHeaderLayout = () => {
  return (
    <header className="main-header">
      {/* Logo/Branding Section */}
      <div className="header-brand">
        <Link href="/dashboard">
          {/* Application Logo */}
        </Link>
      </div>

      {/* Navigation/Breadcrumb Section */}
      <div className="header-navigation">
        {/* Breadcrumb component integration */}
        <Breadcrumb />
      </div>

      {/* User Actions Section */}
      <div className="header-actions">
        {/* User profile, notifications, etc. */}
      </div>
    </header>
  );
};

// Integration with Main Layout
const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <MainHeader />
      <div className="layout-body">
        <MainSidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};
```

----------------------------------------

TITLE: Main Header Mobile Considerations
DESCRIPTION: Mobile-specific requirements and responsive behavior for the main header component to ensure proper functionality across devices.
SOURCE: Guides documentation - UI Development Guidelines
LANGUAGE: markdown
CODE:
```
# Main Header Mobile Requirements

## Mobile-Friendly Design
All main header implementations should be mobile friendly as per UI development guidelines.

## Responsive Behavior
- **Breakpoint Handling**: Adapt layout for mobile screen sizes
- **Touch Targets**: Ensure all interactive elements meet touch accessibility standards
- **Sidebar Integration**: Coordinate with sidebar mobile behavior (auto-close on navigation)
- **Content Prioritization**: Hide or collapse less critical elements on smaller screens

## Implementation Considerations
- Use shadcn/ui component library for consistent responsive patterns
- Integrate with lucide-react icons for mobile-appropriate iconography
- Ensure header works seamlessly with sidebar collapse/expand functionality
- Maintain consistent spacing and hierarchy across device sizes

## Testing Requirements
- Verify functionality across mobile and desktop breakpoints
- Test touch interactions on all header elements
- Confirm integration with sidebar mobile behavior
- Validate accessibility standards for mobile users
```

----------------------------------------

TITLE: Main Header Authentication Integration
DESCRIPTION: How the main header integrates with the authentication system and user context within the protected application area.
SOURCE: Guides documentation - Authentication and App Architecture
LANGUAGE: jsx
CODE:
```
// Main Header with Authentication Context
import { useUser } from '../contexts/AppContextProvider';

const MainHeader = () => {
  const { user, userSettings } = useUser();

  return (
    <header className="main-header">
      {/* Dashboard Link - Post-Authentication Landing */}
      <div className="header-brand">
        <Link href="/dashboard">
          <ApplicationLogo />
        </Link>
      </div>

      {/* Navigation Area */}
      <div className="header-navigation">
        <Breadcrumb />
      </div>

      {/* User Context Section */}
      <div className="header-user">
        {user && (
          <UserProfileDropdown 
            user={user} 
            userSettings={userSettings}
          />
        )}
      </div>
    </header>
  );
};

// Authentication Flow Integration
// - Used only on protected routes under /(main)/
// - Appears after successful authentication
// - Default redirect from login: /dashboard
// - Integrates with middleware protection system
```

----------------------------------------

TITLE: Main Sidebar Component Overview
DESCRIPTION: The main sidebar component used in the authenticated area (App Pages) that provides navigation for protected routes and module access.
SOURCE: Guides documentation - App Architecture
LANGUAGE: markdown
CODE:
```
# Main Sidebar Component

## Overview
The sidebar provides navigation for the authenticated area of the application, surrounding all content in the "(main)" folder but not shown on the landing page "/".

## Scope and Architecture
- **Location**: Used in all pages within the "(main)" folder structure  
- **Exclusion**: Not shown on landing page "/"
- **Integration**: Works with main header component as part of two-tier layout system
- **Responsive**: Automatically handles mobile/desktop behavior with collapse functionality

## Key Characteristics
- Uses shadcn/ui Sidebar components with proper semantic structure
- Provides consistent navigation experience across protected routes
- Integrates with AppContextProvider for user context access
- Follows established patterns for collapsible sections and menu organization
```

----------------------------------------

TITLE: Main Sidebar Structure and Layout Patterns
DESCRIPTION: Organizational structure and layout requirements for the main sidebar component including header, navigation groups, and footer sections.
SOURCE: Guides documentation - App Architecture and Tools
LANGUAGE: jsx
CODE:
```
// Main Sidebar Layout Structure
const MainSidebarLayout = () => {
  return (
    <aside className="main-sidebar">
      {/* Header: Logo/branding with link to dashboard */}
      <div className="sidebar-header">
        <Link href="/dashboard">
          <ApplicationLogo />
        </Link>
      </div>

      {/* Grouped Navigation: Organize menu items into logical groups */}
      <nav className="sidebar-navigation">
        <div className="navigation-group">
          <h3>Application</h3>
          {/* Main application modules */}
        </div>
        
        <div className="navigation-group">
          <h3>Administration</h3>
          {/* Admin/settings modules */}
        </div>
      </nav>

      {/* Footer: User profile and account management */}
      <div className="sidebar-footer">
        <UserProfileSection />
      </div>
    </aside>
  );
};
```

----------------------------------------

TITLE: Main Sidebar Menu Item Data Structure
DESCRIPTION: Standard data structure for organizing and defining menu items within the sidebar navigation system.
SOURCE: Guides documentation - App Architecture
LANGUAGE: typescript
CODE:
```
// Data structure for menu items
const menuItems = [
  {
    title: "Module Name",
    url: "/module-path", 
    icon: LucideIcon,
  }
];

// Example implementation for liturgical application
const sidebarMenuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Petitions", 
    url: "/petitions",
    icon: FileText,
  },
  {
    title: "Readings",
    url: "/readings", 
    icon: BookOpen,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  }
];

// Menu item with sub-items structure
const moduleWithSubItems = {
  title: "MODULE_NAME",
  icon: FileText,
  collapsible: true,
  items: [
    {
      title: "Create ENTITY",
      url: "/entities/create", 
      icon: Sparkles
    },
    {
      title: "My ENTITIES",
      url: "/entities",
      icon: FileText
    }
  ]
};
```

----------------------------------------

TITLE: Main Sidebar Collapsible Groups Pattern
DESCRIPTION: Implementation pattern for collapsible menu sections with state management and visual indicators in the sidebar navigation.
SOURCE: Guides documentation - App Architecture
LANGUAGE: jsx
CODE:
```
// Collapsible Groups Implementation
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { SidebarMenuSub } from '@/components/ui/sidebar';

const CollapsibleMenuGroup = ({ title, items, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="sidebar-group-trigger">
        <span>{title}</span>
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </CollapsibleTrigger>
      
      <CollapsibleContent>
        <SidebarMenuSub>
          {items.map((item) => (
            <li key={item.url}>
              <Link href={item.url} className="sidebar-menu-item">
                <item.icon className="w-4 h-4" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </SidebarMenuSub>
      </CollapsibleContent>
    </Collapsible>
  );
};
```

----------------------------------------

TITLE: Main Sidebar Mobile Behavior Requirements
DESCRIPTION: Mobile-specific behavior patterns and responsive requirements for the sidebar component to ensure proper functionality across devices.
SOURCE: Guides documentation - App Architecture and UI Guidelines
LANGUAGE: markdown
CODE:
```
# Main Sidebar Mobile Behavior

## Auto-close on Navigation
- Close sidebar on mobile after navigation to prevent screen obstruction
- Implement touch-friendly navigation patterns
- Handle route changes with automatic sidebar collapse

## Responsive Design Requirements
- **Touch Targets**: Proper touch targets and spacing for mobile interaction
- **Visual Hierarchy**: Clear visual hierarchy on small screens with appropriate icon sizing
- **Breakpoint Handling**: Smooth transitions between mobile and desktop layouts

## Mobile-Friendly Implementation
- Integrate with sidebar collapse/expand functionality from main header
- Coordinate with main header sidebar toggle button
- Ensure consistent spacing and hierarchy across device sizes
- Use shadcn/ui responsive patterns for consistent behavior

## Integration with Main Header
- Sidebar toggle button should be present in main header for mobile
- Coordinated state management between header toggle and sidebar visibility
- Responsive behavior that works seamlessly with header layout changes
```

----------------------------------------

TITLE: Main Sidebar Implementation Guidelines and Patterns
DESCRIPTION: Comprehensive implementation guidelines including icon patterns, navigation structure examples, and development standards for the sidebar component.
SOURCE: Guides documentation - App Architecture and Tools
LANGUAGE: markdown
CODE:
```
# Main Sidebar Implementation Guidelines

## Icon Patterns and Consistency
- **Create Actions**: Always use Sparkles icon for consistency across all modules
- **List Views**: Use the module's primary icon (FileText, BookOpen, etc.)
- **Module Icons**: Use descriptive module names with appropriate lucide-react icons
- **Settings**: Grouped separately at bottom with Settings and Cog icons

## Navigation Structure Example
```
MODULE_NAME (FileText icon) - Collapsible dropdown:
- Create ENTITY - /entities/create (Sparkles icon)
- My ENTITIES - /entities (FileText icon)

Settings (Settings icon) - Collapsible dropdown:
- Module Definitions - /settings/module-definitions (FileText icon) 
- System Settings - /settings/system (Cog icon)
```

## Visual Hierarchy Standards
- Use SidebarGroupLabel for clear section organization
- Maintain consistent visual hierarchy with proper spacing
- Group related functionality together (e.g., Contacts, Parishes, Campaigns)
- Include user profile management in footer section

## Development Standards
- Handle link clicks with mobile awareness for responsive behavior
- Use consistent icon patterns throughout navigation structure
- Integrate with AppContextProvider for user context access
- Follow shadcn/ui component patterns for semantic structure
- Implement proper state management for collapsible sections
```

----------------------------------------