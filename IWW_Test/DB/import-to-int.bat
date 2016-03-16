@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
echo on
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --execute="drop database if exists %database_name%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --execute="create database %database_name%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_int0 --password=Testing.Int0 --host=alabang1.hankeyinvestments.int0 --database="%database_name%" --execute="source %filename_prefix%-Integration.sql"