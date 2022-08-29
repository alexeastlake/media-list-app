import * as model from './tempmodel';

export function getTypes(type) {
  let items = [];

  for (let i = 0; i < model.items.length; i++) {
    if (model.items[i].type === type) {
      items.push(model.items[i]);
    }
  }

  return items;
}

export function getItem(id) {
  for (let i = 0; i < model.items.length; i++) {
    if (model.items[i].id === id) {
      return model.items[i];
    }
  }
}