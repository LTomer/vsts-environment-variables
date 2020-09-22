export function PrintVariable() {
    var sortedArray = [];

    // Push each JSON Object entry in array by [key, value]
    let maxSize=0;
    var jsObj = process.env
    for(var key in jsObj)
    {
        if(key.length > maxSize)
			maxSize = key.length;
        sortedArray.push([key, jsObj[key]]);
    }

    var maxSpace = maxSize + 3;

    for(var i in sortedArray)
    {
        let key = sortedArray[i][0]
        var spaces = Array(maxSpace - key.length).join('.')
        console.log(`- ${key} ${spaces} ${sortedArray[i][1]}`)
    }
}
