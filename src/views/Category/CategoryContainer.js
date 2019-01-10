import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: 0,
  }

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    // stored response in the state;
    this.setState({
      category: data,
    });

  }

  handleSubmit = (e) => {
    const { category, currentQuestion } = this.state;
    // here I prevent the default bh of submitting form
    e.preventDefault();
    // write logic to handle good/bad answer
    const answer = this.answerInput.current.value;
    // check if answer is equal to the requested answer from the current question
    //baseball Mars torch the book F. Scott Fitzgerald
    for (var i = 0; i < category.clues.length; i++) {
    // increment currentQuestion
      if (answer === category.clues[i].answer) {
        this.setState({currentQuestion: currentQuestion + 1});
      }
    }
    // save in the storage the id of the question
    let stringifyId = JSON.stringify(category.id);
    localStorage.setItem('getId', stringifyId);
    // if no more question, remove category from categories playable

    // increment score somewhere and redirect to /
    console.log(category.clues.answer);
  }

  render() {
    const { category, currentQuestion } = this.state;
    // at first render, category will be null so we need to wait
    // before using data.
    if (!category) return <div>is loading</div>

    return (
      <Category
        category={category}
        currentQuestionIndex={currentQuestion}
        handleSubmit={this.handleSubmit}
        // plug createRef to chidlren
        answerInput={this.answerInput}
      />
    );
  }
}

export default CategoryContainer;
