import * as taskLib from 'azure-pipelines-task-lib/task';

export function PrintVariable(): void {
    const flag: boolean = taskLib.getBoolInput('ShowSensativeValue');
    if (flag)
        taskLib.warning("If an environment variable name contains 'PASS', 'TOKEN', or 'SECRET' and is not set as a secret, the value will be printed to the console. This practice is not recommended for security reasons.")

    let maxSize = 0;
    var jsObj = process.env
    for (var key in jsObj) {
        maxSize = Math.max(maxSize, key.length)
    }

    var maxSpace = maxSize + 3;

    let sortArray = Object.keys(jsObj).sort((a, b) => a.localeCompare(b))
    for (var i in sortArray) {
        let currentKey = sortArray[i]
        var spaces = Array(maxSpace - currentKey.length).join('.')

        const tmpVarName = currentKey.toUpperCase()
        let value = jsObj[currentKey]
        if (!flag && tmpVarName != "VSTS_SECRET_VARIABLES" && (tmpVarName.includes("TOKEN") || tmpVarName.includes("PASS") || tmpVarName.includes("SECRET")))
            value = "(***)"

        console.log(`- ${currentKey} ${spaces} ${value}`)
    }
}
