const HomePage = () => {
    const StylesTitle = {position:'absolute', left:'500px', top:'150px', width:'800px' , fontSize:'60px', color:'white', fontFamily:'fantasy'}
    const StyleImage = {objectFit:'cover', width: '1870px' , marginLeft: '-10px' ,position:'relative'}
    const DriveMoment = {zIndex:'1', position:'relative',  left:'800px', top:'-750px', paddingTop:'20px', paddingBottom:'20px', paddingLeft:'50px', 
                paddingRight:'50px', background:'#c13d24', border:'none', color:'white', fontFamily:'sans-serif', fontSize:'30px'}

    const DriftNow = {marginLeft:"50px"}
    const DriftTitle = {fontFamily:'sans-serif', color:'black', fontSize:'40px' , marginLeft:'50px'}
    const BeDrift = {fontFamily:'sans-serif', fontSize:'20px', marginLeft:'50px'}
    const ImgDriftNow = {borderRadius:'40px'}

    const BeReadyContainer = {marginLeft:"1000px", marginTop:'-655px'}
    const PrepareSession = {fontFamily:'sans-serif', fontSize:'20px', marginLeft:'50px'}
    const ImgPrepare = {borderRadius:'40px', marginLeft:'20px'}
    return (
      
        <section  >
            <div className="IntroContainer">
                <img src="img/mustang-sunset-silhouette.jpg" alt="" style={StyleImage} />
            </div>
            <div className="Title">
                <h2 style={StylesTitle}>
                    Welcome to BE-Drive Club
                </h2>
            </div>
            <div className="TakeAction">
                <button style={DriveMoment}>Drive Now</button>
            </div>

            <div style={DriftNow}>
                <h4 style={DriftTitle}>
                    Drift Session
                </h4>
                <p style={BeDrift}>
                    Start Drift - Be Drift - Live Drive
                </p>
                <img src="
                img/b28ecfa82b814c73c8f481767725a9cf.jpg" alt=""
                style={ImgDriftNow}/>
            </div>
              <div style={BeReadyContainer}>
                <h4 style={DriftTitle}>
                    Be Ready! 
                </h4>
                <p style={PrepareSession}>
                    Ready - Prepare - Wins!
                </p>
                <img src="
                img/b28ecfa82b814c73c8f481767725a9cf.jpg" alt=""
                style={ImgPrepare}/>
            </div>
        </section>
    )
}

export default HomePage