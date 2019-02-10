import React, { Component } from 'react';
import '../css/style.css';
import graphic from '../img/graphic.png';
import DashboardCard from './DashboardCard';

class Dashboard extends Component {
    handleSubmit = (event) => {
        // The user's data is stored in the state
        // If there were a server, I would make a POST request here
        // That would look something like axios.post("/dashboard", this.state)
        console.log("submitted!");
        window.location.reload();
    }

    render() {
        const { questionSets } = this.props;
        return (
            <div id="wrapper">
                <div id="left-panel">
                    <img src={graphic} alt="htn graphic" />
                </div>
                <div id="right-panel">
                    <div id="panel-header">
                        <h4>HACK THE NORTH</h4>
                        <h1 className="header"> Hacker Dashboard </h1>
                        {questionSets ? (
                            questionSets.map(questionSet => (
                                <DashboardCard formData={this.props.formData} set={questionSet.id} label={questionSet.label} />
                            ))
                        ) : (
                                <h2>Loading...</h2>
                            )}
                    </div>
                    <button onClick={this.handleSubmit} id="submit" type="submit">Submit</button>
                </div>
            </div>
        );
    }
}

export default Dashboard;