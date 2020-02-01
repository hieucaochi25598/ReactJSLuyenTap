import React from 'react'

export default function Products() {
    return (
            <div className="card bg-light" style={{ width: 300 }}>
                <img className="card-img-top" src="./img/sp_note7.png" alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                <div className="card-body text-center">
                    <h4 className="card-title text-center">Galaxy Note7</h4>
                    <p className="card-text">The Galaxy Note7 comes with a perfectly symmetrical design for good reason</p>
                    <a href="#" className="btn btn-primary">Detail</a>
                    <a href="#" className="btn btn-danger">Cart</a>
                </div>
            </div>
    )
}
