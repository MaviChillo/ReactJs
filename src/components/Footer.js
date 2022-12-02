import React from 'react'
import logoFooter from './img/footer/footer1.jpg'
import spotify from './img/footer/spotify.png'
import youtube from './img/footer/youtube.png'
import instagram from './img/footer/instagram.png'
import twitter from './img/footer/twitter.png'

const Footer = () => {
  return (
    <div className="footer">
		<img src={logoFooter} alt="Band logo and name" className="logoBand__img w-100" id="footlogo"></img>
		<br></br>
		<div>
		<a href="https://open.spotify.com/artist/6O7MpKrY91vlCd4Osi6XKs?si=SYCwaZVRQJ-C8C9V0KAvDg" target="_blank" className="logo bg-black flex-grow1" id="spotify">
			<img src={spotify} alt="logo spotify"></img>
		</a>
		<a href="https://www.youtube.com/channel/UCDdKEz8e7m5g-hXg42-HBQg" target="_blank" className="logo bg-black flex-grow2" id="youtube">
			<img src={youtube} alt="logo youtube"></img>
		</a>
		<a href="https://www.instagram.com/blackveilbrides/" target="_blank" className="logo bg-black flex-grow3" id="instagram">
			<img src={instagram} alt="logo instagram" ></img>
		</a>
		<a href="https://twitter.com/blackveilbrides" target="_blank" className="logo bg-black flex-grow4" id="twitter">
			<img src={twitter} alt="logo twitter"></img>
		</a>
	</div>
	
    </div>
  )
}

export default Footer