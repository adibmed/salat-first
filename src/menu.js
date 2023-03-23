import { mdiTwitter, mdiHome, mdiSproutOutline } from "@mdi/js";


export default [
  [
    {
      to: "/",
      label: "home",
      icon: mdiHome,
      updateMark: true,
    },
    {
      to: "/about",
      label: "about_us",
      icon: mdiSproutOutline,
      updateMark: true,
    },
    {
      href: "https://twitter.com/realAdibMed",
      label: "developer",
      icon: mdiTwitter,
      target: "_blank",
    }
  ]
];
