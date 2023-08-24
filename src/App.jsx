import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState([]);
  const [data, setData] = useState([]);
  const [zera, setZera] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get('https://ruby-careful-skunk.cyclic.app/recents');
      const topesResponse = await axios.get('https://ruby-careful-skunk.cyclic.app/top/1');
      const topesdois = await axios.get('https://ruby-careful-skunk.cyclic.app/top/2');
      
      if (response.status === 200 && topesResponse.status === 200 && topesdois.status === 200) {
        const dai = response.data.mangas;
        setInfo(dai.slice(0, 15));
        const topesData = topesResponse.data;
        setData(topesData.slice(0, 15));
        const mai = topesdois.data;
        setZera(mai.slice(0, 15));
      } else {
        console.error('Error fetching data:', response.statusText, topesResponse.statusText, topesdois.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData();
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
