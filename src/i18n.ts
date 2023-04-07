import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

export const i18n = createI18n({
  locale: "ar",
  allowComposition: true,
  messages: {
    en,
    ar,
  },
});