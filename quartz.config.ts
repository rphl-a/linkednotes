import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🏡 LinkedNotes",
	pageTitleSuffix: " | LinkedNotes",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "null",
    },
    locale: "en-US",
    baseUrl: "rphl-a.github.io/linkednotes",
    ignorePatterns: ["**/private", "templates", ".obsidian", ".desktop", ".trash", "99 - Miscellaneous/Periodic Notes", "99 - Miscellaneous/Templates"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#F8F5F1",
          lightgray: "#E4D7C3",
          gray: "#B89E7D",
          darkgray: "#7B654F",
          dark: "#432E14",
          secondary: "#D89B22",
          tertiary: "#2A90CB",
          highlight: "rgba(255, 187, 0, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#2A241D",
          lightgray: "#382D24",
          gray: "#7D684D",
          darkgray: "#CDB79B",
          dark: "#EBDAC6",
          secondary: "#E5AA1F",
          tertiary: "#4197B9",
          highlight: "rgba(255, 187, 0, 0.2)",
          textHighlight: "#312a21ff",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: true,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({ collapseByDefault: false }),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest", prettyLinks: false, openLinksInNewTab: true, lazyLoad: true }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
 /*   Plugin.AliasRedirects(), */
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
		rssFullHtml: true,
		includeEmptyFiles: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
