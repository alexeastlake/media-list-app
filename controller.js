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

export function addItem(type, title, platform, genres, notes) {
  let genresArray = genres.split(",");

  for (let i = 0; i < genresArray.length; i++) {
    genresArray[i].trim();
  }
  
  let item = new model.ListItem(model.currentId, type, title, platform, genresArray, notes);
  model.currentId++;

  model.items.push(item);
}

function copyItem(item) {
  return new model.ListItem(item.id, item.type, item.title, item.platform, [...item.genres], item.notes);
}

export function deleteItem(id) {
  for (let i = 0; i < model.items.length; i++) {
    if (model.items[i].id === id) {
      model.items.splice(i, 1);
    }
  }
}