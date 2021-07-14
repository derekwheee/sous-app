const { useState, useRef, useEffect, ...React } = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { ScrollView } = require('react-native');
const { Label, TextInput } = require('components/FormFields');
const { Button } = require('components/Buttons');

const Scroller = Styled(ScrollView)`
`;

const Container = Styled.View`
    display: flex;
    height: 450px;
    padding: ${({ theme }) => theme.spacing(2)}px;
`;

const StyledTextInput = Styled(TextInput)`
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const Buttons = Styled.View`
    flex-direction: row;
    align-self: flex-end;
`;

const ActionButton = Styled(Button)`
    margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

const Spacer = Styled.View`
    flex-grow: 1;
`;

module.exports = function NewPantryItem({ autoFocus, onSubmit, onClose }) {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');

    const nameRef = useRef(null);
    const categoryRef = useRef(null);
    const quantityRef = useRef(null);

    useEffect(() => {

        if (autoFocus) {
            nameRef.current.focus();
        }
    }, [nameRef, autoFocus])

    return (
        <Scroller>
            <Container>
                <Spacer />
                <Label>Item Name</Label>
                <StyledTextInput
                    ref={nameRef}
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
                />
                <Spacer />
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
                <Spacer />
            </Container>
        </Scroller>
    );
};

module.exports.propTypes = {
    autoFocus: T.bool,
    onSubmit: T.func.isRequired,
    onClose: T.func
};

module.exports.defaultProps = {
    autoFocus: false,
    onClose: null
};
