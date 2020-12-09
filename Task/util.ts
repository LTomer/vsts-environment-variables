export function PrintVariable(): void {
    // Push each JSON Object entry in array by [key, value]
    let maxSize=0;
    var jsObj = process.env
    for(var key in jsObj)
    {
        if(key.length > maxSize)
			maxSize = key.length;
    }

    var maxSpace = maxSize + 3;
    
    var sortArray = Object.keys(jsObj).sort()
    for(var i in sortArray)
    {
        let currentKey = sortArray[i]
        var spaces = Array(maxSpace - currentKey.length).join('.')
        console.log(`- ${currentKey} ${spaces} ${jsObj[currentKey]}`)
    }
}
