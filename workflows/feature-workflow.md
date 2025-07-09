# Feature Development Workflow

*A comprehensive guide to developing new features with quality, consistency, and best practices*

---

## Introduction

The Feature Development Workflow provides a systematic approach to adding new functionality to existing systems. This workflow emphasizes thorough planning, quality evaluation, and iterative development to ensure features meet user needs while maintaining system integrity.

Unlike module development which focuses on building entirely new components, feature development integrates seamlessly with existing architecture, enhances current capabilities, and provides targeted solutions to specific user problems.

## When to Use This Workflow

**Ideal for:**
- Adding new functionality to existing modules
- Enhancing current user workflows  
- Implementing user-requested improvements
- Extending existing APIs with new endpoints
- Adding integration capabilities to current systems

**Not ideal for:**
- Building entirely new standalone modules (use Module Development Workflow)
- Major architectural changes (consider Module Development Workflow)
- Simple bug fixes (use Bug Fix Workflow)

## Overview

**Workflow Type:** feature  
**Total Steps:** 10  
**Estimated Duration:** 1-6 weeks  
**Team Size:** 1-3 developers

This workflow guides you through feature conception, planning, implementation, and deployment with embedded quality gates and comprehensive evaluation criteria.

## Quality Philosophy

Features built using this workflow undergo rigorous quality evaluation before implementation begins. The embedded pre-planning questions and scoring system ensure that:

- User needs are clearly understood and documented
- Technical approaches are sound and feasible  
- Edge cases and risks are identified early
- Success metrics are defined upfront
- Rollback strategies are planned before deployment

**Quality Threshold:** All features must achieve a minimum quality score of 3.5/5.0 during pre-planning before implementation begins.

## Project Integration

This workflow integrates seamlessly with other tools and components in this project:

### MCP Tools Integration
- **get-workflows**: Discover all available workflow types
- **get-workflow-template**: Access this complete workflow guide
- **evaluate-workflow-progress**: Track progress and receive guidance
- **load-documentation-context**: Access project documentation and components

### Component Integration
- **Example Components**: Located in `/examples/components/` for UI patterns
- **Layout Templates**: Use layout examples from `/examples/layouts/`
- **Page Templates**: Reference CRUD templates in `/examples/pages/`
- **Authentication**: Leverage Supabase auth patterns from `/examples/lib/`

### Documentation References
- **Development Guide**: `/documents/development-guide/` for technical patterns
- **Agent Rules**: `/agent-rules.md` for behavioral guidelines
- **Database Documentation**: Generated via `/scripts/generate-database-docs.sh`
- **Project Setup**: Reference CLAUDE.md for project context

---

## Pre-Planning Questions

*Answer these questions thoroughly before implementation. Your answers will be evaluated for quality and completeness.*

### 1. Feature Description *(Required)*
**What specific feature are you planning to implement?**

**Guidance:** Provide a clear, concise description of the feature

**Examples:**
- Add bulk contact import from CSV files
- Implement real-time chat notifications  
- Create advanced search with filters

### 2. User Story *(Required)*
**What is the user story for this feature?**

**Guidance:** Use format: As a [user type], I want [functionality] so that [benefit]

**Examples:**
- As a sales manager, I want to import contacts from CSV so that I can quickly add leads from trade shows
- As a support agent, I want real-time notifications so that I can respond to customers immediately

### 3. Acceptance Criteria *(Required)*
**What are the acceptance criteria for this feature?**

**Guidance:** List specific, testable conditions that must be met

**Examples:**
- Upload CSV files up to 10MB
- Validate email format and phone numbers
- Show progress bar during import
- Display success/error summary after import

### 4. User Workflow *(Required)*
**Describe the user workflow for this feature**

**Guidance:** Step-by-step description of how users will interact with the feature

**Examples:**
- 1. User clicks 'Import Contacts' button 2. Selects CSV file 3. Maps columns to fields 4. Reviews preview 5. Confirms import 6. Views results

### 5. Technical Approach *(Required)*
**What is your planned technical approach for this specific feature?**

**Guidance:** Focus on feature-specific implementation. Standard architecture patterns are covered in the development guide.

**Examples:**
- Use file upload component, parse CSV with Papa Parse library, validate data server-side, batch insert to database
- Implement WebSocket connection, create notification service, update UI with real-time events

### 6. Affected Components *(Required)*
**Which existing components or modules will be affected beyond standard components?**

**Guidance:** Focus on feature-specific components. Standard UI components are available in the development guide.

**Examples:**
- ContactList component - add import button
- ContactService - add import methods
- Database - add import logging table
- New: ImportDialog component

### 7. Data Changes *(Optional)*
**What data model changes are needed beyond standard schema?**

**Guidance:** Focus on feature-specific data changes. Standard database setup is covered in the development guide.

