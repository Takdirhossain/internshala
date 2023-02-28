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
                    <p >view All Interships  </p>
                    <ArrowForwardIcon />

                </div>

            </div>

            <div className="popularcitywrapper">
                <h2>Popular cities</h2>
                <div className="popularcity">
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                    <div className="city">
                        <img src="https://internshala.com/static/images/home/internships/categories/delhi_ncr.svg" alt="" />
                        <p>Delhi/NCR</p>
                    </div>
                    <div>
                        <img src="https://internshala.com/static/images/home/internships/categories/bangalore.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                    <div>
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                    <div>
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                    <div>
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                    <div>
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                    <div>
                        <img src="https://internshala.com/static/images/home/internships/categories/work_from_home.svg" alt="" />
                        <p>Work from home</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
