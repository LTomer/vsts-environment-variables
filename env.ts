import tl = require('vsts-task-lib/task');
const _ = require('lodash');

function run() {
	let maxSize=0;
	_.each(process.env, function (value, key) {
        if(key.length > maxSize)
			maxSize = key.length;
    });
	
	var maxSpace = maxSize + 3;
	
	_.each(process.env, (value, key) => {
		var spaces = Array(maxSpace - key.length).join(' ')
		
		console.log(key + spaces + process.env[key]);
	});
}

run();