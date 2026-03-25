export type LanguageContextType = {
  chooseLang: string;
  setChooseLang: (lang: string) => void;
}

export type Project = {
  id: number;
  title: string;
  category: string;
  description_FR: string;
  description_EN: string;
  image: string;
  technologies: string[];
  link: string;
  linkGitHub?: string;
}

export type BinaryNumbersType = {
  left: number;
  top: number;
  delay: number;
  duration: number;
  text: string;
}

export type SkillsType = {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
  category: string;
}

export type CategoryConfigType = {
  'CI/CD': { 
    name: string;
    glitch: string;
    grid: string;
    binary: string;
    color: string;
  },
  frontend: { 
    name: string;
    glitch: string;
    grid: string;
    binary: string;
    color: string;
  },
  backend: { 
    name: string;
    glitch: string;
    grid: string;
    binary: string;
    color: string;
  },
  database: { 
    name: string;
    glitch: string;
    grid: string;
    binary: string;
    color: string;
  },
  design: { 
    name: string;
    glitch: string;
    grid: string;
    binary: string;
    color: string;
  },
}