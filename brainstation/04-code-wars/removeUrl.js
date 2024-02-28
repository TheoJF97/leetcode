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