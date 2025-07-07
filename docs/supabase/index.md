# Supabase Documentation Index

## 1. Authentication and User Management

### Basic Authentication
- Supabase User Authentication via Email and Password (JavaScript)
<!-- IGNORE -->
- Supabase Auth: Sign in with Email Magic Link
- Sign in Anonymously with Supabase
- Link Email or Phone Identity to Anonymous User (Supabase Auth)
- Signing in with phone OTP
- Verify OTP and Session on Server-Side with Supabase JS Client
- Verify OTP in Express.js
- Verify OTP with Supabase Auth (Next.js & Express)
- Supabase Verify OTP Success Session Response
- Successful OTP Verification Response Format

### OAuth and Social Authentication
- Handle OAuth Callback and Code Exchange (Next.js TypeScript)
- Handle OAuth Callback and Code Exchange (SvelteKit TypeScript)
<!-- IGNORE -->
- Supabase Auth: Sign In with Discord OAuth Provider
- Sign In with GitLab using Supabase OAuth
- Implement Google Sign-in with Chrome Identity API and Supabase (TypeScript)
<!-- IGNORE -->
- Handle Google Sign-in Callback with Supabase (Nonce Included)
- Create Flask Route for GitHub OAuth Sign-in
- Request Google Refresh Token during OAuth Sign-in
- Link OAuth Identity Manually with Supabase Auth

### Multi-Factor Authentication (MFA)
- Supabase Auth MFA Enrollment Flow API Reference
- Supabase MFA Authenticator Assurance Level (AAL) API
- React Component for Supabase MFA TOTP Challenge and Verification
- Enforce MFA for New Supabase Users with RLS Policy
- PostgreSQL RLS Policy: Enforce MFA for Selected Users Based on Verified Factors
- Example TOTP otpauth URI Format

### Authentication UI and Components
- Create Custom Supabase Auth UI Themes in React
- Apply Custom Inline CSS Styles to Supabase Auth UI Elements in React
- Configuring Query Parameters for Supabase Auth UI
- Supabase Auth UI Localization Variables Reference
- Initialize Supabase and Flutter Auth UI
- Implement Supabase Authentication Form in React Native
- React Native Auth Component UI and Styles
- Implement React Native Authentication Component

### Server-Side Authentication
- Authenticated-Only Page with getServerSideProps in Next.js
- Implement Server-Side Rendering (SSR) with Supabase Auth in Next.js
- Authenticating Users with Supabase and Next.js Server Actions
- Migrate `withApiAuth` to `createPagesServerClient` for Next.js API Routes
- Next.js: Perform Server-Side OAuth Redirect with Supabase Auth Helpers
- Protect SvelteKit Server Actions with Supabase Session Check
- Protect SvelteKit API Routes with Supabase Session Check
- Protecting SvelteKit Pages with Supabase Authentication
- Protecting SvelteKit API Routes with Supabase Authentication

### Auth Hooks and Custom Logic
- Overview of Available Supabase Auth Hooks
- Configure Supabase Auth Hook with PostgreSQL Function URI
- Configure Supabase Auth Hook with HTTP URI
- Grant and Revoke Permissions for Supabase Auth Hooks
- MFA Verification Hook Inputs API Reference
- MFA Verification Hook Outputs API Reference
- MFA Verification Hook Output Payload Example
- Password Verification Hook Input JSON Schema Definition
- Password Verification Hook Input JSON Example
- Handle Supabase Auth Webhook and Send Welcome Email with Resend

### JWT and Tokens
- Example Supabase Auth JWT `amr` claim structure
- TypeScript Interface for Supabase JWT Claims
- Example Authenticated User JWT Payload
- Example Anonymous User JWT Payload
- Example Service Role JWT Payload
- Example of an Encoded JWT String
- Supabase auth.jwt() Function Reference
- Use a custom `access_token` JWT with Supabase
- Extracting SSO Information from User JWT for RLS
- Adding Admin Role to JWT Claims (SQL)

