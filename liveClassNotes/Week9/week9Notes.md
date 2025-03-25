# Web-Cohort by Great Hitesh Sir and Piyush Sir

## 08-Mar-25 Live class on JS [Building Fullstack Project]

- Execution Engine for JS: Execution engine is a program that interprets and executes code written in a programming language. It translates code from a high-level language to machine code and executes it on a computer. Some of the execution engines for Javascript are like node, bun, and deno.
- Create an initialize a project with help of `npm init` or `npm init -y`. When we run npm init it need some input from us to initialize the project like project name, version, author, etc. But if we run `npm init -y` it will automatically create a project with default values. It will create a package.json file in the current directory. When we run only `npm init` it need some input from us like project name, version, author, etc.
- We can use `require` or `import` to import some third party packages in our project. `require` is the older one which is used in nodejs. `import` is the newer one which is used in modern javascript. But before using import we need to add type="module" in script tag. It is used to enable the module system in the browser.
- Version are declare in node package.json file like version: "1.0.0". This `X.Y.Z` version is called semantic versioning. Where X is major version, Y is minor version, and Z is patch version. We need to update the version in package.json file when we want to add new feature in our project.
- .env : .env file is like "KUNDLI" of the project. It is used to store the sensitive data like API key, password, etc. It is not committed in git because it is sensitive data.
- express : express is a web framework for nodejs. It is used to build a server. It is used to build a server. It is used to build a server.
- after install any library never forget to check dependency in package.json file for confirmation
- Port : There are 65535 number of possible port. 80, 443, 23 port dont use it for devlopement.
- GET method are like `app.get("Kab karna hai", "Kya karna hai")
- Nodemon : Nodemon help to automatically rerun the node application when there is any file changes. It is used as a developement dependency not use in production so install it like `npm i -D nodemon` `-D` helps to install it on dev dependency.
- In `dotenv.config()` we also set path of an another .env file if it will not in root directory.
- CORS : Cross Origin Resource Shareing is an HTTP-header based mechanism that allows a server to indicate any origin other than its own. Its like a security mechanism that lets web browsers to access resources on other domain.
- To unable to send json data with get request we need to use `express.json()` as a middleware.
- To accept all urlencode in `%20` is a space in urlencode. we can use express.urlencode([options]) with some options like `extended: true` as a middleware to accept all urlencode. So that we can send data in url.
- Backend is like a server that allows you to run your application logic inside the database. It is a full-featured server that lets you run your application logic inside the database. Its basically a platform.
- Mongodb - Mongodb is a database that is also a server. And there is an Object Data Modeling (ODM) library called `mongoose` which helps to interect with the mongodb. Dont add special charecter like `@` in password.
- How to make a project? We need to think like -> What to build? and -> What type of data required. Some of the types of projects are like
  1. LMS - A learning management system (LMS) is a software application or web-based technology used to plan, implement and assess a specific learning process.
  2. CMS - A content management system (CMS) is computer software used to manage the creation and modification of digital content
  3. HMS - Hospital Management system
  4. BMS -
- Now lets build an Authentication system. Befor build lets start to think what type of data will be required like for example name, email, password, role, isVerified, createdAt, password reset, password reset expires, verification token, etc
- Password reset flow :
- First create a model for user where we can set userSchema where we can decide what type of data will required for a user. And then create a model with help of mongoose.model. After that we need to export that model as default
- Then we need to create a controller for user like `registerUser` where we can assign a callback func with req and res as a parameters and it should be in async. After that we need to export that controller.
- Then we need to create a route for user like `/register`. For this first we need to import the express for creating a route and also import the desire controller. And then on that route we can call any method like get, post, put, etc with help of router. After that we need to export that route as default.

# Important Keywords mention by Hitesh and Piyush Sir

- SpacetimeBD - SpacetimeDB is a database that is also a server. It is a full-featured relational database system that lets you run your application logic inside the database
- Render - Render is a server that allows you to run your application logic inside the database. It is a full-featured server that lets you run your application logic inside the database. Its basically a platform.
- MCP : Model Context Protocol

Model is a compiled version of the schema

Every file is a module. So, variables and functions defined in one file are only scoped to that file and not visible to other files unless explicitly exported.

This collection is different from db collection
