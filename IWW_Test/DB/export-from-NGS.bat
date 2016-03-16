@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
echo on
del %filename_prefix%-%local_file_suffix%.sql
..\..\tools\mysql-5.6.25\mysqldump.exe --skip-extended-insert --user=admin --password=Testing.123 --max_allowed_packet=1G --host=ngswebdemo --port=3306 --default-character-set=utf8 "%database_name%_local" --result-file=%filename_prefix%-%local_file_suffix%.sql