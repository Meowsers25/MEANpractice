function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    //Only change code below this line
    var srcKeys = Object.keys(source);

    arr = collection.filter(function(obj) {
        for (var key = 0; key < srcKeys.length; key++) {
            if (!obj.hasOwnProperty(srcKeys[key]) || obj[srcKeys[key]] !== source[srcKeys[key]]) {
                return false;
            }
        }
        return true;
    });
    // Only change code above this line
    //return arr;
    console.log(arr);
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
