// // done by Sylvia, Teni, and Tori
// // function identifies whether choco cookie also has raisins in it

// // define function
// const raisinAlarm = function(cookie) {
//   // iterate element in cookie
//   for (const choc of cookie) {
//     // check if in element "topping" is a raisin
//     if (choc === "🍇") {
//       // if raisin found, return raisin alrt
//       return "Raisin alert!!";
//     }
//   }
//   return "All Good!";

// };

// console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
// console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
// console.log(raisinAlarm(["🍫", "🍫", "🍫"]));



// new function that supports arrays of arrays in cookie senario

//
const raisinAlarmArray = function(arr) {
  let result = [];

  //iterate over each sub-array (ingredients) in main array
  for (let ingredients of arr) {
    if (ingredients.includes("🍇")) { // checking if there is a raisin in ingredients
      result.push("RAISIN ALERT!!!");
      continue; // next iteration of the loop
    }

    result.push("ALL GOOD!");
    // if no raisin found, push "ALL GOOD!" to result array
  }

  return result; //return final result

};


// tests
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
    ["🍫", "🍫", "🍫", "🍇"],
    ["🍇", "🍇"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
  ])
);

