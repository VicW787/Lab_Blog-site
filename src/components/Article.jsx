function Article({ title, date, preview }) {
  return (
    <article className="article">
      <h3>{title}</h3>
      <small className="article-date">{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

