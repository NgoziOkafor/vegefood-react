import { Link } from 'react-router-dom';

export default function CategoryProducts() {
  return (
    <>
      <div className="container category-row">
        <div className="row ">
          <div className="col-lg-4 col-md-12 category-container">
            <div
              style={{
                backgroundImage: 'url(./images/category-1.jpeg)',
                height: '300px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
              }}
            >
              {' '}
              <div className="py-1 ">
                <h4 className="text-white category-text bg-success mb-0 ">
                  <Link
                    style={{ textDecoration: 'none' }}
                    className="text-white"
                    to="/"
                  >
                    Fruits
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 bg-white mt-4 category-container">
            <div className="category-row2 text-center">
              <h1 className="text-success">Vegetables</h1>
              <p style={{ fontSize: '20px' }}>
                Protect the health of every home
              </p>
              <button type="button" className="btn btn-success">
                Shop Now
              </button>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 ">
            <div
              style={{
                backgroundImage: 'url(./images/category-3.jpeg)',
                height: '300px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
              }}
            >
              <div>
                <h4 className=" bg-success category-text3">
                  <Link
                    to="/"
                    className="text-white"
                    style={{ textDecoration: 'none' }}
                  >
                    Juices
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 category-container">
            <div
              style={{
                backgroundImage: 'url(./images/category-2.jpeg)',
                height: '300px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
              }}
            >
              <div>
                <h4 className="bg-success category-text2">
                  <Link
                    to="/"
                    className="text-white"
                    style={{ textDecoration: 'none' }}
                  >
                    Vegetables
                  </Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 category-container">
            <div
              style={{
                backgroundImage: 'url(./images/product-10.jpeg)',
                height: '300px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
              }}
            ></div>
          </div>
          <div className="col-lg-4 col-md-12  category-container">
            <div
              style={{
                backgroundImage: 'url(./images/category-4.jpeg)',
                height: '300px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%',
              }}
            >
              <div>
                <h4 className="bg-success category-text4">
                  <Link
                    to="/"
                    className="text-white"
                    style={{ textDecoration: 'none' }}
                  >
                    Vegetables
                  </Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
