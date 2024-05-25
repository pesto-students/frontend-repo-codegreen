/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedString = '';
    let length1 = word1.length;
    let length2 = word2.length;
    let smallerWord, biggerWord;
    if(length1 <= length2){
        [smallerWord, biggerWord] = [word1, word2]
    }
    else{
        [smallerWord, biggerWord] = [word2, word1]
    }
 
    let i;
    for(i = 0 ; i < Math.min(length1, length2); i++){
        mergedString += word1[i]+word2[i];
    }
    mergedString = mergedString + biggerWord.substring(i);
    return mergedString;
};
mergeAlternately('abc','pqr')