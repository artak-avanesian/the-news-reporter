import React from 'react'
import FooterAd from './FooterAd/FooterAd'
import FooterMenu from './FooterMenu/FooterMenu'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <FooterAd/>
                <FooterMenu/>
                <p className="copyright">Copyright &copy; 2019 The News Reporter Inc. All rights reserved.Theme designed by GrapshicsFuel.com</p>
                <p>Reproduction in whole or in part in ane form or medium without express written permission of The News Reporter Inc. is prohibited. The trade marks and images used in the design are the copyright of their respective owners. They are used only for display purpose</p>
            </div>
        </footer>
    )
}

export default Footer