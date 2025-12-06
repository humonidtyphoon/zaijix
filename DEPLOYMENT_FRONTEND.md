# Vercel Deployment

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)

## Steps to Deploy Frontend

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin master
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Select the `frontend` folder as the root directory
   
3. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `yarn build`
   - Output Directory: `dist`
   - Install Command: `yarn install`

4. **Environment Variables** (if needed)
   Add in Vercel dashboard:
   - `VITE_API_URL` = your backend URL (e.g., https://api.zaijix.com)

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete
   - You'll get a URL like: `your-project.vercel.app`

## Custom Domain Setup (Namecheap → Vercel)

1. **In Vercel Dashboard:**
   - Go to your project settings
   - Click "Domains"
   - Add `zaijix.com` and `www.zaijix.com`
   - Vercel will show you DNS records to add

2. **In Namecheap:**
   - Log in to Namecheap
   - Go to Domain List → Manage → Advanced DNS
   
3. **Add DNS Records:**
   
   For root domain (zaijix.com):
   ```
   Type: A Record
   Host: @
   Value: 76.76.19.19 (Vercel IP)
   TTL: Automatic
   ```
   
   For www subdomain:
   ```
   Type: CNAME Record
   Host: www
   Value: cname.vercel-dns.com
   TTL: Automatic
   ```
   
   For verification (Vercel will give you this):
   ```
   Type: TXT Record
   Host: @
   Value: [verification code from Vercel]
   TTL: Automatic
   ```

4. **Wait for DNS Propagation** (5-48 hours, usually ~1 hour)

5. **Enable SSL**
   - Vercel automatically provisions SSL certificates
   - Your site will be available at https://zaijix.com

