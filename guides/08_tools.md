# Chapter 8: Tools

## Overview

This chapter provides practical tools and frameworks for development work. It includes definitions, workflows, checklists, and standards that developers and AI agents can use to ensure consistent, high-quality development practices.

## Required Reading

- [Next.js Documentation](../docs/nextjs/) - For component patterns, routing, and development best practices
- [shadcn/ui Documentation](../docs/shadcn/) - For component library standards and usage patterns

## Chapter Focus

This chapter covers project-specific development tools, workflows, and standards. For detailed framework documentation, reference the docs above.

## Core Development Concepts

### What is a Properly Defined Feature?

A **properly defined feature** is a specific piece of functionality that:

#### 1. **Has Clear Purpose**
- Solves a specific user problem or business need
- Can be described in 1-2 sentences
- Has measurable value to the end user

#### 2. **Defined Scope**
- Clear boundaries of what it includes and excludes
- Specific acceptance criteria
- Well-defined user interactions and workflows

#### 3. **Technical Specifications**
- Database schema requirements (if any)
- API endpoints needed
- UI components and pages required
- Dependencies on other features

#### 4. **User Stories**
- "As a [user type], I want to [action] so that [benefit]"
- Clear user journey from start to completion
- Edge cases and error handling defined

#### 5. **Testing Criteria**
- How to verify the feature works correctly
- What constitutes successful implementation
- Performance and accessibility requirements

### Feature Examples

**Well-Defined Feature:**
```
Feature: Petition Generation
Purpose: Allow users to create AI-generated prayer petitions for liturgical services
Scope: 
- Multi-step wizard workflow
- Context selection (Sunday, Wedding, Funeral, Daily)
- AI generation with editable output
- Print-ready formatting
User Story: "As a parish administrator, I want to generate contextual petitions for Mass so that I can save time while ensuring appropriate liturgical content"
```

**Poorly Defined Feature:**
```
Feature: Better petitions
Purpose: Make petitions work better
Scope: Fix petition stuff
```

---

### What is a Properly Defined Module?

A **properly defined module** is a cohesive collection of related features that:

#### 1. **Domain Boundaries**
- Represents a clear business domain or user workflow
- Contains related functionality that naturally groups together
- Has minimal dependencies on other modules

#### 2. **Standard Structure**
- Follows consistent file organization patterns
- Implements standard CRUD operations where appropriate
- Uses established UI patterns and components

#### 3. **Navigation Integration**
- Clear placement in the application sidebar
- Logical grouping with related modules
- Consistent iconography and naming

#### 4. **Database Design**
- Well-defined database tables and relationships
- Proper foreign key relationships
- Consistent naming conventions

#### 5. **Route Organization**
- Predictable URL structure
- Standard page types (list, create, edit, detail)
- Consistent navigation patterns

### Module Structure Template

```
Module: [Module Name]
├── Purpose: [What business domain this covers]
├── Features:
│   ├── [Feature 1] - [Description]
│   ├── [Feature 2] - [Description]
│   └── [Feature 3] - [Description]
├── Routes:
│   ├── /[module] - List view
│   ├── /[module]/create - Creation form
│   ├── /[module]/[id] - Detail view
│   └── /[module]/[id]/edit - Edit form
├── Database Tables:
│   ├── [primary_table] - Main entity
│   └── [related_tables] - Supporting data
└── Components:
    ├── [Module]List - Data table
    ├── [Module]Form - Create/edit form
    └── [Module]Detail - View component
```

### Module Examples

**Well-Defined Module:**
```
Module: Petitions
Purpose: Manage prayer petition creation, editing, and printing for liturgical services
Features:
  - Create petition sets with wizard workflow
  - AI-generated content based on liturgical context
  - Edit and customize generated petitions
  - Print-formatted output for liturgical use
Routes:
  - /petitions - List all petition sets
  - /petitions/create - Create new petition set
  - /petitions/[id]/wizard - Multi-step petition wizard
  - /petitions/[id]/print - Print view
Database Tables:
  - petitions - Main petition sets
  - petition_contexts - Template contexts
  - petition_settings - User preferences
Icon: FileText (from lucide-react)
Sidebar Group: Content Creation
```

