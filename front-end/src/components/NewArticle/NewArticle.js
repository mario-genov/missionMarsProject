import styles from './NewArticle.module.css';
import useToken from '../../common/useToken';
import { useEffect } from 'react';

const NewArticle = ({ history }) => {
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      history.push('/login');
    }
  }, [token, history]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, imageUrl, body } = e.target;
    
    fetch('http://localhost:3001/article', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title: title.value,
        imageUrl: imageUrl.value,
        body: body.value,
      })
    }).then(() => {
      console.log('A new article was added.');
      history.push('/');
    })
  }

  return ( 
    <div className={styles.newArticle}>
      <h2>Add a New Article</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Article's title:</label>
        <input
          name="title"
          id="title"
          type="text"
          required
          placeholder="Type or paste your title here!"
        />
        <label htmlFor="imageUrl">Picture link:</label>
        <input
          name="imageUrl"
          id="imageUrl"
          type="url"
          required
          placeholder="Paste the URL of the picture here!"
        />
        <label htmlFor="body">Article's text:</label>
        <textarea
          name="body"
          id="body"
          rows="28"
          required
          placeholder="Type or paste your text here!"
        ></textarea>
        <button>Add Article</button>
      </form>
    </div>
   );
}
 
export default NewArticle;