  function CarruselInicio() {
    return (
      <body className="w-100 p-5 h-100" style={{ }}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000"> 
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="public/img/Carrusel1.jpg" className="d-block w-50" alt="Carrusel 1" style={{maxWidth: '800px', maxHeight: '700px'}} />
            </div>
            <div className="carousel-item">
              <img src="public/img/Carrusel2.jpg" className="d-block w-50" alt="Carrusel 2" style={{maxWidth: '800px', maxHeight: '700px'}} />
            </div>
            <div className="carousel-item"> 
              <img src="public/img/Carrusel3.jpg" className="d-block w-50" alt="Carrusel 3" style={{maxWidth: '800px', maxHeight: '700px'}} />
            </div>
          </div>

          <button className="carousel-control-prev btn-lg" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next btn-lg position-absolute top-0 end-50" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="visually-hidden">Next</span> 
          </button>
        </div>
      </body>
    );
  }

  export default CarruselInicio;
