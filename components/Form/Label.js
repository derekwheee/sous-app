const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { Text } = require('@ui-kitten/components');

const internals = {};

module.exports = function Label({ label }) {

    const { StyledLabel } = internals;

    return <StyledLabel category="label">{label}</StyledLabel>;
};

module.exports.propTypes = {
    label: T.string
};

internals.StyledLabel = Styled(Text)`
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
    font-size: 14px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.palette.basic[600]};
`;
