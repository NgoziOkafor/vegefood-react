import Footer from '../includes/Footer';
import Header from '../includes/Header';

export default function Cart(props) {
  return (
    <>
      <Header output={props.props} />
      <section className="container-fluid">
        <div className="row">
          <div className="col-12">
            <img src="./images/bg_1.jpeg" className="cart-pix" alt="img" />
          </div>
        </div>
      </section>
      <div className="mt-5 text-center text-success shopping-cart-text">
        <h1>SHOPPING CART</h1>
      </div>
      <section className="container mt-5">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th>PRODUCTS</th>
                  <th>PRODUCTS-NAMES</th>
                  <th>PRICE</th>
                  <th>QUANTITY</th>
                  <th>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src="./images/product-1.jpeg"
                      className="cart-product-one"
                      alt="product-1"
                    />
                  </td>
                  <td className="product-name">Bell-Pepper</td>
                  <td className="product-price">€6.00</td>
                  <td>
                    <button type="button" className="btn btn-outline-success">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      <i className="fa-solid fa-1"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </td>
                  <td className="product-total">€6.00</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="./images/product-1.jpeg"
                      className="cart-product-one"
                      alt="product-1"
                    />
                  </td>
                  <td className="product-name">Bell-Pepper</td>
                  <td className="product-price">€6.00</td>
                  <td>
                    <button type="button" className="btn btn-outline-success">
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      <i className="fa-solid fa-1"></i>
                    </button>
                    <button type="button" className="btn btn-outline-success">
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </td>
                  <td className="product-total">€6.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
}
