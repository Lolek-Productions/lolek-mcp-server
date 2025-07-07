# Chapter 2: Authentication

## Overview

This chapter covers authentication implementation for web applications, focusing on user registration, login, session management, and route protection. Authentication is a fundamental requirement for most applications, providing user identity, access control, and personalized experiences.

## Purpose

Establish a secure, user-friendly authentication system that:
- Provides seamless user registration and login experiences
- Protects application routes and resources
- Manages user sessions and state
- Integrates with the overall application architecture
- Supports modern authentication patterns and best practices

## Required Reading

- [Next.js Documentation](../docs/nextjs/) - For middleware, route protection, and server-side authentication patterns

## Chapter Focus

This chapter covers project-specific authentication patterns using Supabase. For detailed Next.js authentication patterns, reference the docs above.

---

## Authentication
use supabase

## Authentication Pages
/signup
/login

## middleware
publicPaths = ['/login', '/signup', '/']

After authentication: redirect to /dashboard

No current request for email verification

## Supabase Configuration Steps

### Disable Email Verification
1. Go to Supabase Dashboard > Authentication > Settings
2. Under "Email Confirmations", disable "Enable email confirmations"
3. Save changes

### Configure Redirect URLs
1. Go to Authentication > URL Configuration
2. Add your development URL (e.g., http://localhost:3000)
3. Add your production URL
4. Set Site URL to your main domain

### Configure Auth Settings
1. Set "Minimum password length" as needed
2. Configure "Password requirements" 
3. Set "Session timeout" (default 24 hours)
4. Enable/disable "Allow new users to sign up" based on requirements

## Administer Supabase Users
1. Go to your Supabase Dashboard
2. Navigate to Authentication > Users
3. Here you can view, edit, and manage user accounts
4. Actions available: view user details, reset passwords, delete users

## Landing Page:
Navigation on the "/" page