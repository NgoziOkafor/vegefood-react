export default function Hero() {
  return (
    <section className="container-fluid hero-section">
      <div className="row">
        <div className="col-12">
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
            data-interval="1000"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./images/bg_1.jpeg" class="d-block w-100" alt="img" />
                <div class="carousel-caption d-none d-md-block">
                  <h1 className="carousel-heading" style={{ fontSize: '55px' }}>
                    WE SERVE FRESH VEGETABLES AND FRUITS
                  </h1>
                  <p>WE DELIVER ORGANIC VEGETABLES AND FRUITS</p>
                  <button
                    type="button"
                    class="btn btn-success"
                    style={{ cursor: 'pointer' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div class="carousel-item">
                <img src="./images/bg_2.jpeg" class="d-block w-100" alt="img" />
                <div class="carousel-caption d-none d-md-block">
                  <h1 className="carousel-heading" style={{ fontSize: '55px' }}>
                    100% FRESH AND ORGANIC FOODS
                  </h1>
                  <p>WE DELIVER ORGANIC VEGETABLES AND FRUITS</p>
                  <button
                    type="button"
                    class="btn btn-success"
                    style={{ cursor: 'pointer' }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
