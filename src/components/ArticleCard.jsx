import PersonIcon from '@mui/icons-material/Person';


function ArticleCard(article) {



    const { title, image, author } = article;

    return (
      <div className="ArticleCard">
          <img src={image} alt={"article image"} className="ArticleCardImg" />
          <h3 className="ArticleCardHeadline">{title}</h3>
          <br />
          <h4 className="ArticleCardAuthor"><PersonIcon />    {author}</h4>
      </div>
    )
  }
  
  export default ArticleCard;