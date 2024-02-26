/**
Given two strings [ ransomNote ] and [ magazine ]
return TRUE if [ ransomNote ] can be constructed by using the letters from [ magazine ]
and FALSE otherwise.


Note: Each letter in [ magazine ] can only be used once in [ ransomNote ]
// EXAMPLES
Input: ransomNote = "aa", magazine = "ab"
Output: false


Input: ransomNote = "aa", magazine = "aab"
Output: true

array of letters 

 */

const mindHunter = (ransomNote, magazine) => {
    const ransomNoteArr = ransomNote.split('').sort();
    const magazineArr = magazine.split('').sort();
    
    console.log("ransomNoteArr: " + ransomNoteArr);
    console.log("magazineArr: " + magazineArr);
    
    // console.log(magazineArr.indexOf(ransomNoteArr[0]));
    
    for (let i = 0; i < ransomNoteArr.length; i++) {
      const indexInMagazine = magazineArr.indexOf(ransomNoteArr[i]);
      console.log("indexInMagazine: " + indexInMagazine);
      
      // If the current letter isn't in mag or already used, 
      // empty indexOf would return -1, we must return false
      if (indexInMagazine === -1) {
        return false;
      } 
      
      // Remove used letter from mag array to ensure not used indexInMagazine
      magazineArr.splice(indexInMagazine, 1);
      
      console.log(magazineArr.splice(indexInMagazine, 1));
      
      // If the loop completes, this means all letters in ransomNote are in magazineArr
      return true;
    }
    
  }
   
  
  
  // Expected output: TRUE
  console.log(mindHunter("fox", "sofex"));
  
  // Expected output: FALSE 
  console.log(mindHunter("aa", "ab"));
  