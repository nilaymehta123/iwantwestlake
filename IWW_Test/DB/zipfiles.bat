del output.zip
cd ..
..\Tools\7zip\7za.exe a DB\output.zip .\ -x!.git -x!DB -x!wp-config.php
cd DB