**Examples:**
- Add import_batch_id field to contacts table
- Create import_logs table
- Add indexes for bulk search performance

### 8. Edge Cases *(Required)*
**What edge cases or error scenarios should be handled?**

**Guidance:** Consider failure modes and unusual inputs

**Examples:**
- Invalid CSV format or empty file
- Duplicate email addresses
- Network interruption during import
- Very large files exceeding memory

### 9. Testing Strategy *(Optional)*
**How will you test this feature beyond standard testing practices?**

**Guidance:** Focus on feature-specific testing needs. Standard testing framework is mentioned in the development guide.

**Examples:**
- Unit tests for CSV parsing and validation, integration tests for full import workflow, manual testing with various CSV formats

### 10. Rollback Plan *(Required)*
**What is your rollback plan if issues arise?**

**Guidance:** How to safely disable or revert the feature

**Examples:**
- Feature flag to disable import functionality, database rollback script for imports, clear error messaging to users

---

## Quality Standards

*Your pre-planning answers will be evaluated against these criteria:*

### Scoring System
- **Scale:** 1-5 points per criterion
- **Thresholds:**
  - **Excellent:** 4.5+ (Ready for implementation)
  - **Good:** 3.5+ (Minor improvements suggested)
  - **Acceptable:** 2.5+ (Some improvements needed)
  - **Needs Improvement:** 1.5+ (Significant revisions required)
  - **Inadequate:** <1.5 (Complete rework needed)

### Evaluation Criteria

#### Feature Clarity (Weight: 12%)
How clear and specific is the feature description?
- **Excellent:** Feature is clearly described with specific, actionable details
- **Good:** Feature is mostly clear with minor ambiguity
- **Acceptable:** Feature is somewhat clear but could be more specific
- **Needs Improvement:** Feature description is vague or confusing
- **Inadequate:** Feature description is unclear or missing

#### User Story Quality (Weight: 12%)
How well-crafted is the user story?
- **Excellent:** User story follows proper format and clearly explains value
- **Good:** User story is well-crafted with minor issues
- **Acceptable:** User story is adequate but could be improved
- **Needs Improvement:** User story is poorly written or incomplete
- **Inadequate:** User story is missing or doesn't follow format

#### Acceptance Criteria Completeness (Weight: 10%)
How comprehensive are the acceptance criteria?
- **Excellent:** Acceptance criteria are specific, testable, and comprehensive
- **Good:** Acceptance criteria are mostly complete with minor gaps
- **Acceptable:** Acceptance criteria are adequate but could be more detailed
- **Needs Improvement:** Acceptance criteria are incomplete or vague
- **Inadequate:** Acceptance criteria are missing or inadequate

#### Workflow Clarity (Weight: 12%)
How clear is the user workflow?
- **Excellent:** User workflow is detailed, logical, and easy to follow
- **Good:** User workflow is clear with minor gaps
- **Acceptable:** User workflow is basic but understandable
- **Needs Improvement:** User workflow is unclear or illogical
- **Inadequate:** User workflow is missing or confusing

#### Technical Approach Soundness (Weight: 12%)
How sound is the technical approach?
- **Excellent:** Technical approach is well-thought-out and feasible
- **Good:** Technical approach is solid with minor concerns
- **Acceptable:** Technical approach is basic but workable
- **Needs Improvement:** Technical approach has significant issues
- **Inadequate:** Technical approach is missing or unfeasible

#### Impact Assessment (Weight: 10%)
How well are affected components identified?
- **Excellent:** All affected components are identified with clear impact
- **Good:** Most affected components are identified
- **Acceptable:** Some affected components are identified
- **Needs Improvement:** Few affected components are identified
- **Inadequate:** Affected components are not identified

#### Edge Case Consideration (Weight: 12%)
How well are edge cases considered?
- **Excellent:** Comprehensive edge case analysis with mitigation strategies
- **Good:** Good edge case consideration with minor gaps
- **Acceptable:** Basic edge case consideration
- **Needs Improvement:** Limited edge case consideration
- **Inadequate:** Edge cases not considered or identified

#### Testing Completeness (Weight: 10%)
How comprehensive is the testing strategy?
- **Excellent:** Testing strategy covers all levels and scenarios
- **Good:** Testing strategy is mostly comprehensive
- **Acceptable:** Testing strategy is basic but adequate
- **Needs Improvement:** Testing strategy is incomplete
- **Inadequate:** Testing strategy is missing or inadequate

#### Risk Management (Weight: 10%)
How well is risk management addressed?
- **Excellent:** Comprehensive rollback plan with clear procedures
- **Good:** Good rollback plan with minor gaps
- **Acceptable:** Basic rollback plan mentioned
- **Needs Improvement:** Limited rollback planning
- **Inadequate:** Rollback plan is missing or inadequate

### Quality Recommendations

