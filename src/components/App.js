import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import QuestionSet from './QuestionSet';
import NotFound from './NotFound';
import '../css/style.css';

class App extends Component {
  state = {
    questionSets: null,
    formData: null,
  }

  componentDidMount() {
    fetch('https://hackthenorth.com/fe-questions.json')
      .then(res => res.json())
      .then(questionSets =>
          this.setState({ questionSets }));
  }

  updateWithFormData = (data) => {
    console.log("updating bich");
    this.setState({formData: data});
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route
              exact path="/"
            render={(props) => <Dashboard {...props} formData={this.state.formData} questionSets={this.state.questionSets} />}
            />
            <Route
              name="questionSet"
              path="/questions/:questionSet"
            render={(props) => <QuestionSet key={props.match.params.questionSet} {...props} formData={this.state.formData} questionSets={this.state.questionSets} updateWithFormData={this.updateWithFormData.bind(this)} />}
            />
            <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
