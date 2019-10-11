import React from 'react';

import '../css/Translation.css';

export default function Translation(props) {
    const { translation } = props;
    const { entries, gloss, examples } = translation;
    
    return (
        <div className="translation-container">
            <section className="translation-entries">{entries.join(';\u2001')}</section>
            <section className="translation-examples">
                {examples.map((example) => {
                    const { text, textGloss, phonetic, translation } = example;

                    return (
                        <div key={text} className="translation-example">
                            <div className="translation-example-line translation-example-text">{text}</div>
                            {textGloss ? <div className="translation-example-line translation-example-text-gloss">{textGloss}</div> : ''}
                            {translation ? <div className="translation-example-line translation-example-translation">{translation}</div> : ''}
                        </div>
                    );
                })}
            </section>
        </div>
    )
}