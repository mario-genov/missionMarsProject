import useFetch from '../../common/useFetch';
import ArticleList from '../ArticleList/ArticleList';

const Home = () => {
  const { data: articles, isPending, error } = useFetch("http://localhost:3001/article");

  return <div className='home'>
    { error && <div className="error">{ error }</div> }
    { isPending && <div className="loading">Loading...</div> }
    { articles && <ArticleList articles={articles} title="All Articles:" /> }
  </div>;
};

export default Home;