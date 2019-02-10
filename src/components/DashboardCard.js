import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/style.css';
import character from '../img/character.png';
import checklist from '../img/checklist.png';
import fallback from '../img/fallback.png';

const Card = styled.div`
    background-color: ${props => props.set === "generalInfo" ? '#FBCA67' : '#FCA0AA'};
    color: #FFF;
    width: 70%;
    border-radius: 12px;
    padding: 20px 20px;
    margin-bottom: 25px;
    box-shadow: 0 1px 3px hsl(0, 0%, 0%, 0.2)
`;

const Input = styled.input`
    font-family: 'Roboto', sans-serif;
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
    render() {
        const { set, label, formData } = this.props;

        // Fallback to general question image if question set isn't general info or technical skills
        let selectImg = fallback;
        if (set === "generalInfo") selectImg = checklist
        else if (set === "technicalSkills") selectImg = character

        let value = "Begin"
        if (formData && formData[set]) {
            value = "Edit";
        }

        return (
            <Card set={set} id="card">
                <img src={selectImg} alt="character" />
                <div class="container">
                    <h2>{label}</h2>
                    <Link to={{
                        pathname: `/questions/${set}`,
                    }}>
                        <Input set={set} type="submit" value={value} />
                    </Link>
                </div>
            </Card>
        );
    }
}

export default DashboardCard;