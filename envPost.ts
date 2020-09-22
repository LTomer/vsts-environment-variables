import * as taskLib from 'azure-pipelines-task-lib/task';
import util = require("./util.js");

function run() {
    const flag: boolean = taskLib.getBoolInput('PostJob');
    const status: string = taskLib.getVariable('agent.jobstatus') || ''

	if(status != 'Succeeded' || flag)
	{
		util.PrintVariable()
	}
}

run();