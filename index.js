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
