# Module Development Workflow

*A comprehensive guide to building complete modules from conception to production deployment*

---

## Introduction

The Module Development Workflow provides a systematic approach to building entirely new, standalone modules within your application ecosystem. This workflow emphasizes architectural thinking, comprehensive planning, and enterprise-grade development practices to ensure modules are scalable, maintainable, and production-ready.

Modules represent significant functional areas of your application - complete subsystems that handle specific business domains with their own data models, user interfaces, business logic, and integration points.

## When to Use This Workflow

**Ideal for:**
- Building new business domains or functional areas
- Creating standalone components with their own data models
- Developing major new capabilities that don't fit existing modules
- Building reusable subsystems for multiple applications
- Creating modules that require their own architecture and infrastructure

**Not ideal for:**
- Adding features to existing modules (use Feature Development Workflow)
- Simple enhancements or modifications (use Feature Development Workflow)
- Bug fixes (use Bug Fix Workflow)
- Quick prototypes or proof-of-concepts

## Overview

**Workflow Type:** module  
**Total Steps:** 13  
**Estimated Duration:** 4-16 weeks  
**Team Size:** 2-6 developers

This workflow guides you through module conception, architecture design, implementation, and production deployment with comprehensive quality gates and enterprise-level considerations.

## Quality Philosophy

Modules built using this workflow undergo extensive quality evaluation across multiple dimensions:

- **Business Value**: Clear understanding of problem being solved
- **Technical Architecture**: Sound architectural decisions and scalability planning
- **User Experience**: Comprehensive user research and workflow design
- **Security & Compliance**: Enterprise-grade security considerations
- **Performance & Scalability**: Requirements clearly defined and validated
- **Integration Strategy**: Clear understanding of system integration points

**Quality Standard:** All modules require comprehensive pre-planning with detailed answers to all questions before architecture design begins.

## Project Integration

This workflow integrates comprehensively with the entire project ecosystem:

### MCP Tools Integration
- **get-workflows**: Discover all available workflow types
- **get-workflow-template**: Access this complete workflow guide
- **get-workflow-rules**: Get master workflow rules and database requirements
- **load-documentation-context**: Access project documentation and components
- **list-examples**: Browse available component examples
- **get-example**: Retrieve specific component implementations

### Architecture Integration
- **Layout System**: Reference `/examples/layouts/` for application structure patterns
- **Component Library**: Use `/examples/components/` for UI patterns
- **Authentication**: Leverage Supabase auth patterns from `/examples/lib/`
- **Database Patterns**: Follow schema patterns from existing modules
- **API Patterns**: Use server action patterns from `/examples/lib/actions/`

### Documentation Integration
- **Development Guide**: `/documents/development-guide/` for comprehensive technical guidance
- **Next.js Patterns**: `/documents/nextjs/` for framework-specific guidance
- **shadcn/ui Components**: `/documents/shadcn/` for UI component library
- **Supabase Integration**: `/documents/supabase/` for database and auth patterns
- **Agent Rules**: `/agent-rules.md` for development behavioral guidelines

### Infrastructure Integration
- **Database Documentation**: Generated via `/scripts/generate-database-docs.sh`
- **Deployment Patterns**: Reference CLAUDE.md for deployment guidance
- **Testing Framework**: Use Jest patterns established in the project
- **Code Quality**: Follow linting and formatting standards

---

## Pre-Planning Questions

*Answer these questions thoroughly before implementation. Your answers will be evaluated for quality and completeness.*

### 1. Module Purpose *(Required)*
**What is the primary purpose of this module?**

**Guidance:** Be specific about what business problem this module solves

**Examples:**
- Manage customer contact information and communication history
- Handle user authentication and authorization
- Process and validate payment transactions

### 2. Module Scope *(Required)*
**What are the key functionalities this module will provide?**

**Guidance:** List 3-7 core features. Be specific but not overly detailed

**Examples:**
- Create, read, update, delete contacts
- Search and filter contacts
- Import/export contact data
- Track communication history

### 3. Target Users *(Required)*
**Who are the primary users of this module?**

**Guidance:** Identify user roles and their relationship to the module

**Examples:**
- Sales team members, customer service representatives
- End users, system administrators
- Internal staff, external API consumers

