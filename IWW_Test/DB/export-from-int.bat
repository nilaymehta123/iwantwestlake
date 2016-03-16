@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
echo on
del %filename_prefix%-Integration.sql
..\..\tools\mysql-5.6.25\mysqldump.exe --skip-extended-insert --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --max_allowed_packet=1G --port=3306 --default-character-set=utf8 "%database_name%" --result-file=%filename_prefix%-Integration.sql