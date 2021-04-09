import { Link } from 'react-router-dom';
import styles from './ArticleList.module.css';

const ArticleList = ({ articles, title }) => {
 
  return ( 
    <div className="ArticleList">
      <h2>{ title }</h2>
      {articles.map(article => (
        <div className={styles.blogPreview} key={article._id}>
          <Link to={`/articles/${article._id}`}>
            <h2>{ article.title }</h2>
            <p>Written by { article.userName }</p>
          </Link>
        </div>
      ))}
    </div>
   );
}
 
export default ArticleList;