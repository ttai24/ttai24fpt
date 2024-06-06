import React, { Component } from "react";

class Question extends Component {
    render() {
        const { question, selectedOption, onOptionChange, onSubmit, isSubmitted } = this.props;

        return (
            <div className="question">
                <h3>Question {question.id}</h3>
                <h5 className="mt-2">{question.question}</h5>
                <form onSubmit={onSubmit} className="mt-2 mb-2">
                    <table className="table table-bordered">
                        <tbody>
                            {question.options.map((option, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="form-check">
                                            <input
                                                type="radio"
                                                id={`option-${index}`}
                                                name="option"
                                                value={option}
                                                checked={selectedOption === option}
                                                onChange={onOptionChange}
                                                disabled={isSubmitted}
                                                className="form-check-input"
                                            />
                                            <label htmlFor={`option-${index}`} className="form-check-label">
                                                {option}
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="submit" className="btn btn-primary mt-2" disabled={isSubmitted}>
                        SUBMIT
                    </button>
                </form>
            </div>
        );
    }
}

export default Question;