### Session Management
- Check User Session with Supabase getSession
- Configure Supabase Client with Custom Storage for Tokens
- Supabase-js Client-Side Cookie Configuration
- Set User Session ID for Direct Postgres RLS
- Sign Out User from Supabase Session
- Logout with Supabase `signOut` method in React JSX

### Email Templates
- HTML Signup Confirmation Email Template for PKCE Flow
- Supabase Auth: Magic Link Email Template for PKCE Flow
- HTML Template for Reauthentication Confirmation
- HTML Template for Magic Link Login Email
- HTML Template for New Email Address Confirmation
- Configure Supabase Email OTP Template
- Supabase Email Template Variables
- Supabase Email Template Variables and Usage
- Supabase Auth Email Template Types Reference
- JSON Schema for Supabase Email Sending Payload
- Example JSON Payload for Supabase Email Sending
- Conditionally Render Email Content based on User Domain
- Implement Internationalized Email Templates with Postmark

## 2. Next.js Integration

### Setup and Configuration
- Create a Next.js app with Supabase template
- Install Supabase packages for Next.js
- Install Supabase Auth Helpers for Next.js
- Configure Supabase Environment Variables in Next.js
- Declaring Supabase Environment Variables (.env.local)
- Install Supabase SSR Package for Next.js
- Installing the new Supabase SSR package

### Server Components and Client Components
- Create Supabase Client for Next.js Server Components
- Initialize Supabase Client for Next.js Environments
- Overview of Supabase Client Creation Methods in Next.js Auth Helpers
- Deprecated Supabase Client Creation Functions
- Create Supabase client utility functions for Next.js
- Implement Client-side Supabase Authentication in Next.js
- Fetch Data Server-Side in Next.js Server Components
- Fetch Supabase Data in Static Next.js Server Component (Unauthenticated)

### API Routes and Server Actions
- Implement Supabase User Login Route in Next.js
- Implement Supabase User Sign-up Route in Next.js
- Handle User Logout in Next.js Route Handler with Supabase
- Create API Route for Supabase Email Confirmation
- Performing Data Mutations with Supabase and Next.js Server Actions
- Implement Supabase Server Actions for User Authentication

### Components and Pages
- Create Login/Signup Form Component in Next.js
- Create AccountForm Component for User Profile Management (JavaScript)
- Integrate React Query Client Provider into Next.js Root Layout
- Configure Next.js to Use Supabase Custom Image Loader
- Create Supabase Image Loader for Next.js

## 3. SvelteKit Integration

### Setup and Configuration
- Initialize Svelte App with Vite and TypeScript
- Initialize SvelteKit Project with TypeScript
- Configure Supabase environment variables in SvelteKit
- Define Supabase Type Declarations for SvelteKit
- Integrate Supabase Database Types into SvelteKit `app.d.ts`
- Update Supabase SvelteKit Type Definitions
- Set up Supabase Client for SvelteKit
- Set up Supabase Client for Server-Side in SvelteKit

### Authentication and Session Management
- Create Supabase Server Client and Session Handler in SvelteKit
- Initialize Supabase SSR Client in SvelteKit Server Hook
- Configure Supabase Server Client in SvelteKit Hooks
- Initialize Supabase Client in SvelteKit Layout Load Function
- Initialize Supabase Client for Client-Side in SvelteKit Layout
- SvelteKit Actions for Supabase User Authentication
- SvelteKit Callback Endpoint for Supabase Auth Code Exchange
- Handle Supabase Magic Link Login on SvelteKit Server
- Create SvelteKit Magic Link Login Page UI

### Pages and Layouts
- SvelteKit Private Route Server Layout Trigger
- SvelteKit Authentication Layout Component
- SvelteKit Server Load Function for Private Notes Page
- Configure Supabase Auth Hooks in SvelteKit

## 4. Database and SQL

