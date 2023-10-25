import  axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function ViewArticle() {

    const [article, setArticle] = useState({});
    const { article_id } = useParams();

    const request = axios.create({
        baseURL: "https://nc-news-3tbb.onrender.com/api",
    })

    useEffect(() => {
        request.get(`/articles/${article_id}`, {params: {article_id}} )
        .then(({data: {article}}) => {
            setArticle(article)
            return article;
        })
    }, [])

    return (
      <div>
          <h3>{article.title} </h3>
          <img src={article.article_img_url} alt={"article image"} />
          <h4>By {article.author}</h4>
          <h4>Topic: {article.topic}</h4>
          <br/>
          <p>{article.body}</p>


          
      </div>
    )
  }
  
  export default ViewArticle;