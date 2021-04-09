import { useParams } from 'react-router-dom';
import styles from './ArticleDetails.module.css';
import useFetch from '../../common/useFetch';

const ArticleDetails = () => {
  const { id } = useParams();
  const { data: article, isPending, error }  = useFetch('http://localhost:3001/article/' + id);

  return ( 
    <div className={styles.articleDetails}>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { article && (
        <article>
          <h2>{ article.title }</h2>
          <p>Author: <span className={styles.userName}>{ article.userName }</span></p>
          <img src={article.imageUrl} alt="marsPicture"/>
          <div>{ article.body }</div>
        </article>
      ) }
    </div>
   );
}
 
export default ArticleDetails;