import { useParams } from 'react-router';
import styles from './ArticleDetails.module.css';

const ArticleDetails = () => {
  const { id } = useParams();
  
  return ( 
    <div className={styles.articleDetails}>
      <h2>Article details: { id }</h2>
    </div>
   );
}
 
export default ArticleDetails;