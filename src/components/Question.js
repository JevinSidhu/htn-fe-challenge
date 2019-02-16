import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    display: block;
    background-color: ${props => props.set === "generalInfo" ? '#F9F1DF' : '#FFECEE'};
    padding: 10px 15px;
    border: 2px solid;
    border-color: ${props => props.set === "generalInfo" ? '#FCE9C3' : '#FDD4D9'};
    border-radius: 6px;
    margin-bottom: 20px;
    transition: all 0.30s ease-in-out;;
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
    outline: none;

    @media (max-height: 900px) {
        padding: 5px 10px;
        font-size: 12px;
    }

    &:focus {
    box-shadow: 0 0 5px ${props => props.set === "generalInfo" ? '#FBCA67' : '#FCA0AA'};
    border: 2px solid ${props => props.set === "generalInfo" ? '#FBCA67' : '#FCA0AA'};
    }

    &::placeholder {
        color: rgb(0, 0, 0, 0.25);
    }
`;

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    componentDidMount() {
        const { formData, set, id } = this.props;
        if (formData && set && id) {
            if (formData[`${set}`]) {
                this.setState({
                    value: formData[`${set}`][`${id}`],
                });
            }
        }
    }

    render() {
        const { placeholder, id, type, set } = this.props;
        const { value } = this.state;
        return (
            <div>
                <label>{this.props.label}</label>
                <Input
                    placeholder={placeholder}
                    set={set}
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Question;

