import React, { Component } from 'react';
import './Navbar.css';

export class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isMenuOpened : false
        }
    }
    handleMenuStateChange = () =>{
        this.setState({
            isMenuOpened : !this.state.isMenuOpened
        })
    }
    
    render() {
        return (
            <nav>
                <div className='nav-container'>
                    <div className='nav-logo'>
                        <h1>React</h1>
                        <button className='menu-btn'onClick={this.handleMenuStateChange}>BTN</button>
                    </div>
                    <div className={this.state.isMenuOpened? 'active' : 'menu'}>
                        <ul className='menu-list'>
                            <li className='menu-item'>Home</li>
                            <li className='menu-item'>About</li>
                            <li className='menu-item'>Service</li>
                            <li className='menu-item'>Contact</li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
