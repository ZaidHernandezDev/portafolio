export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  status: 'completed' | 'in-progress';
  statusText: string;
  projectUrl?: string;
  codeUrl: string;
}
