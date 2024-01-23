module.exports = function (eleventyConfig) {

    // stylesheets
    eleventyConfig.addPassthroughCopy('assets/style.css');
    eleventyConfig.addPassthroughCopy('assets/tufte.css');

    // fonts
    eleventyConfig.addPassthroughCopy('assets/fonts.css');
    eleventyConfig.addPassthroughCopy('assets/et-book/');

    // favicon
    eleventyConfig.addPassthroughCopy('assets/favicon.jpg');

    // images folder
    eleventyConfig.addPassthroughCopy('assets/images/');

    // [WebApp] Bookmarks
    eleventyConfig.addPassthroughCopy('contents/bookmarks');

    /*  ======== START Markdown Config ========= */
    const markdownIt = require('markdown-it')

    const markdownItAttrs = require('markdown-it-attrs') // PLUGIN
    const markdownItBracketedSpans = require('markdown-it-bracketed-spans') // PLUGIN
    const markdownItHeaderSections = require('markdown-it-header-sections') // PLUGIN

    const tufteMarginnote = require('./md-tufte/marginnote') // Tufte Marginnote
    const tufteSidenote = require('./md-tufte/sidenote') // Tufte Sidenote

    const markdownItOptions = {
        html: true,
        breaks: true,
        linkify: true
    }

    const markdownLib = markdownIt(markdownItOptions).use(markdownItAttrs).use(markdownItBracketedSpans).use(markdownItHeaderSections).use(tufteMarginnote).use(tufteSidenote)

    eleventyConfig.setLibrary('md', markdownLib)
    /* ========== END Markdown Config =========== */

    /* =========== START Luxon Config =========== */

    const { DateTime } = require("luxon");

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    /* ============ END Luxon Config ============ */

    return {
        dir: {
            input: "contents",          // default: "."
            includes: "../_includes",   // default: "_includes"
            data: "_data",              // default: "_data"
            output: "_site"
        },
    }
}