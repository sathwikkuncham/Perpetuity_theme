# Quick Publishing Instructions

## Before You Start

Make sure you've committed all your changes to git:
```bash
git status
git add .
git commit -m "Prepare for marketplace publishing"
git push
```

## Step-by-Step Publishing

### 1. Install vsce (First Time Only)
```bash
npm install -g @vscode/vsce
```

### 2. Test Package Locally
```bash
cd /home/user/Perpetuity_theme
vsce package
```

This creates `perpetuity-theme-2.0.1.vsix`

### 3. Install and Test
```bash
code --install-extension perpetuity-theme-2.0.1.vsix
```

Then test both themes in VS Code.

### 4. Create Personal Access Token
1. Go to https://dev.azure.com
2. Click profile icon → Personal Access Tokens
3. Create new token with **Marketplace: Manage** scope
4. **Save the token securely!**

### 5. Create Publisher Account
1. Go to https://marketplace.visualstudio.com/manage
2. Create publisher with ID: `SathwikKuncham`

### 6. Login with vsce
```bash
vsce login SathwikKuncham
```
Paste your Personal Access Token when prompted.

### 7. Publish!
```bash
vsce publish
```

### 8. Verify
Visit: https://marketplace.visualstudio.com/items?itemName=SathwikKuncham.perpetuity-theme

## Future Updates

To publish updates:
```bash
# Make your changes, update CHANGELOG.md, then:
vsce publish patch    # For bug fixes (2.0.1 → 2.0.2)
vsce publish minor    # For new features (2.0.1 → 2.1.0)
vsce publish major    # For breaking changes (2.0.1 → 3.0.0)
```

## Files Ready for Publishing

✅ `package.json` - Updated with v2.0.1 and all metadata
✅ `CHANGELOG.md` - Complete version history
✅ `.vscodeignore` - Excludes unnecessary files
✅ `README.md` - Extension description
✅ `LICENSE` - License file
✅ `images/` - Icon and screenshots
✅ `themes/` - Both light and dark themes

**Everything is ready to go!** 🚀

For detailed instructions, see `DEPLOYMENT_GUIDE.md`
