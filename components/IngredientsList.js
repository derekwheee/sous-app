const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { Feather: Icon } = require('@expo/vector-icons');
const { Text } = require('components/Type');
const Theme = require('theme');

const Container = Styled.View`

`;

const Ingredient = Styled.View`
    flex-direction: row;
    margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;

const CartIcon = Styled.Pressable`
    margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

module.exports = function IngredientsList({ items }) {

    return (
        <Container>
            {items.map(({ id, name, isInStock }) => {

                return (
                    <Ingredient key={id || name}>
                        <CartIcon onPress={() => { /* TODO: Add to cart */ }}>
                            <Icon
                                name={!isInStock ? 'plus-circle' : 'check-circle'}
                                color={isInStock ? Theme.palette.success[600] : Theme.palette.etch[300]}
                                size={20}
                            />
                        </CartIcon>
                        <Text>{name}</Text>
                    </Ingredient>
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
