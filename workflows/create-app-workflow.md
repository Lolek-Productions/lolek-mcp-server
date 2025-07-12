# Create New App Workflow

*A comprehensive guide to creating new web applications with DATABASE.md-driven architecture and lolek-mcp context-engineering*

---

## Introduction

The Create New App Workflow provides a systematic approach to building new web applications from scratch using the lolek-mcp context-engineering system. This workflow emphasizes DATABASE.md-driven development, strict adherence to MCP server guidance, and comprehensive project setup to ensure applications are built with quality, consistency, and maintainability.

Unlike feature or module development which work within existing systems, this workflow establishes the entire foundation for a new application, including database architecture, authentication, core components, and deployment infrastructure.

## When to Use This Workflow

**Ideal for:**
- Building new web applications from scratch
- Creating MVP (Minimum Viable Product) applications
- Starting new client projects with database requirements
- Establishing new product foundations
- Building applications that require authentication and user management

**Not ideal for:**
- Adding features to existing applications (use Feature Development Workflow)
- Building standalone modules (use Module Development Workflow)
- Simple prototypes without database requirements

## Overview

**Workflow Type:** create-app  
**Total Steps:** 12  
**Estimated Duration:** 2-8 weeks  
**Team Size:** 1-4 developers

This workflow guides you through application conception, database design, architecture planning, implementation, and deployment with embedded quality gates and comprehensive evaluation criteria.

## Quality Philosophy

Applications built using this workflow undergo rigorous planning and architecture evaluation before implementation begins. The embedded pre-planning questions and scoring system ensure that:

- User needs and application purpose are clearly defined
- Database architecture is properly designed and documented
- Technical stack choices are appropriate and justified
- Security and authentication strategies are planned
- Deployment and scaling considerations are addressed
- Success metrics and monitoring are defined upfront

**Quality Standard:** All applications require comprehensive pre-planning with detailed answers to all questions before implementation begins.

## Project Integration

This workflow integrates seamlessly with the lolek-mcp context-engineering system:

- **DATABASE.md**: Central authority for all structural decisions
- **lolek-mcp server**: Provides examples, patterns, and guidance
- **examples/CLAUDE.md**: Enforces strict operational rules
- **Component examples**: Templates for UI components and layouts
- **Authentication patterns**: Supabase integration examples
- **Testing frameworks**: Established testing patterns and utilities

## Workflow Steps

### Step 1: Application Conception and Requirements
*Define the application's purpose, target users, and core requirements*

**Duration:** 2-3 days  
**Participants:** Product owner, lead developer, stakeholders

**Activities:**
1. **Run mandatory lolek-mcp tools first:**
   - `get-introduction`
   - `get-tools`
   - `list-examples`
   - `get-claude-rules`
   - `get-claude-rules`

2. **Define application purpose:**
   - Write clear application mission statement
   - Identify target user personas
   - Define core user workflows
   - Establish success metrics

3. **Requirements gathering:**
   - Functional requirements (what the app must do)
   - Non-functional requirements (performance, security, scalability)
   - Technical constraints and preferences
   - Integration requirements

**Deliverables:**
- Application requirements document
- User personas and workflows
- Success metrics definition
- Technical constraints documentation

**Quality Gates:**
- Requirements are specific and measurable
- User workflows are clearly defined
- Technical constraints are realistic
- Success metrics are trackable

### Step 2: Database Architecture Design
*Design the complete database schema and relationships using DATABASE.md*

**Duration:** 3-5 days  
**Participants:** Lead developer, database architect, product owner

**Activities:**
1. **Entity identification:**
   - Identify all data entities (users, products, orders, etc.)
   - Define entity attributes and data types
   - Establish entity relationships and cardinality
   - Plan data validation rules

2. **Database schema design:**
   - Create normalized database schema
   - Design indexes for performance
   - Plan Row Level Security (RLS) policies
   - Define data access patterns

