interface Project {
  id: number;
  name: string;
  description: string;

  github?: string;
  tebex?: string;

  video?: { active: boolean; url: string };

  cover?: string;
  images?: string[];

  duration?: {
    start: Date | string;
    end: Date | string;
  };

  technologies?: Technologie[];
}

interface Technologie {
  name: string;
  icon: string;
}

interface Script {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  features: string[];
  preview: string;
  download: string;
  video: string;
  technologies: Technologie[];
  year: number;
  downloads: number;
  compatibility: string[];
}
