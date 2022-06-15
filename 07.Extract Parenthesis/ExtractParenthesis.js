function extract(content) {
    let quelle = document.getElementById(content).textContent;
    let regex = /\(([^)]+)\)/gm;
    let result = [];

    let match = regex.exec(quelle);
    while(match) {
        result.push(match[1]);
        match = regex.exec(quelle);
    }
    return result.join('; ');
}