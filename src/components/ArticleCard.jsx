// Import Link from react-router-dom for use with link on article card

function ArticleCard(article) {



    const { title, image, author } = article;

    return (
      <div>
          <h3>{title}</h3>
          <img src={image} alt={"article image"} />
          <h4>{author}</h4>
      </div>
    )
  }
  
  export default ArticleCard;