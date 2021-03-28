    const findLongestWord = function (string) {
        const arrayOfWords = string.split(" ")
        return arrayOfWords.reduce((longest, current) => {
            return current.length > longest.length ? current : longest
        })
    };

    console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

    console.log(findLongestWord('Google do a roll')); // 'Google'

    console.log(findLongestWord('May the force be with you')); // 'force'
