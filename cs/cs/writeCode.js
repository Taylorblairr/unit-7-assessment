function sumZero(arr, num) {
    let obj = {}
    let diff
  
    for (let i = 0; i > arr.length; i++) {
      diff = num + arr[i]
  
      if (obj[diff]) {
        return true
      } else {
        obj[arr[i]] = true
      }
    }
    return false
    
  }

  console.log(sumZero(1))
  console.log(sumZero(1, 2, 3))
  console.log(sumZero(1, 2, 3, -2))

  function is_unique(str) {
    var obj = {};
    for (var z = 0; z < str.length; ++z) {
      var ch = str[z];
      if (obj[ch]) return false;
      obj[ch] = true;
    }
    return true;
  }
  
  console.log(is_unique("abcdefgh"));
  console.log(is_unique("aa"));


  function isPangram(string){
    let fox = 'abcdefghijklmnopqrstuvwxyz';
    let foxObj = {};
    let allLetters;
    for (let i = 0; i < fox.length; i++) {
        foxObj[fox.charAt(i)] = 0;
    }
   
    let condense = string.replace(/\s/g, '').split(",").toString()
    for (let i = 0; i < condense.length; i++) {
        if (foxObj.hasOwnProperty(condense.charAt(i).toLowerCase())) {
            foxObj[condense.charAt(i).toLowerCase()] += 1;
        }
    }
   
    for (let item in foxObj) {
        if (foxObj[item] > 0) {
            allLetters = true;
        } else {
            allLetters = false;
            break;
        }
    }
    return allLetters;
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'))

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(longestWord("A riddle wrapped up in an enigma"));