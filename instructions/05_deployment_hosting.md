# Chapter 5: Deployment & Hosting

## Overview

This chapter covers deployment and hosting strategies for web applications, focusing on modern hosting platforms and domain management. Deployment encompasses getting your application from development to production, including build processes, environment configuration, and domain setup.

## Purpose

Establish a reliable deployment and hosting workflow that:
- Provides seamless integration between development and production environments
- Ensures proper domain and DNS configuration
- Supports continuous deployment from version control
- Manages environment variables and secrets securely
- Enables easy scaling and maintenance

---

## GitHub Integration

Projects are hosted in GitHub for version control and seamless deployment integration.

## SSH Key Management

### How to Add SSH Key to Digital Ocean
1. Generate SSH key pair locally: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Copy public key: `cat ~/.ssh/id_rsa.pub`
3. Log into Digital Ocean dashboard
4. Go to Settings > Security > SSH Keys
5. Click "Add SSH Key" and paste your public key
6. Name the key and save

### How to Add SSH Key to GitHub
1. Generate SSH key if not already done: `ssh-keygen -t rsa -b 4096 -C "your_email@example.com"`
2. Copy public key: `cat ~/.ssh/id_rsa.pub`
3. Go to GitHub > Settings > SSH and GPG keys
4. Click "New SSH key"
5. Paste key, add title, and save
6. Test connection: `ssh -T git@github.com`

## Project Deployment Setup

### How to Start a New Project Linking GitHub and Vercel
1. **Create GitHub Repository**
   - Create new repository on GitHub
   - Clone locally: `git clone [repository-url]`
   - Add your project files and commit

2. **Connect to Vercel**
   - Sign up/login to Vercel with GitHub account
   - Click "Import Project" on Vercel dashboard
   - Select your GitHub repository
   - Configure build settings (usually auto-detected)
   - Deploy

3. **Configure Environment Variables**
   - Go to Vercel project settings
   - Add environment variables under "Environment Variables"
   - Redeploy if necessary

## Domain Configuration

### How to Add Custom Domain to Vercel
1. Go to Vercel project dashboard
2. Navigate to Settings > Domains
3. Add your custom domain (e.g., yourapp.com)
4. Follow DNS configuration instructions
5. Verify domain ownership

### How to Add Credentials to Vercel
1. **Environment Variables**
   - Go to Project Settings > Environment Variables
   - Add variables for development, preview, and production
   - Common variables: DATABASE_URL, API_KEYS, etc.

2. **Secrets Management**
   - Use Vercel's built-in secrets management
   - Never commit secrets to GitHub
   - Use different values for different environments

### DNS Configuration with NameCheap
1. **Access DNS Management**
   - Log into NameCheap account
   - Go to Domain List > Manage
   - Navigate to Advanced DNS tab

2. **Configure DNS Records**
   - Delete existing records if setting up new domain
   - Add new "A" record:
     - Host: "@" (for root domain)
     - Value: Vercel IP address (e.g., 76.76.19.61)
     - TTL: Automatic
   - Add "CNAME" record for www:
     - Host: "www"
     - Value: "cname.vercel-dns.com"

3. **Verify Configuration**
   - DNS changes may take 24-48 hours to propagate
   - Use tools like `dig` or online DNS checkers to verify
   - Confirm SSL certificate is issued automatically