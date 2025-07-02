function stringChop(str, size) {
    if (str === null || size <= 0) {
        return [];
    }

    const result = [];

    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }

    return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
const chunks = stringChop(str, size);

alert("Chunks: " + JSON.stringify(chunks));