3. **DATABASE.md creation:**
   - Document complete database schema
   - Include entity relationships diagram
   - Document security policies and constraints
   - Establish naming conventions

**Deliverables:**
- Complete DATABASE.md file
- Entity relationship diagrams
- Database migration files
- Security policy documentation

**Quality Gates:**
- DATABASE.md is complete and accurate
- All entities and relationships are documented
- Security policies are defined
- Performance considerations are addressed

### Step 3: Technology Stack Selection
*Choose appropriate technologies based on MCP server examples and requirements*

**Duration:** 1-2 days  
**Participants:** Lead developer, technical team

**Activities:**
1. **Review MCP server examples:**
   - Check available technology examples in lolek-mcp server
   - Review package.json examples for dependencies
   - Identify proven technology patterns

2. **Stack selection:**
   - Frontend framework (Next.js recommended from examples)
   - Database and ORM (Supabase recommended from examples)
   - Authentication system (Supabase Auth from examples)
   - Styling framework (Tailwind + shadcn/ui from examples)
   - Testing framework (from existing examples)

3. **Architecture decisions:**
   - Deployment strategy (Vercel recommended)
   - State management approach
   - API design patterns
   - File structure conventions

**Deliverables:**
- Technology stack documentation
- Architecture decision records
- Dependency list with justifications
- Development environment setup guide

**Quality Gates:**
- All technology choices exist in MCP server examples
- Decisions are documented with reasoning
- Stack is appropriate for requirements
- Development environment is reproducible

### Step 4: Project Setup and Configuration
*Initialize the project with proper structure and configuration*

**Duration:** 2-3 days  
**Participants:** Lead developer, DevOps engineer

**Activities:**
1. **Project initialization:**
   - Create new project using MCP server examples
   - Set up proper directory structure
   - Initialize version control with proper .gitignore
   - Configure package.json with required dependencies

2. **Development environment:**
   - Set up local development environment
   - Configure environment variables
   - Set up database connection
   - Configure development tools (linting, formatting)

3. **CI/CD setup:**
   - Configure build pipeline
   - Set up testing automation
   - Configure deployment pipeline
   - Set up monitoring and error tracking

**Deliverables:**
- Initialized project repository
- Development environment documentation
- CI/CD pipeline configuration
- Environment setup scripts

**Quality Gates:**
- Project structure follows MCP server examples
- All team members can run project locally
- CI/CD pipeline is functional
- Environment variables are properly configured

### Step 5: Authentication and User Management
*Implement user authentication and basic user management using MCP server patterns*

**Duration:** 3-4 days  
**Participants:** Lead developer, security specialist

**Activities:**
1. **Authentication setup:**
   - Configure Supabase authentication (from examples)
   - Set up user registration and login flows
   - Implement session management
   - Configure password policies

2. **User management:**
   - Create user profile management
   - Implement role-based access control
   - Set up user preferences system
   - Create account recovery flows

3. **Security implementation:**
   - Configure Row Level Security policies
   - Implement input validation
   - Set up CSRF protection
   - Configure secure headers

**Deliverables:**
- Working authentication system
- User management interfaces
- Security policy implementation
- Authentication documentation

**Quality Gates:**
- Authentication follows MCP server examples exactly
- Security policies are properly implemented
- User flows are intuitive and secure
- All authentication features are tested

### Step 6: Core Component Development
*Build essential UI components and layouts using MCP server examples*

**Duration:** 4-6 days  
**Participants:** Frontend developers, UI/UX designer

**Activities:**
1. **Layout components:**
   - Create main application layout (from examples)
   - Build navigation components
   - Implement responsive design
   - Set up theme and styling system

2. **Form components:**
   - Build reusable form components
   - Implement form validation
   - Create input components
   - Set up form state management

3. **Data display components:**
   - Create table/list components
   - Build card and detail components
   - Implement loading and error states
   - Create pagination components

**Deliverables:**
- Core component library
- Responsive application layouts
- Form handling system
- Component documentation

