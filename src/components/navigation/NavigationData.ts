export const getNavigationItems = (t: (key: string) => string) => [
  {
    trigger: t("nav.government"),
    items: [
      { href: "/government/meet-mayor", label: t("nav.meetMayor") },
      { href: "/government/cabinet", label: t("nav.cabinet") },
    ],
  },
  {
    trigger: t("nav.residents"),
    items: [
      { href: "/residents/arts-culture", label: t("nav.artsCulture") },
      { href: "/residents/public-safety", label: t("nav.safety") },
      { href: "/residents/parks-recreation", label: t("nav.parks") },
      { href: "/residents/directions", label: t("nav.directions") },
    ],
  },
  {
    trigger: t("nav.visitors"),
    items: [
      { href: "/visitors/getting-around", label: t("nav.gettingAround") },
      { href: "/visitors/history", label: t("nav.history") },
      { href: "/visitors/things-to-do", label: t("nav.thingsToDo") },
    ],
  },
  {
    trigger: t("nav.business"),
    items: [
      { href: "/business/licenses", label: t("nav.licenses") },
      { href: "/business/suppliers", label: t("nav.suppliers") },
      { href: "/business/grants", label: t("nav.grants") },
      { href: "/business/zoning", label: t("nav.zoning") },
      { href: "/business/bids", label: t("nav.bids") },
      { href: "/business/start", label: t("nav.startBusiness") },
    ],
  },
  {
    trigger: t("nav.iwantto"),
    items: [
      { href: "/i-want-to/ceremonial", label: t("nav.ceremonial") },
      { href: "/i-want-to/find-business", label: t("nav.findBusiness") },
      { href: "/i-want-to/business-license", label: t("nav.businessLicense") },
      { href: "/i-want-to/events-permit", label: t("nav.eventsPermit") },
    ],
  },
];