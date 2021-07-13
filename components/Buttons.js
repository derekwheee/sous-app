const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { FontAwesome5: Icon } = require('@expo/vector-icons');
const { Text } = require('components/Type');
const Theme = require('theme');

const Container = Styled.Pressable`
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(1.5, 3.5)};
    border-radius: 100px;
    background: ${({ theme }) => theme.palette.primary};
`;

const ButtonText = Styled(Text)`
    position: relative;
    top: -1px;
    text-transform: lowercase;
    color: ${({ theme }) => theme.palette.slate[100]};
`;

const Adornment = Styled(Icon)`
    position: relative;
    top: 1px;
    margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const ButtonBase = function ButtonBase({ adorn, adornment, style, textStyles, children }) {

    return (
        <Container style={style}>
            <ButtonText style={textStyles}>{children}</ButtonText>
            {adorn && (
                <Adornment name={adornment} size={12} color={textStyles.color} />
            )}
        </Container>
    );
};

ButtonBase.propTypes = {
    adorn: T.bool,
    adornment: T.string,
    style: T.array,
    textStyles: T.object,
    children: T.string
};

ButtonBase.defaultProps = {
    adorn: false,
    adornment: 'chevron-right'
};

exports.Button = ButtonBase;

exports.Link = Styled(ButtonBase).attrs({
    textStyles: {
        color: Theme.palette.primary[500]
    }
})`
    background: transparent;
`;
