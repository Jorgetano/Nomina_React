import React, { useEffect } from 'react';

function CarruselInicio() {
  useEffect(() => {
    const carrusel = document.getElementById('carouselExampleAutoplaying');
    const carruselInstance = new bootstrap.Carousel(carrusel, {
      interval: 10000
    });
    
    return () => {
      carruselInstance.dispose();
    };
  }, []); 

  return (
    <section className="Carrusel">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="public/img/Carrusel6.png" className="d-block h-100 w-100" alt="Carrusel 1" />
          </div>
          <div className="carousel-item">
            <img src="public/img/Carrusel5.png" className="d-block h-100 w-100" alt="Carrusel 2"  />
          </div>
          <div className="carousel-item">
            <img src="public/img/Carrusel4.png" className="d-block h-100 w-100" alt="Carrusel 3" />
          </div>
          <div className="carousel-item">
            <img src="public/img/Carrusel3.png" className="d-block h-100 w-100" alt="Carrusel 3" />
          </div>
          <div className="carousel-item">
            <img src="public/img/Carrusel2.png" className="d-block h-100 w-100" alt="Carrusel 3" />
          </div>
          <div className="carousel-item">
            <img src="public/img/Carrusel1.png" className="d-block h-100 w-100" alt="Carrusel 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" style={{ top: '50%', transform: 'translateY(-50%)', left: '0%', width: '10%', height: 'auto', background: 'none', border: 'none' }}>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" style={{ top: '50%', transform: 'translateY(-50%)', right: '0%', width: '10%', height: 'auto', background: 'none', border: 'none' }}>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default CarruselInicio;