### Tables and Schema
- Create Postgres Table for API Route Generation
- Create 'todos' table in Supabase
- Create Supabase 'countries' Table and Insert Data
- Create documents table for hybrid search in Postgres
- Create PostgreSQL table for vector embeddings
- Create Tables for Many-to-Many Relationship (Movies, Actors, Performances)
- Create SQL Table for Job Queue
- Define audit record storage table using JSONB
- Create Local Document Sections Table with Embeddings in Supabase

### Functions and Procedures
- Create a Simple Postgres SQL Function
- Define a Postgres Pre-Request Function
- PostgreSQL: Create `security definer` Function with `search_path`
- Create PostgreSQL Function as Superuser
- Create Postgres Function to Truncate and Normalize Vectors
- PostgreSQL Function to Retrieve User Teams for RLS
- PostgreSQL Function to Get Primary Key Columns for a Table
- Create Supabase PL/pgSQL Utility Functions
- Create dequeue_and_run_jobs PL/pgSQL Function
- Define a Simple Postgres Function for GraphQL
- Calling Postgres Function with Supabase TypeScript Client
- Execute Supabase Database Function with Parameters
- Invoke Security Definer Function from Supabase Client

### Row Level Security (RLS)
- Create PostgreSQL RLS Policy for User-Specific Rows
- Check User Team Membership with auth.jwt() in RLS
- Creating RLS Policy with WITH CHECK for INSERT
- Creating RLS Policy for UPDATE with USING and WITH CHECK
- Create SELECT policy for user's own profiles
- SQL Policy to Allow Users to Delete Their Own Storage Objects
- SQL RLS Policy: Allow Authenticated Users to Read Messages on Specific Topic
- SQL: Enable RLS and Create Policy for Document Sections
- Full example: Create table, enable RLS, and create public SELECT policy
- Supabase RLS Policy for Direct Postgres Connection
- Supabase SQL RLS: Differentiating Anonymous and Permanent Users
- Postgres Row Level Security (RLS) Schema and Policies
- SQL: Perform Semantic Search with RLS Enforcement
- Grant Bypass RLS Privilege to a Postgres Role
- Simplify RLS Policy using Custom JWT Check Function

### Migrations and Schema Management
- Apply Supabase database migrations
- Create and run a database migration
- Generate a new migration file for table modification
- Create a new Supabase migration file
- Generate migration from declared schema
- Create Initial Prisma Migration Directory
- Pull Any Supabase Database Schema Locally
- Pull Remote Supabase Database Changes Locally
- Deploy Supabase Migrations to Staging with GitHub Actions

### Indexes and Performance
- Create HNSW Index for Inner Product Distance in pgvector
- Create Partial Index for Specific Data Subsets
- Postgres FTS: Add Generated Column and GIN Index
- Create RUM Index with rum_anyarray_ops for Array Types
- Pre-warm Postgres Index into RAM
- Test Hypothetical Index and Re-Analyze Query Plan
- Supabase CLI Command to Identify Unused PostgreSQL Indexes
- SQL Query to Monitor PostgreSQL Index Usage Percentage
- Identify High Execution Time in Postgres Hash Join
- Optimize Postgres Seq Scan with High Filtered Rows

### Extensions
- Enable pgvector extension in Supabase
- Enable and Disable pgvector Extension in Supabase Postgres
- Enable PostGIS Extension via SQL in Supabase
- Relocate PostGIS Extension Schema in Supabase
- Enable and disable pg_graphql Extension in PostgreSQL
- Enable or Disable pg_hashids Extension
- Enable and Disable uuid-ossp Extension in PostgreSQL
- Enable and Disable plpgsql_check Extension
- Enable and Disable pgTAP Extension in PostgreSQL

