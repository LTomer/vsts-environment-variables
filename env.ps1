#tfx build tasks upload --task-path ./Vault
[CmdletBinding()]
param()

get-childitem -Path env:* | Format-Table -AutoSize