const { TextInput } = require('react-native');
const { default: Styled } = require('styled-components/native');
const { Text, getBaseStyles } = require('components/Type');
const Theme = require('theme');

exports.Label = Styled(Text)`
    margin-left: ${({ theme }) => theme.spacing(3) + 1}px;
    margin-bottom: ${({ theme }) => theme.spacing(1)}px;
    font-size: 14px;
    text-transform: lowercase;
`;

const BaseInput = Styled(TextInput).attrs({
    onFocus: ({ currentTarget }) => {

        currentTarget.setNativeProps({
            style: { borderColor: Theme.palette.primary[500] }
        });
    },
    onBlur: ({ currentTarget }) => {

        currentTarget.setNativeProps({
            style: { borderColor: Theme.palette.slate[500] }
        });
    }
})`
    ${({ theme }) => getBaseStyles(theme)}
    padding: ${({ theme }) => theme.spacing(1.5, 3)}
    border: 1px solid ${({ theme }) => theme.palette.slate};
    border-radius: ${({ theme }) => theme.spacing(4)}px;

    ${({ theme, variant }) => {

        if (variant === 'header') {
            return `
                padding: ${theme.spacing(1.5, 0)};
                border-width: 0;
                font-family: 'Poppins_400Regular';
                font-size: ${theme.spacing(4.5)}px;
            `;
        }
    }}
`;

exports.TextInput = BaseInput;

exports.TextInputUnderline = Styled(BaseInput)`
    position: relative;
    top: 1px;
    border: 0;
    padding: 0;
`;

exports.TextInputHeader = Styled(BaseInput)`
    position: relative;
    top: 1px;
    border: 0;
    padding: 0;
`;