**Poorly Defined Module:**
```
Module: Stuff
Purpose: Various things
Features: Different functionality
```

---

## Development Standards

### Naming Conventions

#### Files and Directories
- **Routes**: `/src/app/(main)/[module-name]/`
- **Components**: `PascalCase` (e.g., `PetitionsList`, `ReadingForm`)
- **Database Tables**: `snake_case` (e.g., `petition_contexts`, `liturgical_readings`)
- **Variables**: `camelCase` (e.g., `petitionId`, `userSettings`)

#### Database
- **Primary Keys**: `id` (UUID)
- **Foreign Keys**: `[table]_id` (e.g., `user_id`, `petition_id`)
- **Timestamps**: `created_at`, `updated_at`
- **User Isolation**: Every main table includes `user_id`

### Component Patterns

#### Standard Page Components
- **List Pages**: Search, pagination, create button, action buttons
- **Form Pages**: Validation, loading states, error handling
- **Detail Pages**: Read-only view with edit/delete actions
- **Wizard Pages**: Step indicator, navigation, progress tracking

#### UI Standards
- **Icons**: Use lucide-react icons consistently
- **Styling**: shadcn/ui components with Tailwind CSS
- **Forms**: react-hook-form with Zod validation
- **Notifications**: Sonner toast notifications
- **Loading States**: Skeleton components and button loading states

---

## Liturgical Domain Concepts

### Liturgical Readings
A collection of scripture readings for a specific liturgical occasion, typically containing:
- First Reading (Old Testament)
- Responsorial Psalm
- Second Reading (New Testament)
- Gospel Reading

### Petitions (Prayer of the Faithful)
Intercessory prayers said during Mass, typically including:
- For the Church
- For public authorities and world peace
- For local needs
- For the sick and deceased

### Liturgical Contexts
Different types of liturgical celebrations that require different content:
- **Sunday**: Regular weekend Mass
- **Wedding**: Marriage ceremony
- **Funeral**: Memorial service
- **Daily**: Weekday Mass

---

## Quality Checklist

### Feature Completion Checklist
- [ ] Clear user story defined
- [ ] Database schema implemented
- [ ] API endpoints created
- [ ] UI components built
- [ ] Navigation integrated
- [ ] Error handling implemented
- [ ] Loading states added
- [ ] Mobile responsive
- [ ] Accessibility considered
- [ ] Print functionality (if applicable)

### Module Completion Checklist
- [ ] All CRUD operations implemented
- [ ] List view with search/pagination
- [ ] Create/edit forms with validation
- [ ] Detail/view pages
- [ ] Sidebar navigation integrated
- [ ] Database relationships established
- [ ] Server actions implemented
- [ ] Toast notifications added
- [ ] Mobile responsive design
- [ ] Print views (if applicable)
- [ ] User isolation enforced

---

## Development Flows

### Module Flow
Essential elements a builder needs to define before creating a new module:

#### 1. **Business Domain Analysis**
- What business problem does this module solve?
- Who are the primary users of this module?
- What are the core entities and their relationships?
- How does this module interact with other modules?

#### 2. **Data Architecture**
- What database tables are needed?
- What are the key fields and data types?
- What relationships exist between entities?
- What indexes are needed for performance?

#### 3. **User Interface Planning**
- What pages/views are required?
- What is the primary user workflow?
- What actions can users perform?
- How should navigation be structured?

#### 4. **Technical Specifications**
- What API endpoints are needed?
- What server actions are required?
- What components need to be built?
- What external dependencies exist?

#### 5. **Integration Points**
- How does this module connect to the sidebar?
- What permissions/authentication are needed?
- How does it integrate with existing patterns?
- What shared components can be reused?

### Feature Flow
Essential elements a builder needs to define before implementing a new feature:

#### 1. **Feature Definition**
- What specific problem does this feature solve?
- What is the user story for this feature?
- What are the acceptance criteria?
- What are the edge cases and error scenarios?

#### 2. **User Experience Design**
- What is the user journey through this feature?
- What UI components are needed?
- How should success/error states be handled?
- What loading states are required?

#### 3. **Technical Implementation**
- What database changes are needed?
- What API endpoints need to be created/modified?
- What components need to be built/updated?
- What validation rules are required?

