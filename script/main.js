/*
  NOTES :-

  1- Defined The Default Theme [done]
  2- Save It In Local Storage + Set Default Value
  3- write The Code For Dark/Light Theme
*/

let themePage = {
  dark: {
    // beforeStyle: `content: "\\f185"; left: 24px;`,
    addC: "dark",
    removeC: "light",
  },
  light: {
    // beforeStyle: `content: "\\f186"; left: 0;`,
    addC: "light",
    removeC: "dark",
  }
};

const themeBtn = document.getElementById("theme-btn");

let isDefaultDark = window.matchMedia(`(prefers-color-scheme: dark)`).matches;
let isDefaultLight = window.matchMedia(`(prefers-color-scheme: light)`).matches;
let styleEle = document.head.appendChild(document.createElement("style"));

// Set Options
let theme;
let themeLocalName = "Page Mode";

if (localStorage.getItem(themeLocalName)) {
  theme = localStorage.getItem(themeLocalName);
} else { 
  if (isDefaultDark) {
    theme = "dark";
  } else if (isDefaultLight) {
    theme = "light";
  } else {
    theme = undefined;
  };
};

// Add Dark Theme If No Prefers
theme = theme === undefined ? "dark" : theme;

// Save In Local Storage
localStorage.setItem(themeLocalName, theme);

function pageMode() {
  if (localStorage.getItem(themeLocalName) === "dark") {
    styleEle.innerHTML = `
      .toggle-theme-cont .bg::before {left: 0;}
    `;
    // document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else if (localStorage.getItem(themeLocalName) === "light") {
    styleEle.innerHTML = `
      .toggle-theme-cont .bg::before {left: 24px;}
    `;
    document.body.classList.add("light");
    // document.body.classList.remove("dark");
  };
};

pageMode();

themeBtn.addEventListener("click", function () {
  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem(themeLocalName, theme);
  pageMode();
});


console.log(`The Theme Is: ${theme}`);
console.log(styleEle)
