// let clouds = [0, 1, 0, 0, 0, 1, 0];
// let clouds=[0,0,1,0,0,1,0];
let clouds = [0,0,0,1,0,0];
function jumpingOnClouds(c) {
  let jumps = 0;

  currentIndex = 0;
  while (currentIndex < c.length-1) {
    if (c[currentIndex + 2] == 0) {
      currentIndex += 2;
      jumps++;
    } else {
      currentIndex += 1;
      jumps++;
    }
  }

  return jumps;
}

console.log(jumpingOnClouds(clouds));
