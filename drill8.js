'use strict';

function mazeSolver(maze, row = 0, col = 0) {

  if(maze[row][col] === 'e') {
    return '';
  }
  if(col < maze[row].length - 1 && (maze[row][col + 1] !== '*' && maze[row][col + 1])) {
    maze[row][col] = '*';
    const next = 'R' + mazeSolver(maze, row, col + 1);
    maze[row][col] = ' ';
    return next ;
  }
  if(row < maze.length - 1 && (maze[row + 1][col] !== '*' && maze[row + 1][col])) {
    maze[row][col] = '*';
    const next = 'D' + mazeSolver(maze, row + 1, col);
    maze[row][col] = ' ';
    return next;
  }
  if(col > 0 && (maze[row][col - 1] !== '*' && maze[row][col - 1])) {
    maze[row][col] = '*';
    const next = 'L' + mazeSolver(maze, row, col - 1);
    maze[row][col] = ' ';
    return next;
  }
  if(row > 0 && (maze[row - 1][col] !== '*' && maze[row - 1][col])) {
    maze[row][col] = '*';
    const next = 'U' + mazeSolver(maze, row - 1 , col);
    maze[row][col] = ' ';
    return next;
  }

}



let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

let medMaze = [
  [' ', ' ', ' ', '*', ' '],
  ['*', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*'],
  [' ', ' ', ' ', ' ', 'e']
];

//console.log(mazeSolver(mySmallMaze));
//console.log(mazeSolver(medMaze));
console.log(mazeSolver(maze));

//console.log(maze[1][0]); = *
//console.log(maze[0][3]); = *
