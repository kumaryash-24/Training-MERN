function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";

    for (let words of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(longestWord("yash is a good boy"));