import './App.css';
import Header from './assets/Header';
import About from './assets/About';
import ArticleList from './assets/ArticleList';

const articles = [
  {
    id: 1,
    title: 'The Life of an Aviator on a Tech Journey',
    content:
      "My day starts with a cup of coffee and a check on the day's routing. " +
      "I have to prepare for the day and read through my emergency and safety procedures. " +
      "After the flight, I have to squeeze time to read my notes on Canva and a quick brush through on the previous day's class.",

  },
];

function App() {
  return (
    <div className="blog">
      <Header title="Aviator's Tech Journey" />
      
         <img src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmVyZHxlbnwwfHwwfHx8MA%3D%3D" className="Profile_photo" alt="profile"
         />
        <About
          bio="I am an aviator looking to share my daaily life as i navigate the skies and paddle across the tech world."
          />
        
          <ArticleList articles={articles} />
    </div>
    );      
  }

export default App

