function whatIsInAName(collection, source) {
    //whats in a name?
    var arr = [];
    //change below
    var sourceKeys = Object.keys(source);

    for (var collectionItem = 0; collectionItem < collection.length; collectionItem++) {
        var keysFlag = true;
        for (var sourceKey = 0; sourceKey < sourceKeys.length; sourceKey++) {

            if (collection[collectionItem].hasOwnProperty(sourceKeys[sourceKey])) {
                if (collection[collectionItem][sourceKeys[sourceKey]] != source[sourceKeys[sourceKey]]) {
                    keysFlag = false;
                    break;
                }
            }
            else {
                keysFlag = false;
                break;
            }
        }
        if (keysFlag) {
            arr.push(collection[collectionItem]);
        }
    }
    //change above
    //return arr;
    console.log(arr);
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 });