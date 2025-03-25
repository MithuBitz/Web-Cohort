# 22Mar 2025

# Web-Cohort by Great Hitesh Sir and Piyush Sir

## 22-Mar 2025 Live class on JS [Backend Internals]

- Node is a runtime environment.
- Spider Monkey Engine is a runtime environment for JS. And it is the original engine for JS.
- Apple webkit is a runtime environment for web.
- Deno is also like Node. It is a runtime environment for JS. It interchange the letter Node to Deno.
- Bun is also like Node. It is a runtime environment for JS and it is faster but in some cases it crash.
- Bun is drop in replacement of Node. Bun is faster because it’s build in that way using zig
- npm js where we can get all libraries.
- When a Node.js module is executed, it's not run directly in the global scope. Instead, it's wrapped inside a function that looks like this:

```
(function (exports, require, module, __filename, __dirname) {
    // module code
})
```

It enables the use of require, exports, and module objects, which are fundamental to Node.js's module system. These objects facilitate the importing and exporting of modules. It provides access to **filename and **dirname, which contain the path to the current module file and its directory, respectively.

- To perform export in node node wrapper execution function provide a exports object.
- Named exports : Named exports strict to call by its actual name
- Module of default export : It is not strict to call by its actual name. But each file has to be only one default export.
- require() : It is also a built in function in node.
- json.lock : his file locks down the exact versions of all dependencies, including their sub-dependencies, guaranteeing that everyone working on the project uses the same versions.the package.lock file on the other hand provides the snapshot of all the dependencies and subdependencies with exact versions. It locks the versions for the consistent project setup accross different environments. Recommend to not delete package.lock file.
- Use `^` in package version to get the latest version. Because it automatically get the latest version if there is any change in minor and patch versioning.
- Use `~` in package version to get the latest version. Because it automatically get the latest version if there is any change in patch versioning.
- Snyk as a Devsecops tool for nodejs.[Future content for R&D]
- Some example of web framework like express, hono, koa, fastify, etc.

- Create a basic express like package useing http.

# Tasks

- Library Management System
- Parking Lot System
- Learnyst (White Labbeled)
- Hospital Management (With Ambulance Tracking)
- Food Del App (With Realtime Rider Tracking)
- Amazon (Multiple Sellers and Multiple Buys and Warehouses)
