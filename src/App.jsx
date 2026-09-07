import './App.css';
import { blogName, aboutImage, aboutText, posts } from './blog';
import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div className="blog">
      <Header name={blogName} />
      <About image={aboutImage} about={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;