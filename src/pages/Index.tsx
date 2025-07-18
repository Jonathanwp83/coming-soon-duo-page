
import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  const detectBrowserLanguage = (): 'en' | 'fr' => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('fr')) return 'fr';
    return 'fr'; // Default fallback
  };

  const [language, setLanguage] = useState<'en' | 'fr'>(detectBrowserLanguage());

  const content = {
    en: {
      title: "Under Construction",
      message: "We are currently experiencing significant growth and are developing our new digital platform to deliver an exceptional user experience. Our team is dedicated to creating innovative solutions that will better serve our valued clients. Thank you for your patience as we prepare to launch.",
      contact: "For more information, please contact us:",
      email: "contact@plastiqueshorizon.com",
      phone: "1 877-630-4095"
    },
    fr: {
      title: "Site en Construction",
      message: "Nous connaissons actuellement une croissance importante et développons notre nouvelle plateforme numérique pour offrir une expérience utilisateur exceptionnelle. Notre équipe se consacre à la création de solutions innovantes qui serviront mieux nos précieux clients. Merci de votre patience pendant que nous nous préparons au lancement.",
      contact: "Pour plus d'informations, veuillez nous contacter :",
      email: "contact@plastiqueshorizon.com",
      phone: "1 877-630-4095"
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="absolute top-6 right-6">
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
      </div>
      
      <div className="text-center max-w-2xl mx-auto px-6">
        <div className="mb-8">
          <img 
            src="/lovable-uploads/a35fb5a0-816d-478f-9f17-caf94592fba8.png" 
            alt="Plastiques Horizon Logo" 
            className="h-24 mx-auto mb-8"
          />
        </div>
        
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          {content[language].title}
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          {content[language].message}
        </p>
        
        <div className="w-32 h-1 bg-primary mx-auto mb-8 rounded"></div>
        
        <p className="text-lg text-muted-foreground mb-6">
          {content[language].contact}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a 
            href={`mailto:${content[language].email}`}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {content[language].email}
          </a>
          
          <a 
            href={`tel:${content[language].phone}`}
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {content[language].phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
