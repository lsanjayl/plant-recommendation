const landing =()=>{
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
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#blog">Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#portfolio">Other Apps</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
         <div className="jumbotron d-flex align-items-center bg-wide" >
            <div className="container text-center">
                <h1 className="display-2 mb-6">PLANT RECOMMENDATION</h1>
                <p>
                    <b>Find the best trees, unique fruits and edibles that gives you <b> more yield </b> . <br/> <b> New ideas</b> for transforming your outdoor spaces and more. <br></br> We provide you with the <b> most accurate details </b> in town for the
                    crop recommendation . 
                    </b>

                </p>
                
            </div>
        </div>
        

        <section id="gtco-features" className="bg-white">
            <div className="container">
                <div className="section-content">
                    <div className="title-wrap">
                        <h2 className="section-title">
                            Key Factors of our product
                        </h2>
                        <p className="section-sub-title" style={{fontSize: "20px"}}>Here are the <b> key factors </b> associated with our product . </p>
                    </div>
                    <div className="row">
                        <div className="col-md-12 features-holder">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 feature-item item mb-3 mb-3 text-center">
                                    <div className="my-4">
                                        <i className="lnr lnr-thumbs-up fs-40"></i>
                                    </div>
                                    <h4>User Friendly</h4>
                                    <p>Easy to use . Has icons and pictures to define the area .</p>
                                </div>
                                <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                                    <div className="my-4">
                                        <i className="lnr lnr-star fs-40"></i>
                                    </div>
                                    <h4>Accessibility</h4>
                                    <p>Easy to access through any medium at any time .</p>
                                </div>
                                <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                                    <div className="my-4">
                                        <i className="lnr lnr-bubble fs-40"></i>
                                    </div>
                                    <h4>Climate Based</h4>
                                    <p>Based on the climatic condition of your area , the crops are recommended .</p>
                                </div>
                                <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                                    <div className="my-4">
                                        <i className="lnr lnr-magic-wand fs-40"></i>
                                    </div>
                                    <h4>Security</h4>
                                    <p>User data collected when they use is completely safe and protected . </p>
                                </div>
                                <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                                    <div className="my-4">
                                        <i className="lnr lnr-map-marker fs-40"></i>
                                    </div>
                                    <h4>Location Based</h4>
                                    <p>Crops are recommended based on the users location , thus leading to more yield . </p>
                                </div>
                                <div className="col-md-4 col-sm-6 feature-item item mb-3 text-center">
                                    <div className="my-4">
                                        <i className="lnr lnr-layers fs-40"></i>
                                    </div>
                                    <h4>Personalisation</h4>
                                    <p>The specifications are easily modifiable based on the user experience and convenience . </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="gtco-section-featurettes" className="featurettes bg-white">

            <div className="container">
                <div className="section-content">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="title-wrap">
                                <h2 className="section-title">
                                    <b>Our own mobile app</b> ,<br/> for your use !
                                </h2>
                                <p className="section-sub-title">
                                    <b> There is our App </b> , <br> which is developed to help users to know about the crop diseases , </br> to get crop recommendations and to know more about the things about the crops .
                                </p>
                            </div>

                            <div className="featurettes-wrap text-left mb-4">

                                <div className="row featurettes-item">

                                    <div className="col-md-4 offset-md-2 col-sm-6">
                                        <div className="my-5">
                                            <span class="lnr lnr-smartphone fs-40 color-primary"></span>
                                        </div>
                                        <h4 className="mb-4">Our smart phone app</h4>
                                        <p>Our app aims to provide wide range of solutions for biggest questions of people ! <br> "What should I cultivate now" </br> And now it's in your hands anywhere you go !</p>
                                    </div>

                                    <div className="col-md-4 offset-md-right-2 col-sm-6">
                                        <img className="my-5" src="img/home.jpg" alt=""/>
                                    </div>

                                </div>

                            </div>

                            <div className="featurettes-wrap text-left">

                                <div className="row featurettes-item">

                                    <div className="col-md-4 offset-md-2 col-sm-6">
                                        <img className="my-4" src="img/suggested.png" alt=""/>
                                    </div>

                                    <div className="col-md-4 offset-md-right-2 col-sm-6 mb-5">
                                        <div className="my-4">
                                            <span className="lnr lnr-map fs-40 color-primary"></span>
                                        </div>
                                        <h4 class="mb-4">Based on location</h4>
                                        <p>Gets the location of user and provides recommendation for that area based on the NPK values provided .</p>
                                    </div>

                                </div>

                            </div>

                            <div className="featurettes-wrap text-left">

                                <div className="row featurettes-item">

                                    <div className="col-md-4 offset-md-2 col-sm-6 offset-sm-0">
                                        <h4 className="mb-4">Ready to join our App for your advance personalised experience?</h4>
                                        <p>Check our user friendly mobile apps which are available in both playstore and appstore .</p>
                                    </div>

                                    <div className="col-md-4 offset-md-right-2 col-sm-6 text-center">
                                        <a href="#0"><img class="btn-img my-4" src="img/appstore-btn.png" alt=""/></a>
                                        <a href="#0"><img class="btn-img" src="img/playstore-btn.png" alt=""/></a>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </section>
        <section id="gtco-blog" className="bg-grey">
            <div className="container">
                <div className="section-content">
                    <div className="title-wrap mb-5">
                        <h2 className="section-title">Our <b>other sites</b></h2>

                    </div>
                    <div className="row">
                        <div className="col-md-12 blog-holder">
                            <div className="row">
                                <div className="col-md-4 blog-item-wrapper">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <a href="single.html"><img src="img/plantdisease.jpeg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <div className="blog-tag">
                                                <a href="#">
                                                    <h5><small>DISEASE DETECTION</small></h5>
                                                </a>
                                            </div>
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h4>Our another site</h4>
                                                </a>
                                            </div>
                                            <div className="blog-desc">
                                                <p>This site aims at providing solutions for the diseases that attacks the crops periodically and suddenly by analysing the Convolutional Neural Networks and suggests the precautions to be taken for the respective
                                                    disease .</p>
                                            </div>
                                            <div className="blog-author">
                                                <p>by LMES</p>
                                            </div>
                                            <div className="blog-share-wrapper">
                                                <a className="blog-share" href="google.com">
                                                    <i className="fab fa-facebook-square"></i>
                                                </a>
                                                <a class="blog-share" href="google.com">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 blog-item-wrapper">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <a href="#"><img src="img/fertilizers.jpeg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <div className="blog-tag">
                                                <a href="#">
                                                    <h5><small>FERTLIZER</small></h5>
                                                </a>
                                            </div>
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h4>Our another site</h4>
                                                </a>
                                            </div>
                                            <div className="blog-desc">
                                                <p>This site aims at suggesting the best fertilizers for the crops cultivated and also techniques to boost the level of yield of the crops cultivated at that point of time . It suggests the good fertilizer
                                                    shop around the user area . </p>
                                            </div>
                                            <div className="blog-author">
                                                <p>by LMES</p>
                                            </div>
                                            <div className="blog-share-wrapper">
                                                <a className="blog-share" href="google.com">
                                                    <i className="fab fa-facebook-square"></i>
                                                </a>
                                                <a className="blog-share" href="google.com">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 blog-item-wrapper">
                                    <div className="blog-item">
                                        <div className="blog-img">
                                            <a href="#"><img src="img/soiltester.jpeg" alt=""/></a>
                                        </div>
                                        <div className="blog-text">
                                            <div className="blog-tag">
                                                <a href="#">
                                                    <h5><small>SOIL TESTER</small></h5>
                                                </a>
                                            </div>
                                            <div className="blog-title">
                                                <a href="#">
                                                    <h4>Our another creation</h4>
                                                </a>
                                            </div>
                                            <div className="blog-desc">
                                                <p>This aims at identifying the various parameters of the soil . It has sensors like pH sensors , macro nutrient sensor attached to the micro controller , it then sends the data to the applications via cloud
                                                    database . </p>
                                            </div>
                                            <div className="blog-author">
                                                <p>by LMES</p>
                                            </div>
                                            <div className="blog-share-wrapper">
                                                <a className="blog-share" href="google.com">
                                                    <i className="fab fa-facebook-square"></i>
                                                </a>
                                                <a className="blog-share" href="google.com">
                                                    <i className="fab fa-twitter-square"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
export default landing