// anagram

// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  if (str1 === str2) {
    return true;
  }

  const obj1 = {};
  const obj2 = {};

  [...str1].forEach((x) => {
    obj1[x] = obj1[x] ? obj1[x] + 1 : 1;
  });

  [...str2].forEach((y) => {
    obj2[y] = obj2[y] ? obj2[y] + 1 : 1;
  });

  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;

  // add whatever parameters you deem necessary - good luck!
}

console.log(validAnagram('anagram', 'nagaram'));
