import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgBanner from "../../assets/footer-img.png";
import netflixLogo from "../../assets/netflix-logo.svg";
import { motion } from "framer-motion";
function Home({ handleClickLogin }) {
  const [showP, setShohP] = useState({
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
  });

  return (
    <>
      <motion.div
        className="body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <header>
          <nav>
            <div className="header">
              <div className="menu">
                <span className="menu-logo">
                  <img src={netflixLogo} alt="Netflix" />
                </span>
                <div className="menu-langueges">
                  <select name="switch-lang" id="switch-lang">
                    <option
                      data-language="it"
                      data-country="it"
                      lang="it"
                      value="/it/"
                    >
                      Italiano
                    </option>
                    <option
                      data-language="en"
                      data-country="it"
                      lang="en"
                      value="/it-en/"
                    >
                      English
                    </option>
                  </select>
                </div>
                <div className="menu-btn">
                  <button onClick={handleClickLogin}>
                    <Link to="/profiles" className="menu-btn-a">
                      {" "}
                      Accedi
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main>
          <div className="hero">
            <div className="hero-img" style={{ height: "750px" }}>
              <img src={imgBanner} alt="Netflix-home-page" />
              <div className="hero-background"></div>
            </div>
            <div className="hero-content">
              <div className="hero-text">
                <h1>Film, serie TV e tanto altro.</h1>
                <h1>Senza limiti.</h1>
                <h2>Guarda ciò che vuoi ovunque. Disdici quando vuoi.</h2>
              </div>
              <div className="hero-mail">
                <form action="">
                  <label htmlFor="email">
                    <h4>
                      Vuoi guardare Netflix? Inserisci l'indirizzo email per
                      abbonarti o riattivare il tuo abbonamento
                    </h4>
                  </label>
                  <div className="hero-mail-inp">
                    <input
                      required
                      placeholder="Indirizzo email"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <button className="hero-button">Inizia {">"}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <section>
            <div className="content-1">
              <div className="content-format">
                <div className="content-format-text">
                  <h1>Goditi Netflix sulla tua TV.</h1>
                  <h3>
                    Guarda Netflix su smart TV, Playstation, Xbox, Chromecast,
                    Apple TV, lettori Blu-ray e molti altri dispositivi.
                  </h3>
                </div>
                <div className="content-format-img">
                  <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                    alt="sfondo-tv"
                  />
                  <video
                    autoPlay
                    muted
                    loop
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  ></video>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="content-2">
              <div className="content-format">
                <div className="content-format-img2">
                  <div className="content-format-img2-div">
                    <img
                      src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                      alt="phone-img-stranger-things"
                      type="image/jpg"
                    />
                  </div>
                  <div className="content-format-img2-1">
                    <div className="content-format-img2-1-div">
                      <img
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                        alt="cover-tag-stranger-things"
                        type="image/png"
                      />
                    </div>
                    <div className="content-format-img-div-text">
                      <h4>Stranger Things</h4>
                      <p>Download in corso...</p>
                    </div>
                  </div>
                </div>

                <div className="content-format-text-inverted">
                  <h1>Scarica le tue serie da guardare offline.</h1>
                  <h3>
                    Salva facilmente i tuoi preferiti così avrai sempre qualcosa
                    da guardare.
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="content-3">
              <div className="content-format">
                <div className="content-format-text">
                  <h1>Guarda Netflix ovunque.</h1>
                  <h3>
                    Cellulare, tablet, laptop e TV: scegli tu cosa usare per
                    guardare in streaming film e serie TV senza limiti e senza
                    spendere di più.
                  </h3>
                </div>
                <div className="content-format-img">
                  <img
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                    alt="sfondo-dispositivi"
                  />
                  <video
                    id="video-add"
                    autoPlay
                    muted
                    loop
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                    type="video/mp4"
                  ></video>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="content-4">
              <div className="content-format">
                <div className="content-format-img-modify">
                  <img
                    src="https://occ-0-3145-2582.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABbh8I7sjWYNz2f8_bqyLdqQqR5AfT7VDHCKvURfq4-D-a7r0fnLYR01-_teQH4fX1NctSxg5EVZ_cX0tjuzKbmdUvLab.png?r=dda"
                    alt="Netflix-for-kid"
                  />
                </div>
                <div className="content-format-text-inverted">
                  <h1>Crea profili per i bambini.</h1>
                  <h3>
                    I bambini scoprono nuove avventure in compagnia dei loro
                    personaggi preferiti in uno spazio tutto loro già incluso
                    nel tuo abbonamento.
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="content-5">
              <div className="content-format-ask">
                <div className="content-format-ask-div">
                  <div className="content-format-ask-h1">
                    <h1>Domande frequenti</h1>
                  </div>
                  <div className="content-format-ask-list">
                    <ul>
                      <li>
                        <button
                          onClick={() =>
                            setShohP(
                              showP.a === false
                                ? { ...showP, a: true }
                                : { ...showP, a: false }
                            )
                          }
                        >
                          Cos'è Netflix?
                          <svg
                            className="svg-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                          </svg>
                        </button>
                        {showP.a === true ? (
                          <>
                            {" "}
                            <p>
                              Netflix è un servizio di streaming che offre una
                              varietà di serie TV, film, documentari
                              pluripremiati e tanto altro su una vasta gamma di
                              dispositivi connessi a Internet.
                            </p>
                            <p>
                              Guarda quello che vuoi, in qualsiasi momento e
                              senza interruzioni pubblicitarie. Il tutto a una
                              quota mensile ridotta. C'è sempre qualcosa di
                              nuovo da scoprire: aggiungiamo nuovi film e serie
                              TV ogni settimana!
                            </p>
                          </>
                        ) : null}
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            setShohP(
                              showP.b === false
                                ? { ...showP, b: true }
                                : { ...showP, b: false }
                            )
                          }
                        >
                          Quanto costa Netflix?
                          <svg
                            className="svg-2"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                          </svg>
                        </button>
                        {showP.b === true ? (
                          <p>
                            Guarda Netflix su smartphone, tablet, Smart TV,
                            laptop o dispositivi per lo streaming, il tutto per
                            un importo mensile fisso. Piani da 7,99 € a 17,99 €
                            al mese. Nessun costo aggiuntivo, nessun contratto.
                          </p>
                        ) : null}
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            setShohP(
                              showP.c === false
                                ? { ...showP, c: true }
                                : { ...showP, c: false }
                            )
                          }
                        >
                          Dove posso guardare Netflix?
                          <svg
                            className="svg-3"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                          </svg>
                        </button>
                        {showP.c === true ? (
                          <>
                            <p>
                              Guarda Netflix dove vuoi, quando vuoi. Accedi al
                              tuo account per guardare subito Netflix dal tuo
                              computer su netflix.com oppure da qualsiasi
                              dispositivo connesso a Internet che supporta l'app
                              Netflix, come smart TV, smartphone, tablet,
                              lettori multimediali per streaming e console per
                              videogiochi.
                            </p>
                            <p>
                              Con l'app per iOS, Android e Windows 10 puoi anche
                              scaricare i tuoi programmi preferiti. Usa la
                              funzionalità di download per guardare i contenuti
                              mentre sei in viaggio e senza connessione a
                              Internet. Porta Netflix sempre con te.
                            </p>
                          </>
                        ) : null}
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            setShohP(
                              showP.d === false
                                ? { ...showP, d: true }
                                : { ...showP, d: false }
                            )
                          }
                        >
                          Come posso disdire?
                          <svg
                            className="svg-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                          </svg>
                        </button>
                        {showP.d === true ? (
                          <p>
                            Netflix è flessibile. Nessun contratto fastidioso e
                            nessun impegno. Puoi facilmente disdire il tuo
                            contratto online con due clic. Nessuna penale:
                            attiva o disdici il tuo account in qualsiasi
                            momento.
                          </p>
                        ) : null}
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            setShohP(
                              showP.e === false
                                ? { ...showP, e: true }
                                : { ...showP, e: false }
                            )
                          }
                        >
                          Cosa posso guardare su Netflix?
                          <svg
                            className="svg-5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                          </svg>
                        </button>
                        {showP.e === true ? (
                          <p>
                            Netflix ha un nutrito catalogo di lungometraggi,
                            documentari, serie TV, anime, originali Netflix
                            pluripremiati e tanto altro. Guarda tutto quello che
                            vuoi, in qualsiasi momento.
                          </p>
                        ) : null}
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            setShohP(
                              showP.f === false
                                ? { ...showP, f: true }
                                : { ...showP, f: false }
                            )
                          }
                        >
                          Netflix è adatto ai bambini?
                          <svg
                            className="svg-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
                          </svg>
                        </button>
                        {showP.f === true ? (
                          <>
                            <p>
                              L'area Netflix Bambini, già inclusa
                              nell'abbonamento, offre ai genitori un maggiore
                              controllo sui contenuti e ai più piccoli uno
                              spazio dedicato dove guardare serie TV e film per
                              tutta la famiglia.
                            </p>
                            <p>
                              I profili Bambini hanno un filtro famiglia con PIN
                              che ti permette di limitare l'accesso ai contenuti
                              in base alla fascia d'età e bloccare la visione di
                              titoli specifici.
                            </p>
                          </>
                        ) : null}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="foot-content">
                <div className="foot-content-mail">
                  <form action="">
                    <label htmlFor="email">
                      <h4>
                        Vuoi guardare Netflix? Inserisci l'indirizzo email per
                        abbonarti o riattivare il tuo abbonamento
                      </h4>
                    </label>
                    <div className="foot-content-inp">
                      <input
                        required
                        placeholder="Indirizzo email"
                        type="email"
                        name="email"
                        id="email"
                      />
                      <button className="hero-button">Inizia {">"}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="footer">
            <div className="footer-content">
              <div className="footer-content-list">
                <p>Domande? Chiama 800-130-364</p>
                <ul>
                  <li>
                    <a href="Netflix-page/start.html">Domande frequenti</a>
                  </li>
                  <li>
                    <a href="#">Rapporto con gli investitori</a>
                  </li>
                  <li>
                    <a href="#">Come guardare Netflix</a>
                  </li>
                  <li>
                    <a href="#">Informazioni sull'agenzia</a>
                  </li>
                  <li>
                    <a href="#">Solo su Netflix</a>
                  </li>
                  <li>
                    <a href="#">Centro assistenza</a>
                  </li>
                  <li>
                    <a href="#">Opportunità di lavoro</a>
                  </li>
                  <li>
                    <a href="#">Condizioni di utilizzo</a>
                  </li>
                  <li>
                    <a href="#">Contattaci</a>
                  </li>
                  <li>
                    <a href="#">Account</a>
                  </li>
                  <li>
                    <a href="#">Riscatta carte regalo</a>
                  </li>
                  <li>
                    <a href="#">Privacy</a>
                  </li>
                  <li>
                    <a href="#">Test di velocità</a>
                  </li>
                  <li>
                    <a href="#">Media Center</a>
                  </li>
                  <li>
                    <a href="#">Acquista carte regalo</a>
                  </li>
                  <li>
                    <a href="#">Preferenze per i cookie</a>
                  </li>
                  <li>
                    <a href="#">Note legali</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-langueges modify-langueges">
              <select name="switch-lang" id="switch-lang">
                <option
                  data-language="it"
                  data-country="it"
                  lang="it"
                  value="/it/"
                >
                  Italiano
                </option>
                <option
                  data-language="en"
                  data-country="it"
                  lang="en"
                  value="/it-en/"
                >
                  English
                </option>
              </select>
            </div>
          </div>
          <div className="footer-netflix">
            <p>Netflix Italia</p>
          </div>
        </footer>
      </motion.div>
    </>
  );
}

export default Home;
