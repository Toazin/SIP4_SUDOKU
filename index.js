var sudoku = require('sudoku');

    var puzzle     = sudoku.makepuzzle();
    console.log(puzzle);
    var solution   = sudoku.solvepuzzle(puzzle);
    console.log(solution);
    var difficulty = sudoku.ratepuzzle(puzzle, 4);
