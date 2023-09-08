import React from "react";
import { Link } from "react-router-dom";
import "./SCSS/HomeMiddle2.scss";

export default function HomeMiddle2() {
  return (
    <>
      <div className="container HomeMiddle2">
        <div className="row d-flex gap-3">
          <div className="col-12 col-lg-4 col-sm-12">
          <h1>Essentials</h1>
            <Link to={""} className="btn btn-outline-dark ">
              View All
            </Link>
          </div>
          <div className="col-12 col-lg-2 col-sm-12 text-center">
            <Link to={""} className="btn btn-outline-dark">
              Home Decor
            </Link>
          </div>
          <div className="col-12 col-lg-2 col-sm-12 text-center">
            <Link className="btn btn-outline-dark">
              Kitchen Appliances
            </Link>
          </div>
          <div className="col-12 col-lg-2 col-sm-12 text-center">
            <Link className="btn btn-outline-dark">
              Heath Care
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
