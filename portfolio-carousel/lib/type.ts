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