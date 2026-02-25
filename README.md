# JSON Viewer 📋

Prosta aplikacja React do przeglądania i wizualizacji JSON-a z interfejsem drzewiastym.

## Cechy

✅ Wklejanie JSON-a w pole tekstowe  
✅ Dynamiczne rozwijalne drzewo (expand/collapse)  
✅ Kolorowanie typów danych (stringi, liczby, boolean, null)  
✅ Walidacja JSON-a w czasie rzeczywistym  
✅ Elegancki minimalistyczny design  
✅ Responsywny interfejs  

## Szybki Start Lokalnie

```bash
# 1. Zainstaluj zależności
npm install

# 2. Uruchom dev server
npm start

# Aplikacja otworzy się na http://localhost:3000
```

## Wdrożenie na Vercel (DARMOWE)

### Opcja 1: Najprostsza (przez Vercel CLI)

```bash
# 1. Zainstaluj Vercel CLI
npm i -g vercel

# 2. Z folderu projektu uruchom
vercel

# 3. Potwierdź pytania (domyślne są OK)
# 4. Gotowe! Dostaniesz link do Twojej aplikacji
```

### Opcja 2: Przez GitHub

```bash
# 1. Zaloguj się na GitHub i utwórz nowe repo
# 2. Push-uj kod do GitHub-a:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TWOJA_NAZWA/json-viewer.git
git push -u origin main

# 3. Idź na https://vercel.com
# 4. Zaloguj się GitHub-em
# 5. Kliknij "New Project" i wybierz repo
# 6. Kliknij "Deploy"
# 7. Gotowe!
```

## Użycie

1. Wklej JSON w lewe pole
2. W prawym panelu zobaczysz strukturę danych
3. Klikaj na chevron (strzałka) aby rozwijać/zwijać elementy
4. Dane są kolorowane dla łatwej czytania

## Technologia

- **React 18** - UI framework
- **Tailwind CSS** - styling
- **Lucide React** - ikony
- **JavaScript ES6+** - lógika

## Struktura Projektu

```
json-viewer/
├── public/
│   └── index.html
├── src/
│   ├── json-viewer.jsx      # Główny komponent
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Wsparcie

Jeśli masz problemy lub chcesz dodać coś nowego, edytuj plik `src/json-viewer.jsx`.

---

Made with ❤️ using React
