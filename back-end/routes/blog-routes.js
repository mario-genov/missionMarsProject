import { login } from '../controllers/auth';
import { createArticle, allArticles, articleById } from '../controllers/article';
import { createUser } from '../controllers/user';
import requiresAuth from '../controllers/requires-auth';

function setRoutes(app) {
    app.post('/article', requiresAuth, createArticle);
    app.get('/article', allArticles);
    app.get('/article/:id', articleById);

    app.post('/user', createUser);

    app.post('/auth', login);
}

export default setRoutes;