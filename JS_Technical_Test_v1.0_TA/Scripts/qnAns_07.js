var matchingWords = function (wordA, wordB) {
    return wordA.split("").sort().join("") === wordB.split("").sort().join("");
};

var anagramWords = function (wordArray) {

    //var idx = 1;
    var result = [];
    var matchWords = [];
    let conditionX = true;

    while (conditionX) {
        for (let idx = 0; idx < wordArray.length; idx++) {

            if (idx !== 0) {
                
                // Compare first element with every other element
                if (matchingWords(wordArray[0], wordArray[idx])) {

                    // Add the matched word to the matchWords array
                    matchWords.push(wordArray[idx]);

                    // Remove the word from the array
                    wordArray.splice(idx, 1);
                    
                    // Reset the index
                    idx = 0;

                }
            }

            // If matching is complete then move the matched words to the result set
            if (idx === wordArray.length - 1) {
                
                // Add the original compare word at the first position
                matchWords.unshift(wordArray[0]);

                //Update the result with current matched words
                result.push(matchWords);

                // Remove the original compared word
                wordArray.splice(0, 1);

                // Reset the index
                idx = 0;

                // Clear matchWords
                matchWords = [];
            }
        }

        // Keep matching till the wordArray is empty and all elements moved into result set.
        if (wordArray.length === 0) {
            conditionX = false;
        }
    }
    return result;
};

var strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
var result = anagramWords(strs);
console.log(result);

strs = ["a"];
var result = anagramWords(strs);
console.log(result);

strs = [""];
var result = anagramWords(strs);
console.log(result);