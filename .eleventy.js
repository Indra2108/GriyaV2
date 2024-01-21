module.exports = function (eleventyConfig) {

    // stylesheets
    eleventyConfig.addPassthroughCopy('assets/style.css');
    eleventyConfig.addPassthroughCopy('assets/blogstyle.css');

    // fonts
    eleventyConfig.addPassthroughCopy('assets/fonts.css');

    // favicon
    eleventyConfig.addPassthroughCopy('assets/favicon.jpg');

    // [WebApp] Bookmarks
    eleventyConfig.addPassthroughCopy('contents/bookmarks');

    /*  ======== START Markdown Config ========= */
    const markdownIt = require('markdown-it')

    const markdownItAttrs = require('markdown-it-attrs') // PLUGIN
    const markdownItBracketedSpans = require('markdown-it-bracketed-spans') // PLUGIN

    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItBracketedSpans)

    eleventyConfig.setLibrary('md', markdownLib)
    /*  ========== END Markdown Config =========== */

    return {
        dir: {
            input: "contents",          // default: "."
            includes: "../_includes",   // default: "_includes"
            data: "_data",              // default: "_data"
            output: "_site"
        },
    }
}