import React from "react";
import axios from "axios";

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }
    
    componentDidMount() {
        axios("/content/projects.json")
        .then((res) => {
            console.log(res.data);
            this.setState({
                projects: res.data
            })
        });
    }
    render() {
        const { projects } = this.state;

        return(
            <div className="w3-padding-32" id="projects">
        <h3 className="w3-xxlarge w3-padding-24 w3-text-light-black">My Projects</h3>
        <div className="w3-row-padding" style={{margin:'0 -16px'}}>
            {
                projects.map((project, i) => (
                    <div key={i} className="w3-half w3-margin-bottom">
            <ul className="w3-ul w3-white w3-border w3-center w3-opacity w3-hover-opacity-off">
              <li className="w3-dark-grey w3-xlarge w3-padding-32">{project.title}</li>
              <li className="w3-padding-16 w3-opacity">{project.usedskills}</li>
              <li className="w3-padding-16">{project.content}</li>
              <li className="w3-light-grey w3-padding-24">
                <button className="w3-button w3-white w3-padding-large w3-hover-black"><a className="buttonlinks" href="/#">Visit
                    Website</a></button>
              </li>
            </ul>
          </div>
                ))
            }
          
        </div>
      </div>
        );
    }
}

export default Experience;