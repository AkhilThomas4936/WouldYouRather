import React, { Component } from "react";

class QuestionCard extends Component {
  render() {
    const { question, users } = this.props;
    return (
      <div className="question-card-container">
        <div className="card-title">
          <h2>{`${users[question.author].name} asks:`}</h2>
        </div>

        <div className="card-container">
          <div>
            <img
              className="card-avatar"
              src={users[question.author].avatar}
              alt="avatar image"
            />
          </div>

          <div>
            <div>
              <h3>Would you rather</h3>
              <div>{`__${question.optionOne.text.slice(0, 10)} __`}</div>
            </div>
            <button className="view-button">View full</button>
          </div>
        </div>
      </div>
    );
  }
}
export default QuestionCard;
