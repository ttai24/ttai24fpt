import React, { Component } from 'react';
import '../App.css';

class Score extends Component {
    render() {
        const { score, replay } = this.props;
        return (
            <div>
                <h2>Quiz Ended</h2>
                <h4>Your score: {score}</h4>
                <button onClick={replay} className="btn btn-primary mt-2">
                    Replay
                </button>
            </div>
        );
    }
}

export default Score;