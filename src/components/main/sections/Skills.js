import React from "react";
import axios from "axios";

class Skills extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
        skills: []
    }
}

// get skills
componentDidMount() {
    axios("/content/skills.json")
    .then((res) => {
        console.log(res.data);
        this.setState({
          skills: res.data
        })
    });
}
    render() {

      const { skills } = this.state;

        return(
            <div className="w3-padding-32" id="skills">
            <h3 className="w3-xxlarge w3-padding-16 w3-text-light-black">My Skills</h3>
            
            {
              skills.map((skill, i) => (                  
                  <div key={i} className="list-item">
                    <p className="w3-wide">{ skill.title }</p>
                    <div className="w3-white">
                      <div className="w3-dark-grey" style={{height:'28px', width:skill.percent + '%'}}></div>
                    </div>
                  </div>
              ))
            } 
            <button className="w3-button w3-border w3-round  w3-light-grey w3-padding-large w3-section">
              <i className="fa fa-download"></i> Download Resume
            </button>
          </div>
        );
    }
}

export default Skills;