import { load, save, loadById, loadByFilters, del, edit } from '../models/article';

const errorHandler = (err) => ({
    status: 'error',
    message: err.message
})

export function createArticle(req, res) {
    const { userName } = req.token;
    save({...req.body, userName})
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(errorHandler(err)));
}

export function updateRecipe(req, res) {
    console.log(req.body)
    edit(req.body)
      .then((result) => res.json(result))
      .catch((err) => res.status(400).json(errorHandler(err.message)));
}

export function deleteRecipe(req, res) {
    const id = req.params.id;

    del(id)
      .then(result => res.json(result))
      .catch(err => res.status(400).json(errorHandler(err.message)))
}

export function allArticles(req, res) {
    const filters = req.query;
    const loadFn = (filters === undefined) ? load : () => loadByFilters(filters);
    loadFn()
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(errorHandler(err)));
}

export function articleById(req, res) {
    const id = req.params.id;
    loadById(id)
        .then((result) => res.json(result))
        .catch((err) => err.status(400).json(errorHandler(err)));
}