### 4. Data Entities *(Required)*
**What are the main data entities this module will manage?**

**Guidance:** List the key data objects with their primary attributes

**Examples:**
- Contact: name, email, phone, company, tags
- Communication: type, date, content, contact_id
- Company: name, industry, size, contacts

### 5. System Integrations *(Optional)*
**What external systems or APIs will this module integrate with?**

**Guidance:** Include both internal modules and external services. Note: Authentication, UI components, and deployment are covered in the development guide.

**Examples:**
- Email service (SendGrid, Mailgun)
- CRM system (Salesforce, HubSpot)
- Third-party APIs (payment, analytics)

### 6. Performance Requirements *(Required)*
**What are the performance and scalability requirements?**

**Guidance:** Consider data volume, concurrent users, response times

**Examples:**
- Handle 10,000+ contacts with sub-second search
- Support 50 concurrent users
- Process bulk imports of 1000+ records

### 7. Security Considerations *(Optional)*
**What additional security and privacy considerations are important for this module?**

**Guidance:** Focus on module-specific security needs. Basic authentication and security setup is covered in the development guide.

**Examples:**
- PII data encryption for sensitive fields
- Special compliance requirements (GDPR, HIPAA)
- Module-specific audit logging needs
- Data retention policies

### 8. UI Requirements *(Required)*
**What are the key user interface requirements specific to this module?**

**Guidance:** Focus on module-specific UI needs. Standard components and patterns are available in the development guide.

**Examples:**
- Dashboard with contact overview, search bar, filterable list
- Specialized data visualization components
- Bulk action capabilities for mass updates

### 9. Success Metrics *(Required)*
**How will you measure the success of this module?**

**Guidance:** Define measurable outcomes and KPIs

**Examples:**
- Reduce time to find contact information by 50%
- Increase user adoption rate to 80%
- Achieve 99.9% uptime
- Process imports 10x faster than current system

### 10. Constraints *(Optional)*
**What constraints or limitations should be considered beyond the standard tech stack?**

**Guidance:** Focus on module-specific constraints. Standard tech stack and architecture patterns are defined in the development guide.

**Examples:**
- Must integrate with legacy system
- Specific performance requirements
- Budget constraint of $X
- Must be completed within 3 months

---

## Quality Standards

*Your pre-planning answers will be evaluated against these criteria:*

### Scoring System
- **Scale:** 1-5 points per criterion
- **Thresholds:**
  - **Excellent:** 4.5+ (Ready for architecture design)
  - **Good:** 3.5+ (Minor improvements suggested)
  - **Acceptable:** 2.5+ (Some improvements needed)
  - **Needs Improvement:** 1.5+ (Significant revisions required)
  - **Inadequate:** <1.5 (Complete rework needed)

### Evaluation Criteria

#### Purpose Clarity (Weight: 15%)
How clear and specific is the module's purpose?
- **Excellent:** Purpose is crystal clear, specific, and directly addresses a business need
- **Good:** Purpose is clear with minor ambiguity
- **Acceptable:** Purpose is somewhat clear but could be more specific
- **Needs Improvement:** Purpose is vague or too broad
- **Inadequate:** Purpose is unclear or missing

#### Scope Definition (Weight: 15%)
How well-defined is the module scope?
- **Excellent:** Scope is well-defined with 3-7 specific, achievable functionalities
- **Good:** Scope is mostly clear with minor gaps
- **Acceptable:** Scope is defined but may be too broad or narrow
- **Needs Improvement:** Scope is unclear or poorly defined
- **Inadequate:** Scope is missing or completely unclear

#### User Understanding (Weight: 10%)
How well are the target users identified?
- **Excellent:** Users are clearly identified with roles and use cases
- **Good:** Users are well identified with minor gaps
- **Acceptable:** Users are identified but lack detail
- **Needs Improvement:** Users are poorly identified
- **Inadequate:** Users are not identified or unclear

#### Data Modeling (Weight: 15%)
How well are the data entities defined?
- **Excellent:** Data entities are comprehensive with key attributes and relationships
- **Good:** Data entities are well defined with minor gaps
- **Acceptable:** Data entities are defined but lack detail
- **Needs Improvement:** Data entities are poorly defined
- **Inadequate:** Data entities are missing or unclear

