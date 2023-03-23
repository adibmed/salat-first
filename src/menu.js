import { mdiTwitter, mdiHome, mdiSproutOutline } from "@mdi/js";
import OptionsPage from './view/options.vue';


export default [
  [
    {
      to: "/",
      label: "Home",
      icon: mdiHome,
      updateMark: true,
    },
    {
      to: "/about",
      label: "About",
      icon: mdiSproutOutline,
      updateMark: true,
    },
    {
      href: "https://twitter.com/realAdibMed",
      label: "Author",
      icon: mdiTwitter,
      target: "_blank",
    }
  ]
];
