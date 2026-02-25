# 🚀 Deploy DSG Website to Vercel

## Method 1: Deploy via Vercel Website (Easiest - No Git Required)

### Step-by-Step:

1. **Go to Vercel**
   - Visit: https://vercel.com/
   - Click "Sign Up" (use GitHub, GitLab, or Email)

2. **Create New Project**
   - Click "Add New..." → "Project"
   - Choose "Deploy without Git"

3. **Upload Your Files**
   - Drag and drop your entire project folder
   - OR click "Browse" and select all files

4. **Deploy**
   - Click "Deploy"
   - Wait 30-60 seconds
   - Done! 🎉

5. **Get Your URL**
   - Vercel will give you a URL like: `your-project.vercel.app`
   - Share this URL with anyone!

---

## Method 2: Deploy via GitHub (Recommended for Updates)

### Step-by-Step:

1. **Create GitHub Account**
   - Go to: https://github.com/
   - Sign up if you don't have an account

2. **Create New Repository**
   - Click "+" → "New repository"
   - Name it: `dsg-courier-website`
   - Make it Public
   - Click "Create repository"

3. **Upload Your Code to GitHub**
   
   Open Terminal in your project folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - DSG Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dsg-courier-website.git
   git push -u origin main
   ```
   
   Replace `YOUR_USERNAME` with your GitHub username.

4. **Connect to Vercel**
   - Go to: https://vercel.com/
   - Sign up/Login with GitHub
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your `dsg-courier-website` repo
   - Click "Deploy"

5. **Done!**
   - Your site is live at: `your-project.vercel.app`
   - Every time you push to GitHub, Vercel auto-deploys! 🚀

---

## Method 3: Deploy via Vercel CLI (For Developers)

### Install Vercel CLI:
```bash
npm install -g vercel
```

### Deploy:
```bash
cd /path/to/your/project
vercel
```

Follow the prompts and you're done!

---

## 🎯 After Deployment

### Custom Domain (Optional)
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `dsgcourier.com`)
4. Follow DNS setup instructions

### Environment Variables (For Contact Form)
1. In Vercel dashboard → "Settings" → "Environment Variables"
2. Add: `WEB3FORMS_ACCESS_KEY` = your actual key
3. Update `contact.html` to use this variable (if needed)

---

## 📱 Your Live Website Will Have:
- ✅ HTTPS (automatic SSL)
- ✅ Global CDN (fast worldwide)
- ✅ Auto-scaling
- ✅ Free hosting
- ✅ Custom domain support

---

## 🆘 Troubleshooting

**Issue: 404 Error**
- Make sure `index.html` is in the root folder
- Check `vercel.json` is present

**Issue: Images not loading**
- Verify `assets/images/` folder structure
- Check file paths are relative (not absolute)

**Issue: Contact form not working**
- Remember to add your Web3Forms Access Key!
- Check `contact.html` line with `YOUR_ACCESS_KEY_HERE`

---

## 📞 Need Help?
Contact: Yakin Patel | MO - 98987 37757

---

## 🎉 Quick Deploy Checklist
- [ ] Sign up on Vercel
- [ ] Upload/Import your project
- [ ] Click Deploy
- [ ] Get your live URL
- [ ] Update Web3Forms Access Key
- [ ] Test contact form
- [ ] Share your website!
