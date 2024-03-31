# Environment-Variables - Version 0.1.*

This task print the environment variable to the Azure DevOps pipeline console.
If the process is not successfully completed, it will print the environment variable at the post-process.

## New on version 0.2.*
The task will hide the value in case the variable name includes one of the words in the list:
* PASS
* TOKEN
* SECRET

For example, The value of the variable name called 'UserPassword' will print '(***)' instead of the value itself.
> For debug mode you can set the flag 'ShowSensativeValue' to true and it will print the value in case it is not an Azure DevOps secret variable (Warning message will print) - ___Not recommended___

_For more information, read the documents in the GIT repo._
