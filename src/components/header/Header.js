import React from "react";

class Header extends React.Component {
    render() {
        return(
<header className="w3-container w3-padding-64 w3-center w3-black w3-text-grey" id="header">
    <h1 className="w3-jumbo"><span className="w3-hide-small">I'm</span> Hari Dinesh.</h1>
    <p className="w3-xxlarge">Full stack developer.</p>
</header>
        );
    }
}

export default Header;