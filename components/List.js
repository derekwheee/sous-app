const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const Status = require('components/Status');
const { Text } = require('components/Type');

const Container = Styled.View``;

const ListItem = Styled.View`
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

module.exports = function List({ items = [] }) {

    return (
        <Container>
            {items.map(({ status, left, right }) => {

                return (
                    <>
                        <ListItem>
                            <StatusIcon level={status} />
                            <Left>{left}</Left>
                            <Right>{right}</Right>
                        </ListItem>
                        <Divider />
                    </>
                );
            })}
        </Container>
    );
};

module.exports.propTypes = {
    items: T.array
};
