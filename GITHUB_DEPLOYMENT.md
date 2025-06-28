# GitHub to Hostinger Deployment Guide

## 🚀 **Method 1: Hostinger Git Integration (Easiest)**

### Step 1: Prepare Your Repository
1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Configure for Hostinger deployment"
   git push origin main
   ```

### Step 2: Connect in Hostinger
1. **Login to Hostinger Control Panel**
2. **Go to Websites** → Select your domain
3. **Click "Git"** in the left sidebar
4. **Click "Connect Repository"**

### Step 3: Configure GitHub Connection
1. **Choose "GitHub"** as your Git provider
2. **Authorize Hostinger** to access your GitHub account
3. **Select your repository**: `realestate_frontend`
4. **Choose branch**: `main` or `master`

### Step 4: Set Build Configuration
- **Build Command**: `npm install && npm run build`
- **Output Directory**: `out`
- **Node.js Version**: 18 or higher

### Step 5: Add Environment Variables
- **Variable Name**: `NEXT_PUBLIC_BASE_URL`
- **Value**: `https://yourdomain.com` (replace with your actual domain)

### Step 6: Deploy
- **Click "Deploy"** to trigger the first deployment
- **Future pushes** to your main branch will auto-deploy

---

## 🔧 **Method 2: GitHub Actions (Advanced)**

### Step 1: Set Up GitHub Secrets
In your GitHub repository:
1. **Go to Settings** → **Secrets and variables** → **Actions**
2. **Add these secrets**:
   - `SSH_PRIVATE_KEY`: Your Hostinger SSH private key
   - `REMOTE_HOST`: Your Hostinger server hostname
   - `REMOTE_USER`: Your Hostinger username
   - `NEXT_PUBLIC_BASE_URL`: Your domain URL

### Step 2: Get Hostinger SSH Details
1. **In Hostinger Control Panel**:
   - Go to "Advanced" → "SSH Access"
   - Enable SSH access
   - Note your SSH details

### Step 3: Deploy
- **Push to main branch** will trigger automatic deployment
- **Check Actions tab** in GitHub to monitor deployment

---

## 📋 **Prerequisites**

### Before Deploying:
1. **✅ Repository is public or Hostinger has access**
2. **✅ All dependencies are in package.json**
3. **✅ Build script works locally**
4. **✅ .htaccess file is in public folder**
5. **✅ Environment variables are set**

### Required Files:
- `package.json` (with build script)
- `next.config.ts` (with static export config)
- `public/.htaccess` (for URL rewriting)
- `.github/workflows/deploy.yml` (for GitHub Actions)

---

## 🔍 **Troubleshooting**

### Common Issues:

1. **Build Fails**
   - Check Node.js version (18+ required)
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **403 Forbidden After Deployment**
   - Verify `.htaccess` file is uploaded
   - Check file permissions (644 for files, 755 for directories)
   - Clear browser cache

3. **GitHub Actions Fails**
   - Verify SSH keys are correct
   - Check repository secrets are set
   - Ensure SSH access is enabled on Hostinger

4. **Images Not Loading**
   - Check image paths are relative
   - Verify images are in `public` folder
   - Ensure `unoptimized: true` in next.config.ts

---

## 🎯 **Recommended Approach**

**For beginners**: Use **Method 1 (Hostinger Git Integration)**
- Easier to set up
- Built-in error handling
- Automatic deployments

**For advanced users**: Use **Method 2 (GitHub Actions)**
- More control over deployment process
- Better error reporting
- Can add custom deployment steps

---

## 📞 **Support**

If you encounter issues:
1. **Check Hostinger's Git documentation**
2. **Verify your repository is accessible**
3. **Test build locally first**
4. **Check Hostinger support forums**

---

## 🚀 **Quick Start Checklist**

- [ ] Code pushed to GitHub
- [ ] Hostinger Git integration configured
- [ ] Build command set: `npm install && npm run build`
- [ ] Output directory set: `out`
- [ ] Environment variable added: `NEXT_PUBLIC_BASE_URL`
- [ ] First deployment triggered
- [ ] Website accessible at your domain
- [ ] All pages working correctly
- [ ] Images loading properly
- [ ] Contact forms functional 