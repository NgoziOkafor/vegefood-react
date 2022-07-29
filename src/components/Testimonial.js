export default function Testimonial() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div
          className="col-12"
          style={{
            backgroundImage: 'url(./images/bg_3.jpeg)',
            width: '100%',
            height: '650px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no repeat',
            backgroundPosition: 'center',
          }}
        >
          <h1 className="col-6 ms-auto mt-5 hero-two-text text-warning">
            Fresh Fruits, Vegetables & Juices
          </h1>
          <p
            className="col-6 ms-auto "
            style={{ marginTop: '30px', fontSize: '25px' }}
          >
            Always come to us for your fresh fruits, vegetables and juice
          </p>
          <p
            className="col-6 ms-auto"
            style={{ fontFamily: 'Arial Narrow Bold', fontSize: '20px' }}
          >
            We are here to give you nothing but the best
          </p>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
}
