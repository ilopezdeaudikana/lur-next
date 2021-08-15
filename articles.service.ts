import { Article } from './models/';
import { input } from './test-input';

const API_URL = process.env.REACT_APP_API_URL;
const isDev = process.env.NODE_ENV === 'development';

interface ArticlesResponse {
  output: Article[];
}

const apiArticles = async (): Promise<{
  data: { list: Article[]; total: number };
}> => {
  const response: Response = await fetch(`${API_URL}/articles`);
  const articles: ArticlesResponse = await response.json();

  return { data: { list: articles.output, total: articles.output.length } };
};

export const getArticles = (): Promise<{
  data: { list: Article[]; total: number };
}> => {
  if (isDev) {
    return new Promise((resolve) => {
      return resolve({
        data: {
          list: input,
          total: input.length,
        },
      });
    });
  } else {
    return apiArticles();
  }
};

const apiArticle = async (url: string): Promise<Article> => {
  const response: Response = await fetch(`${API_URL}/articles/${url}`);
  const article: { output: Article[] } = await response.json();

  return article.output[0];
};

export const getArticle = async (id: string): Promise<Article> => {
  if (isDev) {
    const article: Article | undefined = input.find(
      (a: Article) => a.id === id
    );
    return new Promise((resolve, reject) => {
      if (article) {
        resolve(article);
      } else {
        reject();
      }
    });
  } else {
    return apiArticle(id);
  }
};
