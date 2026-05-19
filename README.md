# Portfolio — KADIEBWE MAKINA EDVAIS

Site vitrine premium (HTML / CSS / JS), multilingue, avec téléchargement du **CV en PDF** (police Times, équivalent professionnel à Times New Roman).

## Profil GitHub

**Dépôt :** [github.com/elvisedvais203-web/portiofolio](https://github.com/elvisedvais203-web/portiofolio)

Pour héberger ce site sur GitHub Pages :

1. Poussez le contenu de ce dossier sur la branche `main` du dépôt **portiofolio**.
2. Sur GitHub : **Settings → Pages → Build and deployment → Source** : choisissez **GitHub Actions**.
3. Le workflow `.github/workflows/deploy-pages.yml` publiera le site à chaque push.

### URL du site en ligne

**https://elvisedvais203-web.github.io/portiofolio/**

## Pousser sur GitHub (sans bloquer PowerShell)

Double-cliquez sur **`push-to-github.bat`** (pas besoin d’autoriser les scripts `.ps1`).

Ou dans PowerShell, une seule fois pour le script `.ps1` :
```powershell
powershell -ExecutionPolicy Bypass -File ".\push-to-github.ps1"
```

## Tester en local

```bash
cd "portolio edvais"
python -m http.server 8765
```

Ouvrez [http://localhost:8765/](http://localhost:8765/).

## Fichiers principaux

| Fichier | Rôle |
|--------|------|
| `index.html` | Structure |
| `style.css` | Design |
| `script.js` | i18n, animations, **export CV PDF (jsPDF, Times)** |
| `languages/*.json` | Traductions |

## CV PDF

Le bouton « Télécharger CV » génère `CV_KADIEBWE_MAKINA_EDVAIS.pdf` dans le navigateur via [jsPDF](https://github.com/parallax/jsPDF), police **`times`** (famille Times Roman du standard PDF).
