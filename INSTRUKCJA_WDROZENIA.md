# 🚀 INSTRUKCJA WDROŻENIA NA VERCEL (DARMOWE)

## Krok 1: Przygotowanie (5 minut)

### A) Utwórz konto GitHub (jeśli nie masz)
- Idź na https://github.com/signup
- Utwórz bezpłatne konto
- Potwierdź email

### B) Utwórz nowe repozytorium na GitHub
- Zaloguj się na https://github.com
- Kliknij "+" w górnym rogu → "New repository"
- Nazw: `json-viewer`
- Ustaw "Public" (darmowe)
- Nie zaznaczaj "Initialize with README" (będzie konflikt)
- Kliknij "Create repository"

---

## Krok 2: Wgranie plików (10 minut)

### Opcja A: Przez terminal (polecane)

```bash
# 1. Otwórz terminal/cmd w folderze z plikami projektu

# 2. Inicjalizuj Git
git init
git config user.name "Twoja nazwa"
git config user.email "twój@email.com"

# 3. Dodaj pliki
git add .

# 4. Utwórz commit
git commit -m "Initial commit - JSON Viewer App"

# 5. Dodaj remote URL (zamień USER na Twoją nazwę GitHub)
git remote add origin https://github.com/USER/json-viewer.git

# 6. Push do GitHub
git branch -M main
git push -u origin main

# Po tym GET-zie pojawi się prompt o token - wygeneruj go:
# - GitHub → Settings → Developer settings → Personal access tokens (Tokens classic)
# - Generate new token → zaznacz "repo"
# - Skopiuj token i wklej jako hasło
```

### Opcja B: Przez GitHub webUI (prościej, ale wolniej)

- Otwórz https://github.com/USER/json-viewer (Twoje repozytorium)
- Kliknij "Add file" → "Upload files"
- Przeciągnij wszystkie foldery i pliki
- Kliknij "Commit changes"

---

## Krok 3: Wdrożenie na Vercel (2 minuty) ⚡

### A) Zaloguj się na Vercel
- Idź na https://vercel.com/signup
- Kliknij "Continue with GitHub"
- Potwierdź dostęp

### B) Wdróż projekt
- Na Vercel kliknij "Add New..." → "Project"
- Wyszukaj "json-viewer" w swoich repo GitHub
- Kliknij na projekt
- Vercel automatycznie rozpozna React
- Kliknij "Deploy"
- Czekaj ~2 minuty ⏳

### C) Gotowe! 🎉
- Po wdrożeniu dostaniesz link: `https://json-viewer-XXXXX.vercel.app`
- Kliknij link i gotowa aplikacja jest live!

---

## Krok 4: Testowanie

1. Otwórz link do aplikacji
2. Wklej przykładowy JSON:

```json
{
  "imie": "Jan",
  "wiek": 25,
  "atywny": true,
  "hobby": ["czytanie", "programowanie"],
  "adres": {
    "ulica": "Główna 5",
    "kod": "00-001"
  }
}
```

3. W prawym panelu powinno się wyświetlić ładne drzewo
4. Klikaj na chevron (strzałki) aby rozwijać/zwijać

---

## 🆘 TROUBLESHOOTING

### "Błąd: GitHub authentication failed"
→ Sprawdź czy token Git jest ważny
→ Regeneruj nowy token w GitHub settings

### "Deployment failed"
→ Sprawdź czy wszystkie pliki są w Git-cie: `git status`
→ Dodaj brakujące: `git add .` → `git commit -m "..."`

### "Cannot find module"
→ Vercel zainstaluje dependencies automatycznie
→ Czekaj 3-5 minut na pełne wdrożenie

### Aplikacja się nie ładuje
→ Sprawdź build logs na Vercel (kliknij na deployment)
→ Najczęściej brakuje Tailwind CSS - przeinstaluuj

---

## 📝 Co jest w projekcie?

```
json-viewer/
├── src/
│   ├── json-viewer.jsx    ← Główny komponent (wizualizacja JSON)
│   ├── App.js             ← Wrapper
│   ├── index.js           ← Entry point
│   └── index.css          ← Style Tailwind
├── public/
│   └── index.html         ← HTML strona
├── package.json           ← Zależności
├── tailwind.config.js     ← Konfiguracja Tailwind
└── README.md              ← Ten plik
```

---

## 🎨 Customizacja

Jeśli chcesz zmienić wygląd:

1. Otwórz `src/json-viewer.jsx`
2. Zmień kolory w className (np. `text-blue-600` → `text-red-600`)
3. Commit i push: `git add . && git commit -m "..." && git push`
4. Vercel automatycznie redeploy-uje!

---

## ✅ Checklist

- [ ] Mam GitHub account
- [ ] Mam repozytorium "json-viewer" na GitHub
- [ ] Wgrałem wszystkie pliki do GitHub
- [ ] Mam Vercel account
- [ ] Wdrożyłem projekt na Vercel
- [ ] Mam działający link do aplikacji
- [ ] Testuję aplikację z JSON-em

---

**Gotowe! 🎊 Masz działającą aplikację online na darmowym hostingu!**
