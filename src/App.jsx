import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'; // Substitua 'styles.css' pelo caminho correto até o seu arquivo CSS


function App() {
  const [count, setCount] = useState(0);
  const [info, setAnimesRecente] = useState([]);
  const [data, setAnimesPopular] = useState([]);
  const [zera, setAnimesTopes] = useState([]);

useEffect(() => {
async function getMoreRecente() {
  try {
    const { data } = await axios.get('https://ruby-careful-skunk.cyclic.app/recents/1');
    setAnimesRecente(data.slice(0, 15));
  } catch (err) {
    console.log("Erro ao obter mais recentes", err);
  }
}

async function getMorePopular() {
  try {
    const { data } = await axios.get('https://ruby-careful-skunk.cyclic.app/top/1');
    setAnimesPopular(data.slice(0, 15));
  } catch (err) {
    console.log("Erro ao obter mais populares", err);
  }
}

async function getMoreTopes() {
  try {
    const { data } = await axios.get('https://ruby-careful-skunk.cyclic.app/top/2');
    setAnimesTopes(data.slice(0, 15));
  } catch (err) {
    console.log("Erro ao obter mais topes", err);
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
          {setAnimesRecente.map((manga, index) => (
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
          {setAnimesPopular.map((manga, index) => (
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
        {setAnimesTopes.map((manga, index) => (
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
);

}

export default App;
