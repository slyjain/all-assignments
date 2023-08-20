/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/
function isAnagram(str1, str2){

  if(str1.length!=str2.length){
    return false;
  }
  let arr1=str1.split("");
  let arr2=str2.split("");
  arr1.sort();
  arr2.sort();
  for(let i=0,j=0;i<str1.length;i++,j++){
    if(arr1[i]!=arr2[j]){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
