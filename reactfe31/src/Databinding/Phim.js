import React from 'react'

export default function Phim(props) {

    const { phimprops } = props
    return (
        <div className="col-4">
            <div className="card">
                <img className="card-img-top" src={phimprops.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{phimprops.tenPhim}</h4>
                    <p className="card-text">{phimprops.moTa}</p>
                </div>
            </div>

        </div>
    )
}
