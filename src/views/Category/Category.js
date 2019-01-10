import React from 'react';
import PropTypes from 'prop-types';

const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput }) => {
  const currentQuestion = category.clues[currentQuestionIndex];
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>You choosed: {category.title}</h1>
        <div className="question">
          <h3 className="question__title">
            {currentQuestion.question}
          </h3>
          <div className="question__answerInput">
            {/* We give the ref below in order check the value */}
            <input ref={answerInput} />
          </div>
          <button className="question__submit" type="submit">
            Next
          </button>
        </div>
      </form>
    </section>
  );
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;