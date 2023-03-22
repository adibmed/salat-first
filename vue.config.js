module.exports = {
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/entry/popup.js",
      title: "Popup",
    },

    options: {
      entry: "./src/entry/options.js",
      title: "Options",
    },
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: "src/entry/background.js",
        },
      },
    },
    i18n: {
      locale: "ar",
      fallbackLocale: "ar",
      localeDir: "locales",
      enableInSFC: false,
      enableBridge: false,
    },
  },
};
