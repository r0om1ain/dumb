import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

function App() {
  const [gifs, setGifs] = useState([]);

  const handleClick = () => {
    const newGif = {
      id: Date.now(),
      src: `/gifs/${Math.floor(Math.random() * 9) + 1}.gif`,
      top: Math.random() * 80 + 'vh',
      left: Math.random() * 80 + 'vw',
    };
    setGifs((prev) => [...prev, newGif]);
  };

  return (
    <div className="container">
      <button className="button" onClick={handleClick}>
        Click here 
      </button>

      {gifs.map((gif) => (
        <motion.img
          key={gif.id}
          src={gif.src}
          alt="gif"
          className="gif"
          style={{ top: gif.top, left: gif.left }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}

export default App;
