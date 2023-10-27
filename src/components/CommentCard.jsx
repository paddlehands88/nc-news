import React from 'react'
import PersonIcon from '@mui/icons-material/Person';


function CommentCard(comment) {

const { author, body } = comment;


  return (
    <div className="CommentCardContainer">
    <h4 className="CommentCardAuthor"><PersonIcon /> {author}</h4>
    <p className="CommentCardBody">{body}</p>
    </div>
  )
}

export default CommentCard