function About ({ photo, alt, bio }) {
    return (
        <section className="about">
            <img className="about-photo" src={photo} alt={alt} />
            <p>{bio}</p>
        </section>
    )
}