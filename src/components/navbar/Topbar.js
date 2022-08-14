import React from "react";
import axios from "axios";

class Topbar extends React.Component {

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

<div className="w3-top w3-hide-large w3-hide-medium" id="topbar">
    <div className="w3-bar w3-opacity w3-hover-opacity-off w3-center w3-small">
      <a href="/#" className="w3-bar-item w3-button w3-padding-large w3-text-white w3-hover-black">HD</a>
        {
            sidebarLinks.map((sL, i) => (
                <a key={i} href={"/#" + sL.linkText} className="w3-bar-item w3-button w3-padding-large w3-text-white w3-hover-black">
                    {sL.linkText}
                </a>
            ))
        }
    </div>
</div>
        );
    }
}

export default Topbar;