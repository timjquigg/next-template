# Website Template

## Purpose

This is a generic professional website template that will be used to quickly create and deploy professional portfolio and home pages.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technologies used

Next.js was used as the backbone for this project as the resulting pages can be CDN hosted and allow for a serverless API route to handle sending of contact e-mails.

Material UI is used for the extensive component library and styling features.

Nodemailer will be used on the API route to handle sending of e-mails generated from the contact form on the website.

This project is being coded using TypeScript.

## To-do

- Complete API route and nodemailer setup
- Update About page to include placeholders for badges:
  - LinkedIn
  - github
  - Facebook
  - etc
- Move data for Carousel to an array and have it populate the carousel programatically instead of hard coded carousel cards
- Move logic from display code for Contact Form and NavBar
- Update documentation

## Resources:

https://nextjs.org/

https://mui.com/
