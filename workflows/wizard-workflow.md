# Wizard Development Workflow

*A comprehensive guide to creating step-by-step wizard interfaces within modules using DATABASE.md-driven architecture and lolek-mcp context-engineering*

---

## Introduction

The Wizard Development Workflow provides a systematic approach to building multi-step user interfaces that guide users through complex processes. This workflow emphasizes thorough step definition, clear navigation patterns, and robust state management to ensure wizards are intuitive, accessible, and maintainable.

Unlike simple forms or single-page interfaces, wizards break complex workflows into digestible steps, providing users with clear progress indicators, validation feedback, and the ability to move forward and backward through the process.

## When to Use This Workflow

**Ideal for:**
- Multi-step data collection processes (onboarding, registration, setup)
- Complex workflows with conditional logic and branching
- Processes requiring validation at each step
- User flows with multiple data entities or relationships
- Guided tutorials or configuration processes

**Not ideal for:**
- Simple single-form data entry (use regular form components)
- Static content presentation (use standard page components)
- Real-time collaborative processes (consider specialized patterns)

## Overview

**Workflow Type:** wizard  
**Total Steps:** 8  
**Estimated Duration:** 3-10 days  
**Team Size:** 1-2 developers

This workflow guides you through wizard conception, step definition, state management design, implementation, and testing with embedded quality gates and comprehensive evaluation criteria.

## Quality Philosophy

Wizards built using this workflow undergo rigorous planning and user experience evaluation before implementation begins. The embedded pre-planning questions and scoring system ensure that:

- User workflows are clearly mapped and logical
- Each step has a clear purpose and defined outcomes
- State management handles complex data relationships
- Navigation patterns are intuitive and accessible
- Error handling and validation are comprehensive
- Progress tracking and recovery mechanisms are robust

**Quality Threshold:** All wizards must achieve a minimum quality score of 4.0/5.0 during pre-planning before implementation begins.

## Project Integration

This workflow integrates seamlessly with the lolek-mcp context-engineering system:

- **DATABASE.md**: Defines data entities and relationships affected by the wizard
- **lolek-mcp server**: Provides component examples and state management patterns
- **examples/CLAUDE.md**: Enforces strict operational rules for wizard development
- **Component examples**: Templates for form components, navigation, and progress indicators
- **Module patterns**: Integration with existing module architecture

## Workflow Steps

### Step 1: Wizard Purpose and User Journey Definition
*Define the wizard's purpose, target workflow, and user journey mapping*

**Duration:** 1-2 days  
**Participants:** Product owner, UX designer, lead developer

**Activities:**
1. **Run mandatory lolek-mcp tools first:**
   - `get-introduction`
   - `get-tools`
   - `list-examples`
   - `get-agent-rules`
   - `get-claude-rules`

2. **Define wizard purpose:**
   - Identify the complex process the wizard will simplify
   - Define the starting point and end goal
   - Map the current user pain points
   - Establish success criteria for the wizard

3. **User journey mapping:**
   - Document the complete user workflow
   - Identify decision points and branching logic
   - Define user inputs and system outputs for each phase
   - Map data dependencies between steps

**Deliverables:**
- Wizard purpose statement
- Complete user journey map
- Process flow diagram
- Success criteria definition

**Quality Gates:**
- Wizard purpose is clear and specific
- User journey is logical and complete
- All decision points are identified
- Success criteria are measurable

### Step 2: Step Definition and Data Architecture
*Define each wizard step, its data requirements, and DATABASE.md integration*

**Duration:** 2-3 days  
**Participants:** Lead developer, database architect, UX designer

**Activities:**
1. **Step breakdown:**
   - Divide the user journey into logical steps
   - Define the purpose and goal of each step
   - Identify required user inputs for each step
   - Define validation rules and error conditions

2. **Data architecture mapping:**
   - Map each step to DATABASE.md entities
   - Define temporary vs. persistent data storage
   - Plan data validation and transformation rules
   - Design rollback and recovery mechanisms

3. **Step dependency analysis:**
   - Identify which steps depend on previous step data
   - Define conditional step logic and branching
   - Plan skip/optional step scenarios
   - Design step completion criteria

**Deliverables:**
- Detailed step definitions document
- Data flow diagram
- DATABASE.md integration plan
- Step dependency matrix

**Quality Gates:**
- All steps have clear purposes and outcomes
- Data requirements align with DATABASE.md
- Dependencies and validations are defined
- Recovery mechanisms are planned

### Step 3: Navigation and State Management Design
*Design the wizard navigation, progress tracking, and state management system*

**Duration:** 1-2 days  
**Participants:** Frontend developer, UX designer

**Activities:**
1. **Navigation pattern design:**
   - Define forward/backward navigation rules
   - Design progress indicator system
   - Plan step accessibility and jumping
   - Design exit and cancellation flows

