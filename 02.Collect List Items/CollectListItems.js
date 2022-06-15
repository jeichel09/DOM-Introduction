function extractText() {
    let texts = document.getElementsByTagName('li');
    let myTexts = [];
    for (let i = 0; i < texts.length; i ++) {
        myTexts.push(texts[i].textContent);
    }
    document.getElementById('result').value = myTexts.join("\n");
}