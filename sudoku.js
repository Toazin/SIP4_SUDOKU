module.exports = function Sudoku(grid){
    this.grid = grid;
    console.log(this.grid);
    this.solver = function () {
        var blankCell = this.findBlankLocation();
        var row = blankCell[0];
		var col = blankCell[1];

		if (row == -1) {
			// means will have filled the grid, return;
			return true;
		}
        console.log("ITERATING ROW: ", row , " COL: ", col);
		// we need to fill grid[row][col] cell
		for (var i = 1; i <= 9; i++) {
			// check if number i is safe for grid[row][col] cell
			if (this.isSafe(row, col, i)) {
                // this.print();
				// means its safe to fill the number
				this.grid[row][col] = i;
                console.log("ITERATING ROW: ", row , " COL: ", col, " ADDED: ", i);
                console.log("----");
                console.log(this.grid);
				// fill the rest of the grid
				if (this.solver()) {
					return true;
				}
				// if we are here that means current selection of number didnt
				// work, revert back the changes
				this.grid[row][col] = 0;
			}
		}
		return false; // This will cause the backtracking
    }

    this.isSafe = function (row, col, n) {
        if (!this.UsedInRow(row, n) && !this.UsedInColumn(col, n)
				&& !this.UsedInBox(row - row % 3, col - col % 3, n)) {
			return true;
		}
		return false;
    }

    this.UsedInRow = function(row, n){
        for (var i = 0; i < 9; i++) {
			if (this.grid[row][i] == n) {
				return true;
			}
		}
		return false;
    }

    this.UsedInColumn = function (col, n) {
        for (var i = 0; i < 9; i++) {
			if (this.grid[i][col] == n) {
				return true;
			}
		}
		return false;
    }
    // check if n not in particular box
    this.UsedInBox = function(boxStartRow,boxStartCol, n) {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.grid[i + boxStartRow][j + boxStartCol] == n) {
                    return true;
                }
            }
        }
        return false;
    }

    this.findBlankLocation = function() {
		// var cell = []; // cell[0]-row cell[1] -column
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				if (this.grid[i][j] == 0) {
					// cell[0] = i;
					// cell[1] = j;
					return [i,j];
				}
			}
		}
		// cell[0] = -1;
		// cell[1] = -1;
		return [-1,-1]; // means grid is full
	}

}
