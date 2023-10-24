import { useEffect, useState } from 'react'
import  axios from 'axios';
import ArticleCard from "./ArticleCard"


function ListArticles() {

    const [articleList, setArticleList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

          const request = axios.create({
            baseURL: "https://nc-news-3tbb.onrender.com/api",
        })


          useEffect(() => {
            
                setIsLoading(true);

                request.get("/articles")

                .then(({data: {articles}}) => {

                    setIsLoading(false);
                    
                    setArticleList(articles)
                })
            
          }, [])
          
  return isLoading ? <p>LOADING...</p> : (
    <div>
        <h3>ListArticles Component Placeholder</h3>
        <ul>
            {articleList.map((article) => {
                
                return (<ArticleCard
                    
                    key={article.title}
                    title={article.title}
                    image={article.article_img_url}
                    author={article.author}
                />)
        })}
        </ul>
    </div>
  )
}

export default ListArticles