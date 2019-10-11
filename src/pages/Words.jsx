import React from 'react';

import Main from '../components/Main';
import Word from '../components/Word';

import '../css/Words.css';

const examples = [
    {
        headword: 'áḡauḏi',
        pos: 'noun',
        wordClass: 'inanimate',
        pronunciation: '/ˈa.ɣau.ði/',
        gloss: 'leg',
        translation: 'leg',
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