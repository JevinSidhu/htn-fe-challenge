import React, { Component } from 'react';
import styled from 'styled-components';
import '../css/style.css';
import graphic from '../img/graphic.png';
import DashboardCard from './DashboardCard';

const SubmitButton = styled.button`
    position: absolute;
    bottom: 0;
    width: 50%;
    font-family: 'Roboto', sans-serif;
    height: 100px;
    font-weight: 700;
    font-size: 23px;
    border: none;
    text-transform: uppercase;
    background-color: ${props => props.submittable ? '#4BCF7F' : '#BDBDBD'};
    color: #EEECEC;

    &:hover {
        background-color: ${props => props.submittable ? '#41AD6C' : '#ADADAD'};
    }

    @media (max-width: 1050px) {
        width: 100%;
    }
`;

class Dashboard extends Component {
    state = {
        submittable: false,
    }

    handleSubmit = (event) => {
        // The user's data is stored in the state
        // If there were a server, I would make a POST request here
        // That would look something like axios.post("/dashboard", this.state)
        if (this.state.submittable) {
            this.props.history.push('/success');
        }
        else {
            alert("Please complete each question set before submitting!");
        }
    }

    componentDidMount = () => {
        const submittable = this.canSubmit();
        this.setState({
            submittable,
        });
    }

    canSubmit = () => {
        const { submittable } = this.props;
        let canSubmit = false;
        if (Object.keys(submittable).length !== 0) {
            canSubmit = true;
            for (let field in submittable) {
                if (!submittable[field]) {
                    canSubmit = false;
                    break;
                }
            }
            return canSubmit;
        }
    }

    render() {
        const { questionSets, formData } = this.props;
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
                                <DashboardCard submittable={this.props.submittable} updateForSubmission={this.props.updateForSubmission} formData={formData} numOfQuestions={questionSet.questions.length} set={questionSet.id} label={questionSet.label} />
                            ))
                        ) : (
                                <h2>Loading...</h2>
                            )}
                    </div>
                    <SubmitButton submittable={this.state.submittable} onClick={this.handleSubmit} id="submit" type="submit">Submit</SubmitButton>
                </div>
            </div>
        );
    }
}

export default Dashboard;