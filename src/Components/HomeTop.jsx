import React from "react";
import "./SCSS/HomeTop.scss";

export default function HomeTop() {
  return (
    <>
      <div className="container Home-top">
        <div className="row d-flex">
          <div className="col-12 col-lg-6 textDiv">
            <h1>Lowest Prices</h1>
            <h1>Best Quality Shopping</h1>
            <div className="d-flex">
              <div
                className="col-4 d-flex"
                style={{ borderRight: "2px grey solid" }}
              >
                <section>
                  <i class="bi bi-truck"></i>
                </section>
                <section>
                  Fast <br />
                  Delivery
                </section>
              </div>
              <div
                className="col-4 d-flex"
                style={{ borderRight: "2px grey solid" }}
              >
                <section>
                  <i class="bi bi-wallet2"></i>
                </section>
                <section>
                  Cash on <br />
                  Delivery
                </section>
              </div>
              <div className="col-4 d-flex">
                <section>
                  <i class="bi bi-sign-turn-slight-left"></i>
                </section>
                <section>Easy Returns</section>
              </div>
            </div>
            <div>
              <button className="btn btn-outline-secondary">
                Buy Now <i class="bi bi-bag-fill"></i>
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 imgDiv"></div>
        </div>
      </div>
    </>
  );
}
