/*
👩🏽‍💻 🧑🏼‍💻 Remove anchor from URL

DESCRIPTION:
Complete the function/method so that it returns the URL with anything after the anchor (#) removed.

Test 1:
"www.brainstation.io#about" -> "www.brainstation.io"

Test 2:
"www.brainstation.io?page=1" -> "www.brainstation.io?page=1"
 */

const BS_URL = "www.brainstation.io#about";
const BS_URL2 = "www.brainstation.io?page=1";

/*
FOR LOOP Solution
*/
const removeURL = (url) => {
  urlArray = url.split('');
  let newUrl = url;

  for (let i = 0; i < urlArray.length; i++) {
    if (urlArray[i] === '#') {
      newUrl = urlArray.slice(0, i).join('');
    }
  }
  return newUrl;
};

// Expected output: www.brainstation.io
console.log(removeURL(BS_URL));

// Expected output: www.brainstation.io?page=1
console.log(removeURL(BS_URL2));

/*
FOR EACH Solution
*/
const removeURL_FE = (url) => {
  urlArray = url.split('');
  let newUrl = url;

  urlArray.forEach((char, index) => {
    if (char === '#') {
      newUrl = urlArray.slice(0, index).join('');
    }
  });
  return newUrl;
};

// Expected output: www.brainstation.io
console.log(removeURL_FE(BS_URL));

// Expected output: www.brainstation.io?page=1
console.log(removeURL_FE(BS_URL2));

/*
SPLIT Solution
*/

function removeURL_Split(url) {
  return url.split('#')[0]
}

// Expected output: www.brainstation.io
console.log(removeURL_Split(BS_URL));

// Expected output: www.brainstation.io?page=1
console.log(removeURL_Split(BS_URL2));

/*
Solution with building a new string until break
*/
const removeURL_NewString = (url) => {
  let string = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      // break exits the loop once it hits the #
      break;
    }
    string += url[i];
  }
  return string;
};

console.log(removeURL_NewString(BS_URL));
console.log(removeURL_NewString(BS_URL2));

/*
Replace REGEX solution:

Regex explained:
"/": Delimiters indicating the start and end of the regex.
"#": The literal character #.
".*": .* is a regex pattern that matches any character (.) zero or 
      more times (*). This captures everything that comes after the #

*/
function removeUrl_Regex(url) {
  return url.replace(/(#.*)/, "");
}

console.log(removeUrl_Regex(BS_URL));
console.log(removeUrl_Regex(BS_URL2));
console.log(BS_URL.replace(/(#.*)/, ""));