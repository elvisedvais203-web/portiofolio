@echo off
chcp 65001 >nul
cd /d "%~dp0"

set "GIT="
if exist "%ProgramFiles%\Git\bin\git.exe" set "GIT=%ProgramFiles%\Git\bin\git.exe"
if exist "%ProgramFiles(x86)%\Git\bin\git.exe" set "GIT=%ProgramFiles(x86)%\Git\bin\git.exe"
if exist "%LOCALAPPDATA%\Programs\Git\bin\git.exe" set "GIT=%LOCALAPPDATA%\Programs\Git\bin\git.exe"

if "%GIT%"=="" (
  echo Git n'est pas installe. Telechargez-le : https://git-scm.com/download/win
  pause
  exit /b 1
)

set "REPO=https://github.com/elvisedvais203-web/portiofolio.git"

if not exist ".git" (
  "%GIT%" init
  "%GIT%" branch -M main
)

"%GIT%" remote get-url origin >nul 2>&1
if errorlevel 1 (
  "%GIT%" remote add origin %REPO%
) else (
  "%GIT%" remote set-url origin %REPO%
)

"%GIT%" add -A
"%GIT%" commit -m "Portfolio KADIEBWE MAKINA EDVAIS - site premium multilingue + CV PDF"
if errorlevel 1 echo Aucun changement ou commit deja fait.

echo.
echo Envoi vers GitHub...
"%GIT%" push -u origin main

if errorlevel 1 (
  echo.
  echo Echec du push. Verifiez votre connexion GitHub.
  echo Depot : https://github.com/elvisedvais203-web/portiofolio
) else (
  echo.
  echo Succes !
  echo Site : https://elvisedvais203-web.github.io/portiofolio/
)

pause
