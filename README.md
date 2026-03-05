# Brian M. Githinji — Quantitative Finance Portfolio

> Personal portfolio showcasing projects in **quantitative finance**, **financial engineering**, and **financial data science** — including derivatives pricing, portfolio optimisation, risk modelling, and financial time-series analysis with a focus on African capital markets and the Nairobi Securities Exchange (NSE).

**Live Site:** [briangithinji.vercel.app](https://briangithinji.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Contact Form | Formspree |
| Deployment | Vercel |

---

## Key Features

- **Dynamic project system** powered by a single `projects.json` file
- **Clean institutional-style dark design**
- **Fully responsive** across all devices
- **SEO-optimised** with structured metadata
- **Contact form** integration via Formspree
- **Downloadable CV** from the contact page

---

## Project Structure

```
portfolio/
├── app/          # Application pages
├── components/   # Layout components (Navbar, Footer)
├── data/         # Project data source
├── lib/          # Utility functions
├── styles/       # Global styling
└── public/       # Static assets (CV)
```

> Projects are managed through **`data/projects.json`**, allowing new projects to be added without modifying application code.

---

## Running Locally

```bash
git clone https://github.com/BrianGithinji-BMG/portfolio.git
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deployment

The site is deployed on **Vercel**. Every push to the `main` branch automatically triggers a new deployment.
