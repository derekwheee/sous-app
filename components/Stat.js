const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { FontAwesome5: Icon } = require('@expo/vector-icons');
const { Text } = require('components/Type');

const Container = Styled.View`
    flex-direction: row;
    flex-grow: 1;
    justify-content: space-between;
    align-items: baseline;
    margin: ${({ theme }) => theme.spacing(0, 1)};
`;

const StatIcon = Styled(Icon)`
    position: relative;
    top: 2px;
`;

const StatLabel = Styled(Text)`
    font-family: 'Poppins_600SemiBold';
    font-size: 12px;
    text-transform: lowercase;
`;

const StatValue = Styled(Text)`
    font-size: 14px;
    text-transform: lowercase;
`;

module.exports = function Stat({ label, value }) {

    return (
        <Container>
            <StatIcon name='clock' size={20} />
            <StatLabel>{label}</StatLabel>
            <StatValue>{value}</StatValue>
        </Container>
    );
};

module.exports.propTypes = {
    label: T.string.isRequired,
    value: T.string.isRequired
};
