# Website Template

## Purpose

This is a generic professional website template that will be used to quickly create and deploy professional portfolio and home pages.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizations

Data that is displayed on the various pages are currently provided in `lib/data.ts` as a collection of objects. Data can be updated there, or can be overwritten directly in the components if preferred.

The theme used for the project, including the palette and fonts can be edited in `/styles/theme.tsx`. Individual components have style objects provided in `.style.tsx` files next to their associated `.tsx` component/page file.

## Technologies used

Next.js was used as the backbone for this project as the resulting pages can be CDN hosted and allow for a serverless API route to handle sending of contact e-mails.

Material UI is used for the extensive component library and styling features.

Nodemailer will be used on the API route to handle sending of e-mails generated from the contact form on the website.

This project is being coded using TypeScript.

## Resources:

https://nextjs.org/

https://mui.com/
