import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/style.css';
import character from '../img/character.png';
import checklist from '../img/checklist.png';
import fallback from '../img/fallback.png';
import x from '../img/x.svg';
import check from '../img/check.svg';

const Card = styled.div`
    position: relative;
    background-color: ${props => props.set === "generalInfo" ? '#FBCA67' : '#FCA0AA'};
    color: #FFF;
    width: 70%;
    border-radius: 12px;
    padding: 20px 20px;
    margin-bottom: 25px;
    box-shadow: 0 1px 3px hsl(0, 0%, 0%, 0.2);

    @media (max-height: 630px) {
        padding: 10px 20px;
    }
`;

const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    background-color: #FFF;
    font-weight: 700;
    font-size: 13px;
    border: none;
    border-radius: 12px;
    padding: 5px 10px;
    text-transform: uppercase;
    color: ${props => props.set === "generalInfo" ? '#F9BB3C' : '#FCA0AA'};

    &:hover {
        background-color: #EEECEC;
    }

`;

class DashboardCard extends Component {
    state = {
        completed: false,
        began: false,
    }

    setSubmittable = () => {
        const { submittable, set, formData, numOfQuestions, updateForSubmission } = this.props;
        let formDataLength = 0;
        if (formData && formData[set]) {
            formDataLength = Object.keys(formData[set]) ? Object.keys(formData[set]).length : 0;
        }

        let began = false;
        if (formData && formData[set] && (Object.keys(formData[set]).length !== 0)) {
            began = true;
        }

        this.setState({
            completed: formDataLength === numOfQuestions,
            began,
        });

        let dataFromForm = submittable;
        dataFromForm[`${set}`] = (formDataLength === numOfQuestions);
        updateForSubmission(dataFromForm);
    }

    componentDidUpdate(prevProps) {
        if (this.props.questionSets !== prevProps.questionSets) {
            this.setSubmittable();
        }
    }

    componentDidMount() {
        this.setSubmittable();
    }

    render() {
        const { set, label } = this.props;
        // Fallback to general question image if question set isn't general info or technical skills
        let selectImg = fallback;
        if (set === "generalInfo") selectImg = checklist;
        else if (set === "technicalSkills") selectImg = character;


        return (
            <Card set={set} id="card">
                <img className="character" src={selectImg} alt="character" />
                <div className="container">
                    <h2>{label}</h2>
                    <Link to={{
                        pathname: `/questions/${set}`,
                    }}>
                        <Input
                            set={set}
                            type="submit"
                            value={this.state.began ? "Edit" : "Begin" }
                        />
                    </Link>
                </div>
                <img className="status" src={this.state.completed ? check : x} alt="status" />
            </Card>
        );
    }
}

export default DashboardCard;