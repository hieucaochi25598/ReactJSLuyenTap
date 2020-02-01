import React from 'react'
import Products from './Products'

export default function ProductList() {
    return (
        <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-dark text-center">BEST SMARTPHONE</h1>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                    <div className="container">
                        <Products />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                    <div className="container">
                        <Products />

                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                    <div className="container">

                        <Products />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                    <div className="container">
                        <Products />
                    </div>
                </div>
            </div>
        </section>

    )
}
