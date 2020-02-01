import React, { Component } from 'react'

export default class BaiTapCar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            linkHinh: "/img/imgRedCar.jpg"
        }
    }
    // handleClickRed = () => {
    //     // this.state.isLogin = true; khong duoc gan state nhu vay
    //     this.setState(
    //         state => ({
    //             linkHinh: "img/imgRedCar.jpg"
    //         }), 
    //         () => {
    //         //Su dung callback de lay gia tri moi nhat sau khi setState
    //         console.log(this.state.linkHinh); //Ham nay chi chay khi setstate(islogin: true) chay xong
    //     });
    //     console.log(this.state.linkHinh);
    // }
    handleClick = (color) => {
        // this.state.isLogin = true; khong duoc gan state nhu vay
        switch (color) {
            case 'red':
                this.setState(
                    state => ({
                        linkHinh: "img/imgRedCar.jpg"
                    }),
                    () => {
                        //Su dung callback de lay gia tri moi nhat sau khi setState
                        console.log(this.state.linkHinh); //Ham nay chi chay khi setstate(islogin: true) chay xong
                    });
                console.log(this.state.linkHinh);
                break;
            case 'silver':

                this.setState(
                    state => ({
                        linkHinh: "img/imgSilverCar.jpg"
                    }),
                    () => {
                        //Su dung callback de lay gia tri moi nhat sau khi setState
                        console.log(this.state.linkHinh); //Ham nay chi chay khi setstate(islogin: true) chay xong
                    });
                console.log(this.state.linkHinh);
                break;
            case 'black':
                this.setState(
                    state => ({
                        linkHinh: "img/imgBlackCar.jpg"
                    }),
                    () => {
                        //Su dung callback de lay gia tri moi nhat sau khi setState
                        console.log(this.state.linkHinh); //Ham nay chi chay khi setstate(islogin: true) chay xong
                    });
                console.log(this.state.linkHinh);
                break;
        }
    }
    render() {
        return (
            <div style={{ width: "300px " }}>
                <img src={this.state.linkHinh} style={{ width: "700px " }} />
                <button className="btn btn-danger" onClick={() => this.handleClick("red")}>Red</button>
                <button className="btn btn-secondary" onClick={() => this.handleClick("silver")}>Silver</button>
                <button className="btn btn-dark" onClick={() => this.handleClick("black")}>Black</button>
            </div>
        )
    }
}
