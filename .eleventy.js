module.exports = function (eleventyConfig) {

    // stylesheets
    eleventyConfig.addPassthroughCopy('assets/style.css');

    // fonts
    eleventyConfig.addPassthroughCopy('assets/fonts.css');

    // favicon
    eleventyConfig.addPassthroughCopy('assets/favicon.jpg');

    //  Markdown Config
    const markdownIt = require('markdown-it')
    const markdownItAttrs = require('markdown-it-attrs')
    const markdownItBracketedSpans = require('markdown-it-bracketed-spans')

    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItBracketedSpans)

    eleventyConfig.setLibrary('md', markdownLib)
    //  end Markdown Config

    return {
        dir: {
            input: "contents",          // default: "."
            includes: "../_includes",   // default: "_includes"
            data: "_data",              // default: "_data"
            output: "_site"
        },
    }
}