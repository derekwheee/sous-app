const { useState, ...React } = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { FontAwesome5: Icon } = require('@expo/vector-icons');
const { Text } = require('components/Type');
const { TextInputUnderline } = require('components/FormFields');

const Container = Styled.View`
    flex-direction: row;
    flex-grow: 1;
    align-items: baseline;
    margin: ${({ theme }) => theme.spacing(0, 1)};
`;

const StatIcon = Styled(Icon)`
    position: relative;
    top: 2px;
    margin-right: ${({ theme }) => theme.spacing(1)}px;
`;

const StatLabel = Styled(Text)`
    margin-right: ${({ theme }) => theme.spacing(1)}px;
    font-family: 'Poppins_600SemiBold';
    font-size: 12px;
    text-transform: lowercase;
`;

const StatValue = Styled(Text)`
    font-size: 14px;
    text-transform: lowercase;
`;

module.exports = function Stat({ label, value, onChange }) {

    const [editableValue, setEditableValue] = useState('');

    return (
        <Container>
            <StatIcon name='clock' size={20} />
            <StatLabel>{label}</StatLabel>
            {!onChange && (
                <StatValue>{value}</StatValue>
            )}
            {onChange && (
                <TextInputUnderline
                    placeholder='???'
                    value={editableValue}
                    onChangeText={setEditableValue}
                />
            )}
        </Container>
    );
};

module.exports.propTypes = {
    label: T.string.isRequired,
    value: T.string.isRequired,
    onChange: T.func
};
