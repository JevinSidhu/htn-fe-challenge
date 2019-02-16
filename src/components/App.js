import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import QuestionSet from './QuestionSet';
import NotFound from './NotFound';
import '../css/style.css';
import SuccessPage from './SuccessPage';

class App extends Component {
  state = {
    questionSets: null,
    formData: null,
    submittable: {},
  }

  componentDidMount() {
    fetch('https://hackthenorth.com/fe-questions.json')
      .then(res => res.json())
      .then(questionSets =>
          this.setState({ questionSets }));
  }

  updateWithFormData = (data) => {
    this.setState({formData: data});
  }

  updateForSubmission = (submittable) => {
    this.setState({submittable});
  }

  render() {
    return (
      <Router>
        <Switch>
            <Route
              exact path="/"
            render={(props) => <Dashboard submittable={this.state.submittable} {...props} formData={this.state.formData} questionSets={this.state.questionSets} updateForSubmission={this.updateForSubmission.bind(this)} />}
            />
            <Route
              name="questionSet"
              path="/questions/:questionSet"
            render={(props) => <QuestionSet key={props.match.params.questionSet} {...props} formData={this.state.formData} questionSets={this.state.questionSets} updateWithFormData={this.updateWithFormData.bind(this)}  />}
            />
            <Route
              path="/success"
              component={SuccessPage}
            />
            <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
