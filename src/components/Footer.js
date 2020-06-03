import React, { Component } from 'react';
import Toast from '../Utils/Toast';

class Footer extends Component {

    footerStyles = () => {
        return ({
            margin:'32px',
            textAlign:'center', 
            fontSize:'14px'
        })
    }

    render () {

        const styles = this.footerStyles();

        return (    
            <footer style={styles}>
                <span>A sua mais completa loja: React Store!</span>
                <Toast />
            </footer>
        )
    }
}

export default Footer;