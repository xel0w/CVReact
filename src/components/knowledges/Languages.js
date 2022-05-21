import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state={
        languages:[
            {id:1, value: "CSS", xp: 2},
            {id:2, value: "Javascript", xp: 1},
            {id:3, value: "PHP", xp: 1},
            {id:4, value: "Python", xp: 0.3}
        ],
        frameworks:[
            {id:1, value: "Angular", xp: 0.4},
            {id:2, value: "React", xp: 0.1},
            {id:3, value: "Vue", xp: 0.5},
            {id:4, value: "Bootstrap", xp: 0.7},
            {id:5, value: "SASS", xp: 0.5}
        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar 
                languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;