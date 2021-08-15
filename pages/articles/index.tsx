import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getArticles } from '../../articles.service';
import { Article } from '../../models/';

interface Props {
  list: Article[];
}

export const Articles: NextPage<Props> = ({ list }) => {
  return (
    <>
      {!list && <div>Loading articles...</div>}

      {list && list.map((article: Article) => (
        <Link key={article.id} href={`/articles/${article.id}`}>
          <a>
            <Image
              alt={article.titulo}
              width='300'
              height='225'
              src={`/images/mini/${article.imagen_mini}`}
            />
            <span>{article.titulo}</span>
          </a>
        </Link>
      ))}
    </>
  );
};

export async function getServerSideProps() {
  const response = await getArticles();
  return {
    props: { list: response.data.list },
  };
}

export default Articles;