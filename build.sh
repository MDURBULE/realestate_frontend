#!/bin/bash

# Build script for Hostinger deployment

echo "🚀 Starting build process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set environment variable for production
export NODE_ENV=production

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Static files are in the 'out' directory"
    echo "📋 Next steps:"
    echo "   1. Upload contents of 'out' folder to Hostinger public_html"
    echo "   2. Make sure .htaccess file is in the root directory"
    echo "   3. Set file permissions: 644 for files, 755 for directories"
else
    echo "❌ Build failed!"
    exit 1
fi 