function getTagByName(name) {
  switch (name) {
    case "root-element":
      return "body";
    case "section":
      return "section";
    case "column":
      return "div";
    case "heading":
      return "h1";
    default:
      throw Error('Provided "name" not supported');
  }
}

function addIndent(indentAmount) {
  return "  ".repeat(indentAmount);
}

module.exports = convertJsonToHtml = (data) => {
  let html = "";
  // using Depth First Search
  const tagsToVisit = [data];
  const visitedTags = new Set();
  let indentAmount = 0;

  while (tagsToVisit.length > 0) {
    const tag = tagsToVisit.pop();
    if (visitedTags.has(tag)) {
      continue;
    }
    if (tag.endTag) {
      indentAmount--;
      html += addIndent(indentAmount) + tag.value + "\n";
      continue;
    }
    const tagName = getTagByName(tag.name);
    html += `${addIndent(indentAmount)}<${tagName} id="${tag.id}">` + "\n";
    if (tag.name === "heading") {
      html += addIndent(indentAmount + 1) + tag.settings.text + "\n";
    }
    visitedTags.add(tag);
    tagsToVisit.push({ endTag: true, value: `</${tagName}>` }, ...tag.children);
    indentAmount++;
  }
  return html;
};
