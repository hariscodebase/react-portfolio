import React from "react";
import axios from "axios";

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            educations: []
        }
    }
    
    componentDidMount() {
        axios("/content/education.json")
        .then((res) => {
            console.log(res.data);
            this.setState({
                educations: res.data
            })
        });
    }
    render() {
        const { educations } = this.state;

        function getMonthYear(date) {
            const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            let current_datetime = new Date(date);
            let formatted_date = months[current_datetime.getMonth()] + " " + current_datetime.getFullYear();
            return formatted_date;
        }
        return(
    <div className="w3-padding-32" id="education">
        <h3 className="w3-xxlarge w3-padding-24 w3-text-light-black">My Education</h3>
        {
            educations.map((education, i) => (
                <div key={i} className="list-item">
                    <p>
                        <span className="w3-margin-right">{education.program}</span>
                        { '( ' + getMonthYear(education.startdate) + ' - ' + getMonthYear(education.enddate) + ' )'}
                    </p>
                    <p>{education.title}</p>
                </div>
            ))
        }

    </div>
        );
    }
}

export default Education;