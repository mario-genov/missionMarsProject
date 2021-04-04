import { load, save, loadById, loadByFilters } from '../models/article';

const createError = (err) => ({
    status: 'error',
    message: err.message
})

export function createArticle(req, res) {
    // console.log(req.token);
    const {userName} = req.token;
    save({...req.body, userName})
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(createError(err)));
}

export function allArticles(req, res) {
    const filters = req.query;
    console.log(filters);
    const loadFn = filters === undefined ? load : () => loadByFilters(filters);
    loadFn()
        .then((result) => res.json(result))
        .catch((err) => res.status(400).json(createError(err)));
}

export function articleById(req, res) {
    const id = req.params.id;
    loadById(id)
        .then((result) => res.json(result))
        .catch((err) => err.status(400).json(createError(err)));
}
