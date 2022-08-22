import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 footer-item">
          <h4>Vegefoods</h4>
          <p className="footer-text">
            Far away from home, we bring to your door steep different varieties
            of fresh fruits and vegetables. Our products always get to you in an
            excellent condition. It is always very tasty and delicious.
          </p>
          <div className="d-inline-flex" style={{ margin: '3px' }}>
            <Link to="/">
              <i
                className="fa-brands fa-facebook-f footer-icon"
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'green',
                  padding: '10px',
                  color: 'white',
                }}
              ></i>
            </Link>
          </div>
          <div className="d-inline-flex" style={{ margin: '3px' }}>
            <Link to="/">
              <i
                className="fa-brands fa-twitter footer-icon"
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'green',
                  padding: '10px',
                  color: 'white',
                }}
              ></i>
            </Link>
          </div>
          <div className="d-inline-flex " style={{ margin: '3px' }}>
            <Link to="/" className="">
              <i
                className="fa-brands fa-instagram footer-icon"
                style={{
                  borderRadius: '50%',
                  backgroundColor: 'green',
                  padding: '10px',
                  color: 'white',
                }}
              ></i>
            </Link>
          </div>
        </div>
        <div className="col-lg-4 text-center-lg col-md-4 col-sm-12  menu footer-item">
          <div>
            <h4>Menu</h4>
          </div>
          <div className="footer-links">
            <Link
              to="/"
              style={{ textDecoration: 'inherit', color: 'inherit' }}
            >
              HOME
            </Link>
          </div>
          <div className="footer-links">
            <Link
              to="/"
              style={{ textDecoration: 'inherit', color: 'inherit' }}
            >
              SHOP
            </Link>
          </div>
          <div className="footer-links">
            <Link
              to="/"
              style={{ textDecoration: 'inherit', color: 'inherit' }}
            >
              ABOUT
            </Link>
          </div>
          <div className="footer-links">
            <Link
              to="/"
              style={{ textDecoration: 'inherit', color: 'inherit' }}
            >
              LOGIN
            </Link>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 footer-item">
          <div>
            <h4>Have a Question?</h4>
          </div>
          <div className="d-inline-flex">
            <i className="fa-solid fa-location-dot location-dot"></i>&nbsp;
            <p>No 201 Parken Straße, Top 8, Imst, Vienna, Austria</p>
          </div>
          <div className="d-inline-flex">
            <i className="fa-solid fa-phone telephone-icon"></i>&nbsp;
            <p>+436658520117</p>
          </div>
          <br />
          <div className="d-inline-flex">
            <i className="fa-solid fa-envelope envelope-icon"></i>&nbsp;
            <p>vegefood@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
