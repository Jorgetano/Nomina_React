import React from 'react';
function CarruselInicio() {
  return (
    <section className="Carrusel w-100">
        <div className="banner-sec">
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="public/img/Carrusel1.jpg" className="d-block mh-100 mw-100" alt="Carrusel 1" />
              </div>
              <div className="carousel-item">
                <img src="public/img/Carrusel2.jpg" className="d-block mh-100 mw-100" alt="Carrusel 2"  />
              </div>
              <div className="carousel-item">
                <img src="public/img/Carrusel3.jpg" className="d-block mh-100 mw-100" alt="Carrusel 3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" style={{ top: '50%', transform: 'translateY(-50%)', left: '0%', width: '10%', height: 'auto', background: 'none', border: 'none' }}>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" style={{ top: '50%', transform: 'translateY(-50%)', right: '0%', width: '10%', height: 'auto', background: 'none', border: 'none' }}>
            <span className="visually-hidden">Next</span>
          </button>
          </div>

        </div>
    </section>
  );
}

export default CarruselInicio;
