# Deploy Frontend to Netlify - Complete Guide

## Why Netlify?
- ✅ Free for personal/commercial projects
- ✅ Automatic HTTPS/SSL
- ✅ Built-in form handling (no backend needed!)
- ✅ Instant rollbacks
- ✅ Continuous deployment from GitHub

---

## 📋 Step-by-Step Deployment

### Step 1: Prepare Your Code

1. **Make sure you have Git initialized**
   ```bash
   cd c:\Users\voider\Desktop\projects\zaijix
   git status
   ```

2. **If not initialized, set it up**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for Netlify"
   ```

3. **Create GitHub Repository**
   - Go to: https://github.com/new
   - Repository name: `zaijix`
   - Private or Public (your choice)
   - Don't initialize with README
   - Click "Create repository"

4. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/zaijix.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Deploy to Netlify

1. **Sign up for Netlify**
   - Go to: https://app.netlify.com/signup
   - Use "Sign up with GitHub" (easiest option)

2. **Create New Site**
   - Click "Add new site" → "Import an existing project"
   - Click "Deploy with GitHub"
   - Authorize Netlify to access your repositories
   - Select your `zaijix` repository

3. **Configure Build Settings**
   
   Netlify should auto-detect Vite, but verify these settings:
   
   ```
   Base directory: frontend
   Build command: yarn build
   Publish directory: frontend/dist
   ```

4. **Advanced Build Settings** (click "Show advanced")
   
   Add environment variables if needed:
   ```
   Key: VITE_API_URL
   Value: https://api.zaijix.com
   ```
   (Only if you're using the backend later)

5. **Click "Deploy zaijix"**
   - Netlify will start building
   - Takes ~2-3 minutes
   - You'll get a random URL like: `random-name-123456.netlify.app`

6. **Test Your Site**
   - Click the URL to view your deployed site
   - Make sure everything looks correct

---

### Step 3: Add Custom Domain (zaijix.com)

1. **In Netlify Dashboard**
   - Go to: Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `zaijix.com`
   - Click "Verify"
   - Netlify will say "Domain already registered"
   - Click "Add domain" anyway

2. **Add www subdomain**
   - Click "Add domain alias"
   - Enter: `www.zaijix.com`
   - Click "Add"

3. **Get DNS Configuration**
   - Netlify will show you what DNS records to add
   - Click "Set up Netlify DNS" OR "Use external DNS"
   
   **Option A: Use Netlify DNS (Easier - Recommended)**
   **Option B: Keep Namecheap DNS (You control it)**

---

## Option A: Use Netlify DNS (Recommended)

### Benefits:
- Automatic SSL certificate
- Faster deployment
- One less place to manage

### Steps:

1. **In Netlify**:
   - Click "Set up Netlify DNS"
   - Netlify shows you nameservers like:
     ```
     dns1.p03.nsone.net
     dns2.p03.nsone.net
     dns3.p03.nsone.net
     dns4.p03.nsone.net
     ```

2. **In Namecheap**:
   - Log in to Namecheap
   - Dashboard → Domain List
   - Click "Manage" next to zaijix.com
   - Find "NAMESERVERS" section
   - Change from "Namecheap BasicDNS" to "Custom DNS"
   - Enter the 4 Netlify nameservers:
     ```
     dns1.p03.nsone.net
     dns2.p03.nsone.net
     dns3.p03.nsone.net
     dns4.p03.nsone.net
     ```
   - Click green checkmark to save

3. **Wait for DNS Propagation**
   - Usually takes 1-4 hours
   - Can take up to 48 hours
   - Check status: https://dnschecker.org

4. **Verify in Netlify**
   - Go back to Netlify dashboard
   - Domain management will show "DNS configured"
   - SSL certificate will auto-provision in ~5 minutes

---

## Option B: Keep Namecheap DNS

### Steps:

1. **In Netlify**:
   - Domain management → Click "Set up external DNS"
   - Netlify shows you records to add:
   
   For `zaijix.com`:
   ```
   Type: A Record
   Value: 75.2.60.5
   ```
   
   For `www.zaijix.com`:
   ```
   Type: CNAME Record
   Value: random-name-123456.netlify.app
   ```

2. **In Namecheap**:
   - Log in to Namecheap
   - Domain List → Manage → Advanced DNS
   - Add new records:
   
   **Record 1** (Root domain):
   ```
   Type: A Record
   Host: @
   Value: 75.2.60.5
   TTL: Automatic
   ```
   
   **Record 2** (www subdomain):
   ```
   Type: CNAME Record
   Host: www
   Value: random-name-123456.netlify.app
   TTL: Automatic
   ```
   
   **Important**: Replace `random-name-123456` with YOUR actual Netlify subdomain!

3. **Delete Conflicting Records**
   - Remove any other A records for "@"
   - Remove any other CNAME records for "www"
   - Remove any URL Redirect Records

4. **Wait for DNS Propagation**
   - 15 minutes to 48 hours (usually ~1 hour)
   - Check: https://dnschecker.org

5. **Verify SSL**
   - In Netlify: Domain management → HTTPS
   - Click "Verify DNS configuration"
   - Once DNS propagates, SSL certificate provisions automatically
   - Takes 5-10 minutes after DNS is verified

---

## Step 4: Configure Site Settings (Optional but Recommended)

1. **In Netlify Dashboard**:
   - Site settings → General

2. **Change Site Name** (Optional):
   - Click "Change site name"
   - Enter: `zaijix` (if available)
   - Your Netlify URL becomes: `zaijix.netlify.app`

3. **HTTPS Settings**:
   - Site settings → Domain management → HTTPS
   - Ensure "Force HTTPS" is enabled (automatically redirects HTTP → HTTPS)

4. **Build Settings**:
   - Site settings → Build & deploy
   - Verify build command: `yarn build`
   - Verify publish directory: `frontend/dist`

---

## Step 5: Enable Netlify Forms (Bonus - No Backend Needed!)

Since you're using Netlify, you get **free form handling**!

Update `frontend/src/pages/Contact.tsx`:

### Add Netlify form attributes:

Replace the current form implementation with:

```typescript
import { useState, FormEvent } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        } as any).toString()
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      setError('Failed to send. Please email info@zaijix.com directly.');
    }
  };

  // ... rest of component
  
  return (
    <div className="bg-neutral-light py-16">
      {/* ... other content ... */}
      
      <form 
        name="contact" 
        method="POST" 
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" /> {/* Spam protection */}
        
        {/* Your existing form fields */}
      </form>
    </div>
  );
};
```

### Configure in Netlify:
- Site settings → Forms
- Enable form notifications
- Add email: info@zaijix.com
- Get notified on every submission!

---

## 🎯 Final Checklist

After deployment, verify:

- [ ] Site loads at: https://zaijix.com
- [ ] WWW redirect works: https://www.zaijix.com → https://zaijix.com
- [ ] SSL certificate shows padlock icon
- [ ] All 6 pages work (Home, About, Services, Industries, FAQ, Contact)
- [ ] Contact form submits successfully
- [ ] You receive email when form is submitted (if using Netlify Forms)
- [ ] Mobile responsive design works

---

## 🔄 Making Updates After Deployment

Netlify automatically redeploys when you push to GitHub!

```bash
# Make your changes
cd frontend/src
# Edit files...

