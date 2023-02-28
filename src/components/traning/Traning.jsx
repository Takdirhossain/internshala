import "./traning.scss"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Traning = () => {
    return (
        <div className="traningwrapper">
            <div className='availabletranning'>
                <div className=''>
                    <h1>Internshala Trainings </h1>
                    <p>Learn new-age skills on the go
                    </p>
                </div>
                <div className="sellalltranning">
                    <p className="viewall">View all Tranings  </p>
                    <ArrowForwardIcon></ArrowForwardIcon> 

                </div>

            </div>
            <div className="popularcitywrapper">
               
                <div className="popularcity">
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg" alt="" />
                        <p>Delhi/NCR</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/bangalore.svg" alt="" />
                        <p>Bangalor</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/mumbai.svg" alt="" />
                        <p>Mumbai</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/hyderabad.svg" alt="" />
                        <p>Hyderabad</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/chennai.svg" alt="" />
                        <p>Chennai</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/kolkata.svg" alt="" />
                        <p>Kolkata</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/international.svg" alt="" />
                        <p>International</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Traning;