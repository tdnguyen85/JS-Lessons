function nameWithTitle(first, last, sex) {
    function getTitle(sex) {
        var title;
        if(sex === "male") {
            title = "Mr.";
        } else if(sex === "female") {
            title = "Miss";
        }
        return title;
    }
    function capitalizeName(word) {
        function capitalize(word) {
            var firstLetter = word[0].toUpperCase();
            return (firstLetter + word.substring(1, word.length));
        }                                     
        var words = name.split('-');
        var capitalizedWords = [];
        for(var i = 0; i < words.length; i += 1) {
            capitalizedWords.push(capitalize(words[i]));
        }
        return capitalizedWords.join('-');
    }
    function joinStrings(one, two) {
        return(one + " " + two);
    }
    return(joinStrings (getTitle(sex), joinString(capitalizeName(first), capitalizeName(last))));
    
}
            
alert(nameWithTitle("tan", "nguyen", "male"));