# VS Code Theme Deployment Guide

Complete guide to publishing the Perpetuity Theme to the Visual Studio Code Marketplace.

---

## 📋 Prerequisites

Before publishing, you'll need:

1. **Node.js and npm** installed (check with `node --version` and `npm --version`)
2. **Git** installed and configured
3. **VS Code Extension Manager (vsce)** - the official publishing tool
4. **Microsoft Account** (for Azure DevOps)
5. **Publisher Account** on the VS Code Marketplace

---

## 🔧 Step 1: Install vsce (VS Code Extension Manager)

Open your terminal and run:

```bash
npm install -g @vscode/vsce
```

Verify installation:
```bash
vsce --version
```

---

## 🎫 Step 2: Create a Personal Access Token (PAT)

### 2.1 Go to Azure DevOps
Visit: https://dev.azure.com

### 2.2 Sign in with your Microsoft Account
- Create an account if you don't have one
- Organization name doesn't matter (you won't use it for publishing)

### 2.3 Create Personal Access Token
1. Click on your profile icon (top right) → **Personal Access Tokens**
2. Click **+ New Token**
3. Configure the token:
   - **Name**: `VS Code Marketplace Publishing`
   - **Organization**: Select your organization
   - **Expiration**: Choose duration (90 days, 1 year, or custom)
   - **Scopes**: Click **Show all scopes** → Check **Marketplace** → Select **Manage**
4. Click **Create**
5. **IMPORTANT**: Copy the token immediately! You won't be able to see it again.
   - Save it securely (password manager recommended)

---

## 🏢 Step 3: Create a Publisher Account

### 3.1 Go to the Marketplace Management Portal
Visit: https://marketplace.visualstudio.com/manage

### 3.2 Sign in
Sign in with the same Microsoft account used for Azure DevOps

### 3.3 Create Publisher
1. Click **Create Publisher** (or **+ New Publisher**)
2. Fill in the form:
   - **ID**: `SathwikKuncham` (must match `package.json` publisher field)
   - **Display Name**: `Sathwik Kuncham` (or your preferred name)
   - **Description**: Brief description about you
3. Click **Create**

**Note**: Your `package.json` already has `"publisher": "SathwikKuncham"`, so use exactly `SathwikKuncham` as the ID.

---

## 📦 Step 4: Prepare Your Extension for Publishing

### 4.1 Verify Required Files

Check that you have these files (✅ = already present):

- ✅ `package.json` - Extension manifest
- ✅ `README.md` - Description and usage instructions
- ✅ `CHANGELOG.md` - Version history
- ✅ `LICENSE` - License file
- ✅ `.vscodeignore` - Files to exclude from package
- ✅ `images/Perpetuity_logo.png` - Extension icon
- ✅ Theme JSON files in `themes/` folder

### 4.2 Verify package.json

Your `package.json` should have (already configured):
```json
{
  "name": "perpetuity-theme",
  "displayName": "Perpetuity Theme",
  "description": "A clean, modern theme...",
  "version": "2.0.1",
  "publisher": "SathwikKuncham",
  "author": { "name": "Sathwik Kuncham" },
  "license": "SEE LICENSE IN LICENSE",
  "engines": { "vscode": "^1.60.0" },
  "homepage": "https://github.com/sathwikkuncham/Perpetuity_theme#readme",
  "bugs": { "url": "https://github.com/sathwikkuncham/Perpetuity_theme/issues" },
  "repository": {
    "type": "git",
    "url": "https://github.com/sathwikkuncham/Perpetuity_theme.git"
  },
  "icon": "images/Perpetuity_logo.png",
  "categories": ["Themes"],
  "keywords": [...],
  "contributes": { "themes": [...] }
}
```

✅ **All required fields are present!**

### 4.3 Update README.md (Optional)

Consider adding to your `README.md`:
- Installation instructions
- Screenshots showing both light and dark themes
- Feature highlights
- How to enable semantic highlighting
- Link to GitHub repository

---

## 🧪 Step 5: Test Package Locally

### 5.1 Navigate to your theme directory
```bash
cd /home/user/Perpetuity_theme
```

### 5.2 Package the extension
```bash
vsce package
```

This creates a `.vsix` file (e.g., `perpetuity-theme-2.0.1.vsix`)

### 5.3 Test the packaged extension
Install it locally in VS Code:

**Option A: Via Command Line**
```bash
code --install-extension perpetuity-theme-2.0.1.vsix
```

**Option B: Via VS Code UI**
1. Open VS Code
2. Press `Ctrl+Shift+P` → "Extensions: Install from VSIX..."
3. Select your `.vsix` file
4. Test both themes thoroughly

### 5.4 Verify package contents
```bash
vsce ls
```
This shows all files that will be included in the package. Make sure:
- ❌ Test files are NOT included
- ❌ `.vscode/` folder is NOT included
- ✅ Theme JSON files ARE included
- ✅ `README.md`, `CHANGELOG.md`, `LICENSE` ARE included
- ✅ Images folder IS included

---

## 🚀 Step 6: Publish to Marketplace

### 6.1 Login to vsce

**First Time Publishing:**
```bash
vsce login SathwikKuncham
```

It will prompt you for your **Personal Access Token** (from Step 2).
Paste the token and press Enter.

**Note**: The token is stored securely. You won't need to enter it again unless it expires.

### 6.2 Publish the extension

```bash
vsce publish
```

This will:
1. Validate your extension
2. Package it
3. Upload it to the marketplace
4. Make it publicly available (after review)

