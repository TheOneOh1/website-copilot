# DevOps Engineer Portfolio Website

A modern, dark-themed, responsive portfolio website built with HTML, CSS, and JavaScript. Designed specifically for DevOps engineers with DevOps-inspired styling and aesthetics.

## 🎨 Features

- **Dark Theme** - Terminal-inspired color scheme with cyan and lime accents
- **Responsive Design** - Mobile-first approach that works on all devices
- **Minimalist Layout** - Clean, professional design with monospace typography
- **DevOps Aesthetic** - Terminal styling with code-like elements
- **Smooth Animations** - Scroll-triggered animations and hover effects
- **Sections:**
  - About Me with social links and resume download
  - Categorized DevOps skills
  - Featured projects with tech stack highlighting
  - Professional experience timeline

## 📋 Page Sections

### About Me
- Brief introduction and professional summary
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Resume download button

### Skills
Organized by DevOps categories:
- Cloud Platforms (AWS, Azure, Google Cloud, DigitalOcean)
- Containerization (Docker, Kubernetes, Helm)
- CI/CD & Automation (Jenkins, GitLab CI, GitHub Actions, ArgoCD)
- Infrastructure as Code (Terraform, Ansible, CloudFormation)
- Monitoring & Logging (Prometheus, Grafana, ELK Stack)
- Languages & Scripts (Bash, Python, Go, YAML)

### Projects
Showcase your work with:
- Project name and description
- Technology stack badges
- Hover effects and animations

### Experience
Timeline view of your professional journey:
- Company name and tenure
- Job title
- Detailed responsibilities

## 🚀 Deployment with GitHub Pages

### Prerequisites
- GitHub account
- Repository with this code

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **Deploy from a branch**
   - Choose branch: **main**
   - Select folder: **/ (root)**
   - Click **Save**

2. **GitHub Actions Workflow:**
   - The `.github/workflows/deploy.yml` file is included
   - Automatically triggers on push to `main`
   - Deployment typically takes 30-60 seconds

3. **Access Your Site:**
   - Available at: `https://yourusername.github.io/website-copilot`
   - Monitor deployment in **Actions** tab

## 🔧 Customization

### Update Your Information
Edit `index.html` to customize:
- Personal introduction
- Social media links (GitHub, LinkedIn, Twitter, Email)
- Project details and tech stacks
- Company names, tenures, and responsibilities
- Resume download link

### Customize Styling
Edit `styles.css` to modify:
- Colors via CSS variables (`:root` selector)
- Typography and spacing
- Responsive breakpoints

### Add Interactivity
Edit `script.js` for custom functionality

## 📱 Responsive Design

- **Desktop**: Full width (1200px max)
- **Tablet**: 768px and below
- **Mobile**: 480px and below

## 🎨 Color Scheme (DevOps Inspired)

- **Primary Dark**: `#0a0e27` - Deep navy
- **Accent Cyan**: `#00d9ff` - Terminal cyan
- **Accent Lime**: `#39ff14` - Terminal green
- **Accent Purple**: `#9d4edd`
- **Text Primary**: `#e8eef8`
- **Text Secondary**: `#a8b4cc`

## 📦 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, animations
- **JavaScript** - Smooth scrolling, animations
- **Font Awesome** - Icons (CDN)
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD automation

## 🔄 CI/CD Workflow

The GitHub Actions workflow automatically:
1. Checks out code on push to `main`
2. Configures GitHub Pages
3. Uploads site files
4. Deploys to GitHub Pages

## 📝 Social Media Links

Update in `index.html`:
```html
<a href="https://github.com/yourusername" class="social-link" title="GitHub">
    <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/yourprofile" class="social-link" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
```

## 📥 Add Your Resume

1. Add `resume.pdf` to repository root
2. Update the link in `index.html`:
```html
<a href="resume.pdf" download="YourName_Resume.pdf" class="btn-resume">
    <i class="fas fa-download"></i> Download Resume
</a>
```

## 🌐 Custom Domain (Optional)

To use your own domain:
1. Go to **Settings** → **Pages**
2. Add custom domain
3. Follow DNS configuration
4. GitHub handles SSL automatically

## 🎯 Quick Start

1. Clone or fork the repository
2. Update `index.html` with your information
3. Add social media links and resume
4. Push to GitHub
5. Your portfolio goes live automatically!

## 📄 License

Open source - customize for your own portfolio

## 💬 Resources

- GitHub Pages: https://docs.github.com/en/pages
- GitHub Actions: https://docs.github.com/en/actions
- Font Awesome Icons: https://fontawesome.com

---

**Your DevOps portfolio is ready to deploy! 🚀**