### Roles and Permissions
- Creating Postgres Role Hierarchy with Inheritance
- SQL: Creating New PostgreSQL Users
- Creating Postgres Users with Password Login
- Create Database User for Logging
- Grant CREATE Privilege on Public Schema to Junior Dev
- Grant Privilege with Grant Option
- Attempt to Grant Select Privilege as Non-Owner
- PostgreSQL: Revoke Default Execute Privileges for New Functions in Schema
- Grant Permissions for Custom Schema Exposure
- Identify Table Owner in PostgreSQL
- SQL Seed Data for Role Permissions

## 5. Edge Functions

### Creation and Deployment
- Create New Supabase Edge Function
- Create a New Supabase Edge Function
- Scaffold New Supabase Edge Function
- Initialize Supabase Project and Create Edge Function
- Deploy Supabase Edge Functions
- Download Supabase Edge Function
- Configure Edge Function Properties in config.toml
- Recommended Supabase Edge Functions Folder Structure

### Local Development
- Serve Edge Function Locally for Testing
- Serve Supabase Edge Function Locally
- Serve Supabase function locally with Oak Server
- Invoke Local Supabase Edge Function
- Test Edge Function with cURL Request
- Testing Supabase Edge Function with cURL POST Request
- Test Text-to-Image Edge Function with cURL

### Environment and Configuration
- Supabase Function Environment Variables Configuration
- Set Supabase Edge Function Secrets from Environment File
- Supabase CLI: List Edge Function Secrets
- Management API: Create Edge Function Secret
- Define Import Map for Supabase Function
- Configure OpenAI API Key in Local .env File
- Configure OpenAI Environment Variables for Llamafile (OpenAI Deno SDK)
- Configure VS Code Deno Language Server for Subfolders

### Function Examples
- Invoke Supabase Edge Function POST Endpoint via cURL
- Invoke Supabase Edge Function from Client-Side
- Invoke Supabase Edge Function with pg_net
- Supabase Edge Function for Resend Email Sending
- Supabase Edge Function Handler for Custom Auth Emails
- Supabase Edge Function for Telegram Bot Location Updates
- Supabase Edge Function to Generate Embeddings (Webhook)
- Deno Hook for Conditional WhatsApp/SMS Messaging with Twilio
- Deno Serverless Function for Email Dispatch with Fallback
- Implement CORS Preflight and Main Logic in Supabase Edge Function
- Re-routing Requests with Supabase Edge Runtime

## 6. Storage

### File Upload and Management
- Upload and Download a file from Supabase Storage
- Specify Content Type During File Upload to Supabase Storage
- Create Supabase Profile Photo Upload Widget in React
- Configure Uppy for Resumable Uploads with Supabase in React
- Create Vue.js Avatar Upload Widget with Supabase Storage
- Generate Public URL using Supabase SDK
- Allow Individual User Access to Own Uploaded Files
- Migrate Supabase Storage Objects with JavaScript

### Storage Functions
- Create Postgres function for optimized Supabase Storage object listing

## 7. Realtime

### Broadcast
- Send Broadcast Messages to a Supabase Realtime Channel in JavaScript
- Broadcasting Messages with Supabase Dart Client
- Sending Broadcast Message via cURL to Supabase Realtime API
- Broadcasting Messages from Supabase Database with SQL
- Supabase JavaScript Client for Realtime Broadcast Subscription
- Receiving Broadcast Messages with Supabase Realtime - Dart
- Receiving Broadcast Messages with Supabase Realtime - Kotlin
- Receiving Broadcast Messages with Supabase Realtime - Python
- Acknowledging Broadcast Messages with Supabase Realtime in Kotlin

### Presence
- Send User Presence State using Supabase track()
- Implementing Realtime Broadcast and Presence with Supabase Flutter

### Database Changes
- Filter Supabase Realtime Changes for Specific Inserts
- Listen to Supabase Postgres Changes with Greater Than (GT) Filter
- Supabase Realtime: Database Broadcast Workload

### Chat and Collaboration
- Realtime Chat Component with Initial Messages (React/Next.js)
- Realtime Chat with Initial Messages (TSX)
- Flutter Chat Message Input Bar Widget (_MessageBar)
- RealtimeCursors Component Props API
- RealtimeAvatarStack Component Props

