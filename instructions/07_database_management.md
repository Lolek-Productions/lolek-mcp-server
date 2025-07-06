# Chapter 7: Database Management

## Overview

This chapter covers database management workflows for applications using Supabase as the backend. Database management focuses on maintaining up-to-date schema documentation, managing database changes, and establishing clear workflows between human developers and AI agents.

## Purpose

Establish effective database management practices that:
- Maintain accurate, real-time database documentation for AI consumption
- Preserve human control over database structure and schema changes
- Provide clear workflows for database updates and documentation
- Support collaboration between developers and AI agents
- Ensure consistent database interaction patterns

---

## Refresh the Database Structure
Run the following file to refresh the schema for the postgres database hosted at Supabase.
/scripts/generate-database-docs.sh
Once this file is run, you can view the schema at DATABASE.md
Find the example at /DATABASE.md

## Instructions for the Agent
- Do not create migrations for Supabase directly
- AI agents can propose database changes but must share the SQL with the user for approval
- When suggesting schema changes, provide the complete SQL statements
- Human developers maintain final control over database schema execution
- Always explain the purpose and impact of proposed database changes

## Supabase - running on the remote server
Using the CLI but mostly for the following command:
supabase db push