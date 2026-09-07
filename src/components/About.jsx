function About({ image, about }) {
  return (
    <aside className="about">
      <img className="about-photo" src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;