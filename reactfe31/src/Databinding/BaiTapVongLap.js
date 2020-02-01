import React, { Component } from 'react'

export default class BaiTapVongLap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mangSanPham: [
                { maSP: 1, tenSP: "IPhone X", gia: 1000 },
                { maSP: 2, tenSP: "IPhone Y", gia: 4000 },
                { maSP: 3, tenSP: "IPhone Z", gia: 6000 }
            ]
        }
    }

    renderDanhSachSanPham = () => {
        return this.state.mangSanPham.map((sp, index) => (
            <tr>
                <td scope="row">{sp.gia}</td>
                <td>{sp.maSP}</td>
                <td>{sp.tenSP}</td>
            </tr>
        ))
    }
    render() {
        return (
            <div className="container">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Ma San Pham</th>
                            <th>Ten San Pham</th>
                            <th>Gia</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Su dung truc tiep */}
                        {/* {this.state.mangSanPham.map((sp, index) => (
                            <tr>
                                <td scope="row">{sp.gia}</td>
                                <td>{sp.maSP}</td>
                                <td>{sp.tenSP}</td>
                            </tr>
                        ))} */}


                        {/* Goi Ham */}
                        {this.renderDanhSachSanPham()}
                    </tbody>
                </table>
            </div>
        )
    }
}
