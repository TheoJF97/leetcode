/**
 * 🧌 😬 TrollBusters!


DESCRIPTION:
Trolls are attacking your comment section!


A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.


Your task is to write a function that takes a string and return a new string with all vowels removed.


For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".


💡 Note: Y is not considered a vowel.
 */

const test1 = "comment aeiouy section";
const test2 = "This website is for losers LOL!";

const trollBuster = (str) => {
  return str.replace(/[aeiou]/g, "");
};

console.log(trollBuster(test1));
console.log(trollBuster(test2));

// 1

function disemvowel(str) {
    var vowels = ["a", "e", "i", "o", "u"];
  
    return str
      .split("")
      .filter(function (el) {
        return vowels.indexOf(el.toLowerCase()) == -1;
      })
      .join("");
  }
  
  // 2
  const disemvowel_v2 = (str) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let newStr = "";
    for (let i = 0; i <= str.length; i++) {
      let char = str.charAt(i);
      if (vowels.indexOf(char) == -1) {
        newStr += char;
      }
    }
    return newStr;
  };
  
  // 3
  const vowels = "aeiou";
  
  function disemvowel_v3(str) {
    return str
      .split("")
      .filter((letter) => !vowels.includes(letter.toLowerCase()))
      .join("");
  }
  
  // 4
  disemvowel = (str) => str.replace(/[aeiou]/gi, "");
  