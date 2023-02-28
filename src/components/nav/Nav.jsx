import "./nav.scss"
import logo from "../../assets/new_internshala_logo.svg"
export default function Nav() {
  return (
    <div className="navcontainer">
      <div className="navwrapper">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="naviteam">
          <h5>Internship</h5>
          <div>
            <h5>Courses <span className="discount">80% off</span></h5>

          </div>
          <h5>Jobs</h5>
          <button className="loginbutton">Login</button>
          <button className="registerbutton">Register </button>
        </div>
      </div>

    </div>
  )
}
