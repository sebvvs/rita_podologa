import React from "react";
import Insta from '../img/insta.png'
import Face from '../img/face.png'

function Footer() {
    return (
        <footer>
        <div class="redes-sociales">
            <a href="https://www.facebook.com/profile.php?id=61554152187267" target="_blank"><img src={Face} alt="Facebook" /></a>
            <a href="https://www.instagram.com/ritalizamapodologa/" target="_blank"><img src={Insta} alt="Instagram"/></a>
        </div>
    </footer>
    )
}

export default Footer