## 8. AI and Vector Search

### Embeddings and Vector Operations
- Generate OpenAI Embedding with Arbitrary Dimensions
- Create Embedding for Question with OpenAI API (TypeScript)
- Generate and Store Embeddings in PostgreSQL with JavaScript
- Generate and store embeddings using JavaScript and Supabase
- Store and Index Image Embeddings in Supabase with vecs (Python)
- Compare Truncated vs. API Shortened Embeddings (After Normalization)
- Process and Schedule Embedding Jobs with PL/pgSQL and pg_cron
- Query pg_net._http_response for failed embedding jobs

### Vector Search
- Insert or Update Vectors in Supabase Vecs Collection
- Query Vecs Collection by Text with Hugging Face Adapter
- Upsert Data with Async Vecs Client (Python Mock)
- Disconnect from Supabase Vecs Client
- Create Postgres function for semantic search using negative inner product
- Execute PostgreSQL Vector Search Function with Supabase Client (TypeScript)
- Define hybrid_search function for combined full-text and semantic queries
- Search Documents using Supabase Vector Store in LangChain (Node.js)
- Set IVFFlat Probes for Current Session in SQL

### AI Models and Inference
- Initialize AI Inference Session in Edge Function
- Execute AI Model Inference
- Execute Supabase Ollama Function via cURL
- Install Mistral Model with Ollama

## 9. Other Frameworks Integration

### React and React Native
- Create React Context for Supabase Authentication State
- Update React Table Component with State Management
- Implement Supabase Authentication and Logout in React
- React App Component for Supabase Session Management
- Set up React Native Expo App and Install Dependencies
- Create File Listing Page with Floating Action Button (React Native)
- Integrate Avatar Component into React Native Account Page
- Expo React Native Apple Authentication Component
- Configure Expo URL Scheme for Deep Linking
- Configure Android Deep Link Intent Filter in Manifest
- Install Flutter dependencies for Supabase and Google Sign-In

### Flutter
- Initialize Supabase Client in Flutter Main Function
- Displaying Related Movies in Flutter with FutureBuilder
- Flutter Canvas UI Layout with Gesture and Mouse Tracking
- Update Driver Marker and Adjust Map View in Flutter
- Configure iOS Info.plist for Flutter Google Sign-in

### Angular and Ionic
- Configure Angular AppModule with ReactiveFormsModule
- Design User Registration Form with Ionic and Angular
- Implement Groups Page Logic in Angular/Ionic
- Design Groups Page UI in Ionic/Angular
- Implement Account Component in Angular with Supabase
- Angular Board Component Logic for Data Management
- Angular Board Invite User Section
- Configure Ionic PWA Elements in main.ts
- Handle Supabase Magic Link Sign-In with Ionic Alert

### Other Frameworks
- Integrate Account and Auth Components into RedwoodJS Home Page
- Launch RedwoodJS Development Server
- Implement Supabase Account Profile Management in React
- Create a Nuxt.js Application
- Query Data from Supabase in Nuxt App
- Initialize Supabase Client in SolidJS
- Run SolidJS Application Locally
- Initialize Supabase Server Client in Astro Middleware
- Initialize Supabase Server Client in Astro
- Initialize Supabase Browser Client in Astro Component
- Create Supabase Server Client Utility for Express
- Hono Middleware for Supabase Server Client
- Install Supabase Auth Helpers for Remix
- Supabase Authenticated Client in Remix Loader Function

## 10. Client Libraries and SDKs

### JavaScript/TypeScript
- Install Supabase JavaScript Client
- Initializing Supabase Client with TypeScript Types
- Initialize Supabase Client with Explicit Options
- Configure Non-Singleton Supabase Client Instance
- JavaScript Supabase Client Select Query Example
- Performing Type-Safe JSON Queries with Supabase (TypeScript)
- Improve Type Safety with Supabase Helper Types
- Override Supabase Query Response Types
- Generate TypeScript Types for Supabase Schema using CLI
- Automating Supabase Type Updates with GitHub Actions Workflow (YAML)

