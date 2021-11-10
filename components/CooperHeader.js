const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { Text } = require('components/Type');

const Container = Styled.View`
    padding: ${({ theme }) => theme.spacing(4, 2, 1)};
`;

const Header = Styled(Text)`
    font-family: 'Cooper';
    font-size: ${({ theme }) => theme.spacing(5)}px;
    text-transform: lowercase;
`;

module.exports = function CooperHeader({ children, ...props }) {

    return (
        <Container {...props}>
            <Header>{children}</Header>
        </Container>
    );
};

module.exports.propTypes = {
    children: T.any
};
