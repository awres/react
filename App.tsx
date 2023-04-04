import React from 'react';
import './style.css';

const ImageGallery = () => {
  const handleImageSwitcher = (id) => {
    // logic for image switching
  };

  const handleIconSwitcher = () => {
    // logic for icon switching
  };

  return (
    <>
      <div className="wrapper">
        <div className="baner">
          <h2>Galeria miejsc ciekawych</h2>
        </div>
        <div className="main">
          <img
            id="StubAnnotation"
            className="StubAnnotation"
            src="yo.jpg"
            alt="galeria"
          />
        </div>
        <div className="left">
          <h3> Przeglądaj zdjęcia</h3>
          <img
            onClick={() => handleImageSwitcher('lanzarotte')}
            id="lanzarotte"
            className="CallbackTask"
            src="lanzarotte.jpg"
            alt="lanzarotte"
          />
          <img
            onClick={() => handleImageSwitcher('pekin')}
            id="pekin"
            className="CallbackTask"
            src="pekin.jpg"
            alt="pekin"
          />
          <img
            onClick={() => handleImageSwitcher('serengeti')}
            id="serengeti"
            className="CallbackTask"
            src="serengeti.jpg"
            alt="serengeti"
          />
          <img
            onClick={() => handleImageSwitcher('wenecja')}
            id="wenecja"
            className="CallbackTask"
            src="wenecja.jpg"
            alt="wenecja"
          />
          <img
            onClick={() => handleImageSwitcher('tajlandia')}
            id="tajlandia"
            className="CallbackTask"
            src="tajlandia.jpg"
            alt="tajlandia"
          />
        </div>
        <div className="right">
          <h3>Obrazy w naszej galerii</h3>
          <table>
            <tbody>
              <tr>
                <td>Europa</td>
                <td>Azja</td>
                <td>Afryka</td>
              </tr>
              <tr>
                <td>2</td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
          <p>
            Polub nas
            <img
              src="icon-off.png"
              alt="ikona"
              id="icon"
              onClick={handleIconSwitcher}
            />
          </p>
          <br />
          <a href="https://pixabay.com" target="_blank" rel="noreferrer">
            Odkryj więcej zdjęć
          </a>
        </div>
      </div>
      <footer>Autor: 00</footer>
    </>
  );
};

export default ImageGallery;
