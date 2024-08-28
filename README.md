# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Development

Run the dev server:

```sh
yarn dev
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is
production-ready. You can deploy it to any host that supports Node.js.

Make sure to deploy the output of `yarn build`

- `build/server`
- `build/client`

### Docker

Not implemented yet.

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple
default starting experience. You can customize it by editing `app/styles/tailwind.css`.

## API Routes

API routes are defined in the `app/routes` directory. They are server-rendered and cached by
default. You can use them to fetch data, process forms, or anything else you'd use a server for.

## Authentication

Not implemented yet.
