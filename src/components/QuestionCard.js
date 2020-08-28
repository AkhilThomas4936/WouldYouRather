import React, { Component } from "react";

class QuestionCard extends Component {
  render() {
    const { question, users } = this.props;
    console.log(question);
    return (
      <div className="questioncard-container">
        <div className="card-title">
          <h2>{`${users[question.author].name} asks:`}</h2>
        </div>
        <div className="card-grid">
          <div>
            <img
              className="card-avatar"
              src={users[question.author].avatar}
              alt="avatar "
            />
          </div>
          <div className="card-grid-2">
            <h3>Would you rather</h3>
            <h4>{`__${question.optionOne.text.slice(3, 10)}__`}</h4>
            <button className="card-btn">View Full</button>
          </div>
        </div>
      </div>
    );
  }
}
export default QuestionCard;
