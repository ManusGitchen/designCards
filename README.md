# card-layout

This template should help get you started developing with Vue 3 in Vite.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```
### Run Proxy for api Call without CORS Problem

```sh
npm run proxy
```
It runs the npm registered local CORS proxy ans proxies the https://myposter.de/web-api/job-interview
The Axios Call only uses the proxy url http://127.0.0.1:8010/proxy

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```
