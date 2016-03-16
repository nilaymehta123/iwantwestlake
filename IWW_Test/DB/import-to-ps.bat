@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
echo on
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL --password=Test.Azur3 --host=nowcomdev-mysql.cloudapp.net --execute="drop database if exists %database_name%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL --password=Test.Azur3 --host=nowcomdev-mysql.cloudapp.net --execute="create database %database_name%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL --password=Test.Azur3 --host=nowcomdev-mysql.cloudapp.net --database="%database_name%" --execute="source %filename_prefix%-PS.sql"