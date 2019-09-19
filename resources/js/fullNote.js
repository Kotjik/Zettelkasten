/* eslint-env browser */

class FullNote {

  constructor(title, description, source, theme, color, lastUpdated, creationDate) {
    this.title = title;
    this.description = description;
    this.source = source;
    this.theme = theme;
    this.color = color;
    this.lastUpdated = lastUpdated;
    this.creationDate = creationDate;
  }

  getHTMLElement(){
    let newFullNote = document.createElement("div");
    newFullNote.setAttribute("id", "note-full");
    newFullNote.classList.add("note-full");
    newFullNote.innerHTML = getInnerHTML(this.title, this.description, this.source,
                this.theme, this.color, this.lastUpdated, this.creationDate);
    return newFullNote;
  }
}

function getInnerHTML(title, description, source, theme, color, lastUpdated, creationDate){
  return "<div class='title-full'>" + title + `</div>
  <div class="description-full">` + description + `</div>
  <div class="source-full">
    <b>Quelle</b>: <a href=".\\sources.html?source=` + source + "\">"
    + source + `</a>
  </div>
  <div class="theme-full">
    <b>Thema</b>: <a href=".\\themes.html?theme=` + theme + "\">"
    + theme + `</a>
  </div>
  <div class='color-box-full ` + color + "' title='"
    + translateColor(lastUpdated) + `'></div>
  <div class='last-updated-full'>Zuletzt bearbeitet: ` + lastUpdated + `</div>
  <div class="creation-full">Erstellt: ` + creationDate + `</div>
  <div class="close-button">×</div>
  <div class="edit-button">Edit</div>`;
}

function translateColor(color){
  switch(color){
    case "blue":
      return "blau";
    case "purple":
      return "lila";
    case "wine":
      return "weinrot";
    case "red":
      return "rot";
    case "green":
      return "grün";
    case "pink":
      return "pink";
    case "brown":
      return "braun";
    case "white":
      return "weiß";
    case "black":
      return "schwarz";
    default:
      return "";
  }
}

export default FullNote;