**Quality Gates:**
- All components follow MCP server examples
- Components are responsive and accessible
- Component API is consistent
- Components are properly documented

### Step 7: Database Integration
*Connect the application to the database with proper patterns*

**Duration:** 3-4 days  
**Participants:** Backend developers, database specialist

**Activities:**
1. **Database connection:**
   - Set up Supabase client configuration
   - Implement server-side database access
   - Configure connection pooling
   - Set up database migrations

2. **Data access layer:**
   - Create database query functions
   - Implement CRUD operations
   - Set up transaction handling
   - Create data validation layer

3. **API development:**
   - Build server actions for data mutations
   - Create API routes for complex operations
   - Implement proper error handling
   - Set up data caching strategies

**Deliverables:**
- Database connection setup
- Data access layer implementation
- API endpoints documentation
- Database migration files

**Quality Gates:**
- Database integration follows MCP server patterns
- All CRUD operations are properly implemented
- Error handling is comprehensive
- Performance is optimized

### Step 8: Feature Implementation
*Build the core application features based on requirements*

**Duration:** 1-3 weeks  
**Participants:** Full development team

**Activities:**
1. **Core feature development:**
   - Implement primary user workflows
   - Build business logic components
   - Create feature-specific UI components
   - Integrate with database operations

2. **Feature integration:**
   - Connect features to authentication system
   - Implement proper authorization
   - Set up feature-specific routing
   - Create feature documentation

3. **Testing implementation:**
   - Write unit tests for business logic
   - Create integration tests for workflows
   - Implement end-to-end tests
   - Set up test data management

**Deliverables:**
- Implemented core features
- Feature documentation
- Comprehensive test suite
- User workflow implementation

**Quality Gates:**
- All features align with DATABASE.md structure
- Features follow MCP server examples
- Test coverage meets minimum thresholds
- User workflows are complete and tested

### Step 9: Testing and Quality Assurance
*Comprehensive testing and quality validation*

**Duration:** 1-2 weeks  
**Participants:** QA team, developers, product owner

**Activities:**
1. **Automated testing:**
   - Run full test suite
   - Validate test coverage
   - Perform performance testing
   - Execute security testing

2. **Manual testing:**
   - User acceptance testing
   - Cross-browser testing
   - Mobile responsiveness testing
   - Accessibility testing

3. **Quality validation:**
   - Code review and quality checks
   - Performance optimization
   - Security vulnerability assessment
   - Documentation review

**Deliverables:**
- Test execution reports
- Performance benchmarks
- Security assessment results
- Quality assurance documentation

**Quality Gates:**
- All tests pass successfully
- Performance meets requirements
- Security vulnerabilities are addressed
- Quality standards are met

### Step 10: Deployment Preparation
*Prepare the application for production deployment*

**Duration:** 3-4 days  
**Participants:** DevOps team, lead developer

**Activities:**
1. **Production configuration:**
   - Configure production environment variables
   - Set up production database
   - Configure monitoring and logging
   - Set up error tracking

2. **Deployment setup:**
   - Configure production hosting (Vercel recommended)
   - Set up domain and SSL certificates
   - Configure CDN and caching
   - Set up backup strategies

3. **Go-live preparation:**
   - Create deployment checklist
   - Prepare rollback procedures
   - Set up monitoring alerts
   - Create incident response plan

**Deliverables:**
- Production deployment configuration
- Monitoring and alerting setup
- Deployment procedures documentation
- Incident response plan

**Quality Gates:**
- Production environment is properly configured
- Monitoring and alerting are functional
- Deployment procedures are tested
- Rollback procedures are ready

### Step 11: Production Deployment
*Deploy the application to production environment*

**Duration:** 1-2 days  
**Participants:** DevOps team, lead developer, product owner

**Activities:**
1. **Deployment execution:**
   - Execute production deployment
   - Verify all systems are operational
   - Validate database connections
   - Confirm monitoring is active

