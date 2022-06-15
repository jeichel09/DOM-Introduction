function sumTable() {
    let rows = document.querySelectorAll('tr td');
    let summe = 0;
    for (let i = 1; i < rows.length - 1; i += 2) {
        summe += Number(rows[i].textContent);
    }
    document.getElementById('sum').textContent = summe;
}