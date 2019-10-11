import React from 'react';

import '../css/Word.css';

export default class Word extends React.Component {
    render() {
        const { word } = this.props;
        const { headword, pos, wordClass, pronunciation, gloss, translation } = word;

        return (
            <div className="word-component">
                <div className="word-container">
                    <section className="word-summary">
                        <div className="word-headword">{headword}</div>
                        <div className="word-pos">{pos} {wordClass}</div>
                        <div className="word-pronunciation">{pronunciation}</div>
                    </section>
                </div>
            </div>
        )
    }
}