**Alternative: Publish with version bump**
```bash
# Publish and increment patch version (2.0.1 → 2.0.2)
vsce publish patch

# Publish and increment minor version (2.0.1 → 2.1.0)
vsce publish minor

# Publish and increment major version (2.0.1 → 3.0.0)
vsce publish major
```

### 6.3 Wait for Publishing

- Publishing usually takes **5-10 minutes**
- The extension goes through automated validation
- You'll receive an email notification when it's live

### 6.4 Verify on Marketplace

Visit: https://marketplace.visualstudio.com/items?itemName=SathwikKuncham.perpetuity-theme

Check:
- ✅ Theme appears correctly
- ✅ Description is formatted properly
- ✅ Icon displays
- ✅ Screenshots are visible
- ✅ Install button works

---

## 🔄 Step 7: Updating Your Extension

### 7.1 Make Changes
Update your theme files as needed.

### 7.2 Update CHANGELOG.md
Add a new version entry describing your changes.

### 7.3 Update Version in package.json
Manually bump the version:
```json
"version": "2.0.2"
```

Or let `vsce` do it automatically (see Step 6.2).

### 7.4 Commit and Push Changes
```bash
git add .
git commit -m "Update theme to v2.0.2"
git push origin main
```

### 7.5 Publish Update
```bash
vsce publish
```

Users will automatically get the update notification in VS Code!

---

## 📊 Step 8: Monitor Your Extension

### 8.1 View Statistics
Visit: https://marketplace.visualstudio.com/manage/publishers/SathwikKuncham

You can see:
- **Installs**: Total number of installs
- **Downloads**: Total downloads
- **Ratings**: User ratings and reviews
- **Trending**: Install trends over time

### 8.2 Respond to User Feedback
- Check reviews regularly
- Respond to issues on GitHub
- Update based on user requests

---

## 🎯 Quick Reference: Common Commands

### Package Extension (Test Locally)
```bash
vsce package
```

### Publish Extension
```bash
vsce publish
```

### Publish with Version Bump
```bash
vsce publish patch   # 2.0.1 → 2.0.2
vsce publish minor   # 2.0.1 → 2.1.0
vsce publish major   # 2.0.1 → 3.0.0
```

### List Package Contents
```bash
vsce ls
```

### Show Extension Info
```bash
vsce show SathwikKuncham.perpetuity-theme
```

### Unpublish Extension (Use with Caution!)
```bash
vsce unpublish SathwikKuncham.perpetuity-theme
```

---

## ⚠️ Troubleshooting

### Error: "Missing publisher name"
- Make sure `package.json` has `"publisher": "SathwikKuncham"`
- Verify you created a publisher account with ID `SathwikKuncham`

### Error: "Missing repository"
- Ensure `package.json` has a `repository` field
- ✅ Already configured in your package.json

### Error: "Missing LICENSE"
- Ensure you have a `LICENSE` file
- ✅ Already present

### Error: "Icon not found"
- Verify `images/Perpetuity_logo.png` exists
- ✅ Already present

### Error: "Authentication failed"
- Your Personal Access Token may have expired
- Create a new token and run `vsce login SathwikKuncham` again

### Extension not showing up in search
- Wait 10-15 minutes after publishing
- Try searching with exact name: "Perpetuity Theme"
- Check if it's listed under your publisher page

---

## 🎉 Post-Publishing Checklist

After publishing, consider:

- ✅ Add a badge to your GitHub README:
  ```markdown
  [![VS Code Marketplace](https://img.shields.io/vscode-marketplace/v/SathwikKuncham.perpetuity-theme.svg)](https://marketplace.visualstudio.com/items?itemName=SathwikKuncham.perpetuity-theme)
  [![Installs](https://img.shields.io/vscode-marketplace/i/SathwikKuncham.perpetuity-theme.svg)](https://marketplace.visualstudio.com/items?itemName=SathwikKuncham.perpetuity-theme)
  ```

- ✅ Share on social media (Twitter, Reddit, Dev.to)
- ✅ Create a blog post about the theme
- ✅ Ask friends/colleagues to try it and review
- ✅ Monitor GitHub issues for bug reports
- ✅ Keep CHANGELOG.md updated with each release

---

## 🔗 Useful Links

- **VS Code Marketplace**: https://marketplace.visualstudio.com/vscode
- **Publisher Management**: https://marketplace.visualstudio.com/manage
- **Extension Publishing Guide**: https://code.visualstudio.com/api/working-with-extensions/publishing-extension
- **Theme Documentation**: https://code.visualstudio.com/api/extension-guides/color-theme
- **vsce Documentation**: https://github.com/microsoft/vscode-vsce

---

## 📝 Summary: Steps to Publish

1. ✅ Install vsce: `npm install -g @vscode/vsce`
2. ✅ Create Personal Access Token on Azure DevOps
3. ✅ Create Publisher account with ID `SathwikKuncham`
4. ✅ Verify all files are ready (package.json, README, CHANGELOG, LICENSE)
5. ✅ Test locally: `vsce package` → install `.vsix` file
6. ✅ Login: `vsce login SathwikKuncham`
7. ✅ Publish: `vsce publish`
8. ✅ Verify on marketplace and share!

---

**Ready to publish?** Your theme is all set! 🚀

Just follow the steps above and your theme will be live on the VS Code Marketplace within minutes!

**Questions?** Open an issue on GitHub or refer to the official VS Code documentation.

**Good luck!** 🎨
