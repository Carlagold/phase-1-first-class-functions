// console.log()
// function Monday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
//   function runFiveMiles() {
//     console.log("Go for a five-mile run");
//   }
//   function liftWeights() {
//     console.log("Pump iron");
//   }
//   function swimForthyLaps() {
//     console.log("Swim 40 laps");
//   }
//   function Monday() {
//     excerciseRoutine(liftWeights);
//   }
//  function Tuesday() {
//     excerciseRoutine(swimForthyLaps);
    
//     function Wednesday() {
//         excerciseRoutine(runFiveMiles);
//     }
//  }
//   function excerciseRoutine(postRunActivity) {
//     runFiveMiles();
//     postRunActivity();
//   }
// Monday();
// Tuesday();

// /   function Tuesday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }
  
//   function Wednesday() {
//     console.log("Go for a five-mile run");
//     console.log("Go for a five-mile run");
//   }
  
//   function Thursday() {
//     console.log("Go for a five-mile run");
//     console.log("Pump iron");
//   }
  
//   function Friday() {
//     console.log("Go for a five-mile run");
//     console.log("Swim 40 laps");
//   }

function receivesAFunction(callback) {
    callback();
}

var returnsANamedFunction = function() {
    return receivesAFunction    
}
function returnsAnAnonymousFunction() { return function() {
    
    }

}
