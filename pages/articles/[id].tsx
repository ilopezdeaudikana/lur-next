import type { NextPage } from 'next';
import Image from 'next/image';
import { getArticle } from '../../articles.service';
import { Article } from '../../models/';

interface Props {
  article: Article;
}

export const ArticlePage: NextPage<Props> = ({ article }) => {
  const { noticia } = article;
  const firstParagraph = noticia.split('\n')[0];
  const restOfTheArticle = noticia.substr(firstParagraph.length);

  return (
    <>
      {!article && <div>Loading article...</div>}

      {article && (
        <>
          <h1>{article.titulo}</h1>
          <section>
            <div dangerouslySetInnerHTML={{ __html: firstParagraph }}></div>
            <br />
            {article.imagen_frontal && (
              <div
                style={{
                  position: 'relative',
                  paddingBottom: '75%',
                }}
              >
                <Image
                  alt={article.titulo}
                  layout='fill'
                  src={`/images/${article.imagen_frontal}`}
                />
              </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: restOfTheArticle }}></div>
          </section>
        </>
      )}
    </>
  );
};

export async function getServerSideProps(context: { query: { id: string } }) {
  const article = await getArticle(context.query.id);
  return {
    props: { article },
  };
}

export default ArticlePage;