2. **State management architecture:**
   - Choose state management approach (Context, Zustand, etc.)
   - Design state shape and data structure
   - Plan state persistence and recovery
   - Define state validation and error handling

3. **Progress tracking system:**
   - Design visual progress indicators
   - Plan step completion tracking
   - Define save/resume functionality
   - Design draft state management

**Deliverables:**
- Navigation flow diagram
- State management architecture
- Progress tracking specification
- Wireframes or mockups

**Quality Gates:**
- Navigation patterns are intuitive
- State management handles all scenarios
- Progress tracking is clear and accurate
- Accessibility requirements are met

### Step 4: Component Architecture and UI Design
*Design the wizard UI components and layout using MCP server examples*

**Duration:** 2-3 days  
**Participants:** Frontend developer, UI/UX designer

**Activities:**
1. **Component identification:**
   - Identify reusable wizard components from MCP server examples
   - Design step-specific components
   - Plan form components and validation displays
   - Design navigation and progress components

2. **Layout and responsive design:**
   - Create responsive wizard layout
   - Design mobile-optimized navigation
   - Plan accessibility features (keyboard navigation, screen readers)
   - Design loading states and transitions

3. **Visual design system:**
   - Apply consistent styling using MCP server patterns
   - Design step-specific visual elements
   - Plan error state presentations
   - Design success and completion screens

**Deliverables:**
- Component architecture diagram
- UI design mockups
- Responsive design specifications
- Accessibility compliance plan

**Quality Gates:**
- Components follow MCP server examples
- Design is responsive and accessible
- Visual hierarchy is clear
- Error states are well-designed

### Step 5: Validation and Error Handling Strategy
*Design comprehensive validation and error handling for each step*

**Duration:** 1-2 days  
**Participants:** Lead developer, QA specialist

**Activities:**
1. **Validation rule definition:**
   - Define client-side validation for each step
   - Plan server-side validation integration
   - Design real-time validation feedback
   - Plan cross-step validation scenarios

2. **Error handling strategy:**
   - Design error message systems
   - Plan error recovery mechanisms
   - Define validation failure flows
   - Design network error handling

3. **User feedback system:**
   - Design success confirmation patterns
   - Plan loading state presentations
   - Design progress save confirmations
   - Plan step completion feedback

**Deliverables:**
- Validation rules specification
- Error handling documentation
- User feedback patterns
- Testing scenarios

**Quality Gates:**
- All validation scenarios are covered
- Error messages are helpful and actionable
- Recovery mechanisms are robust
- User feedback is timely and clear

### Step 6: Implementation and Component Development
*Build the wizard components and integrate with existing module architecture*

**Duration:** 3-5 days  
**Participants:** Frontend developers, backend developers

**Activities:**
1. **Core wizard framework:**
   - Implement wizard state management
   - Build navigation and progress components
   - Create step container and layout components
   - Integrate with MCP server component patterns

2. **Step component development:**
   - Build individual step components
   - Implement form components and validation
   - Create conditional rendering logic
   - Integrate with DATABASE.md data operations

3. **Integration with module:**
   - Connect wizard to existing module routes
   - Integrate with module authentication
   - Connect to module data operations
   - Implement wizard completion actions

**Deliverables:**
- Working wizard framework
- All step components implemented
- Module integration complete
- Unit tests for wizard components

**Quality Gates:**
- Wizard follows MCP server patterns exactly
- All steps function correctly
- Navigation works as designed
- Integration with module is seamless

### Step 7: Testing and User Experience Validation
*Comprehensive testing and user experience validation*

**Duration:** 2-3 days  
**Participants:** QA team, UX designer, developers

**Activities:**
1. **Functional testing:**
   - Test all wizard navigation paths
   - Validate all step completion scenarios
   - Test error handling and recovery
   - Verify data persistence and submission

2. **User experience testing:**
   - Conduct usability testing sessions
   - Test accessibility compliance
   - Validate mobile and desktop experiences
   - Test with various user scenarios

3. **Integration testing:**
   - Test wizard integration with module
   - Validate DATABASE.md data operations
   - Test wizard in different browser environments
   - Verify performance under load

**Deliverables:**
- Test execution reports
- UX testing results
- Performance benchmarks
- Bug fixes and improvements

**Quality Gates:**
- All test scenarios pass
- UX testing reveals no major issues
- Performance meets requirements
- Accessibility standards are met

### Step 8: Documentation and Maintenance Planning
*Create comprehensive documentation and plan for ongoing maintenance*

**Duration:** 1 day  
**Participants:** Lead developer, technical writer

**Activities:**
1. **Technical documentation:**
   - Document wizard architecture and patterns
   - Create step configuration guide
   - Document state management approach
   - Create troubleshooting guide

2. **User documentation:**
   - Create user guide for wizard flow
   - Document expected user actions
   - Create help text and tooltips
   - Document accessibility features

