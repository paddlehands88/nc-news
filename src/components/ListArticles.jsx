import { useEffect, useState } from 'react'
import  axios from 'axios';
import ArticleCard from "./ArticleCard"

function ListArticles() {

    const [articleList, setArticleList] = useState([
        {
            title: "Running a Node App",
            topic: "coding",
            author: "jessjelly",
            body: "This is part two of a series on how to get up and running with Systemd and Node.js. This part dives deeper into how to successfully run your app with systemd long-term, and how to set it up in a production environment.",
            created_at: 1604728980000,
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700",
          },
          {
            title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
            topic: "coding",
            author: "jessjelly",
            body: "Many people know Watson as the IBM-developed cognitive super computer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs, and since winning TV fame (and a $1 million prize) IBM has put it to use tackling tough problems in every industry from healthcare to finance. Most recently, IBM has announced several new partnerships which aim to take things even further, and put its cognitive capabilities to use solving a whole new range of problems around the world.",
            created_at: 1589418120000,
            votes: 0,
            article_img_url:
              "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=700&h=700",
          }]);

          const request = axios.create({
            baseURL: "https://nc-news-3tbb.onrender.com/api",
        })


          useEffect(() => {
            
            
                request.get("/articles")

                .then(({data: {articles}}) => {

                    console.log(articles);
                    
                    setArticleList(articles)
                })
            
          }, [])

  return (
    <div>
        <h3>ListArticles Component Placeholder</h3>
        <ul>
            {articleList.map((article) => {
                // {console.log(article.title)}
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