import { login } from "../controllers/auth";
import {
  createArticle,
  updateRecipe,
  allArticles,
  articleById,
  deleteRecipe,
} from "../controllers/article";
import { createUser } from "../controllers/user";
import requiresAuth from "../controllers/requires-auth";

function setRoutes(app) {
  app.post("/article", requiresAuth, createArticle);
  app.put("/recipe", requiresAuth, updateRecipe);
  app.get("/article", allArticles);
  app.get("/article/:id", articleById);
  app.delete("/recipe/:id", deleteRecipe);
  
  app.post("/user", createUser);

  app.post("/auth", login);
}

export default setRoutes;