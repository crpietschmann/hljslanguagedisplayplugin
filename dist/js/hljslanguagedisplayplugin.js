/*
* Highlight.js Language Display Plugin
* Copyright (c) 2024Chris Pietschmann
* https://github.com/crpietschmann/hljslanguagedisplayplugin
* MIT License
* https://github.com/crpietschmann/hljslanguagedisplayplugin/license
*/
class HLJSLanguageDisplayPlugin {
    constructor(options = {}) {
        self.hook = options.hook;
        self.callback = options.callback;
    }

    "after:highlightElement"({ el, text }) {
        // Extract the language name from the class list of the <code> tag
        let languageClass = Array.from(el.classList).find(cls => cls.startsWith('language-'));
		
		// Get the registered language name from Highlight.js
		let languageKey = languageClass ? languageClass.replace('language-', '') : 'Unknown';
        let languageName = languageKey && hljs.getLanguage(languageKey) ? hljs.getLanguage(languageKey).name : 'Unknown';
		/*
        let languageName = languageClass ? languageClass.replace('language-', '') : 'Unknown';
		if (languageName === 'plaintext') { languageName = 'Plain Text'; }
		*/
		
        // Create the language div
        let languageDiv = Object.assign(document.createElement("div"), {
            className: "hljs-language",
            innerText: languageName
        });

        // Insert the language div before the highlighted element
        el.parentElement.insertBefore(languageDiv, el);
    }
}