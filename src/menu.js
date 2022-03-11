import { mdiTwitter, mdiHome, mdiSproutOutline } from "@mdi/js";

export default [
  "",
  [
    {
      to: "/",
      label: "Home",
      icon: mdiHome,
      updateMark: true,
    },
    {
      to: "/",
      label: "About",
      icon: mdiSproutOutline,
      updateMark: true,
    },
  ],
  "About",
  [
    {
      href: "https://twitter.com/adibe_mohammed",
      label: "Author",
      icon: mdiTwitter,
      target: "_blank",
    },
  ],
];