#### Performance Consideration (Weight: 10%)
How well are performance requirements considered?
- **Excellent:** Performance requirements are specific and measurable
- **Good:** Performance requirements are mostly clear
- **Acceptable:** Performance requirements are mentioned but vague
- **Needs Improvement:** Performance requirements are poorly defined
- **Inadequate:** Performance requirements are missing

#### Security Awareness (Weight: 15%)
How well are security considerations addressed?
- **Excellent:** Comprehensive security considerations with specific measures
- **Good:** Good security considerations with minor gaps
- **Acceptable:** Basic security considerations mentioned
- **Needs Improvement:** Limited security considerations
- **Inadequate:** Security considerations missing or inadequate

#### UI Planning (Weight: 10%)
How well are UI requirements planned?
- **Excellent:** UI requirements are detailed and user-focused
- **Good:** UI requirements are well planned with minor gaps
- **Acceptable:** UI requirements are basic but adequate
- **Needs Improvement:** UI requirements are poorly planned
- **Inadequate:** UI requirements are missing or unclear

#### Success Metrics (Weight: 10%)
How well are success metrics defined?
- **Excellent:** Success metrics are specific, measurable, and relevant
- **Good:** Success metrics are mostly well-defined
- **Acceptable:** Success metrics are mentioned but could be more specific
- **Needs Improvement:** Success metrics are poorly defined
- **Inadequate:** Success metrics are missing or unclear

### Quality Recommendations

#### Excellent (4.5+)
Excellent pre-planning! You're ready to proceed with detailed implementation planning.

#### Good (3.5-4.4)
Good pre-planning with minor areas for improvement. Consider refining the highlighted areas before proceeding.

#### Acceptable (2.5-3.4)
Acceptable pre-planning but several areas need more detail. Please address the feedback before creating the implementation plan.

#### Needs Improvement (1.5-2.4)
The pre-planning needs significant improvement. Please revise your answers based on the feedback provided.

#### Inadequate (<1.5)
The pre-planning is inadequate. Please start over and provide more detailed, thoughtful answers.

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
- Existing module patterns analyzed

**Activities:**
- Use load-documentation-context tool to efficiently load all essential context
- Alternative: Use individual tools (list-docs, get-sections, get-agent-rules, get-tools) for specific context
- Review loaded documentation headings and available components
- Understand agent behavioral constraints
- Analyze existing module patterns and architecture
- Familiarize with project structure and development conventions

**Exit Criteria:**
- Documentation context loaded
- Agent rules understood
- Available tools identified
- Project patterns familiarized
- Architecture context established

---

### Step 1: Pre-Planning & Requirements
**ID:** 1_preplanning  
**Name:** Pre-Planning & Requirements  
**Description:** Define and validate the module concept and requirements using embedded questions and quality evaluation

**Deliverables:**
- Module purpose and scope definition
- User requirements and personas
- Data model design
- Integration requirements
- Quality-evaluated pre-planning document

**Activities:**
- Answer all 10 pre-planning questions thoroughly (see questions section above)
- Review answers for completeness and clarity
- Ensure all questions have comprehensive responses
- Stakeholder interviews and requirements gathering

**Exit Criteria:**
- All required questions answered
- Quality score ≥ 3.5/5.0
- Implementation plan generated
- Stakeholder requirements documented
- Business case approved

---

### Step 2: Architecture & Design
**ID:** 2_architecture  
**Name:** Architecture & Design  
**Description:** Design the complete module architecture and interfaces

**Deliverables:**
- System architecture document
- Database schema design
- API specifications
- Security architecture
- Integration points definition
- UI/UX design system

**Activities:**
- Design overall system architecture
- Create detailed database schema
- Define all API endpoints and contracts
- Design security model and access controls
- Plan integration with existing systems
- Create UI mockups and user flows
- Performance and scalability planning

**Exit Criteria:**
- Architecture review completed
- Database design approved
- API contracts finalized
- Security model validated
- Integration approach confirmed
- UI/UX design approved

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
- Identify any required additions or modifications for the module
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

### Step 3: Project Setup & Infrastructure
**ID:** 3_setup  
**Name:** Project Setup & Infrastructure  
**Description:** Set up development environment and project infrastructure