# Commit and push
git add .
git commit -m "Update homepage hero text"
git push

# Netlify auto-deploys in ~2 minutes!
```

### View Deployment Status:
- Netlify Dashboard → Deploys
- See build logs
- Preview deploy before it goes live
- Instant rollback if something breaks

---

## 📊 Netlify Features You Get Free

✅ **Unlimited bandwidth** for personal projects  
✅ **Automatic HTTPS** with Let's Encrypt  
✅ **CDN** (Content Delivery Network) worldwide  
✅ **Form handling** - 100 submissions/month  
✅ **Deploy previews** for pull requests  
✅ **Instant rollbacks** to previous deploys  
✅ **Custom domain** support  
✅ **Analytics** (paid add-on, but basic stats free)

---

## 🆘 Troubleshooting

### "Page Not Found" after deployment
- Check Build settings → Publish directory is `frontend/dist`
- Check that build completed successfully in Deploys tab

### SSL Certificate Not Working
- Wait 5-10 minutes after DNS propagation
- Go to Domain management → HTTPS → Verify DNS configuration
- Click "Renew certificate"

### Custom Domain Not Working
- Check DNS records in Namecheap match exactly
- Use https://dnschecker.org to verify propagation
- Try in incognito/private browsing mode

### Form Submissions Not Received
- Make sure `data-netlify="true"` is in the form tag
- Check Site settings → Forms → Form notifications
- Test the form while viewing in Netlify Dashboard → Forms

### Build Fails
- Check Deploys → Click failed deploy → View logs
- Common issues:
  - Wrong base directory (should be `frontend`)
  - Missing dependencies (run `yarn install` locally to verify)
  - TypeScript errors (fix linting issues)

---

## 💰 Cost

**FREE** for your use case!

Netlify Free Tier includes:
- Unlimited sites
- 100 GB bandwidth/month
- 300 build minutes/month
- 100 form submissions/month

You'll likely never exceed these limits for a company website.

---

## 🎉 You're Done!

Your Zaijix website will be live at:
- **https://zaijix.com** ← Your domain
- **https://zaijix.netlify.app** ← Netlify subdomain (also works)

With Netlify, you get:
- ✅ Frontend deployed
- ✅ Custom domain connected
- ✅ HTTPS enabled
- ✅ Form handling (no backend needed!)
- ✅ Auto-deploy on every push

**No backend deployment needed!** 🚀

