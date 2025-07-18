import { useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'fr'>('fr');

  const content = {
    en: {
      title: "Under Construction",
      message: "We are working hard to bring you something amazing. Stay tuned!",
      contact: "For more information, please contact us."
    },
    fr: {
      title: "Site en Construction",
      message: "Nous travaillons dur pour vous apporter quelque chose d'incroyable. Restez à l'écoute !",
      contact: "Pour plus d'informations, veuillez nous contacter."
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
        
        <p className="text-lg text-muted-foreground">
          {content[language].contact}
        </p>
      </div>
    </div>
  );
};

export default Index;
