const TRANSLATE_URL = "https://api.mymemory.translated.net/get";

const LANG_CODE = {
  en_US: "en",
  it: "it",
  es: "es",
  fr: "fr",
  de: "de",
  zh: "zh", // kinesiska
  he: "he", // hebreiska
  ja: "ja", // japanska
};

const LANGUAGE_IMAGE = {
  default: "pictures/default.jpg",
  en_US: "pictures/america.jpg",
  it: "pictures/italy.jpg",
  es: "pictures/spain.jpg",
  fr: "pictures/france.jpg",
  de: "pictures/germany.jpg",
  zh: "pictures/china.jpg",
  he: "pictures/israel.jpg",
  ja: "pictures/japan.jpg",
};

const SWEDISH_TRAVEL_WORDS = [
  "pass",
  "bagage",
  "boardingkort",
  "incheckning",
  "utcheckning",
  "flygplats",
  "transfer",
  "hotell",
  "bokning",
  "tågstation",
];

const COOL_TRAVEL_WORDS = [
  "billig öl",
  "Var ligger närmaste bar?",
  "rekommenderad dricks",
  "minibar-chock",
  "taxfree-paniken",
  "lyxresort",
  "tredje-dagen-solbränna",
  "strandförsäljare",
  "resefeber",
  "bagagekaos",
  "turistfälla",
  "Har ni all inclusive?",
  "siesta-mode",
  "champagnefrukost",
  "kaosgate",
  "överfull ryanair-flight",
];

const languageSelect = document.getElementById("language");
const customWordInput = document.getElementById("custom-word");
const randomBtn = document.getElementById("random-btn");

const wordEl = document.getElementById("word");
const translationEl = document.getElementById("phonetic");
const definitionEl = document.getElementById("definition");

const imageEl = document.getElementById("language-image");

function updateLanguageImage(langKey) {
  if (!langKey) {
    imageEl.src = LANGUAGE_IMAGE.default;
    return;
  }
  imageEl.src = LANGUAGE_IMAGE[langKey] || LANGUAGE_IMAGE.default;
}

languageSelect.addEventListener("change", () => {
  const langKey = languageSelect.value;
  updateLanguageImage(langKey);
});

function getSwedishWord() {
  const custom = customWordInput.value.trim();

  if (custom !== "") {
    return custom;
  }

  const randomIndex = Math.floor(Math.random() * SWEDISH_TRAVEL_WORDS.length);
  return SWEDISH_TRAVEL_WORDS[randomIndex];
}

async function translateSwedishWord(word, langKey) {
  const targetLang = LANG_CODE[langKey];

  const url = `${TRANSLATE_URL}?q=${encodeURIComponent(
    word
  )}&langpair=sv|${targetLang}`;

  const res = await fetch(url);
  const data = await res.json();

  if (
    !data.responseData ||
    !data.responseData.translatedText ||
    data.responseStatus !== 200
  ) {
    throw new Error("Kunde inte översätta ordet.");
  }

  return data.responseData.translatedText.split(" (")[0];
}

randomBtn.addEventListener("click", async () => {
  const langKey = languageSelect.value;
  const swedishWord = getSwedishWord();

  wordEl.textContent = swedishWord;
  translationEl.textContent = "";
  definitionEl.textContent = "Översätter...";

  try {
    const translated = await translateSwedishWord(swedishWord, langKey);

    wordEl.textContent = translated;
    translationEl.textContent = swedishWord + " (sv)";
    definitionEl.textContent = "";
  } catch (error) {
    console.error(error);
    definitionEl.textContent =
      error.message || "Något gick fel. Prova ett annat ord.";
  }
});
const tipsListEl = document.getElementById("tips-list");

function renderTips() {
  tipsListEl.textContent = COOL_TRAVEL_WORDS.join(" • ");
}

renderTips();
