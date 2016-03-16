@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
set /a num=%random% %%10000 +1
echo Temp "Database Name: temp_migrate_%num%"
echo on
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --execute="drop database if exists temp_migrate_%num%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --execute="create database temp_migrate_%num%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --database="temp_migrate_%num%" --execute="source %filename_prefix%-%local_file_suffix%.sql"
php "..\..\tools\Search-Replace-DB-master\srdb.cli.php" -h alabang1.hankeyinvestments.dev0 -u DevMySQL_dev0 -p Testing.Dev0 -n temp_migrate_%num% -s "http://localhost:%local_port%" -r "%public_https%://%public_host%"
php "..\..\tools\Search-Replace-DB-master\srdb.cli.php" -h alabang1.hankeyinvestments.dev0 -u DevMySQL_dev0 -p Testing.Dev0 -n temp_migrate_%num% -s "http%%3A%%2F%%2Flocalhost%%3A%local_port%" -r "%public_https%%%3A%%2F%%2F%public_host%"
php "..\..\tools\Search-Replace-DB-master\srdb.cli.php" -h alabang1.hankeyinvestments.dev0 -u DevMySQL_dev0 -p Testing.Dev0 -n temp_migrate_%num% -s "C:\\Azure\\%local_folder_name%" -r "D:\\home\\site\\wwwroot"
del %filename_prefix%-Production.sql
..\..\tools\mysql-5.6.25\mysqldump.exe --user=DevMySQL_dev0 --password=Testing.Dev0 --max_allowed_packet=1G --host=alabang1.hankeyinvestments.dev0 --port=3306 --default-character-set=utf8 "temp_migrate_%num%" --result-file=%filename_prefix%-Production.sql
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --execute="drop database if exists temp_migrate_%num%"