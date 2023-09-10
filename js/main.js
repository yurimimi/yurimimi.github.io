// Set switch value to the client's locale
const switcher = document.getElementById("language-select")
switcher.value = g_lang

// Set site language based on client's locale
if (g_lang !== "en-US") changeLanguage(g_lang)

// STYLES
// 'Hide' the language switch if not at the top
window.onscroll = function () { myFunction() };

myFunction = () => {
  if (document.body.scrollTop > 50
    || document.documentElement.scrollTop > 50) {
    switcher.style.opacity = "20%";
  } else {
    switcher.style.opacity = "100%";
  }
}