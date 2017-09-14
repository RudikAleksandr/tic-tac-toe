class TicTacToe {
    constructor() {
        this.squarePlay = [[null, null, null],
                           [null, null, null],
                           [null, null, null]];
        this.step = 0;
    }

    getCurrentPlayerSymbol() {
        return this.step % 2 == 0 ? "x" : "o";
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.squarePlay[rowIndex][columnIndex] == null) {
            this.squarePlay[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            ++this.step;
        }
    }

    isFinished() {
        return this.getWinner() != null || this.isDraw();
    }

    getWinner() {
        for (let i = 0; i < this.squarePlay.length; i++) {
            if (this.squarePlay[i][0] == "x" && this.squarePlay[i][1] == "x" && this.squarePlay[i][2] == "x") {
                return "x";
            }
            else if (this.squarePlay[i][0] == "o" && this.squarePlay[i][1] == "o" && this.squarePlay[i][2] == "o") {
                return "o";
            }
        }

        for (let i = 0; i < this.squarePlay.length; i++) {
            if (this.squarePlay[0][i] == "x" && this.squarePlay[1][i] == "x" && this.squarePlay[2][i] == "x") {
                return "x";
            }
            else if (this.squarePlay[0][i] == "o" && this.squarePlay[1][i] == "o" && this.squarePlay[2][i] == "o") {
                return "o";
            }
        }

        if (this.squarePlay[0][0] == "x" && this.squarePlay[1][1] == "x" && this.squarePlay[2][2] == "x") {
            return "x";
        }
        else if (this.squarePlay[0][0] == "o" && this.squarePlay[1][1] == "o" && this.squarePlay[2][2] == "o") {
            return "o";
        }
        else if (this.squarePlay[0][2] == "x" && this.squarePlay[1][1] == "x" && this.squarePlay[2][0] == "x") {
            return "x";
        }
        else if (this.squarePlay[0][2] == "o" && this.squarePlay[1][1] == "o" && this.squarePlay[2][0] == "o") {
            return "o";
        }

        return null;
    }

    noMoreTurns() {
        return this.squarePlay.find(arr => arr.includes(null)) == undefined;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.squarePlay[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