### Other Languages
- Initializing Supabase Client in Python
- Install Supabase Python Library
- Supabase Auth Error Handling in Python
- Inserting Multiple Records with Supabase Python
- Initializing Supabase Client in Swift
- Supabase Client Libraries for Swift
- Define Transferable AvatarImage Type (Swift)
- Defining Data Models and Inserting Records with Supabase Kotlin
- Define Product Data Transfer Object (DTO) in Kotlin
- Add Supabase and Ktor Dependencies to Gradle (Kotlin)
- Configure Ktor Client Engines for Kotlin Multiplatform
- Initialize Supabase Client with ComposeAuth for Google Sign-in (Kotlin)
- Initialize Supabase Client for Apple Native Login in Kotlin
- Supabase Client Libraries for Ruby
- Supabase Client Libraries for Godot Engine (GDScript)

## 11. Testing and Development Tools

### CLI Commands
- Initialize Supabase Project with CLI
- Logging in to Supabase CLI
- Link Local Project to Remote Supabase
- Supabase CLI: Link to a Supabase project
- Supabase CLI: domains delete Command
- Supabase CLI: domains activate Command
- Supabase CLI: vanity-subdomains check-availability Command
- Supabase CLI Commands for SSO Management
- Supabase CLI: Configure LinkedIn OIDC Provider
- Reset Supabase Database to Apply Seed Data (CLI)
- Initialize and Start Supabase for CI/CD Testing
- Configure Supabase CLI for Local Background Task Testing

### Debugging and Performance
- Explain Query Plan in Postgres
- Run EXPLAIN VERBOSE to view query_id for a query
- Measure SQL Query Performance with EXPLAIN ANALYZE for RLS Testing
- Chain explain() method to a Supabase query
- Filter Postgres logs by error severity levels
- Filter Supabase Logs by Client IP Address
- Retrieve User IP Addresses from Edge Logs (SQL)
- Extract Client IP from X-Forwarded-For Header
- Supabase Edge Log Request Data Fields
- Configure Sentry for Next.js Browser Environment with Supabase
- Sentry Deno SDK Scope Management

### Configuration
- Creating Local .env File for Secrets
- Project Directory Structure with .env and config.toml
- Preparing .env for Production Secrets Deployment
- Configure Supabase environment variables for SSR
- Set Environment Variables for Supabase Management API
- Configure SMTP Environment Variables for Email Services
- Define Supabase Hook Secrets Variable

## 12. Security and SSO

### Single Sign-On (SSO)
- Supabase signInWithSSO with redirectTo for Multi-Subdomain SSO
- Initiate SSO Login with Supabase JavaScript Client
- Google Workspace SAML Service Provider Details for Supabase SSO
- Configure SAML Attribute Mapping JSON for Supabase
- Example SAML 2.0 Assertion with Mapped Attributes
- IdP Metadata URL Structure Example

### Security Features
- Enable Supabase Project SSL Enforcement via Management API
- General Guidelines for Protecting External APIs with Supabase JWT
- Return Retry-able Error from HTTP Hook
- Attach Metadata to Requests with User-Agent Header Examples
- Verify and Decode a JSON Web Token (JWT) in PostgreSQL
- Configure Statement Timeout for PostgREST Roles
- Configure Per-Role Query Cost Limits
- Set Postgres Role-Level Timeout
- Raise Custom HTTP Error in Postgres Function

### Audit and Monitoring
- Enable Global PGAudit Logging for Postgres Role
- Verify Global PGAudit Logging for Postgres Role
- Configure PGAudit Session Mode Logging Categories (Examples)
- SQL: Enable Auditing on a Table
- SQL: Enable/Disable PGAudit Logging of Table Rows
- Unassign Custom Audit Role and Verify for Object Logging
- Advanced Logging Techniques in PostgreSQL PL/pgSQL

