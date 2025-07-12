import { z } from "zod";
import { ToolDefinition, ToolContext } from "../types";

export const getWorkflowRules: ToolDefinition = {
  name: "get-workflow-rules",
  description: "Get master workflow rules and requirements that apply to all workflows",
  inputSchema: z.object({}).optional(),
  handler: async (params, context) => {
    const rules = `# Master Workflow Rules

**PURPOSE**: Universal rules and requirements that apply to ALL workflows in the lolek-mcp system.
**SCOPE**: Cross-workflow requirements, database management, documentation standards, and quality gates.

## 🚨 CRITICAL DATABASE RULE

### DATABASE.md Update Requirement
**MANDATORY**: Whenever ANY database change is made during ANY workflow step, the agent MUST:

1. **Immediately run**: \`./scripts/generate-database-docs.sh\`
2. **Verify**: DATABASE.md contains the new schema changes
3. **Commit**: Updated DATABASE.md to version control
4. **Document**: Note the database update in the workflow progress

**Database changes include:**
- Creating new tables
- Adding/removing columns
- Modifying column types or constraints
- Adding/removing indexes
- Creating/dropping foreign keys
- RLS policy changes
- Migration file creation

**NO EXCEPTIONS**: This rule applies to ALL workflows (module, feature, create-app, wizard).

## Universal Workflow Requirements

### 1. Context Preparation (All Workflows)
- **ALWAYS start with**: \`load-documentation-context\`
- **Load agent rules**: Use \`get-agent-rules\` before any development
- **Review workflow rules**: Use \`get-workflow-rules\` (this tool)
- **Check project patterns**: Use \`list-examples\` and \`get-development-guide-index\`

### 2. Pre-Planning Standards
- **Complete ALL questions**: Every pre-planning question must have a comprehensive answer
- **Minimum response length**: Aim for 50+ characters per answer (except yes/no questions)
- **Specific examples**: Include concrete examples where requested
- **Review for completeness**: Ensure no vague or incomplete responses

### 3. Database Integration Requirements
- **DATABASE.md consultation**: Check DATABASE.md before ANY data-related decisions
- **Schema alignment**: All data models must align with existing database structure
- **Update documentation**: Run database documentation generator after ANY schema changes
- **Version control**: Commit updated DATABASE.md immediately after generation

### 4. Component and Code Standards
- **Use existing patterns**: Always check development guide before creating new components
- **Follow established conventions**: Maintain consistency with existing codebase
- **Reuse before creating**: Prefer extending existing components over creating new ones
- **Test integration**: Ensure new code integrates properly with existing systems
- **Server actions security**: Follow universal server actions security requirements for ANY server actions created

#### File Organization Standards (CRITICAL)

##### Module Structure
**ALL module-related files must be organized within \`/app/[module-name]/\` folder:**

\`\`\`
/app/announcements/
├── page.tsx                    # Main list page
├── create/
│   └── page.tsx               # Create announcement page  
├── edit/
│   └── [id]/
│       └── page.tsx          # Edit announcement page
├── components/
│   ├── announcement-form.tsx  # ❌ NOT: /components/announcements/announcement-form.tsx
│   ├── template-form.tsx      # ❌ NOT: /components/announcements/template-form.tsx
│   ├── announcement-list.tsx  # All module components here
│   └── template-selector.tsx
├── actions.ts                 # Server actions for the module
└── types.ts                  # Type definitions for the module
\`\`\`

**Import paths for module files:**
\`\`\`typescript
// ✅ CORRECT - Module components in same directory
import { AnnouncementForm } from './components/announcement-form'
import { TemplateForm } from './components/template-form'

// ❌ WRONG - Do not put module components in /components/[module]/
import { AnnouncementForm } from '@/components/announcements/announcement-form'
\`\`\`

**Create/Edit View Pattern:**
- Create page: Simple form that saves and redirects to edit
- Edit page: Full-featured form that handles both new and existing items
- Same form component used in both create and edit modes
- After creation: redirect from \`/create\` to \`/edit/[new-id]\`

##### Server Actions Files (UNIVERSAL REQUIREMENT)
**APPLIES TO**: Any development work creating server actions (modules, features, any workflow)
**Locations**: 
- Modules: \`/app/[module-name]/actions.ts\`
- Features: Existing module or \`/app/[relevant-area]/actions.ts\`
- New functionality: Appropriate \`/app/[area]/actions.ts\` location

**Structure and Security**:
\`\`\`typescript
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

// 🔒 SECURITY: Always validate inputs with Zod schemas
const createAnnouncementSchema = z.object({
  text: z.string().min(1).max(1000),
  parish_id: z.string().uuid(),
  liturgical_event_id: z.string().uuid().optional(),
});

// 🔒 SECURITY: Always verify user authentication and authorization
async function verifyUserAccess() {
  const supabase = await createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error || !user) {
    throw new Error("Unauthorized");
  }
  
  return { supabase, user };
}

// ✅ CREATE action - saves and redirects to edit
export async function createAnnouncement(formData: FormData) {
  try {
    // 🔒 Verify authentication
    const { supabase, user } = await verifyUserAccess();
    
    // 🔒 Validate input data
    const rawData = {
      text: formData.get("text"),
      parish_id: formData.get("parish_id"),
      liturgical_event_id: formData.get("liturgical_event_id"),
    };
    
    const validatedData = createAnnouncementSchema.parse(rawData);
    
    // 🔒 Check user permissions for parish
    const { data: parish } = await supabase
      .from("parishes")
      .select("id")
      .eq("id", validatedData.parish_id)
      .eq("user_id", user.id) // RLS enforcement
      .single();
      
    if (!parish) {
      throw new Error("Unauthorized access to parish");
    }
    
    // Create the record
    const { data, error } = await supabase
      .from("announcements")
      .insert({
        ...validatedData,
        created_at: new Date().toISOString(),
      })
      .select()
      .single();
      
    if (error) throw error;
    
    // 🔄 Revalidate cache and redirect to edit
    revalidatePath("/announcements");
    redirect(\`/announcements/edit/\${data.id}\`);
    
  } catch (error) {
    console.error("Create announcement error:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to create announcement");
  }
}

// ✅ UPDATE action - updates existing record
export async function updateAnnouncement(id: string, formData: FormData) {
  try {
    const { supabase, user } = await verifyUserAccess();
    
    const rawData = {
      text: formData.get("text"),
      parish_id: formData.get("parish_id"),
      liturgical_event_id: formData.get("liturgical_event_id"),
    };
    
    const validatedData = createAnnouncementSchema.parse(rawData);
    
    // Update with RLS protection
    const { error } = await supabase
      .from("announcements")
      .update({
        ...validatedData,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .eq("parish_id", validatedData.parish_id); // Additional security check
      
    if (error) throw error;
    
    revalidatePath("/announcements");
    revalidatePath(\`/announcements/edit/\${id}\`);
    
  } catch (error) {
    console.error("Update announcement error:", error);
    throw new Error(error instanceof Error ? error.message : "Failed to update announcement");
  }
}

// ✅ DELETE action - removes record
export async function deleteAnnouncement(id: string) {
  try {
    const { supabase } = await verifyUserAccess();
    
    const { error } = await supabase
      .from("announcements")
      .delete()
      .eq("id", id);
      
    if (error) throw error;
    
    revalidatePath("/announcements");
    redirect("/announcements");
    
  } catch (error) {
    console.error("Delete announcement error:", error);
    throw new Error("Failed to delete announcement");
  }
}
\`\`\`

**Security Requirements (MANDATORY FOR ALL SERVER ACTIONS)**:
- **"use server"** directive at top of file
- **Zod validation** for all input data  
- **User authentication** verification in every action
- **RLS enforcement** through proper filtering
- **Error handling** with try/catch blocks
- **Input sanitization** via Zod schemas
- **Permission checks** for data access
- **Revalidation** of affected paths after mutations

**⚠️ CRITICAL**: These security requirements apply to ALL server actions files created in ANY workflow or development context, not just modules.

### 5. Progress Documentation
- **Document decisions**: Record architectural and technical decisions as you work
- **Update README**: If workflow results in new features, update project README
- **Code comments**: Add meaningful comments for complex logic
- **API documentation**: Document new endpoints and data structures

### 6. Quality Gates
- **Build verification**: Run \`npm run build\` before considering any step complete
- **Test execution**: Run existing tests and ensure they pass
- **Lint compliance**: Address any linting errors before proceeding
- **Type checking**: Ensure TypeScript types are correct and complete

#### Testing Requirements (MANDATORY)
**All modules MUST include Jest testing:**

\`\`\`
/app/[module-name]/
├── __tests__/
│   ├── components/
│   │   ├── module-form.test.tsx       # Component tests
│   │   └── module-list.test.tsx
│   ├── actions.test.ts                # Server action tests
│   └── integration.test.ts            # Integration tests
└── jest.config.js                     # Module-specific Jest config (if needed)
\`\`\`

**Testing Standards:**
- **Unit tests**: All components and server actions
- **Integration tests**: Complete workflows and data operations  
- **Jest framework**: Use Jest for all testing (not other frameworks)
- **Test coverage**: Aim for 80%+ coverage on new module code
- **Database mocking**: Mock database operations for unit tests
- **Component testing**: Use @testing-library/react for component tests

### 7. Security and Performance
- **Security review**: Consider security implications of all changes
- **Performance impact**: Evaluate performance implications of new features
- **Error handling**: Implement proper error handling and user feedback
- **Input validation**: Validate all user inputs and API parameters

## Workflow-Specific Rules

### Module Development
- **Architecture review**: All modules require architectural planning before implementation
- **Integration planning**: Consider how module fits with existing system architecture
- **Data design**: Design database schema before beginning implementation
- **API design**: Plan API structure and endpoints early in the process

#### Navigation Integration (MANDATORY)
**ALL new modules MUST be added to the main sidebar navigation:**

\`\`\`typescript
// In components/MainSidebar.tsx or similar navigation component
// Add new module to navigation items:

const navigationItems = [
  // ... existing items
  {
    title: "Announcements",           // Module display name
    url: "/announcements",           // Module root path
    icon: MessageSquare,             // Appropriate Lucide icon
    items: [                         // Sub-navigation if needed
      {
        title: "All Announcements",
        url: "/announcements"
      },
      {
        title: "Templates", 
        url: "/announcements/templates"
      },
      {
        title: "Create New",
        url: "/announcements/create"
      }
    ]
  }
]
\`\`\`

**Navigation Requirements:**
- **Main menu item**: Add module to primary navigation
- **Appropriate icon**: Choose relevant Lucide React icon
- **Sub-navigation**: Include key module pages in sub-menu
- **User permissions**: Respect user roles and permissions for menu visibility

### Feature Development  
- **Impact analysis**: Analyze impact on existing features and components
- **Backward compatibility**: Ensure changes don't break existing functionality
- **User experience**: Consider user workflow and interface changes
- **Rollback planning**: Plan how to rollback feature if issues arise
- **Server actions**: If adding server actions, follow universal security requirements above

### Create App
- **Foundation first**: Establish solid technical foundation before feature development
- **Database design**: Complete database design and documentation before proceeding
- **Authentication setup**: Implement authentication and authorization early
- **Deployment planning**: Plan deployment strategy and infrastructure needs

### Wizard Development
- **Step validation**: Each wizard step must have proper validation
- **State management**: Plan how wizard state is managed and persisted
- **Navigation logic**: Design clear forward/backward navigation patterns
- **Error recovery**: Plan how users recover from errors or data loss

## Common Pitfalls to Avoid

### Database Management
- ❌ **Making database changes without updating DATABASE.md**
- ❌ **Creating tables without consulting existing schema**
- ❌ **Ignoring database relationships and constraints**
- ❌ **Skipping database documentation generation**

### Code Quality
- ❌ **Creating new components without checking existing examples**
- ❌ **Implementing patterns that conflict with existing codebase**
- ❌ **Skipping build verification and testing**
- ❌ **Leaving TODO comments or incomplete implementations**

### Documentation
- ❌ **Not updating documentation when making changes**
- ❌ **Creating undocumented API endpoints or components**
- ❌ **Skipping architectural decision documentation**
- ❌ **Not updating README for significant new features**

### Process Management
- ❌ **Skipping pre-planning or providing incomplete answers**
- ❌ **Moving to next workflow step without completing current exit criteria**
- ❌ **Not consulting agent rules or workflow guidance**
- ❌ **Making architectural decisions without proper planning**

## Emergency Procedures

### Database Issues
If database changes cause problems:
1. **Stop development**: Halt current workflow step
2. **Assess damage**: Check what changes were made
3. **Restore state**: Use database backups or rollback migrations
4. **Regenerate docs**: Run database documentation generator
5. **Resume safely**: Only proceed after issues are resolved

### Build Failures
If builds fail during workflow:
1. **Fix immediately**: Address build errors before proceeding
2. **Check dependencies**: Verify all required packages are installed
3. **Review changes**: Ensure recent changes don't conflict with existing code
4. **Test thoroughly**: Run full test suite after fixes

### Integration Problems
If new code breaks existing functionality:
1. **Identify scope**: Determine what functionality is affected
2. **Isolate changes**: Use feature flags or conditional logic to isolate new code
3. **Fix conflicts**: Resolve integration issues systematically
4. **Verify fixes**: Test both new and existing functionality

## Success Criteria

A workflow step is only complete when:
- ✅ All exit criteria are met
- ✅ Build passes without errors
- ✅ Tests pass (if applicable)
- ✅ DATABASE.md is updated (if database changes were made)
- ✅ Documentation is current
- ✅ Code follows established patterns and conventions

## Tool Integration

### Required Tools
These tools MUST be used during workflows:
- \`load-documentation-context\` - For context preparation
- \`get-agent-rules\` - For development guidelines
- \`get-workflow-rules\` - For workflow requirements (this tool)
- \`./scripts/generate-database-docs.sh\` - After ANY database changes

### Recommended Tools
- \`list-examples\` - To find existing patterns
- \`get-development-guide-section\` - For specific implementation guidance
- \`get-workflow-template\` - For detailed workflow steps

---

**REMEMBER**: These rules exist to ensure quality, consistency, and maintainability. Following them prevents technical debt and ensures successful project outcomes.

*Last updated: 2025-07-12*`;

    return {
      content: [{
        type: "text",
        text: rules
      }]
    };
  }
};