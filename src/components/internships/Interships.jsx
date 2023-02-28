import "./internships.scss"
import SearchIcon from '@mui/icons-material/Search';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




export default function Interships() {
    return (
        <div className='intershipcontainer'>
            <div className='searchintership'>
                <input type="text" placeholder="What are you looking for? " />
                <button className="searchbutton"><SearchIcon className="searchicon" /></button>

            </div>
            <div className='avilableintership'>
                <div className=''>
                    <h1>Internships</h1>
                    <p>Apply to 10,000+ internships for free
                    </p>
                </div>
                <div className="seeallintership">
                    <p className="viewall">View all Interships  </p>
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
                        <img src="https://internshala.com/static/images/home/internships/categories/part_time.svg" alt="" />
                        <p>Part-time</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/engineering.svg" alt="" />
                        <p>Enginnering</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/ngo.svg" alt="" />
                        <p>NGO</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/business_mba.svg" alt="" />
                        <p>Business/MBA</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/design.svg" alt="" />
                        <p>Design</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/science.svg" alt="" />
                        <p>Science</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/media.svg" alt="" />
                        <p>Media</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/humanities.svg" alt="" />
                        <p>Humanitys</p>
                    </div>
                </div>
            </div>
           
           
        </div>
    )
}
