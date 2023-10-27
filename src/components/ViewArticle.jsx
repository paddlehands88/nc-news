import  axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ListComments from './ListComments';
import Vote from './Vote';


function ViewArticle() {

    const [article, setArticle] = useState({});
    const { article_id } = useParams();

    console.log(article);

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
        <>
      <div className="ViewArticleContainer">
          <h2 className="ViewArticleHeadline">{article.title} </h2>
          <img className="ViewArticleImage" src={article.article_img_url} alt={"article image"} />
          <h4 className="ViewArticleAuthor">By {article.author}</h4>
          <h4 className="ViewArticleTopic">Topic: {article.topic}</h4>
          <br/>
          <p className="ViewArticleBody">{article.body}</p> 
          <Vote 
            votes={article.votes}
            article_id={article.article_id} 
            />   
      </div>
      <br/>
      <div>
        <ListComments article_id={article_id} />
      </div>
      </>
    )
  }
  
  export default ViewArticle;