2. **Post-deployment validation:**
   - Perform smoke testing
   - Validate critical user workflows
   - Check performance metrics
   - Verify security configurations

3. **Go-live activities:**
   - Enable user access
   - Monitor application performance
   - Address any immediate issues
   - Collect initial user feedback

**Deliverables:**
- Live production application
- Deployment success confirmation
- Initial performance metrics
- Post-deployment validation report

**Quality Gates:**
- Application is successfully deployed
- All critical functions are operational
- Performance meets expectations
- No critical issues detected

### Step 12: Post-Launch Monitoring and Iteration
*Monitor application performance and plan future improvements*

**Duration:** Ongoing  
**Participants:** Full team, product owner

**Activities:**
1. **Performance monitoring:**
   - Track application metrics
   - Monitor user behavior
   - Analyze performance data
   - Identify optimization opportunities

2. **User feedback collection:**
   - Gather user feedback
   - Analyze usage patterns
   - Identify pain points
   - Plan feature improvements

3. **Maintenance planning:**
   - Schedule regular updates
   - Plan security patches
   - Update DATABASE.md as needed
   - Maintain documentation

**Deliverables:**
- Performance monitoring dashboard
- User feedback analysis
- Improvement roadmap
- Maintenance schedule

**Quality Gates:**
- Monitoring systems are effective
- User satisfaction meets targets
- Performance remains optimal
- Maintenance processes are established

## Pre-Planning Questions

Before beginning implementation, answer these questions to ensure project readiness:

### 1. Application Purpose and Requirements (Score: 1-5)
- **Question**: Is the application's purpose clearly defined with specific user problems it solves?
- **Evaluation Criteria**: 
  - 5: Crystal clear purpose, well-defined user problems, specific value proposition
  - 3: Generally clear purpose, some user problems identified
  - 1: Vague purpose, unclear user problems

### 2. Database Architecture Completeness (Score: 1-5)
- **Question**: Is the DATABASE.md file complete with all entities, relationships, and constraints documented?
- **Evaluation Criteria**:
  - 5: Complete DATABASE.md with all entities, relationships, constraints, and security policies
  - 3: DATABASE.md exists with basic entities and relationships
  - 1: No DATABASE.md or incomplete documentation

### 3. Technology Stack Validation (Score: 1-5)
- **Question**: Are all chosen technologies available in lolek-mcp server examples and appropriate for requirements?
- **Evaluation Criteria**:
  - 5: All technologies from MCP server examples, well-justified choices
  - 3: Most technologies from examples, reasonable justifications
  - 1: Technologies not in examples or poorly justified

### 4. Team Readiness (Score: 1-5)
- **Question**: Does the team have necessary skills and resources to complete the project?
- **Evaluation Criteria**:
  - 5: Team has all required skills, adequate resources, clear roles
  - 3: Team has most skills, reasonable resources
  - 1: Missing critical skills or insufficient resources

### 5. Success Metrics Definition (Score: 1-5)
- **Question**: Are clear, measurable success metrics defined for the application?
- **Evaluation Criteria**:
  - 5: Specific, measurable, achievable metrics with tracking plan
  - 3: General metrics defined with some measurement plan
  - 1: Vague or no defined metrics

### 6. Security and Compliance Planning (Score: 1-5)
- **Question**: Are security requirements and compliance needs properly planned?
- **Evaluation Criteria**:
  - 5: Comprehensive security plan, all compliance requirements addressed
  - 3: Basic security considerations, main compliance needs identified
  - 1: Minimal security planning, compliance needs unclear

### 7. Deployment and Scaling Strategy (Score: 1-5)
- **Question**: Is there a clear deployment strategy with scaling considerations?
- **Evaluation Criteria**:
  - 5: Detailed deployment plan, scaling strategy, monitoring setup
  - 3: Basic deployment plan, some scaling considerations
  - 1: No clear deployment or scaling strategy

