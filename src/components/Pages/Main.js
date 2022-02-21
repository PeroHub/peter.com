import './Main.css'
import profile from '../../assets/images/profilepics.jpg'

const Main = () => {
  return (
    <div className="Main ms">
     <div className="Main-con">
        <div className="Main-con-item">
            <p className="name">Yo! <span class="peace">✌🏽</span> I'm Peter Ime</p>
            <p className="job">Software Engineer</p>
            <p>I’m a Software Engineer currently based in Nigeria with 4+ years of professional experience in creating, designing, building and delivering end to end solutions for digital products.</p>
        </div>
        <div className="image-container">
            <img src={profile} alt="profile picture"/>
        </div>
     </div>

     <div className="quote-text">
       <p>" I create <span>solution</span> for problems with codes 👨🏽‍🍳"</p>
     </div>

     <div className="project-con">
        <h3>Projects</h3>
        <div className="project-item-con">
          <div className="project-item">
            <div className="image-container">
                <img src={profile} alt="profile picture"/>
            </div>
            <div className="project-item-text">
              <h4>Hometeach</h4>
              <p>A platform that connect teachers with student</p>
            </div>
          </div>
          
          <div className="project-item">
            <div className="image-container">
                <img src={profile} alt="profile picture"/>
            </div>
            <div className="project-item-text">
              <h4>Hometeach</h4>
              <p>A platform that content teachers with student</p>
            </div>
          </div>
        </div>

        {/* <div className="seeMore">
          <button className="text">See more projects</button>
        </div> */}

        <div class="outer">
          <div class="button">
            <div class="text">See more projects</div>
          </div>
        </div>
       
     </div>

    </div>

    
    
  );
};

export default Main;
