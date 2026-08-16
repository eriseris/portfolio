# CMS-ready content model

The portfolio has a single content boundary in `src/content.jsx`. The site currently renders from `src/data.js`, so there is no database or account to maintain.

## Connect a CMS later

1. Choose any JSON-capable headless CMS, such as Sanity, Contentful, Strapi, Directus, or a small custom API.
2. Create collections matching the fields below.
3. Copy `.env.example` to `.env` and set `VITE_CMS_ENDPOINT` to a public, read-only API endpoint.
4. Return one JSON object containing any collections you want to override. Missing collections continue using local content.

```json
{
  "settings": {
    "studioName": "Your Studio",
    "studioScript": "creative",
    "email": "hello@example.com",
    "phone": "+1 000 000 0000",
    "location": "Worldwide"
  },
  "projects": [
    {
      "slug": "project-slug",
      "title": "Project title",
      "category": "Brand identity",
      "year": "2026",
      "image": "https://your-cdn/image.jpg",
      "size": "wide"
    }
  ],
  "posts": [
    {
      "slug": "article-slug",
      "category": "Design",
      "title": "Article title",
      "date": "August 8, 2026",
      "image": "https://your-cdn/image.jpg"
    }
  ]
}
```

Supported top-level collections are `settings`, `clients`, `projects`, `services`, `processSteps`, `testimonials`, `team`, and `posts`.

## Simple editing without a CMS

Edit `src/data.js`, add images to `assets/`, and commit the changes. The GitHub Pages workflow rebuilds the portfolio automatically.
