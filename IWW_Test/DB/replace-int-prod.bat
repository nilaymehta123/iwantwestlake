@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
set /a num=%random% %%10000 +1
echo Temp "Database Name: temp_migrate_%num%"
echo on
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --execute="drop database if exists temp_migrate_%num%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --execute="create database temp_migrate_%num%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --database="temp_migrate_%num%" --execute="source %filename_prefix%-Integration.sql"
php "..\..\tools\Search-Replace-DB-master\srdb.cli.php" -h alabang1.hankeyinvestments.int0 -u DevMySQL_int0 -p Testing.Int0 -n temp_migrate_%num% -s "C:\\inetpub\\WordPress\\%public_host%" -r "D:\\home\\site\\wwwroot"
del %filename_prefix%-Production.sql
..\..\tools\mysql-5.6.25\mysqldump.exe --user=DevMySQL_int0 --password=Testing.Int0 --max_allowed_packet=1G --host=alabang1.hankeyinvestments.int0 --port=3306 --default-character-set=utf8 "temp_migrate_%num%" --result-file=%filename_prefix%-Production.sql
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --execute="drop database if exists temp_migrate_%num%"