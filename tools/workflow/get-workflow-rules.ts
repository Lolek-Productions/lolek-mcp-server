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

### Feature Development  
- **Impact analysis**: Analyze impact on existing features and components
- **Backward compatibility**: Ensure changes don't break existing functionality
- **User experience**: Consider user workflow and interface changes
- **Rollback planning**: Plan how to rollback feature if issues arise

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