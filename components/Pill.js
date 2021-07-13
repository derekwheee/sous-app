const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { Text } = require('components/Type');
const Theme = require('theme');

const getContrastColor = (color, light, dark) => {

    return color.alter().isLight() ? dark : light;
};

const Container = Styled.Pressable`
    padding: ${({ theme }) => theme.spacing(1, 2)};
    border-radius: ${({ theme }) => theme.spacing(3)}px;
    background: ${({ theme, color }) => theme.palette[color]};
`;

const PillText = Styled(Text)`
    font-size: 14px;
    text-transform: lowercase;
    color: ${({ theme, color }) => {

        return getContrastColor(
            theme.palette[color],
            theme.palette.slate[100],
            theme.palette.etch[300]
        );
    }};
`;

module.exports = function List({ color, style, children, ...props }) {

    return (
        <Container style={style} color={color} {...props}>
            <PillText color={color}>{children}</PillText>
        </Container>
    );
};

module.exports.propTypes = {
    color: T.oneOf(Object.keys(Theme.palette)),
    children: T.any,
    style: T.array
};

module.exports.defaultProps = {
    color: 'primary'
};
