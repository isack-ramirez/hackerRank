//U D D D U D U U

// const path = ["U", "D", "D", "D", "U", "D", "U", "U"];
const path = ['D','D','U','U','D','D','U','D','U','U','U','D']

function countingValleys(path) {
  // Write your code here
  console.log(path);
  function reformatArray(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
      if ((array[i] == "U")) {
        newArray.push(1);
      } else newArray.push(-1);
    }
    console.log(newArray);
    return newArray;
  }

  path = reformatArray(path);

  let elevation = 0;
  let step = 0;
  let valley = 0;
  returnedAboveSeaLevel = true;

  for (i = 0; i < path.length; i++) {
    elevation += path[i];
    console.log(elevation)
    if (elevation <= 0 && path[i] == -1) {
      step += path[i];
      

      if (step < -1 && returnedAboveSeaLevel == true && elevation!==0) {
        
        valley = valley + 1;
        console.log('Valleys' + valley)
        returnedAboveSeaLevel = false;
      }
    } else if (elevation == 0) {

      returnedAboveSeaLevel = true;
      console.log(returnedAboveSeaLevel)
      step = 0;
    }
  }
  return valley;
}

console.log(countingValleys(path));
