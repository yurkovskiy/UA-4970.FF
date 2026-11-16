const main = document.getElementsByTagName("main")[0];

for (let i = 1; i <= 9; i++) {
    
    const tableRow = document.createElement("div"); // <div></div>
    tableRow.setAttribute("class", "row"); // <div class="row"></div>

    for (let j = 1; j <= 9; j++) {
        const tableCell = document.createElement("div");

        if (i == j) {
            tableCell.setAttribute("class", "cell cell-main");
        }

        if (i > j) {
            tableCell.setAttribute("class", "cell cell-umain");
        }

        if (i < j) {
            tableCell.setAttribute("class", "cell cell-omain");
        }

        tableCell.innerText = `${i * j}`;
        tableRow.append(tableCell);
    } // end of for "j"
    main.append(tableRow);    
} // end of for "i"