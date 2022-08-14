import React from 'react';
import axios from 'axios';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sidebarLinks: []
        }
    }

    componentDidMount() {
        axios("/content/sidebarLinks.json")
        .then((res) => {
            console.log(res);
            this.setState({
                sidebarLinks: res.data
            })
        });
    }

    render() {

        const { sidebarLinks } = this.state;
        return(            
            <nav className="w3-sidebar w3-bar-block w3-small w3-wide w3-hide-small w3-center">
                <a href="/#" className="w3-bar-item w3-button w3-padding-large w3-text-white w3-hover-black">
                    <p>HD</p>
                </a>
                {
                    sidebarLinks.map((sL, i) => (
                        <a key={i} href={"/#" + sL.linkText} className="w3-bar-item w3-button w3-padding-large w3-text-white w3-hover-black">
                            <p>{sL.linkText}</p>
                        </a>
                    ))
                }    
            </nav>
        );
    }
}

export default Sidebar;