import React from 'react';

import Translation from './Translation';

import '../css/Word.css';

export default class Word extends React.Component {
    render() {
        const { word } = this.props;
        const { headword, pronunciation, classes, forms, translations } = word;

        return (
            <div className="word-component">
                <div className="word-container">
                    <section className="word-summary">
                        <div className="word-headword">{headword}</div>
                        {pronunciation ? <div className="word-pronunciation">{pronunciation}</div> : ''}
                        <div className="word-pos">
                            {classes.join(' · ')}
                        </div>
                    </section>
                    <section className="word-definitions">
                        <ol className="word-definitions-list">
                            {translations.map((translation) => (
                                <li key={translation.entries.join('')} className="word-definitions-list-item">
                                    <Translation translation={translation} />
                                </li>
                            ))}
                        </ol>
                    </section>
                </div>
            </div>
        )
    }
}