**Deliverables:**
- Development environment configured
- Project structure created
- CI/CD pipeline setup
- Testing framework configured
- Documentation structure

**Activities:**
- Create module directory structure
- Set up development environment
- Configure build and deployment pipelines
- Set up testing frameworks
- Configure code quality tools
- Create documentation templates
- Set up monitoring and logging

**Exit Criteria:**
- Development environment ready
- Project structure established
- CI/CD pipeline functional
- Testing framework ready
- Development tools configured

---

### Step 4: Data Layer Implementation
**ID:** 4_data_layer  
**Name:** Data Layer Implementation  
**Description:** Implement database models, migrations, and data access layer

**Deliverables:**
- Database models implemented
- Migration scripts
- Data access layer (DAL)
- Database indexes and optimization
- Data validation logic

**Activities:**
- Create database models and entities
- Write database migration scripts
- Implement data access layer
- Add database indexes for performance
- Implement data validation and constraints
- Write unit tests for data layer

**Exit Criteria:**
- All models implemented
- Migrations tested
- Data access layer functional
- Performance optimized
- Data layer tests passing

---

### Step 5: API Layer Implementation
**ID:** 5_api_layer  
**Name:** API Layer Implementation  
**Description:** Implement business logic and API endpoints

**Deliverables:**
- Business logic implementation
- API endpoints
- Authentication and authorization
- Input validation and error handling
- API documentation

**Activities:**
- Implement core business logic
- Create API endpoints and controllers
- Implement authentication and authorization
- Add input validation and sanitization
- Implement error handling and logging
- Write API documentation
- Write unit and integration tests

**Exit Criteria:**
- All APIs implemented
- Authentication working
- Error handling complete
- API documentation current
- API tests passing

---

### Step 6: User Interface Implementation
**ID:** 6_ui_implementation  
**Name:** User Interface Implementation  
**Description:** Implement user interface components and user experience

**Deliverables:**
- UI components implemented in `/app/[module-name]/components/`
- Module pages in proper App Router structure
- **REQUIRED VIEWS**: List view, Create view, Edit view (minimum)
- User workflows and navigation integration
- **CRITICAL**: Main sidebar navigation updated with module and sub-items
- Responsive design
- Accessibility features
- UI integration with APIs

**Activities:**

#### File Structure & Components
- **CRITICAL**: Follow `/app/[module-name]/` file structure (see get-workflow-rules)
- Create module components in `/app/[module-name]/components/` (NOT `/components/[module]/`)
- Use proper import paths: `import { Form } from './components/form'`

#### Required Views (MANDATORY)
- **List View**: `/app/[module-name]/page.tsx` - Display all module items in table/grid
- **Create View**: `/app/[module-name]/create/page.tsx` - Form to create new items (redirects to edit after creation)
- **Edit View**: `/app/[module-name]/edit/[id]/page.tsx` - Combined create/edit form for existing items
- Additional views as needed (detail view, templates, etc.)

**Create/Edit Pattern:**
- Create form saves new item and redirects to `/edit/[new-id]` 
- Edit form handles both new items (after redirect) and existing items
- Same form component used for both create and edit modes

#### Main Sidebar Integration (CRITICAL)
Update `components/MainSidebar.tsx` to include:
```typescript
{
  title: "Announcements",           // Module display name
  url: "/announcements",           // Module root (list view)
  icon: MessageSquare,             // Appropriate Lucide icon
  items: [                         // Required sub-menu items:
    {
      title: "All Announcements",   // Link to list view
      url: "/announcements"
    },
    {
      title: "Create New",          // Link to create view (redirects to edit after save)
      url: "/announcements/create"
    },
    {
      title: "Templates",           // Additional module-specific items (if needed)
      url: "/announcements/templates"
    }
  ]
}
```

**Navigation Flow:**
1. User clicks "Create New" → Goes to `/create` page
2. User fills form and saves → Redirects to `/edit/[new-id]` 
3. User can continue editing or return to list

#### Implementation Details
- Ensure responsive design across all module pages
- Implement accessibility features (ARIA labels, keyboard navigation)
- Integrate UI with API layer and server actions
- Add client-side validation and error handling
- Write UI tests using Jest and @testing-library/react
- Test navigation between list, create, and edit views

