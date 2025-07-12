# Module Design Patterns

*Architectural patterns and design guidelines for building modules in the application*

---

## Overview

This guide defines three standard module design patterns (Small, Medium, and Large) to help developers choose the appropriate architecture for their modules based on complexity and requirements.

## Module Design Types

### Small Module Design

**When to Use:**
- Simple data structures with minimal user interaction
- Read-heavy modules with occasional updates
- Settings or configuration modules
- Single-entity modules without complex relationships

**Structure:**
- **Single Page:** Located at `/(main)/[moduleName]`
- **Create Action:** Implemented as a modal on the index page
- **Edit Action:** In-place editing or modal-based

**Characteristics:**
- Minimal file structure
- All CRUD operations on a single page
- Modal-based interactions for create/edit
- Ideal for lists, tags, announcements, simple settings

**Example File Structure:**
```
/app/(main)/announcements/
  ├── page.tsx              # Index with list and modal create
  ├── actions.ts            # Server actions
  └── components/
      ├── announcement-list.tsx
      ├── announcement-modal.tsx
      └── announcement-form.tsx
```

**Implementation Pattern:**
```typescript
// page.tsx
export default function AnnouncementsPage() {
  return (
    <>
      <AnnouncementList />
      <CreateAnnouncementModal />
    </>
  );
}
```

---

### Medium Module Design

**When to Use:**
- Standard CRUD operations with moderate complexity
- Multi-field forms requiring dedicated space
- Modules with 3-7 main data fields
- Clear create/edit workflows needed

**Structure:**
- **Index Page:** `/(main)/[moduleName]` - Lists all items
- **Create Page:** `/(main)/[moduleName]/create` - Dedicated creation form
- **Edit Page:** `/(main)/[moduleName]/[id]` - Edit existing items

**Characteristics:**
- Separate pages for list, create, and edit operations
- Shared form component between create and edit pages
- Clear navigation flow
- Suitable for contacts, products, blog posts, basic resources

**Example File Structure:**
```
/app/(main)/contacts/
  ├── page.tsx              # List view
  ├── create/
  │   └── page.tsx          # Create new contact
  ├── [id]/
  │   └── page.tsx          # Edit existing contact
  ├── actions.ts            # Server actions
  └── components/
      ├── contact-list.tsx
      ├── contact-form.tsx  # Shared by create and edit
      └── contact-filters.tsx
```

**Implementation Pattern:**
```typescript
// components/contact-form.tsx
interface ContactFormProps {
  contact?: Contact;
  mode: 'create' | 'edit';
}

export function ContactForm({ contact, mode }: ContactFormProps) {
  // Shared form logic for both create and edit
}
```

---

### Large Module Design

**When to Use:**
- Complex multi-step configuration required
- Many related entities or sub-modules
- Wizard-style workflows needed
- Progressive disclosure of complexity
- Modules requiring guided setup

**Structure:**
- **Index Page:** `/(main)/[moduleName]` - Overview and list
- **Simple Create:** `/(main)/[moduleName]/create` - Minimal initial creation (name/title only)
- **Wizard/Edit:** `/(main)/[moduleName]/[id]/wizard` - Multi-step configuration

**Characteristics:**
- Simple creation followed by detailed configuration
- Step-by-step wizard interface
- Progress tracking and status indicators
- Complex form validation and dependencies
- Suitable for projects, campaigns, onboarding flows, complex configurations

**Example File Structure:**
```
/app/(main)/projects/
  ├── page.tsx              # Project list/dashboard
  ├── create/
  │   └── page.tsx          # Simple create (name only)
  ├── [id]/
  │   ├── wizard/
  │   │   └── page.tsx      # Multi-step wizard
  │   └── view/
  │       └── page.tsx      # Read-only view (optional)
  ├── actions.ts            # Server actions
  └── components/
      ├── project-list.tsx
      ├── project-wizard/
      │   ├── wizard-shell.tsx
      │   ├── step-basic-info.tsx
      │   ├── step-team-members.tsx
      │   ├── step-settings.tsx
      │   └── wizard-progress.tsx
      └── project-card.tsx
```