#### Excellent (4.5+)
Excellent feature planning! You're ready to proceed with implementation.

#### Good (3.5-4.4)
Good feature planning with minor areas for improvement. Consider refining the highlighted areas before proceeding.

#### Acceptable (2.5-3.4)
Acceptable feature planning but several areas need more detail. Please address the feedback before implementing.

#### Needs Improvement (1.5-2.4)
The feature planning needs significant improvement. Please revise your answers based on the feedback provided.

#### Inadequate (<1.5)
The feature planning is inadequate. Please start over and provide more detailed, thoughtful answers.

---

## Workflow Steps

### Step 0: Context Preparation
**ID:** 0_context_preparation  
**Name:** Context Preparation  
**Description:** Load documentation context and prepare AI agent knowledge base

**Deliverables:**
- Documentation headings loaded into context
- Available tools and components identified
- Agent rules and constraints understood
- Project structure familiarized

**Activities:**
- Use load-documentation-context tool to efficiently load all essential context
- Alternative: Use individual tools (list-docs, get-sections, get-agent-rules, get-tools) for specific context
- Review loaded documentation headings and available components
- Understand agent behavioral constraints
- Familiarize with available MCP tools for development workflow

**Exit Criteria:**
- Documentation context loaded
- Agent rules understood
- Available tools identified
- Project familiarity established

---

### Step 1: Pre-Planning
**ID:** 1_preplanning  
**Name:** Pre-Planning  
**Description:** Define and validate the feature concept using embedded questions and quality evaluation

**Deliverables:**
- Feature description and user story
- Acceptance criteria
- Technical approach
- Risk assessment
- Quality-evaluated pre-planning document

**Activities:**
- Answer all 10 pre-planning questions thoroughly (see questions section above)
- Use evaluate-workflow-progress tool for quality assessment with pre-planning answers
- Refine answers until achieving 3.5+ quality score
- Implementation plan will be automatically generated upon quality approval

**Exit Criteria:**
- All required questions answered
- Quality score ≥ 3.5/5.0
- Implementation plan generated
- Stakeholder approval obtained

---

### Step 2: Design & Architecture
**ID:** 2_design  
**Name:** Design & Architecture  
**Description:** Create detailed technical and UI designs

**Deliverables:**
- Technical design document
- UI mockups/wireframes
- Database schema changes
- API specifications
- Component architecture

**Activities:**
- Create wireframes and user flow diagrams
- Design database schema modifications
- Define API endpoints and data contracts
- Plan component structure and interactions
- Review design with team and stakeholders

**Exit Criteria:**
- Technical design approved
- UI mockups approved
- Database changes documented
- API contracts defined
- Team consensus on approach

---

### Step 2.5: Database Structure Review
**ID:** 2_5_database_structure  
**Name:** Database Structure Review  
**Description:** Review and validate database structure requirements against current schema

**Deliverables:**
- Database schema analysis
- Required schema changes identified
- Supabase migration scripts
- Updated database documentation

**Activities:**
- Review current database structure in database.md
- Identify any required additions or modifications for the feature
- Discuss proposed changes with user if any are needed
- Provide user with specific migration SQL code to run in Supabase dashboard
- Wait for user confirmation that database changes have been applied
- Run generate-database-docs script to update documentation

**Exit Criteria:**
- Database structure reviewed
- All required schema changes identified
- User has applied any necessary database changes
- Database documentation updated

---

### Step 3: Development Setup
**ID:** 3_setup  
**Name:** Development Setup  
**Description:** Prepare development environment and structure

**Deliverables:**
- Feature branch created
- Development environment configured
- Initial file structure
- Dependencies installed

**Activities:**
- Create feature branch from main
- Set up development environment
- Create initial component/file structure
- Install any new dependencies
- Configure development tools

**Exit Criteria:**
- Feature branch ready
- Development environment working
- Basic structure in place
- Dependencies resolved

---

### Step 4: Core Implementation
**ID:** 4_implementation  
**Name:** Core Implementation  
**Description:** Implement the core feature functionality

**Deliverables:**
- Core feature functionality
- User interface components
- API endpoints
- Database migrations
- Unit tests

**Activities:**
- Implement core business logic
- Create user interface components
- Build API endpoints
- Write database migrations
- Write unit tests for new code
- Handle edge cases identified in pre-planning

**Exit Criteria:**
- Core functionality complete
- UI components functional
- APIs working as designed
- Database changes applied
- Unit tests passing

---

### Step 5: Integration & Testing
**ID:** 5_integration  
**Name:** Integration & Testing  
**Description:** Integrate with existing system and comprehensive testing

**Deliverables:**
- Integration with existing components
- End-to-end tests
- Performance testing results
- Bug fixes
- Documentation updates