**Exit Criteria:**
- All UI components functional and properly placed in `/app/[module-name]/components/`
- **REQUIRED VIEWS**: List, Create, and Edit views implemented and working
- **CREATE/EDIT FLOW**: Create form saves and redirects to edit view correctly
- **SIDEBAR**: Main sidebar updated with module navigation and sub-items
- User workflows complete and navigation tested (list → create → edit flow)
- Responsive design verified across all views
- Accessibility requirements met (ARIA labels, keyboard navigation)
- UI tests passing for all views and components
- Navigation between views working correctly including redirect flow

---

### Step 7: System Integration
**ID:** 7_integration  
**Name:** System Integration  
**Description:** Integrate module with existing systems and external services

**Deliverables:**
- Integration with existing modules
- External service integrations
- Data migration scripts
- Integration testing
- Performance optimization

**Activities:**
- Integrate with existing system modules
- Implement external service integrations
- Create data migration scripts if needed
- Perform integration testing
- Optimize performance and scalability
- Test error scenarios and fallbacks

**Exit Criteria:**
- All integrations working
- Data migration tested
- Integration tests passing
- Performance targets met
- Error handling verified

---

### Step 8: Comprehensive Testing
**ID:** 8_testing  
**Name:** Comprehensive Testing  
**Description:** Perform thorough testing of the complete module using Jest framework

**Deliverables:**
- Jest unit test coverage (≥80%)
- Jest integration test suite
- End-to-end test scenarios
- Performance test results
- Security testing results
- User acceptance testing
- Test files in `/app/[module-name]/__tests__/`

**Activities:**
- **MANDATORY**: Use Jest testing framework for all tests
- Create Jest tests in `/app/[module-name]/__tests__/` directory
- Achieve comprehensive unit test coverage using Jest and @testing-library/react
- Write integration tests for server actions using Jest
- Execute complete integration test suite
- Perform end-to-end testing of user workflows
- Conduct performance and load testing
- Perform security testing and vulnerability scanning
- Facilitate user acceptance testing with stakeholders
- Fix identified issues and bugs
- Ensure all tests follow Jest best practices

**Exit Criteria:**
- Jest test coverage ≥ 80% for module code
- All Jest unit and integration tests passing
- End-to-end tests covering main user workflows
- Performance requirements met
- Security vulnerabilities addressed
- User acceptance criteria met
- All tests properly organized in `__tests__` directories

---

### Step 9: Documentation & Training
**ID:** 9_documentation  
**Name:** Documentation & Training  
**Description:** Create comprehensive documentation and training materials

**Deliverables:**
- Technical documentation
- User documentation
- API documentation
- Deployment guide
- Training materials

**Activities:**
- Write technical documentation
- Create user guides and help documentation
- Finalize API documentation
- Create deployment and maintenance guides
- Prepare training materials for users
- Record demo videos if needed

**Exit Criteria:**
- Documentation complete and reviewed
- User guides validated
- API docs current
- Deployment guide tested
- Training materials ready

---

### Step 10: Deployment & Launch
**ID:** 10_deployment  
**Name:** Deployment & Launch  
**Description:** Deploy module to production and launch to users

**Deliverables:**
- Staging deployment
- Production deployment
- Monitoring and alerting
- User rollout plan
- Support procedures

**Activities:**
- Deploy to staging environment
- Perform staging validation
- Deploy to production environment
- Configure monitoring and alerting
- Execute user rollout plan
- Set up support procedures
- Monitor initial usage

**Exit Criteria:**
- Production deployment successful
- Monitoring active
- Users can access module
- Support procedures in place
- No critical issues

---

### Step 11: Post-Launch Monitoring & Support
**ID:** 11_monitoring  
**Name:** Post-Launch Monitoring & Support  
**Description:** Monitor module performance and provide ongoing support

**Deliverables:**
- Performance monitoring reports
- User adoption metrics
- Issue resolution
- User feedback analysis
- Optimization recommendations

**Activities:**
- Monitor system performance and stability
- Track user adoption and usage patterns
- Respond to user issues and questions
- Collect and analyze user feedback
- Identify optimization opportunities
- Plan future enhancements

**Exit Criteria:**
- Performance within targets
- User adoption on track
- Support issues resolved
- User satisfaction acceptable
- Handoff to maintenance team

