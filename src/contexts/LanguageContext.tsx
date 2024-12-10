import React, { createContext, useContext, useState } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "hero.title": "Welcome to Mbonge Council",
    "hero.subtitle": "Unity for Progress & Development - A vibrant municipality in the heart of Cameroon",
    "hero.searchPlaceholder": "What can we help you find?",
    "nav.home": "Home",
    "nav.government": "Government",
    "nav.residents": "Residents",
    "nav.visitors": "Visitors",
    "nav.business": "Business",
    "nav.iwantto": "I Want To...",
    "nav.mayorsOffice": "Mayor's Office",
    "nav.meetMayor": "Meet the Mayor",
    "nav.cabinet": "The Mayor's Cabinet",
    "nav.partner": "Partner with Mbonge Council",
    "nav.artsCulture": "Arts & Culture",
    "nav.education": "Education",
    "nav.directions": "Directions to Council Hall",
    "nav.safety": "Public Safety",
    "nav.parks": "Parks & Recreation",
    "nav.gettingAround": "Getting Around – Visitors",
    "nav.history": "History",
    "nav.movements": "Mbonge Council Movements",
    "nav.thingsToDo": "Things To Do",
    "nav.licenses": "Licenses & Permits",
    "nav.suppliers": "Suppliers",
    "nav.grants": "Grants, Loans & Incentives",
    "nav.zoning": "Buildings & Zoning",
    "nav.bids": "Bids",
    "nav.onlinePermits": "Get Online Permits",
    "nav.startBusiness": "How to Start Your Business",
    "nav.ceremonial": "Obtain Ceremonial Documents",
    "nav.findBusiness": "Find Registered Business",
    "nav.businessLicense": "Apply for a Business License",
    "nav.eventsPermit": "Apply for a Special Events Permit",
    "nav.applyJob": "Apply for a Job",
    "nav.forms": "Download Forms",
    "nav.faqs": "See FAQs",
    "quickLinks.title": "Communal Services",
    "quickLinks.licenses": "Licenses & Permits",
    "quickLinks.administrative": "Administrative Services",
    "quickLinks.technical": "Technical Services",
    "quickLinks.birth": "Birth Certificate Service",
    "quickLinks.social": "Social Affairs",
    "quickLinks.tax": "Communal Tax Service",
    "programs.title": "Programs & Priorities",
    "programs.agenda": "Moving Mbonge Council Forward",
    "programs.agendaDescription": "Our comprehensive plan for sustainable development and community growth in Mbonge Council.",
    "programs.projects": "Ongoing Projects",
    "programs.projectsDescription": "Track the progress of major infrastructure and community development projects.",
    "programs.learnMore": "Learn More",
    "programs.viewProjects": "View Projects",
    "footer.contact": "Contact Information",
    "footer.hours": "Mon-Fri: 8:15 am to 5:00 pm",
    "footer.quickLinks": "Quick Links",
    "footer.cityDetails": "Council Details",
    "footer.incorporated": "Established: 1977",
    "footer.population": "Population: Over 250,000",
    "footer.area": "Area: 4,000 km²",
    "footer.followUs": "Follow Us",
    "footer.taskForce": "Task Force",
    "footer.fraudReport": "Report Fraud: If you suspect fraud, waste, or abuse, please report it.",
    "footer.credits": "Website Designed by DTIMA – Connecting People & Government",
    "mayor.sectionTitle": "Serving Mbonge Council",
    "mayor.title": "Mayor's Message",
    "mayor.imageAlt": "Mayor of Mbonge Council",
    "mayor.message": "As the Mayor of Mbonge Council, I am committed to serving our community and building a brighter future for all residents. Our council's rich cultural heritage and dynamic spirit drive us forward as we work together to create positive change.",
    "mayor.learnMore": "Learn More"
  },
  fr: {
    "hero.title": "Bienvenue au Conseil de Mbonge",
    "hero.subtitle": "Unité pour le Progrès et le Développement - Une municipalité dynamique au cœur du Cameroun",
    "hero.searchPlaceholder": "Que pouvons-nous vous aider à trouver ?",
    "nav.home": "Accueil",
    "nav.government": "Gouvernement",
    "nav.residents": "Résidents",
    "nav.visitors": "Visiteurs",
    "nav.business": "Entreprises",
    "nav.iwantto": "Je Veux...",
    "nav.mayorsOffice": "Bureau du Maire",
    "nav.meetMayor": "Rencontrer le Maire",
    "nav.cabinet": "Le Cabinet du Maire",
    "nav.partner": "Partenariat avec le Conseil de Mbonge",
    "nav.artsCulture": "Arts et Culture",
    "nav.education": "Éducation",
    "nav.directions": "Direction de la Mairie",
    "nav.safety": "Sécurité Publique",
    "nav.parks": "Parcs et Loisirs",
    "nav.gettingAround": "Se Déplacer – Visiteurs",
    "nav.history": "Histoire",
    "nav.movements": "Mouvements du Conseil de Mbonge",
    "nav.thingsToDo": "Activités à Faire",
    "nav.licenses": "Licences et Permis",
    "nav.suppliers": "Fournisseurs",
    "nav.grants": "Subventions, Prêts et Incitatifs",
    "nav.zoning": "Bâtiments et Zonage",
    "nav.bids": "Appels d'Offres",
    "nav.onlinePermits": "Obtenir des Permis en Ligne",
    "nav.startBusiness": "Comment Démarrer Votre Entreprise",
    "nav.ceremonial": "Obtenir des Documents Officiels",
    "nav.findBusiness": "Trouver une Entreprise Enregistrée",
    "nav.businessLicense": "Demander une Licence Commerciale",
    "nav.eventsPermit": "Demander un Permis d'Événement Spécial",
    "nav.applyJob": "Postuler à un Emploi",
    "nav.forms": "Télécharger des Formulaires",
    "nav.faqs": "Voir la FAQ",
    "quickLinks.title": "Services Communaux",
    "quickLinks.licenses": "Licences et Permis",
    "quickLinks.administrative": "Services Administratifs",
    "quickLinks.technical": "Services Techniques",
    "quickLinks.birth": "Service d'État Civil",
    "quickLinks.social": "Affaires Sociales",
    "quickLinks.tax": "Service des Impôts Communaux",
    "programs.title": "Programmes et Priorités",
    "programs.agenda": "Faire Avancer le Conseil de Mbonge",
    "programs.agendaDescription": "Notre plan global pour le développement durable et la croissance communautaire au Conseil de Mbonge.",
    "programs.projects": "Projets en Cours",
    "programs.projectsDescription": "Suivez l'avancement des grands projets d'infrastructure et de développement communautaire.",
    "programs.learnMore": "En Savoir Plus",
    "programs.viewProjects": "Voir les Projets",
    "footer.contact": "Coordonnées",
    "footer.hours": "Lun-Ven: 8h15 à 17h00",
    "footer.quickLinks": "Liens Rapides",
    "footer.cityDetails": "Détails du Conseil",
    "footer.incorporated": "Établi: 1977",
    "footer.population": "Population: Plus de 250 000",
    "footer.area": "Superficie: 4 000 km²",
    "footer.followUs": "Suivez-nous",
    "footer.taskForce": "Groupe de Travail",
    "footer.fraudReport": "Signaler une fraude: Si vous suspectez une fraude, un gaspillage ou un abus, veuillez le signaler.",
    "footer.credits": "Site Web Conçu par DTIMA – Connecter les Citoyens et le Gouvernement",
    "mayor.sectionTitle": "Au Service du Conseil de Mbonge",
    "mayor.title": "Message du Maire",
    "mayor.imageAlt": "Maire du Conseil de Mbonge",
    "mayor.message": "En tant que Maire du Conseil de Mbonge, je m'engage à servir notre communauté et à construire un avenir meilleur pour tous les résidents. Le riche patrimoine culturel de notre conseil et son esprit dynamique nous poussent à aller de l'avant alors que nous travaillons ensemble pour créer un changement positif.",
    "mayor.learnMore": "En Savoir Plus"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
