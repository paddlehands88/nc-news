import axios from "axios";
import React from 'react'
import { useState } from 'react'
import CommentCard from './CommentCard';
import { useEffect } from 'react';



export default function ListComments({article_id}) {

    const request = axios.create({
        baseURL: "https://nc-news-3tbb.onrender.com/api",
      });



    const [articleCommentsArray, setArticleCommentsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    request.get(`/articles/${article_id}/comments`)
    .then((res)=>{
        setArticleCommentsArray(res.data.comments)
        setIsLoading(false)
    })
}, [])

  return isLoading
  ? <h2>LOADING...</h2>
  : (
    <>
    <div>
        <h3>Comments</h3>
        <ul className="CommentListUnorderedList">
            {articleCommentsArray.map((comment) => {
                return (
                    <CommentCard 
                        key={comment.created_at}
                        author={comment.author}
                        body={comment.body}
                    />
                )
            })}
        </ul>
    </div>
    </>
  )
}
