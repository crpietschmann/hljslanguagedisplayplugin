# Highlight.js Language Display Plugin

This is a useful plugin for [Highlight.js](https://github.com/highlightjs/highlight.js), developed to enhance code snippets' presentation by displaying the programming language used for syntax highlighting. This plugin automatically adds a language label to the highlighted code block, providing a clear and visually appealing way to indicate the language of the code.

## Usage

Use this to include the `.js` and `.css` files utilizing the CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/crpietschmann/hljslanguagedisplayplugin@v1.0/dist/css/hljslanguagedisplayplugin.css">
<script src="https://cdn.jsdelivr.net/gh/crpietschmann/hljslanguagedisplayplugin@v1.0/dist/js/hljslanguagedisplayplugin.js"></script>
```

Here's an example of including the plugin in to the Javascript that initialized `highlight.js`:

```javascript
hljs.addPlugin(new HLJSLanguageDisplayPlugin());
hljs.highlightAll();
```

You can see this in action on Build5Nines.com here: <https://build5nines.com/introduction-to-building-ai-agents-with-microsoft-semantic-kernel/>

