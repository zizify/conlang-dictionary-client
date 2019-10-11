import React from 'react';

import Main from '../components/Main';
import Word from '../components/Word';

import '../css/Words.css';

const examples = [
    {
        headword: 'áḡaḏi',
        classes: ['noun', 'inanimate', 'dual'],
        pronunciation: '/ˈa.ɣa.ði/',
        forms: [
            {
                type: 'obl.',
                fullType: 'oblique',
                form: 'áḡaḏ-',
            },
            {
                type: 'pl.',
                fullType: 'plural',
                form: 'áḡaḏik',
            },
            {
                type: 'sgv.',
                fullType: 'singulative',
                form: 'áḡauḏi',
            },
        ],
        translations: [
            {
                entries: ['two thighs, both haunches', 'lap, the upper portion of both legs'],
                gloss: 'leg',
                examples: [
                    {
                        text: 'an híma ta n\' pocúrsek áḡauḏi',
                        translation: 'if a woman has exposed a thigh before thee',
                        phonetic: '[ɐn ˈhi.mɐ tɐ.n pʰɔˈt͡suɽ.sɛk ˈa.ɣɐu̯.ði]',
                        textGloss: '',
                    }
                ]
            },
        ],
    }
];

class Words extends React.Component {
    render() {
        return (
            <div className="words-page page">
                {examples.map(word => <Word key={word.headword} word={word} />)}
            </div>
        )
    }
}

export default () => <Main><Words /></Main>