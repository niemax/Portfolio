export type AllProjectsJson = {
  allProjectsJson: {
    edges: {
      node: {
        name: string;
        color: string;
        languageColor: string;
        language: string;
        icon: string;
        tech: string[];
        url: string;
        description: string;
      };
    }[];
  };
};

export type AllTechStackJson = {
  description: string;
  id: number;
  name: string;
  type: string;
  link: string;
  color: string;
  image?: {
    childImageSharp: {
      fixed: {
        src: string;
      };
    };
  };
};

export type Scale = {
  scale: number;
};

export type Y = {
  y: number;
};
