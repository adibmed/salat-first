module.exports = {
  pages: {
    popup: {
      template: "public/browser-extension.html",
      entry: "./src/entry/popup.js",
      title: "Popup",
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
