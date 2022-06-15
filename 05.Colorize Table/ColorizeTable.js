function colorize() {
    let rows = document.getElementsByTagName('tbody')[0].children;
    for (let n = 1; n < rows.length; n +=2 ) {
        rows[n].style.background = 'teal';
    }
}