# ionic-vite-ssr-vue3
An attempt to get [ionic] working with [vite] using [vue3] with [SSR].

The repository contains two seperate [vite] projects, both using [vue3] and [SSR]. A **normal** project, using standard vue components and an **[ionic]** project, using [ionic] components and the [ion-router].

It demonstrates a bug when running [ionic] with [vite] using [vue3] in [SSR] mode, which results in the server-side rendered HTML not matching the re-hydrated vue component...

![Alt text][ionic-error-chrome]

## Requirements
* [nvm] (optional, just manually install node 14 if not using nvm)
* node v14 or above
* yarn

## Install
```
yarn
```

## How To Configure & Build

### Configure Project
Before building or running the dev server you need to configure which project is active, this is done using the following commands.

To configure the repository to build and serve the **[ionic]** project, enter the following...
```
yarn use:ionic
```

to use **normal** project, enter...
```
yarn use:normal
```

### Dev Server
To view the dev server enter...
```
yarn start
```

### Build Project
To build and preview the currently configured project...
```
yarn preview
```

### Open in Browser
Both the dev server and preview should be running on [http://localhost:5173].

```
http://localhost:5173
```

[ionic]: https://ionicframework.com/getting-started "Ionic Getting Started"
[ion-router]: https://ionicframework.com/docs/api/router "Ionic router replacement for standard vue router"
[vite]: https://vitejs.dev/ "Vite"
[vue3]: https://vuejs.org/ "Vue3"
[SSR]: https://vitejs.dev/guide/ssr.html "Vite SSR Guide"
[nvm]: https://github.com/nvm-sh/nvm "NVM - Node Version Manager"
[http://localhost:5173]: http://localhost:5173 "Project Running Locally"

[ionic-error-chrome]: docs/ionic-error-chrome.png  "Optional title attribute"