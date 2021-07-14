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
    margin: 0 ${({ align }) => (align === 'left' ? 0 : 'auto')};
    text-transform: lowercase;
    color: ${({ theme, color }) => {

        return getContrastColor(
            theme.palette[color],
            theme.palette.slate[100],
            theme.palette.etch[300]
        );
    }};
`;

const StartAdornment = Styled(Icon)`
    margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

const EndAdornment = Styled(Icon)`
    margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const ButtonBase = function ButtonBase({ startAdornment, endAdornment, color, style, textStyles, textProps, children, ...props }) {

    return (
        <Container style={style} color={color} {...props}>
            {startAdornment && (
                <StartAdornment name={startAdornment} size={12} color={textStyles.color} />
            )}
            <ButtonText style={textStyles} color={color} {...textProps}>{children}</ButtonText>
            {endAdornment && (
                <EndAdornment name={endAdornment} size={12} color={textStyles.color} />
            )}
        </Container>
    );
};

ButtonBase.propTypes = {
    startAdornment: T.string,
    endAdornment: T.string,
    color: T.oneOf(Object.keys(Theme.palette)),
    style: T.array,
    textStyles: T.object,
    textProps: T.object,
    children: T.string
};

ButtonBase.defaultProps = {
    adorn: false,
    adornment: 'chevron-right',
    color: 'primary'
};

exports.Button = ButtonBase;

exports.Link = Styled(ButtonBase).attrs((props) => {

    return {
        textStyles: {
            color: Theme.palette.primary[500],
            ...props.textStyles
        }
    };
})`
    background: transparent;
`;
