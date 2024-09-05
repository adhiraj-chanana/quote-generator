import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(null);
  function handleclick(){
    const fetchQuote = async () => {
      const category = 'happiness';
      const apiKey = 'tJ80nK+knaRB5q4EQ4UXgA==wdCLdrTntksiHFtr';

      try {
        const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          headers: {
            'X-Api-Key': apiKey,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch quote');
        }

        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } catch (error) {
        setError('Failed to load quote. Please try again later.');
        console.error('Error:', error);
      }
    };

    fetchQuote();
}
  return (
    <div className="container">
      <h1 className="heading">Random Quote Generator</h1>
      <button onClick={handleclick} >Generate</button>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="quote-container">
          <p className="quote">"{quote}"</p>
          <p className="author">- {author}</p>
        </div>
      )}
    </div>
  );
};

export default App;
