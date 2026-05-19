# Pousse le portfolio vers https://github.com/elvisedvais203-web/portiofolio
# Exécuter : clic droit → Exécuter avec PowerShell (ou dans un terminal)

$ErrorActionPreference = "Stop"
$repoUrl = "https://github.com/elvisedvais203-web/portiofolio.git"
$root = $PSScriptRoot

Set-Location $root

$git = Get-Command git -ErrorAction SilentlyContinue
if (-not $git) {
    $candidates = @(
        "${env:ProgramFiles}\Git\bin\git.exe",
        "${env:ProgramFiles(x86)}\Git\bin\git.exe",
        "$env:LOCALAPPDATA\Programs\Git\bin\git.exe"
    )
    foreach ($p in $candidates) {
        if (Test-Path $p) { $git = $p; break }
    }
}
if (-not $git) {
    Write-Host "Git n'est pas installé. Installez-le : https://git-scm.com/download/win" -ForegroundColor Red
    Write-Host "Puis relancez ce script." -ForegroundColor Yellow
    exit 1
}

if ($git -is [string]) { $gitExe = $git } else { $gitExe = $git.Source }

if (-not (Test-Path ".git")) {
    & $gitExe init
    & $gitExe branch -M main
}

$remote = & $gitExe remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
    & $gitExe remote add origin $repoUrl
} elseif ($remote -ne $repoUrl) {
    & $gitExe remote set-url origin $repoUrl
}

& $gitExe add -A
& $gitExe commit -m "Portfolio KADIEBWE MAKINA EDVAIS - site premium multilingue + CV PDF" 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Rien de nouveau à committer, ou premier commit..." -ForegroundColor Yellow
    & $gitExe status
}

Write-Host "Envoi vers GitHub..." -ForegroundColor Cyan
& $gitExe push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Succès ! Site Pages (après activation Actions) :" -ForegroundColor Green
    Write-Host "https://elvisedvais203-web.github.io/portiofolio/" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Si le dépôt est vide sur GitHub, essayez :" -ForegroundColor Yellow
    Write-Host "  git push -u origin main --force" -ForegroundColor White
    Write-Host "Connectez-vous avec un token : https://github.com/settings/tokens" -ForegroundColor Yellow
}
