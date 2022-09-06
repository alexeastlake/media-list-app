// Temporary class and storage for developing view
export class ListItem {
  constructor(id, type, title, platform, genres, notes) {
    this.id = id,
    this.type = type;
    this.title = title;
    this.platform = platform;
    this.genres = genres;
    this.notes = notes;
  }
}

export var currentId = 7;

export var modelItems = [new ListItem(1, "movie", "A Movie", "Netflix", ["Action", "Adventure"], "Notes about where I'm up to"),
                    new ListItem(2, "movie", "A Movie with a Longer Title", "Neon", ["Sci-fi", "Adventure"], "Notes about where I'm up to"),
                    new ListItem(3, "tv", "A TV Show", "TVNZ", ["Horror", "Adventure"], "Notes about where I'm up to"),
                    new ListItem(4, "tv", "A TV Show with a Really Long Title on the Next Line", "TVNZ", ["Horror", "Adventure"], "Notes about where I'm up to"),
                    new ListItem(5, "game", "A Game", "Steam", ["Action", "Adventure"], "Notes about where I'm up to"),
                    new ListItem(6, "game", "Another Game 2", "PS4", ["Action", "RPG"], "Notes about where I'm up to")];
