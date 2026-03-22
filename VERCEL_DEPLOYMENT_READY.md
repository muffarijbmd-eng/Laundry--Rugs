# Vercel Deployment Instructions

This document provides comprehensive instructions on how to deploy the project on Vercel and integrates with Supabase.

## Prerequisites
- Create a Vercel account at [Vercel](https://vercel.com).
- Create a Supabase account at [Supabase](https://supabase.io).

## Steps to Deploy on Vercel

1. **Install Vercel CLI**: 
   Install Vercel CLI globally using npm:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**: 
   Run the following command:
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate.

3. **Initialize the Project**: 
   Navigate to your project folder in the terminal and run:
   ```bash
   vercel
   ```
   Follow the prompts to set up your project.

4. **Set Environment Variables**:
   You will need to set your Supabase database credentials in Vercel. 
   In your terminal, run:
   ```bash
   vercel env add SUPABASE_URL
   vercel env add SUPABASE_ANON_KEY
   ```
   Follow the prompts to enter your Supabase credentials.

5. **Deploy**:
   After successfully setting up, run:
   ```bash
   vercel --prod
   ```
   This will deploy your project to Vercel.

## Supabase Database Credentials
Ensure you have the following Supabase credentials:
- **Supabase URL**: Your unique Supabase project URL.
- **Supabase Anon Key**: Your project's public anonymous key.

These credentials can be found in your Supabase project's settings under API.

## Additional Tips
- Ensure that your project is properly configured to connect to the Supabase database using the credentials provided.
- You can make further configurations through the Vercel dashboard for routing, domains, etc.

For restarts or any changes in environment variables, you can run:
```bash
vercel env pull .env
```
