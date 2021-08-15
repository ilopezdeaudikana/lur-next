export * from './errors.model';

export interface Article {
  id: string;
  url: string;
  titulo: string;
  description?: string;
  noticia: string;
  imagen_frontal: any;
  imagen_mini: any;
}
export interface ArticlesResponse {
  data: { output: Article[]; total: number };
}

