const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');

const Container = Styled.View`
    width: ${({ theme }) => theme.spacing(2)}px;
    height: ${({ theme }) => theme.spacing(2)}px;
    border-radius: ${({ theme }) => theme.spacing(1)}px;
    background: ${({ theme, level }) => (level ? theme.palette[level] : theme.palette.slate[400])};
`;

module.exports = function Status({ level, style }) {

    return (
        <Container level={level} style={style} />
    );
};

module.exports.propTypes = {
    level: T.oneOf(['success', 'warning', 'danger', 'info']),
    style: T.array
};
