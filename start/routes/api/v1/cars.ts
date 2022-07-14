import Route from "@ioc:Adonis/Core/Route";

// Nesting routes
Route.group(() => {
  Route.group(() => {
    Route.group(() => {
      Route.post("/:id", async ({ params }) => {
        return `Car number is: ${params.id}`;
      }).as('create');
      Route.get("/", () => {
        return `View all cars!`;
      }).as('index');
    }).prefix("/cars");
  })
    .prefix("/v1")
    .as("v1");
})
  .prefix("/api")
  .as("api");
