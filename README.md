<p align="center">
  <img alt="Letmeask" src=".github/logo.svg" width="160px">
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Ignews&message=:)&color=8257E5&labelColor=000000" alt="Ignews" />
  <img src="https://img.shields.io/static/v1?label=Developed by&message=Mateus0808&color=8257E5&labelColor=000000" alt="Mateus0808" />
  <img  src="https://img.shields.io/static/v1?label=license&message=MIT&color=8257E5&labelColor=000000" alt="License">   
</p>

<h1 align="center">
    <img alt="Ignews" src=".github/home.PNG" />
</h1>

<br>

## 💻 Technologies

- [<img align="center" alt="Rafa-CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"> Next.js](https://nextjs.org/)
- [<img margin="32px" align="center" alt="Rafa-Ts" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg"> TypeScript](https://www.typescriptlang.org/)
- [<img align="center" alt="Rafa-HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"> Sass](https://sass-lang.com/)
- [<img align="center" alt="Rafa-HTML" height="30" width="40" src="https://images.ctfassets.net/po4qc9xpmpuh/7itYmeRxmVGIXwwGWHrQU3/e4ea73c2bebc64bd65d84964576515b9/fauna-logo-new-v2.svg"> FaunaDB](https://fauna.com/)
- [<img align="center" alt="Rafa-HTML" height="30" width="40" src=".github/stripe.svg"> Stripe](https://stripe.com/br)
- [<img align="center" alt="Rafa-HTML" height="30" width="40" src=".github/prismic.svg"> Prismic CMS](https://prismic.io/)
- [<img align="center" alt="Rafa-HTML" height="36" width="36" src="https://next-auth.js.org/img/logo/logo-xs.png"> Next Auth](https://next-auth.js.org/)

## Requirements?
 - Have a Stripe account
   1. After creating an account on Stripe, go to the add product tab. Then click add product.
      - Add product name
      - Select Standrd pricing
      - Add product Price
      - Select Recurring payment
      - Select Billing period as Monthly
      - Then click save product.
      - Copy the product price id (API ID) and add it to the project's environment variables in the variable STRIPE_PRICE_ID.
   2. On the developers tab, click on API keys.
      - Generate a key for your api
      - Publishable key - Is used for when you need to interact with Stripe's api through Frontend, that is, to search for information that is public.
      - Secret key - Only you should have access to this key.
      - Copy the Publishable key and Secret key and add it to the project's environment variables in the variables NEXT_PUBLIC_STRIPE_PUBLIC_KEY and STRIPE_API_KEY, respectively.
   3. Install [Stripe CLI](https://github.com/stripe/stripe-cli/releases/tag/v1.7.9)
 - Have an account on FaunaDB
   1. First, create a database
   2. In security, configure the API key
      1. Click in 'New key'
      2. Select the database
      3. Role with Admin
      4. Add Key Name
      5. Copy the key secret and add it to the environment variable FAUNA_KEY
      6. Create collection of `users` and `subscriptions`
      7. Create index:
         * `user_by_email` - `users` collection - `data.email` Terms - unique
         * `user_by_stripe_customer_id` - `users` colection - `data.stripe_customer_id` Terms
         * `subscription_by_id` - `subscriptions` colection - `data.id` Terms
         * `subscription_by_status` - `subscriptions` colection - `data.status` Terms
         * `subscription_by_user_ref` - `subscriptions` colection - `data.userId` Terms
   
 - Github - Add a public email on github
 - Have an account on Prismic.io
   1. Create repository
   2. In Custom Type - Click in Create new
      * Select `Repeatable Type`
      * Type Name - Post
      * Add
 - Any IDE installed (Ex: Visual Studio Code)
 - Package manager (npm or yarn)