---

## Roles & Responsibilities

### Technical Lead
**Responsibilities:** Architecture, Technical Decisions, Code Review

### Backend Developer
**Responsibilities:** API Implementation, Database Design, Integration

### Frontend Developer
**Responsibilities:** UI Implementation, User Experience, Client Integration

### DevOps Engineer
**Responsibilities:** Infrastructure, Deployment, Monitoring

### QA Engineer
**Responsibilities:** Testing Strategy, Quality Assurance, Bug Tracking

### Product Manager
**Responsibilities:** Requirements, User Stories, Stakeholder Management

---

## Key Checkpoints

These are critical milestones that require verification before proceeding:

- **0_context_preparation:** Documentation context, agent rules, and project patterns loaded
- **1_preplanning:** Business case and pre-planning approved (score ≥ 3.5)
- **2_architecture:** Architecture review and approval
- **2_5_database_structure:** Database changes applied and documentation updated
- **4_data_layer:** Data layer implementation complete
- **5_api_layer:** API layer functional and tested
- **6_ui_implementation:** UI implementation complete
- **8_testing:** All testing complete and passing
- **10_deployment:** Production deployment successful

---

## Usage Guide

### Getting Started
1. **Load Context**: Use `load-documentation-context` to prepare your knowledge base
2. **Review Rules**: Use `get-workflow-rules` to understand database and quality requirements
3. **Analyze Existing Patterns**: Review existing modules and architectural patterns
4. **Start Pre-Planning**: Answer the 10 embedded questions thoroughly
5. **Review Quality**: Ensure all answers are comprehensive and well-thought-out
6. **Design Architecture**: Create comprehensive system architecture
7. **Implement Systematically**: Follow the step-by-step workflow with regular progress checks

### Progress Tracking
- Review exit criteria before moving to the next step
- Pay special attention to checkpoint steps
- Document architectural decisions and rationale throughout the process
- Track completion against the workflow steps systematically
- Conduct regular architecture reviews

### Integration with Project Tools
- Reference `/examples/` directory for component and layout patterns
- Use existing authentication and database patterns
- Follow established coding standards and conventions
- Leverage existing UI components and design system
- Use established testing patterns and frameworks

### Best Practices
- Invest heavily in architecture and design phases
- Create comprehensive documentation as you build
- Test continuously rather than waiting for dedicated testing phases
- Engage stakeholders frequently at checkpoint steps
- Plan for scalability and maintainability from the beginning
- Consider security and compliance requirements early

---

## Notes and Tips

### Common Pitfalls
- **Insufficient architecture planning**: Rushing to implementation without solid architectural foundation
- **Scope creep**: Allowing module scope to expand beyond original planning
- **Poor integration planning**: Not considering how module fits with existing systems
- **Inadequate testing**: Skipping comprehensive testing phases
- **Documentation debt**: Leaving documentation until the end

### Success Factors
- **Comprehensive pre-planning**: Time invested in planning prevents costly rework
- **Solid architecture**: Good architectural decisions enable rapid, maintainable development
- **Regular stakeholder engagement**: Keep business stakeholders involved throughout the process
- **Incremental delivery**: Deliver working functionality in phases
- **Quality focus**: Maintain high quality standards throughout development

### Time Management
- **Pre-planning & Requirements**: 10-15% of total project time
- **Architecture & Design**: 20-25% of total project time
- **Implementation (Data + API + UI)**: 35-45% of total project time
- **Integration & Testing**: 15-20% of total project time
- **Deployment & Documentation**: 5-10% of total project time

### Module Size Guidelines
- **Small Module:** 2-4 weeks, 1-2 developers, 3-5 key features
- **Medium Module:** 4-8 weeks, 2-3 developers, 5-7 key features  
- **Large Module:** 8-16 weeks, 3-6 developers, 7+ key features

### Architecture Considerations
- **Modularity**: Design for independence and reusability
- **Scalability**: Plan for growth in users and data
- **Maintainability**: Write code that can be easily maintained and extended
- **Security**: Build security in from the ground up
- **Performance**: Consider performance implications of architectural decisions

---

*This workflow is part of the Lolek MCP Server development framework. For questions or improvements, refer to the project documentation or contact the development team.*