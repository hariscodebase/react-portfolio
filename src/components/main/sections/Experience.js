import React from "react";
import axios from "axios";

class Experience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            employments: []
        }
    }
    
    componentDidMount() {
        axios("/content/employments.json")
        .then((res) => {
            console.log(res.data);
            this.setState({
                employments: res.data
            })
        });
    }
    render() {
        const { employments } = this.state;

        function getMonthYear(date) {
            const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let current_datetime = new Date(date);
            let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
            return formatted_date;
        }

        return(
    <div className="w3-padding-32" id="experience">
        <h3 className="w3-xxlarge w3-padding-24 w3-text-light-black">Work Experience</h3>
            
            {
                employments.map((employment, i) => (
                    <div key={i} className="list-item">
                        <h4><span className="w3-margin-right">{employment.title}</span>
                        { '( ' + getMonthYear(employment.startDate) + ' - ' + getMonthYear(employment.endDate) + ' )'}</h4>
                        <p className="w3-large">{employment.companyName}.</p>
                        <p className="w3-large">{employment.description}</p>
                    </div>
                ))
            }
            
    </div>
        );
    }
}

export default Experience;