3. **Maintenance planning:**
   - Plan for wizard updates and modifications
   - Document step addition/removal procedures
   - Create monitoring and analytics plan
   - Plan for user feedback collection

**Deliverables:**
- Technical documentation
- User documentation
- Maintenance procedures
- Monitoring plan

**Quality Gates:**
- Documentation is comprehensive and clear
- Maintenance procedures are defined
- User guidance is helpful
- Analytics tracking is implemented

## Pre-Planning Questions

Before beginning implementation, answer these questions to ensure wizard readiness:

### 1. Wizard Purpose and Complexity Assessment (Score: 1-5)
- **Question**: Is the wizard's purpose clearly defined with a complex multi-step process that justifies a wizard interface?
- **Evaluation Criteria**: 
  - 5: Clear complex process, multiple data entities, logical step progression
  - 3: Moderately complex process, some multi-step logic
  - 1: Simple process that could be handled with regular forms

### 2. User Journey Mapping Completeness (Score: 1-5)
- **Question**: Is the complete user journey mapped with all decision points, branching logic, and data dependencies identified?
- **Evaluation Criteria**:
  - 5: Complete journey map with all decision points, branches, and dependencies
  - 3: Basic journey mapped with main flow and some branches identified
  - 1: Incomplete journey mapping with missing decision points

### 3. Step Definition Clarity (Score: 1-5)
- **Question**: Are all wizard steps clearly defined with specific purposes, required inputs, and completion criteria?
- **Evaluation Criteria**:
  - 5: All steps clearly defined with specific purposes, inputs, validation, and completion criteria
  - 3: Most steps defined with basic purposes and inputs
  - 1: Vague step definitions without clear purposes or criteria

### 4. DATABASE.md Integration Planning (Score: 1-5)
- **Question**: Is the wizard's data architecture properly planned and integrated with DATABASE.md entities and relationships?
- **Evaluation Criteria**:
  - 5: Complete data architecture with DATABASE.md integration, validation, and state management
  - 3: Basic data planning with some DATABASE.md consideration
  - 1: No clear data architecture or DATABASE.md integration plan

### 5. Navigation and State Management Design (Score: 1-5)
- **Question**: Are the navigation patterns and state management approaches clearly designed and appropriate for the wizard complexity?
- **Evaluation Criteria**:
  - 5: Comprehensive navigation design with robust state management and error handling
  - 3: Basic navigation patterns with simple state management
  - 1: No clear navigation or state management design

### 6. Validation and Error Handling Strategy (Score: 1-5)
- **Question**: Is there a comprehensive validation and error handling strategy for all wizard steps and scenarios?
- **Evaluation Criteria**:
  - 5: Complete validation strategy with error handling, recovery, and user feedback
  - 3: Basic validation with some error handling
  - 1: No comprehensive validation or error handling strategy

### 7. Component Architecture Alignment (Score: 1-5)
- **Question**: Does the wizard component architecture align with MCP server examples and existing module patterns?
- **Evaluation Criteria**:
  - 5: Full alignment with MCP server patterns and seamless module integration
  - 3: Mostly aligned with some custom components
  - 1: Little alignment with MCP server patterns

### 8. User Experience and Accessibility Planning (Score: 1-5)
- **Question**: Are user experience and accessibility requirements properly planned and designed?
- **Evaluation Criteria**:
  - 5: Comprehensive UX design with full accessibility compliance and testing plan
  - 3: Basic UX considerations with some accessibility planning
  - 1: Minimal UX or accessibility planning

## Quality Evaluation Scoring

**Minimum Required Score: 4.0/5.0**

### Scoring Guidelines:
- **4.5-5.0**: Excellent preparation, proceed with confidence
- **4.0-4.4**: Good preparation, address minor gaps before proceeding
- **3.5-3.9**: Adequate preparation, address significant gaps before proceeding
- **Below 3.5**: Insufficient preparation, substantial planning work needed

### Score Calculation:
Total Score = (Sum of all question scores) / (Number of questions)

## Success Criteria

A wizard is considered successfully implemented when:

1. **Functional Requirements Met:**
   - All wizard steps function correctly
   - Navigation works in all directions (forward, backward, jumping)
   - State management preserves data correctly
   - Validation works at each step
   - Integration with module is seamless

2. **User Experience Standards Achieved:**
   - User can complete the wizard intuitively
   - Progress tracking is clear and accurate
   - Error messages are helpful and actionable
   - Mobile and desktop experiences are optimized
   - Accessibility standards are met

3. **Technical Standards Met:**
   - Code follows MCP server patterns exactly
   - Components are reusable and maintainable
   - State management is robust and scalable
   - Performance meets module requirements
   - Integration with DATABASE.md is correct

4. **Documentation Complete:**
   - Technical architecture is documented
   - User workflows are documented
   - Maintenance procedures are defined
   - Troubleshooting guides are available

