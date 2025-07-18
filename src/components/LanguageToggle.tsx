import { useState } from "react";
import { Button } from "@/components/ui/button";

interface LanguageToggleProps {
  language: 'en' | 'fr';
  onLanguageChange: (lang: 'en' | 'fr') => void;
}

export const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex gap-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('en')}
      >
        EN
      </Button>
      <Button
        variant={language === 'fr' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onLanguageChange('fr')}
      >
        FR
      </Button>
    </div>
  );
};