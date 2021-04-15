import schemaModels from "./connections";
import { commonSave } from "./common";

const { Article } = schemaModels;

export const save = commonSave(Article);

export const edit = (r) => Recipe.updateOne({ _id: r._id }, r);

export const del = (id) => Recipe.deleteOne({ _id: id });

export function load() {
  return Article.find();
}

export function loadById(id) {
  return Article.findById(id);
}

export function loadByFilters(filters) {
  return Article.find(filters);
}