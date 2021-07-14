const { default: Styled } = require('styled-components/native');

const getBaseStyles = (theme) => {

    return `
        font-family: 'Poppins_300Light';
        font-size: ${theme.spacing(2)}px;
        color: ${theme.palette.etch};
    `;
};

exports.getBaseStyles = getBaseStyles;

exports.Text = Styled.Text`${({ theme }) => getBaseStyles(theme)}`;

exports.CenteredText = Styled.Text`
    ${({ theme }) => getBaseStyles(theme)}
    margin-left: auto;
    margin-right: auto;
`;

exports.H1 = Styled.Text`
    ${({ theme }) => getBaseStyles(theme)}
    margin-bottom: ${({ theme }) => theme.spacing(4)}px;
    font-family: 'Poppins_500Medium';
    font-size: ${({ theme }) => theme.spacing(4.5)}px;
    text-transform: lowercase;
`;

exports.H2 = Styled.Text`
    ${({ theme }) => getBaseStyles(theme)}
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
    font-family: 'Poppins_600SemiBold';
    font-size: ${({ theme }) => theme.spacing(3)}px;
    font-weight: bold;
    text-transform: lowercase;
`;

exports.H3 = Styled.Text`
    ${({ theme }) => getBaseStyles(theme)}
    margin-bottom: ${({ theme }) => theme.spacing(2.4)}px;
    font-family: 'Poppins_600SemiBold';
    font-size: ${({ theme }) => theme.spacing(2.4)}px;
    font-weight: bold;
    text-transform: lowercase;
`;

exports.H4 = Styled.Text`
    ${({ theme }) => getBaseStyles(theme)}
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
    font-family: 'Poppins_500Medium';
    text-transform: lowercase;
`;
