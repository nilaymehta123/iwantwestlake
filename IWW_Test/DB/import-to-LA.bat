@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
echo on
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --execute="drop database if exists %database_name%_local"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --execute="create database %database_name%_local"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --database="%database_name%_local" --execute="source %filename_prefix%-%local_file_suffix%.sql"
REM ..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --database="%database_name%_local" --execute="update wf1_users set user_pass='5126c0f1371ab11912956886500c1360' where user_login='admin';"