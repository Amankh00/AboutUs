import React from "react";

const AboutUs = ()=>
{
    return(

        <>
                
                <section>
                    <div className = "image">
                       <img src="https://cdn.pixabay.com/photo/2017/08/26/23/37/business-2684758__340.png"/>
                    </div>
        
                    <div className = "content">
                        <h2>About Us</h2>
                        <span style={{color: "red"}}> SAAR---- </span>
                        <p>Here you can see different type of templates where you can chooese any of the by taking subscription we provide premium and free subscription in free you have limited service where in primium you will see many features and also we provide source code of that UI.</p>
                        <ul className = "links">
                            <li><a href = "#">work</a></li>
                            <div className = "vertical-line"></div>
                            <li><a href = "#">service</a></li>
                            <div className = "vertical-line"></div>
                            <li><a href = "#">contact</a></li>
                        </ul>
                        <ul className = "icons">
                            <li>
                                <i className = "fa fa-twitter"></i>
                            </li>
                            <li>
                                <i className = "fa fa-facebook"></i>
                            </li>
                            <li>
                                <i className = "fa fa-github"></i>
                            </li>
                            <li>
                                <i className = "fa fa-pinterest"></i>
                            </li>
                        </ul>
                    </div>
                </section><br/><br/>
              { /* <div className="credit">Made with <span style={{color: "tomato"}}>❤</span> by <a href="#">IRON MAN TEAM</a></div> */}
          
              <div classNameName="red">
                <footer>
        <div className="row">
            <div className="col" >
                <div className="logo-details">
                        <span style={{color: "red"}}className="logo_name">SAAR</span>
                </div>
                <p>Here you can see different type of templates where you can chooese any of the by taking subscription we provide premium and free subscription in free you have limited service where in primium you will see many features and also we provide source code of that UI.</p>
            </div>
            <div className="col">
                <h3>Office</h3>
                <p>
                    dadabari block-A , Banglore India
                </p>
                <p className="mail-id">SAAR786@gmail.com</p>
                <p>+917xxxxxxxx</p>
            </div>
            <div className="col">
                <h3>Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Gallery</a></li>
                </ul>
            </div>
            <div className="col">
                <h3>Newsletter</h3>
                <form>
                    <i className="far fa-envelope"></i>
                    <input type="email" name="email" placeholder="Enter your email id" required/>
                    <button type="submit"><i className="fas fa-arrow-right"></i></button>
                </form>
                <div className="social-icons">
                    <a href="#" className="facebook"><i className="fa fa-facebook"></i></a> 
                    <a href="#" className="twitter"><i className="fa fa-twitter"></i></a> 
                    <a href="#" className="google"><i className="fa fa-google"></i></a> 
                    <a href="#" className="linkedin"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
        </div>
        <hr/>
        <p className="copyright">© 2023 COMPANY NAME Pvt. Ltd.
        All rights are reserved</p>
         <div className="credit" style={{color: "orange"}}>Made with <span style={{color: "Tomato"}}>❤</span> by <a href="#">IRON MAN TEAM</a></div>
    </footer>
</div>
                </>
    );
};

export default AboutUs;