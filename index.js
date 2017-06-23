var sudoku = require('sudoku');
var solver = require('./sudoku.js');

function main(){
    var puzzle     = sudoku.makepuzzle();
    var puzzle = convertToMatrix(puzzle);
    var Solver = new solver(puzzle);
    if(Solver.solver()){
        console.log(Solver.grid);
    }else{
        console.log("No se encontro la solución");
    }

}

function convertToMatrix(arr) {
    var mat = [];
    var tmp = [];
    for (var i = 0; i < arr.length; i++) {
        if(i%9 == 0 && i != 0){
            mat.push(tmp);
            tmp = [(arr[i] == null ? 0 : arr[i])];
        }else{
            tmp.push((arr[i] == null ? 0 : arr[i]));
        }
    }
    mat.push(tmp);
    return mat
}

main();
