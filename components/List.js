const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const Status = require('components/Status');
const { Text } = require('components/Type');

const Container = Styled.View``;

const ListItem = Styled.Pressable`
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(2)}px;
    background: ${({ theme }) => theme.palette.slate[100]}
`;

const Divider = Styled.View`
    height: 1px;
    background: ${({ theme }) => theme.palette.slate[400]}
`;

const StatusIcon = Styled(Status)`
    margin-right: ${({ theme }) => theme.spacing(2)}px;
`;

const Left = Styled(Text)`
    flex-grow: 1;
    text-transform: lowercase;
`;

const Right = Styled(Text)`
    margin-left: ${({ theme }) => theme.spacing(2)}px;
    text-transform: lowercase;
`;

module.exports = function List({ items, onPress }) {

    return (
        <Container>
            {items.map((item, index) => {

                const { status, left, right } = item;

                return (
                    <React.Fragment key={item.id || index}>
                        <ListItem onPress={() => onPress(item)}>
                            <StatusIcon level={status} />
                            <Left>{left}</Left>
                            <Right>{right}</Right>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                );
            })}
        </Container>
    );
};

module.exports.propTypes = {
    items: T.array,
    onPress: T.func
};

module.exports.defaultProps = {
    items: [],
    onPress: () => {}
};
