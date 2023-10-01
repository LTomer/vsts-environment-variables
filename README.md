# Environment-Variables - Version 1.*

The purpose of this task is to print the environment variable to the build console.
If there is an error during the build process, it will print the environment variable on post-job, but if the checkbox "Print on Post job" selected it will print the details each time.

## New on version 1.1.*

The task will hide the value in case the variable name includes one of the words in the list:
* PASSWORD
* TOKEN
* SECRET

For example, The value of the variable name called 'UserPassword' will pring '(***)' instead of the value itself.
> For debug mode you can set the flag 'ShowSensativeValue' to true and it will print the value in case it is not an Azure DevOps secret variable - ___Not recommended___

The task work on multiplatform and tested on Windows & Linux & Mac.

![example](images/Example.png)