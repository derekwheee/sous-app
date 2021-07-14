const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { Text } = require('components/Type');

const Container = Styled.View`

`;

const Instruction = Styled.View`
    flex-direction: row;
    margin-bottom: ${({ theme }) => theme.spacing(3)}px;
`;

const Index = Styled(Text)`
    width: ${({ theme }) => theme.spacing(6)}px;
    margin-top: -16px;
    font-family: 'Poppins_600SemiBold';
    font-size: ${({ theme }) => theme.spacing(6)}px;
`;

const Label = Styled(Text)`
    flex-shrink: 1;
`;

module.exports = function InstructionsList({ items }) {

    return (
        <Container>
            {items.map((instruction, index) => {

                return (
                    <Instruction key={index}>
                        <Index>{index + 1}</Index>
                        <Label>{instruction}</Label>
                    </Instruction>
                );
            })}
        </Container>
    );
};

module.exports.propTypes = {
    items: T.array
};

module.exports.defaultProps = {
    items: []
};