## Common Pitfalls and Solutions

### Pitfall 1: Over-Complex Step Division
**Problem**: Creating too many small steps that fragment the user experience
**Solution**: Group related inputs into logical steps, aim for 3-7 steps maximum
**Prevention**: Map user mental models during step definition phase

### Pitfall 2: Inadequate State Management
**Problem**: Losing user data during navigation or browser refresh
**Solution**: Implement robust state persistence with local storage or server-side drafts
**Prevention**: Design state management architecture early in planning

### Pitfall 3: Poor Error Handling
**Problem**: Users getting stuck at failed steps without clear recovery paths
**Solution**: Design comprehensive error states with clear recovery actions
**Prevention**: Plan all error scenarios during validation strategy phase

### Pitfall 4: Inaccessible Navigation
**Problem**: Wizard is difficult to use with keyboard or screen readers
**Solution**: Implement proper ARIA labels, keyboard navigation, and focus management
**Prevention**: Include accessibility requirements in component architecture phase

### Pitfall 5: Database Transaction Complexity
**Problem**: Complex data relationships causing validation or save failures
**Solution**: Design clear data flow with DATABASE.md integration and rollback mechanisms
**Prevention**: Thoroughly plan DATABASE.md integration during step definition

## Integration with Other Workflows

This workflow integrates with other project workflows:

- **Module Development Workflow**: Wizards are built within existing modules
- **Feature Development Workflow**: Complex features may require wizard interfaces
- **Component Development**: Individual wizard steps may require custom components
- **Database Migration Workflow**: Wizard data requirements may need DATABASE.md updates

## Tools and Resources

### Required Tools:
- **lolek-mcp server**: Primary source of component patterns and examples
- **DATABASE.md**: Central database architecture documentation
- **React/Next.js**: Component framework from MCP server examples
- **State Management**: Context API, Zustand, or patterns from MCP server
- **Form Libraries**: React Hook Form or patterns from MCP server examples

### Recommended Tools:
- **Figma/Design Tool**: For wireframing and user journey mapping
- **React Testing Library**: For component and integration testing
- **Accessibility Tools**: axe-core, WAVE for accessibility testing
- **Performance Tools**: React DevTools, Lighthouse for performance testing

## Wizard Pattern Examples

### Simple Linear Wizard
```
Step 1: Basic Information → Step 2: Details → Step 3: Review → Complete
```

### Branching Logic Wizard
```
Step 1: User Type Selection
  ├─ Individual: Steps 2a → 3a → 4a
  └─ Business: Steps 2b → 3b → 4b → 5b
Step Final: Review → Complete
```

### Conditional Skip Wizard
```
Step 1: Preferences
Step 2: Required Info
Step 3: Optional Details (skippable based on Step 1)
Step 4: Review → Complete
```

## Component Architecture Pattern

### Wizard Container Structure
```tsx
<WizardContainer>
  <WizardHeader>
    <ProgressIndicator currentStep={step} totalSteps={steps.length} />
    <WizardTitle>{steps[currentStep].title}</WizardTitle>
  </WizardHeader>
  
  <WizardContent>
    <StepComponent 
      data={wizardState} 
      onUpdate={updateWizardState}
      onValidate={validateStep}
    />
  </WizardContent>
  
  <WizardNavigation>
    <BackButton disabled={isFirstStep} onClick={previousStep} />
    <NextButton disabled={!isStepValid} onClick={nextStep} />
    <SaveDraftButton onClick={saveDraft} />
  </WizardNavigation>
</WizardContainer>
```

### State Management Pattern
```tsx
interface WizardState {
  currentStep: number;
  steps: WizardStep[];
  data: Record<string, any>;
  validation: Record<string, ValidationResult>;
  isComplete: boolean;
  isDraft: boolean;
}

interface WizardStep {
  id: string;
  title: string;
  component: React.ComponentType;
  isRequired: boolean;
  isValid: boolean;
  skipCondition?: (data: any) => boolean;
}
```

## Conclusion

The Wizard Development Workflow provides a comprehensive, systematic approach to building multi-step user interfaces using the lolek-mcp context-engineering system. By following this workflow, teams can ensure their wizards are:

- **User-Centered**: Designed around actual user workflows and mental models
- **Technically Robust**: Built with proper state management and error handling
- **Accessible**: Compliant with accessibility standards and usable by all users
- **Maintainable**: Following MCP server patterns and proper documentation
- **Scalable**: Designed to handle complex data relationships and future modifications

Success with this workflow requires thorough planning of user journeys, careful step definition, robust state management design, and commitment to accessibility and user experience standards throughout the development process.

The workflow is designed to be adapted to specific wizard needs while maintaining the core principles of DATABASE.md-driven development and strict adherence to lolek-mcp server guidance.