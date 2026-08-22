function Article({ title, date, content }) {
    return (
        <article className="article">
            <h2>{title}</h2>
            <p className="article-date">{date}</p>
            <p>{content}</p>
        </article>
    )
}

export default Article 