import React, { Component } from 'react';

class Result extends Component {
    render() {
        const { options, replay } = this.props;
        return (
            <div className="options">
                <table className="table">
                    <tbody>
                        {options.map((option, index) => (
                            <tr key={index}>
                                <td>
                                    <label>{option}</label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Result;