'use strict';

function mazeSolver(maze, n = 0, m = 0) {
  console.log(n, m);
  console.log(maze[n].length);
  if(maze[n][m] === 'e') {
    return '';
  }
  if(n < maze[n].length - 1 && maze[n + 1][m] === ' ') {
    return 'R' + mazeSolver(maze, n + 1, m);
  }
  if(maze[n - 1][m] === ' ') {
    return 'L' + mazeSolver(maze, n - 1 , m);
  }
  if(m < maze[m].length - 1 && maze[n][m + 1] === ' ') {
    return 'D' + mazeSolver(maze, n, m + 1);
  }
  if(maze[n][m - 1] === ' ') {
    return 'U' + mazeSolver(maze, n, m - 1);
  }
  if(maze[n][m] === '*') {
    return console.log('dead end'); //not valid
  }
}



let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

console.log(mazeSolver(mySmallMaze));

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

//console.log(maze[0][3]); = *