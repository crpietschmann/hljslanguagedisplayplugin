# Highlight.js Language Display Plugin

This is a plugin for [highlight.js](https://github.com/highlightjs/highlight.js) that will add a bar to the top of the code syntax highlighting box that displays the **language** name for the code displayed.

## Usage

Use this to include the `.js` and `.css` files utilizing the CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/crpietschmann/hljslanguagedisplayplugin@v1.0/dist/css/hljslanguagedisplayplugin.css">
<script src="https://cdn.jsdelivr.net/gh/crpietschmann/hljslanguagedisplayplugin@1.0/dist/js/hljslanguagedisplayplugin.js"></script>
```

Here's an example of including the plugin in to the Javascript that initialized `highlight.js`:

```javascript
hljs.addPlugin(new HLJSLanguageDisplayPlugin());
hljs.highlightAll();
```

You can see this in action on Build5Nines.com here: <https://build5nines.com/introduction-to-building-ai-agents-with-microsoft-semantic-kernel/>

