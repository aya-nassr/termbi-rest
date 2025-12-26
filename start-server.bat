@echo off
echo Starting JSON Server...
npx json-server --watch src/db/index.json --port 3005
pause