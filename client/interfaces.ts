export interface Ingredient {
    name:string,
    perfumeName: string;
    url: string;
    description: string;
    noteUrl: string;
    heartNoteUrl: string;
    baseNoteUrl: string;
  }
  
  export interface PerfumeButton {
    children?: React.ReactNode;
    onClick: () => void;
    ingredient: string;
  }

