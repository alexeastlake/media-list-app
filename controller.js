import * as model from './tempmodel';

export function getTypes(type) {
  let items = [];

  for (let i = 0; i < model.items.length; i++) {
    if (model.items[i].type === type) {
      items.push(copyItem(model.items[i]));
    }
  }

  return items;
}

export function getCopiedItem(id) {
  for (let i = 0; i < model.items.length; i++) {
    if (model.items[i].id === id) {
      return copyItem(model.items[i]);
    }
  }
}

export function getItem(id) {
  for (let i = 0; i < model.items.length; i++) {
    if (model.items[i].id === id) {
      return model.items[i];
    }
  }
}

export function saveChange(id, title, platform, genres, notes) {
  let item = getItem(id);

  item.title = title;
  item.platform = platform;
  item.genres = genres.split(", ");
  item.notes = notes;
}

function copyItem(item) {
  return new model.ListItem(item.id, item.type, item.title, item.platform, [...item.genres], item.notes);
}