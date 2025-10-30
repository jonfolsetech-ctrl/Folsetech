
# FolseTech AI Solutions — Static Site (Ready to Deploy)

A lightweight, SEO-ready static site for **FolseTech AI Solutions** based in **Gonzales, LA**, serving **Baton Rouge to New Orleans**.

## Quick Deploy

### GitHub Pages
1. Create a repo, push this folder.
2. In Settings → Pages, set branch `main` (or `master`) and root `/`.
3. Update `domain_placeholder` (canonical/OG links) by replacing it with your actual URL in the HTML pages or via a simple find/replace.

### AWS Amplify (Recommended)
1. Push this folder to a GitHub repo.
2. In Amplify Console → "New app" → "Host web app" → connect repo.
3. Build settings: static hosting, no build command needed.
4. After deploy, copy the live domain and replace `https://folsetech.example.com` in all HTML files or search/replace globally.

### Netlify (Zero-config)
1. Drag & drop the folder onto app.netlify.com or connect your repo.
2. Publish directory: root of this project.

## Connect Forms & Chatbot

- **Contact Form**: edit `contact.html` form `action` to your Formspree (or another provider) endpoint.
- **Newsletter**: replace the Mailchimp `action` URL in the footer with your audience endpoint.
- **Chatbot**: replace the simple demo in `footer` with your provider's embed code (e.g., Intercom, Drift, Chatbase).

## Local SEO Tips

- Use keywords like "AI solutions", "machine learning Baton Rouge", "data analytics New Orleans", and "automation Gonzales" across pages.
- Keep `sitemap.xml` and `robots.txt` at the project root. Submit your sitemap in Google Search Console.
- Add citations to local directories and keep NAP (name, address, phone) consistent.

## Customize

- Colors & fonts live in `assets/css/styles.css`.
- Replace placeholder images in `assets/img/`.
- Update social links in footer.
- Add real blog posts in `blog.html` or move to a headless CMS later.

## Security

- Ensure your host uses HTTPS (SSL). Most providers issue certificates automatically (Amplify/Netlify/GitHub Pages).
- Avoid embedding secrets in client‑side JS.

## License

Use freely for your business.
