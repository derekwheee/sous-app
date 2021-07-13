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

exports.TextInput = Styled(TextInput).attrs({
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
`;
