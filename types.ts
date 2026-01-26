export interface Review {
    id: number;
    name: string;
    text: string;
    source: 'Google' | 'Justdial' | 'WedMeGood';
    rating: number;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    iconName: string;
    highlights: string[];
    image?: string;
}

export interface GeneratedScript {
  title: string;
  content: string;
}
