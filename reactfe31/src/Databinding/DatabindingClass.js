import React, { Component } from 'react'

export default class DatabindingClass extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false
        }
    }
    propName = 'Frontend 31';
    rendercontent = () => {
        return(
            <div>{this.propName}</div>
        )
    }
    handleClick = () => {
        // this.state.isLogin = true; khong duoc gan state nhu vay
        this.setState(
            state => ({
                isLogin: !state.isLogin
            }), 
            () => {
            //Su dung callback de lay gia tri moi nhat sau khi setState
            console.log(this.state.isLogin); //Ham nay chi chay khi setstate(islogin: true) chay xong
        });
        console.log(this.state.isLogin);
    }
    // handleLogout = () => {
    //     this.setState({isLogin: false});
    // }
    render() {
        //Khai bao bien
        const title = 'cybersoft';
        //Render la phuong thuc co san cua lop Component
        return (
            
            <div>
                <div>{this.rendercontent()}</div>
                {
                    this.state.isLogin ? (
                        <div>
                            <p>Ban da dang nhap</p>
                            {/* <button onClick={() => this.handleLogout()}>Logout</button> */}
                            <button onClick={() => this.handleClick()}>Logout</button>
                        </div>
                    ) : (
                            <div>
                                <p>{title}</p>
                                <h3>{this.propName}</h3>
                                <button onClick={() => this.handleClick()}>Login</button>
                            </div>
                        )
                }
            </div>
        )
    }
}
