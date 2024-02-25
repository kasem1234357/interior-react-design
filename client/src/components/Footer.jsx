import React from 'react'

function Footer() {
  return (
    <>
       <footer>
        <div className="box address">
            <ul>
                <li><h2>Address</h2></li>
                <li>lebanon</li>
                <li>Beirut , al janah sultan ibrahim</li>
                <li>+961 76 014 886</li>
            </ul>
        </div>
        <div className=" box links">
            <ul>
                <li> <h2>Links</h2></li>
                <li><a href="#home"> Home</a></li>
                <li><a href="#about"> About </a></li>
                <li> <a href="#gallery">Gallery</a></li>
                <li > <a href="#contact">contact</a></li>
            </ul>
        </div>
        <div className="box accounts">
            <ul>
                <li> <h2>Accounts</h2></li>
                <li> <a href="https://www.facebook.com/profile.php?id=100086184853069&mibextid=ZbWKwL">Facebook</a></li>
                <li><a href="">Twitter</a> </li>
                <li><a href="https://instagram.com/h.k._home_decoration?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"></a> Instagram</li>
                <li><a href="https://www.tiktok.com/@h.k..home.decorat?_t=8hBKFY91Cv1&_r=1"> TikTok</a></li>
                <li><a href="">WhatsApp</a></li>
            </ul>
        </div>
    </footer>
    <div className="copyright">
        <p>created by Dev kasem in 2023 🧡</p></div>
    </>
  )
}

export default Footer
