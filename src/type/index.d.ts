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
