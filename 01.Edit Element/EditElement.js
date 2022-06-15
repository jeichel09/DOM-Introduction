function editElement(element, match, replacer) {
    let text = element.textContent;
    let toMatch = new RegExp(match, 'g');
    let result = text.replace(toMatch, replacer);
    element.textContent = result;
}