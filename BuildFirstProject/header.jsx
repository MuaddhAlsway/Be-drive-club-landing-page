

const Header = () => {
  return (
    <section style={{textAlign: 'center', display:'flex', justifyContent:'left'
    } }>
      <div className="logo" style={{ marginLeft:'30px', fontFamily:'monospace', fontSize: '18px', color:'#y4y4y4'
      }}>
        <h1>Drift</h1>
      </div>
      <div className="ListNavbar" >
        <ul style={{listStyle:'none', display:'flex', marginLeft: '500px', columnGap:'50px' , marginTop: '30px', fontFamily: 'sans-serif'  , fontSize: '18px', 
        }} >


          <li><a style={{textDecorationLine:'none', color:'Black'}} href="">Home</a></li>
          <li><a style={{textDecorationLine:'none', color:'Black'}} href="">Service</a></li>
          <li><a style={{textDecorationLine:'none', color:'Black'}} href="">Collection</a></li>
          <li><a style={{textDecorationLine:'none', color:'Black'}} href="">Contact Us</a></li>
        </ul>
      </div>

      <div className="buttonContainer">
        <button  style={{marginLeft:'650px', marginTop:'15px', paddingTop:'12px', paddingBottom:'12px', 
            paddingLeft:'25px', paddingRight:'25px', fontFamily:'sans-serif', background:'black', border: 'none', borderRadius:'50px', color:'white', fontSize:'18px'}}>Log in</button>
      </div>
    </section>
  );
};

export default Header;
