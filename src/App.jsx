import { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

function App() {
  const [gifs, setGifs] = useState([]);

  const handleClick = () => {
    const id = Date.now();
    const newGif = {
      id,
      src: `${import.meta.env.BASE_URL}gifs/${Math.floor(Math.random() * 3) + 1}.gif`,
      top: Math.random() * 80 + 'vh',
      left: Math.random() * 80 + 'vw',
    };
    setGifs((prev) => [...prev, newGif]);

    // Supprimer ce GIF après 5 secondes
    setTimeout(() => {
      setGifs((prev) => prev.filter((gif) => gif.id !== id));
    }, 5000);
  };

  const clearGifs = () => {
    setGifs([]);
  };

  return (
    <div className={`container ${gifs.length > 0 ? 'led-effect' : ''}`}>
      <div className="buttons">
        <button className="button" onClick={handleClick}>
          Clique ici !
        </button>
        <button className="button clear" onClick={clearGifs}>
          La fête est finie 🎈
        </button>
      </div>

      {gifs.map((gif) => (
        <motion.img
          key={gif.id}
          src={gif.src}
          alt="gif"
          className="gif"
          style={{ top: gif.top, left: gif.left }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}
    </div>
  );
}

export default App;
