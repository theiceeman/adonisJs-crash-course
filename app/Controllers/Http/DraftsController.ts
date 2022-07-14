import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class DraftsController {
  /**
   * view
   */
  public view({ view }: HttpContextContract) {
    return view.render("errors/unauthorized");
  }
}
