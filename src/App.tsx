import React from 'react';
import './styles.css'

const logoStyle: React.CSSProperties = {
  backgroundColor:"white",
  width:"80%",
  height:"80%",
  borderColor:"green",
  borderWidth:"5" 
  
}
let regwords: {
  text: {
    fontSize: 'larger', 
    fontWeight: 'bolder', 
    textShadowColor: 'whitesmoke', 
    textShadowOffset: { width: '-2px', height: '2px' },
    textShadowRadius: '2px',
}
}


function App() {
  return (
    <div style={{textAlign: "center"}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Chia_Pet_logo.png" style={logoStyle}  alt="Header Logo" />
      <h1>The Pottery that grows!!!</h1>
      <p id="regwords">Try your hand at your <strong><em>very own</em></strong> Chia Pet!!</p>
      <p id="regwords">It's easy!!!</p>
      <div id="side-img">
            <div id="img-container"><img src="https://i.imgur.com/wAhW3lW.png" style={{width: "100%"}} alt="Soak"/><figcaption>Soak</figcaption></div>
            <div id="img-container"><img src="https://i.imgur.com/zW1wRZy.png" style={{width: "100%"}} alt="Spread"/><figcaption>Spread</figcaption></div>
            <div id="img-container"><img src="https://i.imgur.com/TT8FJyx.png" style={{width: "100%"}} alt="Sprinkle"/><figcaption>Sprinkle</figcaption></div>
      </div>
      <p id="regwords">And just like that</p>
      <img src="https://i.imgur.com/OEwB9yy.gif" alt="Chia Gif" id="centerIMG"></img>

      <p id="regwords">Introducing...</p>
        <h1>Chia HEADS!!!</h1>
        <p id="regwords">Including celebrity icons like!!</p>

        <p id="headTitle">Bob Ross</p>
        <img src="https://cdn.shopify.com/s/files/1/1531/4421/products/Bob-Ross-Chia-Pet_1024x.jpg?v=1524746089" id="centerIMG" alt="Happy Accidents included"/><figcaption>Happy Accidents included</figcaption>
        <p id="headTitle">David Hasselhoff</p>
        <img src="https://cdn.thisiswhyimbroke.com/images/david-hasselhoff-chia-pet-640x533.jpg" id="centerIMG" alt="For best results, allow chia head to watch the bay"/><figcaption>For best results, allow chia head to watch the bay</figcaption>
        <p id="headTitle">Richard Simmons</p>
        <img src="https://www.pennlive.com/resizer/xwpD2etnsmZOJaaqDBN330KkRi0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/TA7RII5GS5BMNPARTGUIJJULEE.jpg" id="centerIMG"  alt="weight subject to change"/><figcaption>weight subject to change</figcaption>
        <p id="headTitle">Peewee Herman</p>
        <img src="https://cdn.shopify.com/s/files/1/0443/3402/2812/products/CP946_PKG_1_540x.jpg?v=1670442656" id="centerIMG"  alt="Avoid potting in dark theaters"/><figcaption>Avoid potting in dark theaters</figcaption>
        <p id="headTitle">and ALF!!</p>
        <img src="https://cdn.shopify.com/s/files/1/0443/3402/2812/products/Alf-Box-and-Components-LO_1024x1024@2x.jpg?v=1628780251" id="centerIMG"  alt="I mean... I don't know... It's ALF"/><figcaption>I mean... I don't know... It's ALF</figcaption>

    </div>
  );
}

export default App;
//<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Chia_Pet_logo.png"  style="background-color: white;" width="80%" height="80%" border="5" alt="" />