function chess_place() {
    var div = document.createElement("div");
    div.innerHTML = '<table border="1" >' +
        '<tr>' +
        '<th></th>' +
        '<th>A</th>' +
        '<th>B</th>' +
        '<th>C</th>' +
        '<th>D</th>' +
        '<th>E</th>' +
        '<th>F</th>' +
        '<th>G</th>' +
        '<th>H</th>' +
        '</tr>' +
        '</tr>' +
        '<td>1</td>' +
        '<td class="white_cell"></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '</tr >' +
        '<td>2</td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>' +
        '</tr >' +
        '<td>3</td>' +
        '<td class="white_cell"></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '</tr >' +
        '<td>4</td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '</tr >' +
        '<td>5</td>' +
        '<td class="white_cell"></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '</tr >' +
        '<td>6</td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>' +
        '</tr >' +
        '<td>7</td>' +
        '<td class="white_cell"></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '</tr >' +
        '<td>8</td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>></td>' +
        '<td class="black_cell"></td>' +
        '<td class="white_cell"></td>' +
        '</tr >' +
        '</table >'
    var body = document.getElementsByTagName('body')[0]
    body.appendChild(div)

}

chess_place();