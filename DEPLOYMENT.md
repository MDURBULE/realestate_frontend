# Hostinger Deployment Guide

## Prerequisites
- Node.js 18+ installed on your local machine
- Git repository set up
- Hostinger hosting account

## Build Process

1. **Local Build (Recommended)**
   ```bash
   npm install
   npm run build
   ```
   This will create a `out` folder with static files.

2. **Upload to Hostinger**
   - Upload the contents of the `out` folder to your Hostinger public_html directory
   - Make sure the `.htaccess` file is in the root directory

## Alternative: Build on Hostinger

If you prefer to build on Hostinger:

1. **Upload Source Code**
   - Upload your entire project to a subdirectory (e.g., `src`)
   - Don't upload `node_modules` or `.next` folders

2. **SSH into Hostinger** (if available)
   ```bash
   cd public_html/src
   npm install
   npm run build
   ```

3. **Move Built Files**
   ```bash
   cp -r out/* ../public_html/
   ```

## Important Notes

- The `.htaccess` file must be in the root directory of your website
- Make sure all file permissions are set correctly (644 for files, 755 for directories)
- If using a subdomain, update the `NEXT_PUBLIC_BASE_URL` environment variable

## Troubleshooting 403 Errors

1. **Check File Permissions**
   - Files: 644
   - Directories: 755
   - `.htaccess`: 644

2. **Verify .htaccess Location**
   - Must be in the root directory (public_html)

3. **Check Hostinger Settings**
   - Ensure static hosting is enabled
   - Verify domain/subdomain configuration

4. **Clear Browser Cache**
   - Hard refresh (Ctrl+F5) or clear cache

## Environment Variables

Set these in your Hostinger environment or update the code:
- `NEXT_PUBLIC_BASE_URL`: Your actual domain (e.g., https://yourdomain.com) 