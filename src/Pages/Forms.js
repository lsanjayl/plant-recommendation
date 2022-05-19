import {useNavigate} from "react-router-dom"
import {useState} from"react"
import PyScript from "../services/pyScript";
const Forms =()=>{
    const navigate = useNavigate();
    const [values,setValues]=useState({
        nitrogen:"",
        phosphorous:"",
        potassium:"",
        phValue:"",
        district:""
      })
    
    const handleChange=e=>{
      setValues(prevUser => ({ ...prevUser, [e.target.name]: e.target.value }));
    }
    return(

        <div className="boxed-page">
            <nav id="gtco-header-navbar" className="navbar navbar-expand-lg py-4">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center" href="/">
             <span className="lnr lnr-leaf"></span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-header" aria-controls="navbar-nav-header" aria-expanded="false" aria-label="Toggle navigation">
              <span className="lnr lnr-menu"></span>
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
        <b>Find out the most suitable crop to grow in your area</b></h2>
      </div>
    <div className= "align-items-center" style={{backgroundColor: "white"}}></div>
    <form className="form-box-style" id="predictionform" method="post">
        <div className="form-group fields field1">
            <label >Nitrogen(mg/kg)</label>
            <input type="number"  className="form-control" id="Nitrogen" placeholder="Enter the Value" name="nitrogen" value={values.nitrogen} onChange={handleChange}></input>
        </div>
        <div className="form-group fields">
            <label >Phosphorous(mg/kg)</label>
            <input type="number" className="form-control" id="Phosphorous" placeholder="Enter the Value" name="phosphorous" value={values.phosphorous} onChange={handleChange}></input>
        </div>
        <div className="form-group fields">
            <label >Pottasium(mg/kg)</label>
            <input type="number" className="form-control" id="Pottasium" placeholder="Enter the Value" name="potassium" value={values.potassium}onChange={handleChange}></input>
        </div>
        <div className="form-group fields">
            <label htmlfor="phvalue">pH value</label>
            <input type="number" className="form-control" id="phvalue" placeholder="Enter the Value" name="phValue" value={values.phValue}onChange={handleChange}></input>
        </div>
        <div className="form-group fields">
            <label htmlfor="Districts">Districts</label>
            <select className="custom-select" style={{width: "725px", height: "40px" }}id="district" name="district" value={values.district}onChange={handleChange}>
              <option >Select District</option>
              <option>Ariyalur</option> 
              <option>Chennai</option> 
              <option>Chengalpattu</option>
              <option>Coimbatore</option> 
              <option>Cuddalore</option> 
              <option>Dharmapuri</option> 
              <option>Dindigul</option> 
              <option>Erode</option> 
              <option>Kancheepuram</option> 
              <option>Kanyakumari</option> 
              <option>Karur</option>
              <option>Kallakurichi</option>
              <option>Kollimalai</option> 
              <option>Krishnagiri</option> 
              <option>Madurai</option> 
              <option>Mayiladuthurai</option>
              <option>Nagapattinam</option> 
              <option>Namakkal</option> 
              <option>Nilgiris</option> 
              <option>Perambalur</option> 
              <option>Pudukottai</option> 
              <option>Ramanathapuram</option> 
              <option>Ranipet</option>
              <option>Salem</option> 
              <option>Sivagangai</option> 
              <option>Tenkasi</option>
              <option>Thanjavur</option> 
              <option>Theni</option> 
              <option>Thiruvallur</option> 
              <option>Thiruvarur</option> 
              <option>Thoothukudi</option> 
              <option>Trichy</option> 
              <option>Tirupattur</option>
              <option>Tiruppur</option> 
              <option>Tirunelveli</option> 
              <option>Tiruvannamalai</option> 
              <option>Vellore</option> 
              <option>Viluppuram</option> 
              <option>Virudhunagar</option>
            </select>
        </div>
          <br/>
        <div>
            <center><PyScript values={values}/></center>
        </div>
          <br/>
          
          
    </form>
    {/* <!--FOOTER SECTION-->    */}
    <footer className="mastfoot mb-3 bg-white py-4 border-top">
      <div className="inner container">
        <div className="row"> {/*<!--COPYRIGHT SECTION-->*/}
            <div className="col-md-6 d-flex align-items-center justify-content-md-start justify-content-center">
                <p className="mb-0"> 2021 LMES . All Right Reserved. Design by LMES.</p>
            </div>
          
            <div className="col-md-6"> {/*<!--icons -->*/}
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
export default Forms