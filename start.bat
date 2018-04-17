@echo off

REM Requires http-server. Available from npm using 'npm i -g http-server'


REM Batch File to simply the load functionality of the Timer page

REM -- Starts the http-server on port 4140 (opens in a new window to avoid IO Block)
start http-server -p 4140

REM -- Opens the default web browser and loads the Timer page.
start http://localhost:4140/Timer.html


@echo on