const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { FontAwesome5: Icon } = require('@expo/vector-icons');
const { Text } = require('components/Type');
const Theme = require('theme');
const { getContrastColor } = require('utils/color');

const Container = Styled.Pressable`
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(1.5, 3.5)};
    border-radius: 100px;
    background: ${({ theme, color }) => theme.palette[color]};
`;

const ButtonText = Styled(Text)`
    position: relative;
    top: -1px;
    margin: 0 auto;
    text-transform: lowercase;
    color: ${({ theme, color }) => {

        return getContrastColor(
            theme.palette[color],
            theme.palette.slate[100],
            theme.palette.etch[300]
        );
    }};
`;

const Adornment = Styled(Icon)`
    position: relative;
    top: 1px;
    margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const ButtonBase = function ButtonBase({ adorn, adornment, color, style, textStyles, children, ...props }) {

    return (
        <Container style={style} color={color} {...props}>
            <ButtonText style={textStyles} color={color}>{children}</ButtonText>
            {adorn && (
                <Adornment name={adornment} size={12} color={textStyles.color} />
            )}
        </Container>
    );
};

ButtonBase.propTypes = {
    adorn: T.bool,
    adornment: T.string,
    color: T.oneOf(Object.keys(Theme.palette)),
    style: T.array,
    textStyles: T.object,
    children: T.string
};

ButtonBase.defaultProps = {
    adorn: false,
    adornment: 'chevron-right',
    color: 'primary'
};

exports.Button = ButtonBase;

exports.Link = Styled(ButtonBase).attrs({
    textStyles: {
        color: Theme.palette.primary[500]
    }
})`
    background: transparent;
`;
