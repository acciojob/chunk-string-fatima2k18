function stringChop(str, size) {
  // your code here
	function chunkString(str, chunkSize) {
    if (str === null || chunkSize <= 0) {
        return [];
    }

    const result = [];

    for (let i = 0; i < str.length; i += chunkSize) {
        result.push(str.slice(i, i + chunkSize));
    }

    return result;
}

// Ask the user for the string and chunk size
const inputStr = prompt("Enter a string to chunk:");
const chunkLen = parseInt(prompt("Enter the chunk length:"), 10);

const chunks = chunkString(inputStr, chunkLen);

// Show the result
alert("Chunks: " + JSON.stringify(chunks));

}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
