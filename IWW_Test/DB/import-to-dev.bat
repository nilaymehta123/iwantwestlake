@echo off
setlocal ENABLEDELAYEDEXPANSION
for /F "tokens=*" %%A in (setvars.txt) do (
    set %%A
)
echo on
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --execute="drop database if exists %database_name%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --execute="create database %database_name%"
..\..\tools\mysql-5.6.25\mysql --user=DevMySQL_dev0 --password=Testing.Dev0 --host=alabang1.hankeyinvestments.dev0 --database="%database_name%" --execute="source %filename_prefix%-Dev.sql"