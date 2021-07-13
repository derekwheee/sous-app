const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const {
    ScrollView
} = require('react-native');
const Pill = require('components/Pill');

const Container = Styled(ScrollView)`
    padding: ${({ theme }) => theme.spacing(0, 1, 2)};
`;

const StyledPill = Styled(Pill)`
    margin: ${({ theme }) => theme.spacing(0, 1)};
`;

module.exports = function List({ items = [] }) {

    return (
        <Container horizontal>
            {items.map(({ label, ...props }) => {

                return (
                    <StyledPill key={label} {...props}>{label}</StyledPill>
                );
            })}
        </Container>
    );
};

module.exports.propTypes = {
    items: T.array
};
