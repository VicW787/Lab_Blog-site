import Article from './Article';

function ArticleList({ articles }) {
    console.log('Articles received:', articles)
    return (
        <section className="article-list">
            {articles.map((article) => (
                <Article
                    key={article.id}
                    title={article.title}
                    content={article.content}
                />
            )
            )}

        </section>
    )
}

export default ArticleList