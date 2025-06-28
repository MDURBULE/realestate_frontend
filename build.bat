@echo off
echo 🚀 Starting build process...

echo 📦 Installing dependencies...
call npm install

echo 🔨 Building project...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build completed successfully!
    echo 📁 Static files are in the 'out' directory
    echo 📋 Next steps:
    echo    1. Upload contents of 'out' folder to Hostinger public_html
    echo    2. Make sure .htaccess file is in the root directory
    echo    3. Set file permissions: 644 for files, 755 for directories
) else (
    echo ❌ Build failed!
    pause
    exit /b 1
)

pause 