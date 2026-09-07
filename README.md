# Aviator's Tech Journey — Personal Blog
A small React blog built with Vite, practicing components, JSX, and props.
## Component Tree

App

├── Header (name)

├── About (image, about)

└── ArticleList (posts)

└── Article (title, date, preview) × N


## Project Structure

- `src/blog.js` — all blog content (name, image, about text, posts array)
- `src/App.jsx` — imports `blog.js`, passes data down as props
- `src/components/` — Header, About, ArticleList, Article
- `src/App.test.jsx` — tests that each component renders its props correctly

## Running the Project

```bash
npm install
npm run dev      # start local dev server
npm test         # run the test suite
npm run build    # production build
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Editing Content

To change the blog name, photo, bio, or posts, edit `src/blog.js` —
no component code needs to change.
