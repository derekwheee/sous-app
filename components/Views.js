const React = require('react');
const T = require('prop-types');
const { TouchableWithoutFeedback, Keyboard } = require('react-native');
const { default: Styled } = require('styled-components');

exports.CenteredView = Styled.View`
    width: 100%;
    margin: auto;
`;

exports.PaddedView = Styled.View`
    padding: 0 16px;

    ${({ theme, gutterTop, gutterBottom }) => {

        if (gutterTop) {
            return `
                padding-top: ${theme.spacing(2)}px;
            `;
        }

        if (gutterBottom) {
            return `
                padding-bottom: ${theme.spacing(2)}px;
            `;
        }
    }}
`;

exports.FormView = function FormView({ children }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {children}
        </TouchableWithoutFeedback>
    );
};

exports.FormView.propTypes = { children: T.node };
