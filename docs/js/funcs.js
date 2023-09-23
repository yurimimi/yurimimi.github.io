// HANDLERS
function handleLanguageSelect(swch_el) {
  changeLanguage(swch_el.value)
  const langChangeEvent = new Event('langChange');
  window.dispatchEvent(langChangeEvent);
}
// WRAPPERS
function changeLanguage(lang) {
  g_lang = lang

  const sectionsList = document.querySelectorAll("main > section");
  const locale = texts[g_lang]

  checkSectionsNumberMatch(sectionsList, locale)

  Object.keys(locale).forEach((section) => {
    const sctn_elements = jsonToHtml(
      locale[section].children, locale[section].lang)

    changeText(section, sctn_elements)
  })

  localStorage.setItem("lang", g_lang)
}
/**
 *  @param section Section name (profile, about, etc.)
 *  @param sctn_elements Update content for the section
 */
function changeText(sctn, sctn_elements) {
  let section = document.getElementById(sctn)

  while (section.firstChild) {
    if (section.firstChild.tagName !== "IMG") {
      section.removeChild(section.firstChild)
    } else {
      // Skip removing IMG nodes
      if (section.firstChild.nextSibling)
        section.removeChild(section.firstChild.nextSibling)
      else break
    }
  }

  for (const i in sctn_elements) {
    section.appendChild(sctn_elements[i])
  }

  // cache. = aboutSection
}
function getNavigatorLanguage() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.userLanguage ||
      navigator.language ||
      navigator.browserLanguage || 'en-US';
  }
}
/**
 * Check for document's sections to locale sections number match
 */
function checkSectionsNumberMatch(dcmt_sctns, lcl_sctns) {
  let ls = []

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] instanceof Array) {
      ls[i] = arguments[i].length
    }
    else {
      try {
        ls[i] = Object.keys(arguments[i]).length
      } catch (err) {
        throw new Error(err)
      }
    }
  }

  if (ls[0] !== ls[1])
    throw new Error(
      "lengths don't match: " + ls[0] + "/" + ls[1])
}