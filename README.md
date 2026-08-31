# World of Words

World of Words is a small web application where users can translate Swedish words and sentences into several different languages using a public API. Users can also generate random travel-related words and phrases, while an image changes depending on the selected language.

The project was created as an assignment for the **Public API Consumer** course.

---

## Purpose

The purpose of the project is to:

- Use a public API to fetch external data.
- Trigger data fetching through events, such as button clicks.
- Build a clear and responsive user interface.
- Use CSS variables for colors and create a consistent design.

---

## Features

The application includes the following features:

- Translates Swedish words or sentences into a selected language using the MyMemory Translation API.
- The user can:
  - Enter their own Swedish word or sentence.
  - Let the application generate a random Swedish travel-related word.
- The translation starts when the user clicks the **"Slumpa orden"** button.
- Languages are selected through a dropdown menu, including English, Italian, Spanish, French, German, Chinese, Hebrew and Japanese.
- The image next to the application changes depending on the selected language.
- A list of travel-related words and phrases is displayed as small tips.
- The layout is responsive and adapted for both mobile and desktop.

---

## Public API

The project uses the following public API:

- **MyMemory Translation API**  
  Example URL:  
  `https://api.mymemory.translated.net/get?q=WORD_HERE&langpair=sv|en`