## 13. Miscellaneous

### Configuration and Management
- Supabase Direct PostgreSQL Connection String
- Supabase Redirect URLs for Netlify and Vercel Previews
- Supabase Custom Domain Hourly Billing Example
- Reverify Custom Domain DNS with Supabase CLI
- Enable Anonymous Sign-ins in Supabase CLI
- Configure AWS Credentials for Supabase Edge Function
- MapLibre GL JS Configuration Using Edge Function Proxy
- Set Supabase database URL as Fly.io secret
- Extract Vercel Postgres Connection URL

### GraphQL
- GraphQL StringFilter Input Type with Text Matching Options
- Execute GraphQL Query with pg_graphql's gql.resolve
- Alternative GraphQL Query Using Built-in Collection Filter
- Define SQL functions for computed relationships (many-to-one, one-to-many)

### Utilities and Helpers
- Run OpenAPI Specification Generation Script
- SupaShim: Firebase to Supabase Migration Tool
- Parse Tree After Closing Leaf Nodes
- Example Database Schema and Generated TypeScript Types
- Generated TypeScript Database Types
- Database View: michelp-adminpack index_usage Schema
- Supabase User Object Properties Reference
- Supabase Auth Error Definitions
- Supabase Edge Functions SLA
- Supabase Contributions to PostgreSQL Core
- Supabase Support for OrioleDB Development

## 14. Data Operations

### Queries and Filtering
- Query data from the app
- Filter user data with Supabase JavaScript client before RLS
- Perform Basic Full Text Search on a Single Column
- Postgres FTS: Querying with websearch_to_tsquery
- SQL: Example Select Query on Document Sections
- SQL Query for Blog Posts and Comments
- Query Shifts with Explicit Multi-Key Joins using Supabase

### Data Modification
- Insert initial data into a table using SQL
- Insert Multiple Records into Supabase 'movies' Table
- Update a Single Document in FerretDB Collection
- Update the title of an existing document
- Complete `supabase-js` soft delete and restore workflow
- Add a new column to the employees table
- Efficiently Change Column Type on Large PostgreSQL Table
- Renaming Case-Sensitive Tables to Lowercase in SQL

### Batch Operations
- Send multiple table rows in one request using pg_net
- Manually Run Full Vacuum on a Postgres Table
- Drop PostgreSQL Subscriptions and Replication Slots
- Check PostgreSQL Auto-Increment Sequence Synchronization

### External API Integration
- Execute HTTP GET Request with pg_net
- Perform a Simple HTTP POST Request in PostgreSQL
- Find Failed pg_net HTTP Requests
- Save Paddle Credentials as a Postgres Foreign Server
- Initialize S3 Client with Access Keys (JavaScript AWS SDK)

## 15. Development Workflows

### Build and Development Commands
- Start the React development server
- Run Next.js development server
- Start Rails console
- Start SvelteKit Development Server
- Deploy database seed data (optional)
- Apply Background Styling to Registration Page
- Add routes for instruments pages in App.tsx
- Initial Refine Component Configuration in App.tsx

### Forms and Validation
- Define Zod Schema for Form Validation
- Example Usage of FormField with React Hook Form (TSX)
- Anatomy of a FormField Component in React Hook Form (TSX)
- Reset HCaptcha challenge
- Install HCaptcha React component

### UI Components
- Basic Error Message Component
- Skeleton Component
- Popover Component
- Import Slider component
- Import Drawer Components in React/Next.js
- Install Input Component via CLI
- Install Resizable Component via shadcn-ui CLI
- Install dat.gui library
- Animating Staggered Elements with Framer Motion in React
- React Components for 3D Particle Visualization
- Detecting Viewport Intersection for Infinite Scroll in React
- Wrap fetch with fetch-retry and create Supabase client