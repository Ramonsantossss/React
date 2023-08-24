import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [info, getMoreRecente] = useState([]);
  const [data, getMorePopular] = useState([]);
  const [zera, getMoreTopes] = useState([]);

useEffect(() => {
    async function getMoreRecente() {
      try {
        const { data } = await axios.get('https://ruby-careful-skunk.cyclic.app/recents/1');
        setAnimesPopular(data.mangas.slice(0, 15));
        /* console.log(data.slice(0, 15)); */
      } catch (err) {
        console.log("Err on get more popular", err);
      }
    }
    
    async function getMorePopular() {
      try {
        const { data } = await axios.get('https://ruby-careful-skunk.cyclic.app/top/1');
        setAnimesPopular(data.slice(0, 15));
        /* console.log(data.slice(0, 15)); */
      } catch (err) {
        console.log("Err on get more popular", err);
      }
    }
    
    async function getMoreTopes() {
      try {
        const { data } = await axios.get('https://ruby-careful-skunk.cyclic.app/top/2');
        setAnimesPopular(data.slice(0, 15));
        /* console.log(data.slice(0, 15)); */
      } catch (err) {
        console.log("Err on get more popular", err);
      }
    }
    
    async function getResultsOfAnimes() {
      await getMorePopular();
      await getRecentReleases();
      await getMoreTopes();
    }

    getResultsOfAnimes();

}, []);


return (
<>
  <div>
    <form action="/search" method="get">
      <header className="header-main">
        {/* Rest of your header code */}
      </header>
    </form>
    <section className="genders">
      <div className="genders-div">
        {/* Rest of your gender links */}
      </div>
    </section>
    <main>
      <section className="section-mangas">
        <div className="header"># Acabaram de Sair!!!</div>
        <div className="mangas-container">
          {info.map((manga, index) => (
            <a href="#" key={index}>
              <div className="manga">
                <div className="cover"><img src={manga.image} alt={manga.name} /></div>
                <div className="title">{manga.name}</div>
                <div className="chapters">Score: {manga.score}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="section-mangas">
        <div className="header"># Recomendações</div>
        <div className="mangas-container">
          {data.map((manga, index) => (
            <a href="#" key={index}>
              <div className="manga">
                <div className="cover"><img src={manga.image} alt={manga.name} /></div>
                <div className="title">{manga.name}</div>
                <div className="chapters">Score: {manga.score}</div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
    <footer>
      <div className="header">
        Destaques
      </div>
      <section className="mangas-container">
        {zera.map((manga, index) => (
          <a href="#" key={index}>
            <div className="manga highlight">
              <div className="cover"><img src={manga.image} alt={manga.name} /></div>
              <div className="title">{manga.name}</div>
              <div className="chapters">Score: {manga.score}</div>
            </div>
          </a>
        ))}
      </section>
    </footer>
    <div className="modal-manga">
      <div className="modal-manga-content">
      </div>
    </div>
  </div>
  </>
);

}

export default App;
