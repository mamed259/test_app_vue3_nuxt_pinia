# Online Price List Application

[Live Demo](https://test-app-rigips.netlify.app/) to learn more.

This project is a simple online price list application developed as a test project. It showcases the usage of various technologies and best practices including NuxtJS v3, Typescript, Tailwind CSS, Pinia for state management, and more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

## Project Structure (Root Directory)

```bash

components/: Directory containing Vue components

pages/: Directory containing Nuxt.js pages

src/: Source directory for styles and fonts

store/: Directory for Pinia stores

.gitignore: Git ignore file

app.vue: Main application component

nuxt.config.ts: Nuxt.js configuration file

package.json: NPM package file

README.md: Project README file

tailwind.config.js: Tailwind CSS configuration file

tsconfig.json: TypeScript configuration file

types.ts: TypeScript types
```

## Components

```bash

BackButton.vue
A reusable component for navigating back to the previous screen.

CategoryItem.vue
A component to display individual category items.

Footer.vue
A component for the application footer.

Header.vue
A component for the application header.

Loading.vue
A component to show a loading state while data is being fetched.

SearchCategory.vue
A component for searching categories.


```

## Pages

```bash

product-detail/[id].vue
A page to display the details of a selected product. The product ID is used to fetch and display product details.
oducts within a selected category.

products[...slug].vue
A page to display a detail of given category with list of products within clicked category.

index.vue
The main page that displays the list of categories.



```

## Store

```bash

categoriesStore.ts
A Pinia store to manage the state of categories.

productStore.ts
A Pinia store to manage the state of products.


```

## Configuration Files

```bash

nuxt.config.ts
Configuration file for Nuxt.js, defining settings and modules used in the project.

tailwind.config.js
Configuration file for Tailwind CSS, customizing the default Tailwind setup.

tsconfig.json
Configuration file for TypeScript, defining compiler options.

types.ts
File containing TypeScript type definitions used across the project.

```
