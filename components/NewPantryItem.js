const { useState, useRef, ...React } = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { ScrollView } = require('react-native');
const { Label, TextInput } = require('components/FormFields');
const { Button } = require('components/Buttons');

const Container = Styled(ScrollView)`
    padding: ${({ theme }) => theme.spacing(2)}px;
`;

const StyledTextInput = Styled(TextInput)`
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const Buttons = Styled.View`
    flex-direction: row;
    justify-content: flex-end;
    margin-bottom: ${({ theme }) => theme.spacing(6)}px;
`;

const ActionButton = Styled(Button)`
    margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

module.exports = function NewPantryItem({ onSubmit, onClose }) {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');

    const scrollRef = useRef(null);
    const categoryRef = useRef(null);
    const quantityRef = useRef(null);

    return (
        <Container ref={scrollRef}>
            <Label>Item Name</Label>
            <StyledTextInput
                returnKeyType='next'
                value={name}
                onChangeText={(t) => setName(t)}
                onSubmitEditing={() => categoryRef.current.focus()}
            />
            <Label>Category</Label>
            <StyledTextInput
                ref={categoryRef}
                returnKeyType='next'
                value={category}
                onChangeText={(t) => setCategory(t)}
                onSubmitEditing={() => quantityRef.current.focus()}
            />
            <Label>Quantity</Label>
            <StyledTextInput
                ref={quantityRef}
                returnKeyType='done'
                value={quantity}
                onChangeText={(t) => setQuantity(t)}
                onSubmitEditing={() => scrollRef.current.scrollToEnd()}
            />
            <Buttons>
                {onClose && (
                    <ActionButton color='slate' onPress={onClose}>Cancel</ActionButton>
                )}
                <ActionButton
                    onPress={() => onSubmit({ name, category, quantity })}
                >
                        Add to pantry
                </ActionButton>
            </Buttons>
        </Container>
    );
};

module.exports.propTypes = {
    onSubmit: T.func.isRequired,
    onClose: T.func
};

module.exports.defaultProps = {
    onClose: null
};
