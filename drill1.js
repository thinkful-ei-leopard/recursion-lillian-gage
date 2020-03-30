'use strict';
//counting sheep

function sheepCounter(sheep){
  if(sheep === 0){
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${sheep}: Another sheep jumps over the fence`);
  return sheepCounter(sheep - 1);
}

sheepCounter(6);