### 8. Risk Assessment and Mitigation (Score: 1-5)
- **Question**: Have major risks been identified with appropriate mitigation strategies?
- **Evaluation Criteria**:
  - 5: Comprehensive risk assessment with detailed mitigation plans
  - 3: Main risks identified with basic mitigation strategies
  - 1: Limited risk assessment, minimal mitigation planning

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

An application is considered successfully created when:

1. **Functional Requirements Met:**
   - All defined user workflows are operational
   - Core features work as specified
   - Authentication and user management function properly
   - Database operations are reliable

2. **Quality Standards Achieved:**
   - Test coverage meets minimum thresholds
   - Performance benchmarks are met
   - Security requirements are satisfied
   - Code quality standards are maintained

3. **Documentation Complete:**
   - DATABASE.md is current and accurate
   - API documentation is comprehensive
   - User documentation is available
   - Deployment procedures are documented

4. **Production Ready:**
   - Application is successfully deployed
   - Monitoring and alerting are functional
   - Backup and recovery procedures are in place
   - Performance is within acceptable ranges

## Common Pitfalls and Solutions

### Pitfall 1: Incomplete DATABASE.md Planning
**Problem**: Starting development without complete database architecture
**Solution**: Spend adequate time on DATABASE.md creation and validation
**Prevention**: Require DATABASE.md review before any development begins

### Pitfall 2: Technology Stack Drift
**Problem**: Using technologies not available in MCP server examples
**Solution**: Strictly adhere to MCP server technology constraints
**Prevention**: Regular validation against MCP server examples

### Pitfall 3: Authentication Implementation Shortcuts
**Problem**: Custom authentication instead of using proven MCP server patterns
**Solution**: Follow Supabase authentication examples exactly
**Prevention**: Mandate use of MCP server authentication patterns

### Pitfall 4: Component Architecture Inconsistency
**Problem**: Building components that don't follow MCP server examples
**Solution**: Use MCP server components as templates for all new components
**Prevention**: Regular code reviews against MCP server patterns

### Pitfall 5: Inadequate Testing Strategy
**Problem**: Insufficient test coverage or poor testing practices
**Solution**: Follow testing patterns from MCP server examples
**Prevention**: Establish testing requirements early in project

## Integration with Other Workflows

This workflow integrates with other project workflows:

- **Feature Development Workflow**: Used for adding features after initial app creation
- **Module Development Workflow**: May be used for complex standalone modules within the app
- **Bug Fix Workflow**: Used for addressing issues post-launch
- **Database Migration Workflow**: Used for evolving DATABASE.md over time

## Tools and Resources

### Required Tools:
- **lolek-mcp server**: Primary source of patterns and examples
- **DATABASE.md**: Central database architecture documentation
- **Next.js**: Web application framework
- **Supabase**: Database and authentication platform
- **Tailwind CSS + shadcn/ui**: Styling and component library
- **Vercel**: Deployment platform

### Recommended Tools:
- **TypeScript**: Type safety and better development experience
- **Jest**: Testing framework
- **ESLint/Prettier**: Code quality and formatting
- **GitHub Actions**: CI/CD pipeline
- **Sentry**: Error tracking and monitoring

## Conclusion

The Create New App Workflow provides a comprehensive, systematic approach to building new web applications using the lolek-mcp context-engineering system. By following this workflow, teams can ensure their applications are built with:

- **Solid Architecture**: DATABASE.md-driven design ensures scalable, maintainable structure
- **Quality Standards**: Rigorous pre-planning and quality gates prevent common issues
- **Best Practices**: MCP server examples provide proven patterns and implementations
- **Team Alignment**: Clear steps and deliverables keep everyone synchronized
- **Production Readiness**: Comprehensive approach ensures applications are ready for real-world use

Success with this workflow requires discipline in following MCP server constraints, thoroughness in database architecture planning, and commitment to quality standards throughout the development process.

The workflow is designed to be adapted to specific project needs while maintaining the core principles of DATABASE.md-driven development and strict adherence to lolek-mcp server guidance.