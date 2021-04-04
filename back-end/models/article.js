import schemaModels from './connections';
import { commonSave } from './common';

const { Article } = schemaModels;

export const save = commonSave(Article);

export function load() {
    return Article.find(); //{}, ['title', 'createdAt']
}

export function loadById(id) {
    return Article.findById(id);
}

export function loadByFilters(filters) {
    return Article.find(filters);
}