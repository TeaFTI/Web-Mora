/**
 * Site Configuration
 */

import { Box, Home } from "lucide-react";

export const siteConfiguration = {
  name: "Geo",
  description: "Geo",
}

const siteNavigationMain = [
  {
    title: "Main",
    key: "main",
    menu: [
      {
        title: "Home",
        key: "home",
        link: "home",
        icon: Home,
      },
      {
        title: "Asset",
        key: "asset",
        link: "asset",
        icon: Box,
      }
    ]
  }
]

type SiteConfiguration = typeof siteConfiguration

export {
  siteNavigationMain,
  type SiteConfiguration
};