**Activities:**
- Integrate with existing system components
- Write integration tests
- Perform end-to-end testing
- Conduct performance testing
- Fix identified bugs
- Update documentation

**Exit Criteria:**
- Integration tests passing
- End-to-end tests passing
- Performance requirements met
- No critical bugs
- Documentation updated

---

### Step 6: Code Review & QA
**ID:** 6_review  
**Name:** Code Review & QA  
**Description:** Peer review and quality assurance

**Deliverables:**
- Code review completed
- QA testing completed
- Security review (if needed)
- Accessibility review (if applicable)

**Activities:**
- Submit pull request for code review
- Address code review feedback
- QA team testing
- Security review for sensitive features
- Accessibility testing for UI features

**Exit Criteria:**
- Code review approved
- QA sign-off obtained
- Security concerns addressed
- Accessibility requirements met

---

### Step 7: Deployment
**ID:** 7_deployment  
**Name:** Deployment  
**Description:** Deploy feature to production environment

**Deliverables:**
- Feature deployed to staging
- Feature deployed to production
- Monitoring configured
- Rollback plan ready

**Activities:**
- Deploy to staging environment
- Perform staging validation
- Deploy to production
- Configure monitoring and alerts
- Verify rollback procedures

**Exit Criteria:**
- Staging deployment successful
- Production deployment successful
- Monitoring active
- Rollback tested

---

### Step 9: Post-Deployment Monitoring
**ID:** 9_monitoring  
**Name:** Post-Deployment Monitoring  
**Description:** Monitor feature performance and user adoption

**Deliverables:**
- Performance metrics
- User adoption metrics
- Error monitoring
- User feedback collection

**Activities:**
- Monitor feature performance
- Track user adoption and usage
- Monitor error rates and issues
- Collect user feedback
- Make minor adjustments if needed

**Exit Criteria:**
- Performance within targets
- No critical errors
- User adoption tracking
- Feedback collected and reviewed

---

## Roles & Responsibilities

### Developer
**Responsibilities:** Implementation, Testing, Code Review

### Designer
**Responsibilities:** UI Design, User Experience, Accessibility

### Product Manager
**Responsibilities:** Requirements, Acceptance Criteria, Stakeholder Communication

### QA Engineer
**Responsibilities:** Testing, Quality Assurance, Bug Reporting

---

## Key Checkpoints

These are critical milestones that require verification before proceeding:

- **0_context_preparation:** Documentation context and agent rules loaded
- **1_preplanning:** Pre-planning quality score ≥ 3.5
- **2_design:** Design approval from stakeholders
- **2_5_database_structure:** Database changes applied and documentation updated
- **4_implementation:** Core functionality demo
- **6_review:** Code review and QA approval
- **7_deployment:** Successful production deployment

---

## Usage Guide

### Getting Started
1. **Load Context**: Use `load-documentation-context` to prepare your knowledge base
2. **Start Pre-Planning**: Answer the 10 embedded questions thoroughly
3. **Evaluate Quality**: Use `evaluate-workflow-progress` with your answers
4. **Iterate**: Refine answers until achieving quality score ≥ 3.5
5. **Implement**: Follow the step-by-step workflow with regular progress checks

### Progress Tracking
- Use `evaluate-workflow-progress` at each step to track completion
- Review exit criteria before moving to the next step
- Pay special attention to checkpoint steps
- Document decisions and rationale throughout the process

### Integration with Project Tools
- Reference `/examples/` directory for component patterns
- Use `/scripts/generate-database-docs.sh` for database documentation
- Follow patterns from `/documents/development-guide/`
- Adhere to guidelines in `/agent-rules.md`

### Best Practices
- Complete each step thoroughly before proceeding
- Engage stakeholders at checkpoint steps
- Maintain clear documentation throughout
- Test incrementally rather than waiting until the end
- Plan for rollback scenarios from the beginning

---

## Notes and Tips

### Common Pitfalls
- **Skipping pre-planning evaluation**: Always achieve quality score ≥ 3.5 before implementation
- **Insufficient edge case consideration**: Think through failure scenarios early
- **Weak rollback planning**: Have a clear path to revert changes if needed
- **Poor user story definition**: Ensure user value is clearly articulated

### Success Factors
- **Thorough pre-planning**: Time invested upfront saves significant effort later
- **Regular stakeholder communication**: Keep business stakeholders informed at checkpoints
- **Incremental testing**: Test each component as you build it
- **Documentation discipline**: Keep documentation current throughout development

### Time Management
- **Pre-planning**: 10-15% of total project time
- **Design & Architecture**: 15-20% of total project time
- **Implementation**: 40-50% of total project time
- **Testing & QA**: 15-20% of total project time
- **Deployment & Monitoring**: 5-10% of total project time

---

*This workflow is part of the Lolek MCP Server development framework. For questions or improvements, refer to the project documentation or contact the development team.*