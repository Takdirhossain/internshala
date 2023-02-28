
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Jobs = () => {
    return (
        <div className='intershipcontainer'>
        <div className='avilableintership'>
            <div className=''>
                <h1>Jobs</h1>
                <p>Premium jobs on your fingertips
                </p>
            </div>
            <div className="seeallintership">
                <p className="viewall">View all Jobs  </p>
                <ArrowForwardIcon />

            </div>

        </div>

        <div className="popularcitywrapper">
            <h3 className="citytitle">Popular cities</h3>
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
        <div className="popularcitywrapper category">
            <h3 className="citytitle">Popular Category</h3>
            <div className="popularcity">
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/marketing.svg" alt="" />
                    <p>Design</p>
                </div>
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/content_writing.svg" alt="" />
                    <p>Content Writing</p>
                </div>
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/finance.svg" alt="" />
                    <p>Finance</p>
                </div>
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/graphic_designing.svg" alt="" />
                    <p>Graphic Design</p>
                </div>
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/computer_science.svg" alt="" />
                    <p>Computer Science</p>
                </div>
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/hr.svg" alt="" />
                    <p>HR</p>
                </div>
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/data_science.svg" alt="" />
                    <p>Data Science</p>
                </div>
                <div className="city">
                    <img src="https://internshala.com/static/images/home/internships/categories/engineering.svg" alt="" />
                    <p>Engineering</p>
                </div>
            </div>
        </div>
       
       
    </div>
    );
};

export default Jobs;