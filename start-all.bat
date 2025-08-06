@echo off
echo Starting Medical Chatbot - React Frontend + FastAPI Backend
echo.

echo Starting FastAPI Backend...
start cmd /k "cd /d app && python main.py"

echo Waiting 5 seconds for backend to initialize...
timeout /t 5 /nobreak > nul

echo Starting React Frontend...
start cmd /k "cd /d frontend-react && npm start"

echo.
echo Both services are starting!
echo - Backend: http://localhost:8000
echo - Frontend: http://localhost:3000
echo.
echo Press any key to close this window (services will continue running)
pause > nul
