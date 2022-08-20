// Temporary class and storage for developing view
class ListItem {
  constructor(type, title, platform, genres, notes) {
    this.type = type;
    this.title = title;
    this.platform = platform;
    this.genres = genres;
    this.notes = notes;
  }
}

export var items = [new ListItem("movie", "A Movie", "Netflix", ["Action", "Adventure"], "Notes about where I'm up to"),
                    new ListItem("movie", "A Movie with a Longer Title", "Neon", ["Sci-fi", "Adventure"], "Notes about where I'm up to"),
                    new ListItem("tv", "A TV Show", "TVNZ", ["Horror", "Adventure"], "Notes about where I'm up to"),
                    new ListItem("tv", "A TV Show with a Really Long Title on the Next Line", "TVNZ", ["Horror", "Adventure"], "Notes about where I'm up to"),
                    new ListItem("game", "A Game", "Steam", ["Action", "Adventure"], "Notes about where I'm up to"),
                    new ListItem("game", "Another Game 2", "PS4", ["Action", "RPG"], "Notes about where I'm up to")];
