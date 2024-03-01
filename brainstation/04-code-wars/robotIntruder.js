/*
🤖 Robot Intruder!

DESCRIPTION: Write a function to find if there is a :robot_face: in the box. If so return TRUE. If not return FALSE.
The box array: let box = ['#####', '# #', '# 🤖 #', '# #', '#####'];

💡 Test your function without the robot to see if the function return FALSE.
 */

const box1 = ["#####", "# #", "# 🤖 #", "# #", "#####"];
const box2 = ["#####", "# #", "##", "# #", "#####"];
const box3 = ["#####", "# #", "🤖", "# #", "#####"];

/*
INCLUDES Solution 
*/
const robotIntruder_Includes = (arr) => {
  return arr.join("").includes("🤖");
};

// console.log(robotIntruder_Includes(box1));
// console.log(robotIntruder_Includes(box2));
// console.log(robotIntruder_Includes(box3));

/*
FOR EACH Solution 
*/
const robotIntruder_FE = (arr) => {
  let output = false;
  arr.forEach((element) => {
    if (element.includes("🤖")) {
      output = true;
    }
  });
  return output;
};

// console.log(robotIntruder_FE(box1));
// console.log(robotIntruder_FE(box2));
// console.log(robotIntruder_FE(box3));

/*
FOR LOOP
*/
const robotIntruder_FL = (arr) => {
  let output = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("🤖")) {
      output = true;
    }
  }
  return output;
};

// console.log(robotIntruder_FL(box1));
// console.log(robotIntruder_FL(box2));
// console.log(robotIntruder_FL(box3));
