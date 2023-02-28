import "./footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import AndroidIcon from "@mui/icons-material/Android";
const Footer = () => {
  return (
    <div className="footerwrapper">
      <div className="footercategory">
        <div className="category">
          <h5>Internships by places</h5>
          <p>Internship in India</p>
          <p>Internship in Delhi</p>
          <p>Internship in Bangalore</p>
          <p>Internship in Hyderabad</p>
          <p>Internship in Mumbai</p>
          <p>Internship in Chennai</p>
          <p>Internship in Gurgaon</p>
          <p>Internship in Kolkata</p>
        </div>
        <div className="category">
          <h5>Internship by Stream</h5>
          <p>Computer Science Internship</p>
          <p>Electronics Internship</p>
          <p>Mechanical Internship</p>
          <p>Marketing Internship</p>
          <p>Chemical Internship</p>
          <p>Finance Internship</p>
          <p>Summer Research Fellowship</p>
          <p>Campus Ambassador Program</p>
        </div>
        <div className="category">
          <h5>Jobs by Places</h5>
          <p>Jobs in Delhi</p>
          <p>Jobs in Mumbai</p>
          <p>Jobs in Bangalore</p>
          <p>Jobs in Jaipur</p>
        </div>
        <div className="category">
          <h5>Jobs by Stream</h5>
          <p>Marketing jobs</p>
          <p>Content writing jobs</p>
          <p>Web development jobs</p>
          <p>Sales jobs</p>
          <p>Finance jobs</p>
        </div>
        <div className="category">
          <h5>Online Trainings</h5>
          <p>Web Development</p>
          <p>Programming with Python</p>
          <p>Digital Marketing</p>
          <p>Machine Learning</p>
          <p>Advanced Excel</p>
          <p>Data Science</p>
          <p>Programming with C and C++</p>
          <p>AutoCAD</p>
        </div>
      </div>

      <div className="footercomanyinfo">
        <hr />
        <div className="otherinfo">
          <div>
            <p>About us</p>
            <p>We're hiring</p>
            <p>Hire interns for your company</p>
          </div>
          <div>
            <p>Team Diary</p>
            <p>Blog</p>
            <p>Our Services</p>
          </div>
          <div>
            <p>Terms & Conditions</p>
            <p>Privacy</p>
            <p>Contact us</p>
          </div>
        </div>

        <div className="socialmedia">
          <div className="social">
            <button className="mobileapp">
              <AndroidIcon />
              <p> Download Mobile App</p>
            </button>
            <FacebookIcon className="socialicon"></FacebookIcon>
            <TwitterIcon className="socialicon"></TwitterIcon>
            <InstagramIcon></InstagramIcon>
          </div>
          <div>
            <p>© Copyright 2023 Internshala</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
