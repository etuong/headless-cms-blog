# Headless Content Management System with Strapi

![Dashboard](screenshot.png)

This repo works in conjunction with Strapi to create a full stack blogging website. Please have a basic understand of Strapi before you get started. https://strapi.io/

This is my own [Strapi server](https://strapi-blogging-server.onrender.com/admin) that I built for this frontend client. You may use my dummy credentials to log in the console.

```
Email: email@email.com
Password: Password1
```

Strapi is a headless CMS. If the body is the server and the head is the client, think of chopping off the head and you're left with just the backend. Strapi is useful to rapidly create artifacts and assets in a content registry that can easily be pulled using RESTful API or GraphQL. In this repo, I built a [React UI](https://etuong.github.io/headless-cms-blog/) that interacts with Strapi.

### ⏳ Installation (from the Strapi Github page)

Install Strapi with this **Quickstart** command to create a Strapi project instantly:

- (Use **yarn** to install the Strapi project (recommended).

```bash
yarn create strapi-app my-project --quickstart
```

**or**

- (Use npm/npx to install the Strapi project.)

```bash
npx create-strapi-app my-project --quickstart
```

### Procedure

1. Run Strapi and create collection types (review, category, comment)
1. Review has {title, body, image, avatar, author} and relationships with {category, comment}
1. Comment has {author, message} and has relationships with {review}
1. Category has {name} and ahs relationship with {review}
1. Create multiple entries for blogging
1. Run this app `npm run start`

That is it! Everything is taken care. When you post a comment, the app will create the comment entry on Strapi.
