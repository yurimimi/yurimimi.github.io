// Set switch value to the client's locale
const switcher = document.getElementById("language-select")
switcher.value = g_lang

// Set site language based on client's locale
if (g_lang !== "en-US") changeLanguage(g_lang)

// STYLES
// 'Hide' the language switch if not at the top
window.onscroll = function () { hideShowLangSwitch() };

hideShowLangSwitch = () => {
  if (document.body.scrollTop > 50
    || document.documentElement.scrollTop > 50) {
    switcher.style.opacity = "20%";
  } else {
    switcher.style.opacity = "100%";
  }
}

// Showing 3 projects tiles in place of 6 if mobile
function screenSizeResponse() {
  const isMobile = window.matchMedia("only screen and (max-width: 780px)").matches;
  if (isMobile) {
    const projectsListEl = document.querySelector('section[id="projects"] ul')
    const totalTiles = projectsListEl.childElementCount;
    const numberOfElsToRemove = 3; // Replace with your desired count
    const remainingChildEls = totalTiles - numberOfElsToRemove;
    while (projectsListEl.childElementCount > remainingChildEls) {
      const lastChildIndex = projectsListEl.children.length - 1;
      const lastChildNode = projectsListEl.children[lastChildIndex];
      lastChildNode.remove();
    }
  }
}
screenSizeResponse()
window.addEventListener('langChange', () => {
  screenSizeResponse()
})