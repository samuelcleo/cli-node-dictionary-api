function getDefinition(word) {
    fetch(`https://www.dictionaryapi.com/api/v3/references/sd3/json/${word}?key=f27ebc80-0063-46c0-9293-0d4b79564210`)
    .then( response => {
        if (response.ok) {
            return response;
        } else {
            throw new Error(response.status)
        }
    })
    .then(response => {
        try {
            return response.json();
        } catch (er) {
            console.error(error.message);
        }
    })
    .then( json => json[0].shortdef)
    .then( def => console.dir(def[0]))
    .catch(error => console.error(error.message))
}

const words = process.argv.slice(2);

words.forEach(word => getDefinition(word))