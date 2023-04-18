function drawchess() {
    var chess = document.getElementById("chess")

    for (var i = 0; i < 8; i++) {


        var div = document.createElement("div")
        div.classList.add("chessRow")
        for (var j = 0; j < 8; j++) {
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    var black = document.createElement('div')
                    black.classList.add("black")
                    div.append(black)
                } else {
                    var white = document.createElement('div')
                    white.classList.add("white")
                    div.append(white)
                }
            } else {
                if (j % 2 == 0) {
                    var white = document.createElement('div')
                    white.classList.add("white")
                    div.append(white)
                } else {


                    var black = document.createElement('div')
                    black.classList.add("black")
                    div.append(black)
                }
            }
        }

        chess.append(div)

    }


}