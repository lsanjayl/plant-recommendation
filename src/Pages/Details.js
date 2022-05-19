import {useLocation} from 'react-router-dom';
const Details = () => {
    const loaction=useLocation()
    const name=loaction.state.value;
    const details={
        title:"Sugarcane (Karumbu)",
        scientificName : "Saccharum officinarum",
        native:"This crop is majorly cultivated in Trichy, Perambalur, Karur, Salem, Namakkal, Coimbatore, Chennai, Vellore, Tiruvallur, Cuddalore, Krishnagiri, Pudukottai, Nagapattinam, Dharmapuri, Sivagangai, Theni, Ariyalur, Tirunelveli, Kallakurichi, Ranipet, Chengalpattu and Tirupattur.",
        origin:"Sugar cane originated in New Guinea.",
        soilType:"Sugarcane is grown in various kinds of soils, such as red volcanic soils and alluvial soils of rivers. The ideal soil is a mixture of sand, silt, and clay particles, with a measure of organic material. The land is ploughed and left to weather for a time before subsoiling (stirring up the subsoil) is carried out.",
        nutrientValue:"Apply NPK fertilizer as per soil test recommendation as far as possible. If soil test recommendation is not available, adopt a blanket recommendation of 05:05:02 NPK kg/ha.",
        growthTime:"In India planting Seasons of Sugarcane in subtropical regions are September to October (Autumn) and February to March (spring), whereas in tropical regions it is June to August (Adsali) and January to February and October to November (Eksali).The lowest temperature for good cane-plant growth is about 20 °C (68 °F).",
        potentialDiseases:['Smut', 'Rust', 'Red rot','Yellow leaf disease','Wilt', 'Ratoon stunting.'],
        phenotypicOutput:"Sugarcane is a tall perennial plant growing erect even up to 5 or 6 metres. The plant is composed of four principal parts, the root system, the stalk, the leaves and the inflorescence.",
        cultivationStyle:"Sugarcane is propagated primarily by the planting of cuttings. The sections of the stalk of immature cane used for planting are known as seed cane, or cane sets, and have two or more buds (eyes), usually three. Seed cane is planted in well-worked fields. Mechanical planters that open the furrow, fertilize, drop the seed cane, and cover it with soil are widely used."
    }
    return (

        <div className="boxed-page1">
            <nav id="gtco-header-navbar-1" className="navbar navbar-expand-lg py-4">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <span className="lnr lnr-leaf"></span>
                </a>

                <a className="nav-item nav-link" style={{marginRight: "500px", fontFamily: "Georgia", fontSize: "35px"}}>{details.title}</a>
            </div>
        </nav>
        <br/><br/><br/>
        <section className="page-header" style={{ backgroundSize: "cover", height: "300px",backgroundImage:`url(${process.env.PUBLIC_URL+ "../../img/"+name+".jpg"})`}}>
            <div className="container">
                <br/>
                <div className="second-txt shape" style={{textAlign: "left", paddingLeft: "20px"}}>
                    <br/>
                    <b>
                   
                    {details.title}
                    </b>
                    <br/>
                    <b>SCIENTIFIC NAME :</b>{details.scientificName}
                    <br/>
                    <b>NATIVE :</b> {details.native}
                    <br/>
                    <b>ORIGIN :</b> {details.origin}
                    <br/>
                </div>
            </div>
        </section>
        <div style={{padding: "20px", paddingRight: "70px" ,textAlign: "start"}}>
            <div>
                <b>DESCRIPTION :</b><br/> <b>SOIL TYPE:</b><span> <br/> <div style={{marginLeft: "30px"}}> {details.soilType}</div>
            </span>
                <br/>
            </div>
            <div>
                <span><b>NUTRIENT VALUE :</b> <br/> <div style={{marginLeft: "30px"}}>
                {details.nutrientValue}
                </div>
            </span>
            </div>
            <br/>
            <div>
                <span>
                <b>GROWTH TIME :</b><br/> <div style={{marginLeft: "30px"}}> {details.growthTime}
                </div>
            </span>
            </div><br/>
            <div>
                <span>
                <b> POTENTIAL DISEASES :</b> 
                <ul style={{marginleft: "30px"}} className="edited"><b>Fungi:</b>
                    <br/>
                  {details.potentialDiseases.map((i)=><li>{i}</li>)}
                </ul>
            </span>
            </div>
            <div>
                <span> 
               <b> PHENOTYPIC OUTPUT :</b><br/> 
               <div style={{marginLeft: "30px"}}>
                   {details.phenotypicOutput}
               </div>
            </span>
            </div>
            <br/>
            <div>
                <span>
                <b>CULTIVATION STYLE :</b><br/>
                <div style={{marginLeft: "30px"}}>
                    {details.cultivationStyle}
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