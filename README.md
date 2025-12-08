# World of Words

World of Words är en liten webbapplikation där användaren kan översätta svenska ord och meningar till flera olika språk med hjälp av ett publikt API. Användaren kan också slumpa fram reseord och fraser samt se en bild som byts ut beroende på vilket språk som valts.

Projektet är skapat som en inlämningsuppgift i kursen "Public API Consumer".

---

## Syfte

Syftet med projektet är att:

- Använda ett publikt API för att hämta extern data.
- Trigga datainhämtning via events (till exempel knapptryck).
- Bygga ett tydligt och responsivt användargränssnitt.
- Använda CSS-variabler för färger och skapa en enhetlig design.

---

## Funktionalitet

Applikationen har följande funktioner:

- Översätter svenska ord eller meningar till valt språk via MyMemory Translation API.
- Användaren kan:
  - Skriva in ett eget ord eller en egen mening på svenska.
  - Låta appen slumpa fram ett svenskt reseord.
- Översättningen startas när användaren klickar på knappen "Slumpa orden".
- Språk väljs via en dropdown-meny (t.ex. engelska, italienska, spanska, franska, tyska, kinesiska, hebreiska, japanska).
- Bilden bredvid applikationen uppdateras beroende på valt språk.
- En lista med reseord/fraser visas som små tips.
- Layouten är responsiv och anpassad för både mobil och desktop.

---

## Publikt API

Projektet använder detta publika API:

- **MyMemory Translation API**  
  URL-exempel:  
  `https://api.mymemory.translated.net/get?q=ORD_HÄR&langpair=sv|en`

API:et används för att översätta ett svenskt ord (eller fras) till valt målspråk. Språkkoden i `langpair` styrs av användarens val i `<select>`-fältet.

---