**Implementation Pattern:**
```typescript
// [id]/wizard/page.tsx
export default function ProjectWizard({ params }: { params: { id: string } }) {
  const [currentStep, setCurrentStep] = useState(0);
  
  return (
    <WizardShell>
      <WizardProgress currentStep={currentStep} totalSteps={4} />
      {currentStep === 0 && <StepBasicInfo />}
      {currentStep === 1 && <StepTeamMembers />}
      {currentStep === 2 && <StepSettings />}
      {currentStep === 3 && <StepReview />}
    </WizardShell>
  );
}
```

**Wizard Features:**
- Progress bar showing completion status
- Step validation before proceeding
- Save draft functionality
- Skip optional steps
- Review step before final submission

---

## Choosing the Right Pattern

### Decision Matrix

| Criteria | Small | Medium | Large |
|----------|--------|---------|--------|
| Number of fields | 1-3 | 4-7 | 8+ |
| User interaction complexity | Low | Medium | High |
| Configuration steps | Single | Single | Multiple |
| Related entities | None | Few | Many |
| Typical user session | < 2 min | 2-5 min | 5+ min |
| Form validation complexity | Simple | Moderate | Complex |

### Questions to Ask

1. **How many fields does the primary entity have?**
   - 1-3 fields → Small
   - 4-7 fields → Medium
   - 8+ fields → Large

2. **Does creation require multiple steps?**
   - No → Small or Medium
   - Yes → Large

3. **How long will users typically spend creating/editing?**
   - Quick updates → Small
   - Focused work → Medium
   - Extended configuration → Large

4. **Are there dependent or related entities?**
   - No dependencies → Small
   - Simple relations → Medium
   - Complex relations → Large

---

## Common Patterns Across All Designs

### Server Actions Structure
All module types should follow these server action patterns:

```typescript
// actions.ts
"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Input validation schemas
const createSchema = z.object({
  // ... field definitions
});

// Create action (all types)
export async function createItem(data: z.infer<typeof createSchema>) {
  const validated = createSchema.parse(data);
  const supabase = createClient();
  
  // Auth check
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Unauthorized");
  
  // Create item
  const { data: item, error } = await supabase
    .from("items")
    .insert(validated)
    .select()
    .single();
    
  if (error) throw error;
  
  revalidatePath("/items");
  
  // Redirect based on module type
  // Small: Stay on index
  // Medium/Large: Redirect to edit/wizard
  if (moduleType !== "small") {
    redirect(`/items/${item.id}/edit`);
  }
}
```

### Navigation Integration
All module types must update the main sidebar:

```typescript
// In MainSidebar.tsx
{
  title: "Module Name",
  url: "/module-name",
  icon: IconComponent,
  items: [
    {
      title: "All Items",
      url: "/module-name"
    },
    {
      title: "Create New",
      url: "/module-name/create" // Or modal trigger for small
    },
    // Additional items as needed
  ]
}
```

### Testing Requirements
Each module type requires specific test coverage:

- **Small:** Test modal interactions and in-place editing
- **Medium:** Test navigation flow between pages
- **Large:** Test wizard progression and step validation

---

## Migration Between Patterns

Modules may need to migrate between patterns as they grow:

### Small → Medium
- Extract modal forms to dedicated pages
- Add routing for create/edit pages
- Maintain backward compatibility if needed

### Medium → Large
- Split form into wizard steps
- Add progress tracking
- Implement step validation
- Create simplified initial creation

### Downgrading (Less Common)
- Consolidate pages into single view
- Simplify forms and remove steps
- Archive unused complexity

---

## Best Practices

1. **Start Simple:** Begin with the smallest pattern that meets current needs
2. **Plan for Growth:** Consider future requirements but don't over-engineer
3. **Consistent UX:** Users should experience similar patterns across modules
4. **Progressive Disclosure:** Show complexity only when needed
5. **Performance First:** Optimize for the most common use cases
6. **Accessibility:** Ensure all patterns are keyboard navigable and screen reader friendly

---

*This guide is part of the Module Development Workflow. Refer to `module-workflow.md` for the complete development process.*