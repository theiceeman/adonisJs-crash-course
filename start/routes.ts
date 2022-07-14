/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from "@ioc:Adonis/Core/Route";

import "./routes/api/v1/cars";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

// Using controllers
Route.get("/drafts", "DraftsController.view");

// Brisk routing
Route.on("/ace/").render("welcome");

// Validating route params & naming routes
Route.get("/post/:id", async ({ params }) => {
  return `This is post ${params.id}`;
})
  .where("id", Route.matchers.slug())
  .as("post.show");

// Grouping & Prefixing routes
Route.group(() => {
  Route.post("/:id", async ({ params }) => {
    return `Animal number is: ${params.id}`;
  });
  Route.get("/", () => {
    return `View all animals!`;
  });
}).prefix("/animal");
