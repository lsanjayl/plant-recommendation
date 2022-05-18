const Details = () => {
    return (

        <div className="boxed-page1">
            <nav id="gtco-header-navbar-1" className="navbar navbar-expand-lg py-4">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <span className="lnr lnr-leaf"></span>
                </a>

                <a className="nav-item nav-link" style={{marginRight: "500px", fontFamily: "Georgia", fontSize: "35px"}}>Wheat</a>
            </div>
        </nav>
        <br/><br/><br/>
        <section className="page-header" style={{ backgroundSize: "cover", height: "300px"}}>
            <div className="container">
                <br/>
                <div className="second-txt shape" style={{textAlign: "left", paddingLeft: "20px"}}>
                    <br/>
                    <b>
                    WHEAT (GODHUMAI)
                    </b>
                    <br/>
                    <b>SCIENTIFIC NAME :</b> Triticum aestivum
                    <br/>
                    <b>NATIVE :</b> It generally grows in Theni, Dindigul, Karur, Coimbatore, Erode, Salem, Dharmapuri, Vellore, Thiruvannamalai, Kancheepuram.
                    <br/>
                    <b>ORIGIN :</b> It is originated from Ethopian Highlands.
                    <br/>
                </div>
            </div>
        </section>
        <div style={{padding: "20px", paddingRight: "70px" ,textAlign: "start"}}>
            <div>
                <b>DESCRIPTION :</b><br/> <b>SOIL TYPE:</b><span> <br/> <div style={{marginLeft: "30px"}}> Soils with a clay loam or loam texture, good structure and moderate water holding capacity are ideal for wheat cultivation.</div>
            </span>
                <br/>
            </div>
            <div>
                <span><b>NUTRIENT VALUE :</b> <br/> <div style={{marginLeft: "30px"}}>
                - Apply NPK fertiliser as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 80:40:40 NPK kg/ha.
                <br/>- Apply half of N and full dose of P2O and K2O5 basally before sowing and incorporate in the sowing line.
                </div>
            </span>
            </div>
            <br/>
            <div>
                <span>
                <b>GROWTH TIME :</b><br/> <div style={{marginLeft: "30px"}}> Wheat is planted in the fall, usually between October and December, and grows over the winter to be harvested in the spring or early summer. Typically, it takes about 7 to 8 months to reach maturity and it creates pretty golden contrast in spring gardens.
                </div>
            </span>
            </div><br/>
            <div>
                <span>
                <b> POTENTIAL DISEASES :</b> 
                <ul style={{marginleft: "30px"}} className="edited"><b>Fungi:</b>
                    <br/>
                  <li>Powdery midew</li>
                  <li>Loose Smut</li>
                  <li>Brown rust</li>
                  <li>Stripe rust/ Yellow rust</li>
                  <li>Black rust</li>
                  <li>Flag smut</li>
                  <li>Hill bunt or Stinking smut</li>
                  <li>Kamal bunt</li>
                  <li>Leaf blight</li>
                  <li>Foot rot</li>
                  <li>Head scab/ Fusarium leaf blotch (Snow Mold)</li>
                  <li>Leaf Blotch</li>
                  <li>Helminthosporium leaf blotch (Spot Blotch)</li>
                  <li>Seeding blight</li>
                  <li>IPM for Wheat</li>
                </ul>
            </span>
            </div>
            <div>
                <span> 
               <b> PHENOTYPIC OUTPUT :</b><br/> 
               <div style={{marginLeft: "30px"}}>
                 Wheat leaves form at each node and include a leaf sheath that wraps around the stem and a leaf blade. Wheat has small auricles. These wrap around the stem at the point where the leaf sheath meets the leaf blade. The spike (also called the ear or head) forms at the top of the plant
               </div>
            </span>
            </div>
            <br/>
            <div>
                <span>
                <b>CULTIVATION STYLE :</b><br/>
                <div style={{marginLeft: "30px"}}>
                    The wheat crop requires a well-pulverized but compact seed bed for good and uniform germination. Three or four ploughings in the summer, repeated harrowing in the rainy season, followed by three or four cultivations and planking immediately before sowing produce a good, firm seed bed for the dry crop on alluvial soils.
                </div> 
            </span>
            </div>
        </div>

        {/* <!--FOOTER SECTION--> */}
        <footer className="mastfoot mb-3 bg-white py-4 border-top">
            <div className="inner container">
                <div className="row">
                    {/* <!--COPYRIGHT SECTION--> */}
                    <div className="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
                        <p className="mb-0">&copy; 2021 LMES . All Right Reserved. Design by LMES.</p>
                    </div>

                    <div className="col-md-6">
                        {/* <!--icons --> */}
                        <nav className="nav nav-mastfoot justify-content-md-end justify-content-center">
                            <a className="nav-link" href="#">
                                <i className="icon-facebook"></i>
                            </a>
                            <a className="nav-link" href="#">
                                <i className="icon-twitter"></i>
                            </a>
                            <a className="nav-link" href="#">
                                <i className="icon-instagram"></i>
                            </a>
                            <a className="nav-link" href="#">
                                <i className="icon-linkedin"></i>
                            </a>
                            <a className="nav-link" href="#">
                                <i className="icon-youtube"></i>
                            </a>
                            <a className="nav-link" href="#">
                                <i className="icon-pinterest"></i>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    </div>

    )
}
export default Details