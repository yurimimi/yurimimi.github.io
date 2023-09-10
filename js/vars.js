let g_lang = localStorage.getItem("lang") 
if (!g_lang) {
  g_lang = getNavigatorLanguage()
}
