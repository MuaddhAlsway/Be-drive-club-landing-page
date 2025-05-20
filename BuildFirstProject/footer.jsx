const FooterContainer = () =>{
    return (
        <section style={{textAlign:'center' , marginBottom:'-50px'}}>
            <div className="list" style={{marginTop:'150px', marginLeft:'-100px'}}>
                <ul>
                    <h4 style={{fontSize:'18px' , fontFamily:'sans-serif'}}>About Us</h4>
                    <li style={{listStyle:'none', marginTop:'-5px', fontFamily:'sans-serif'}}>call our Now</li>
                     <li style={{listStyle:'none',paddingTop:'10px' , fontFamily:'sans-serif'}}>Be in Touch</li>
                     <li style={{listStyle:'none', paddingTop:'10px' , fontFamily:'sans-serif'}}>Subscibe for our Newsletter</li>
                </ul>
             
            </div>
            <div style={{position:'relative', top:'-135px', left:'250px', width:'300px'
            }}>
                <ul>
                    <h4 style={{fontSize:'18px' , fontFamily:'sans-serif'}}>Our Service</h4>
                    <li style={{listStyle:'none', marginTop:'-5px', fontFamily:'sans-serif'}}>Call</li>
                     <li style={{listStyle:'none',paddingTop:'10px',  fontFamily:'sans-serif'}}>Email</li>
                     <li style={{listStyle:'none', paddingTop:'10px',  fontFamily:'sans-serif'}}>Customer service</li>
                </ul>
             
            </div>
              <div style={{position:'relative', top:'-274px', left:'1200px', width:'300px'
            }}>
                <ul>
                    <h4 style={{fontSize:'18px' , fontFamily:'sans-serif'}}>Log in</h4>
                    <li style={{listStyle:'none', marginTop:'-5px', fontFamily:'sans-serif'}}>Sign in</li>
                     <li style={{listStyle:'none',paddingTop:'10px',  fontFamily:'sans-serif'}}>Invalid Message</li>
                     <li style={{listStyle:'none', paddingTop:'10px',  fontFamily:'sans-serif'}}>Forget Password</li>
                </ul>
             
            </div>
        </section>
    )
}

export default FooterContainer