import { Link } from 'react-router-dom';

export default function HomeProducts(props) {
  console.log(props);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <i>Featured Products</i>
            <h1 style={{ fontWeight: 'bold' }}>Our Products</h1>
            <p>When you are far away from home, you can always count on us</p>
          </div>
        </div>
      </div>
      <div className="row mt-5 px-2 card-row">
        {props.products.map((product, index) => (
          <div
            key={product.id}
            className="col-xxl-3 col-xl-4  col-md-6 col-sm-6 mb-5 card-products"
          >
            <div
              className="card"
              style={{ width: '100%', borderColor: 'green', height: '430px' }}
            >
              <img src={product.cover_photo} class="card-img-top" alt="" />
              <div class="card-body text-center">
                <h5 class="card-title text-success">{product.name}</h5>
                <p className="text-success" style={{ fontWeight: 'bold' }}>
                  {product.price}
                </p>
                <Link to="/" class="btn btn-success mt-2 view-btn">
                  View
                </Link>
                <p className="text-success d-inline-flex ms-2 view-btn">
                  {product.quantity}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
