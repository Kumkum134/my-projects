import React from 'react';
import { ChashQuestions, CPlusPlusQuestions, CQuestions, CssQuestions,ExpressQuestions, HQuestion, JavaQuestions, JavaScriptQuestion, KotlinQuestions, MongoDBQuestions, MySQLQuestions, NodeQuestions, PHPQuestions, PythonQuestions, ReactQuestion, SwiftQuestions } from "./data";

const ExplanationPage = ({ questionList, questionId, selectedOption, showExplanation }) => {
    const question = questionList.find((q) => q.id === questionId);

    if (!showExplanation || !question) {
        return null;
    }

    const backgroundColor = selectedOption === question.answer ? '#9ADE7B' : '#CD1818';

    return (
        <div className='explanation'>
            <h1>Explanation</h1>
            <p style={{ backgroundColor, padding: '10px', color: 'white' }}>
                Your Answer: {selectedOption}
            </p>
            <p>Correct Answer: {question.answer}</p>
            <p>{question.explanation}</p>
        </div>
    );
};

export const CHashExplanationPage = (props) => (
    <ExplanationPage questionList={ChashQuestions} {...props} />
);

export const CExplanationPage = (props) => (
    <ExplanationPage questionList={CQuestions} {...props} />
);

export const CPlusPlusExplanationPage = (props) => (
    <ExplanationPage questionList={CPlusPlusQuestions} {...props} />
);

export const CssExplanationPage = (props) => (
    <ExplanationPage questionList={CssQuestions} {...props} />
);

export const ExpressExplanationPage = (props) => (
    <ExplanationPage questionList={ExpressQuestions} {...props} />
);

export const HtmlExplanationPage=(props)=>(
    <ExplanationPage questionList={HQuestion} {...props} />
);

export const JavaExplanationPage=(props)=>(
    <ExplanationPage questionList={JavaQuestions} {...props} />
);
export const JavaScriptExplanationPage=(props)=>(
    <ExplanationPage questionList={JavaScriptQuestion} {...props} />
);

export const KotlinExplanationPage=(props)=>(
    <ExplanationPage questionList={KotlinQuestions} {...props} />
);

export const MongoDBExplanationPage=(props)=>(
    <ExplanationPage questionList={MongoDBQuestions} {...props} />
);

export const MySQLExplanationPage=(props)=>(
    <ExplanationPage questionList={MySQLQuestions} {...props} />
);

export const NodeExplanationPage=(props)=>(
    <ExplanationPage questionList={NodeQuestions} {...props} />
);

export const PHPExplanationPage=(props)=>(
    <ExplanationPage questionList={PHPQuestions} {...props} />
);

export const PythonExplanationPage=(props)=>(
    <ExplanationPage questionList={PythonQuestions} {...props} />
);

export const ReactExplanationPage=(props)=>(
    <ExplanationPage questionList={ReactQuestion} {...props} />
);

export const SwiftExplanationPage=(props)=>(
    <ExplanationPage questionList={SwiftQuestions} {...props} />
);