#### 4. **Testing Strategy**
- How will this feature be tested?
- What are the key test cases?
- What edge cases need testing?
- How will performance be validated?

#### 5. **Integration Impact**
- What existing features might be affected?
- What shared components need updates?
- How does this impact the overall user workflow?
- What documentation needs updating?

### Bug Flow
Essential elements a builder needs to define before fixing a bug:

#### 1. **Bug Identification**
- What is the specific issue or unexpected behavior?
- What are the steps to reproduce the bug?
- What is the expected vs actual behavior?
- What is the severity and impact of the bug?

#### 2. **Root Cause Analysis**
- What is causing the bug?
- Is this a logic error, data issue, or UI problem?
- What components/functions are involved?
- Are there related bugs or patterns?

#### 3. **Solution Design**
- What is the proposed fix?
- What are the potential side effects?
- What alternative solutions were considered?
- What is the minimal change needed?

#### 4. **Testing Plan**
- How will the fix be verified?
- What regression testing is needed?
- What edge cases should be tested?
- How will similar bugs be prevented?

#### 5. **Implementation Strategy**
- What files need to be modified?
- What is the order of changes?
- What backup/rollback plan exists?
- What documentation needs updating?

### Commit Flow
Essential elements a builder needs to define before making a commit:

#### 1. **Change Scope**
- What specific changes are being made?
- Are these changes logically related?
- Should this be split into multiple commits?
- What is the purpose of these changes?

#### 2. **Quality Assurance**
- Have all changes been tested?
- Do all tests pass?
- Has the code been reviewed?
- Are there any remaining TODO items?

#### 3. **Commit Message**
- What is a clear, descriptive commit message?
- Does it explain the "why" not just the "what"?
- Does it follow the project's commit conventions?
- Are there any relevant issue numbers to reference?

#### 4. **Code Review**
- Has the code been self-reviewed?
- Are there any security concerns?
- Is the code consistent with project standards?
- Are there any performance implications?

#### 5. **Deployment Readiness**
- Are there any breaking changes?
- Are database migrations needed?
- Are there any configuration changes required?
- What is the rollback plan if needed?

---

## Practical Tools

### Workflow Helper Tool
A command-line tool is available at `/tools/workflow-helper.js` to help with chapter 8 workflows:

```bash
# Show workflow steps
node tools/workflow-helper.js workflow module
node tools/workflow-helper.js workflow feature

# Show completion checklists
node tools/workflow-helper.js checklist feature
node tools/workflow-helper.js checklist module

# Generate module template
node tools/workflow-helper.js template ModuleName "Module purpose description"

# Validate feature definition
node tools/workflow-helper.js validate feature-spec.md
```

### Quick Reference Commands

#### Module Creation Workflow
```bash
# 1. Generate module template
node tools/workflow-helper.js template PetitionManager "Manage liturgical petitions"

# 2. Review module checklist
node tools/workflow-helper.js checklist module

# 3. Follow module workflow
node tools/workflow-helper.js workflow module
```

#### Feature Development Workflow
```bash
# 1. Follow feature workflow
node tools/workflow-helper.js workflow feature

# 2. Validate feature definition
node tools/workflow-helper.js validate my-feature.md

# 3. Review feature checklist
node tools/workflow-helper.js checklist feature
```

### Development Standards Quick Reference

#### File Structure Template
```
src/app/(main)/[module-name]/
├── page.tsx                 # List view
├── create/
│   └── page.tsx            # Create form
├── [id]/
│   ├── page.tsx            # Detail view
│   └── edit/
│       └── page.tsx        # Edit form
└── components/
    ├── [Module]List.tsx    # Data table
    ├── [Module]Form.tsx    # Create/edit form
    └── [Module]Detail.tsx  # View component
```

#### Database Schema Template
```sql
CREATE TABLE [module_name] (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_[module_name]_user_id ON [module_name](user_id);
CREATE INDEX idx_[module_name]_created_at ON [module_name](created_at);
```

#### Component Template
```typescript
// [Module]List.tsx
import { DataTable } from '@/components/ui/data-table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function [Module]List() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">[Module Name]</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Create [Module]
        </Button>
      </div>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
```