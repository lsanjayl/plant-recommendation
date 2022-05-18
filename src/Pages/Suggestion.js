import {useNavigate} from "react-router-dom"
import {useLocation} from 'react-router-dom';
const Suggestion =()=>{
    const navigate = useNavigate();
    const loaction=useLocation()
    const suggested=loaction.state.value;
    
    return(
        <div className="boxed-page">
            <nav id="gtco-header-navbar" className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                       <span className="lnr lnr-leaf"></span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header" aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-nav-header">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Back to Home</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br/>
            <div className="container text-center">
                <h2 style={{textAlign:"center", margin: "100px", color: "black"}}>
                    <b>SUGGESTED CROPS</b>
                </h2>
                <br/>
                <center><ul id="myList" className="no-bullets nav menu" >
                    {suggested.map((i)=><li onClick={()=>navigate("./details")}><a>{i}</a></li>)}
                    </ul>
                    </center>
                <br/><br/><br/>
            </div>
            <br/>
            {/* <!--FOOTER SECTION-->    */}
            <footer className="mastfoot mb-3 bg-white py-4 border-top">
                <div className="inner container">
                    <div className="row"> 
                        <div className="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
                            <p className="mb-0">&copy; 2021 LMES . All Right Reserved. Design by LMES.</p>
                        </div>
          
                        <div className="col-md-6"> 
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
export default Suggestion