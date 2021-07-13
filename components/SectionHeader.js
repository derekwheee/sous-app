const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { H1 } = require('components/Type');
const { Link } = require('components/Buttons');

const Container = Styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    padding: ${({ theme }) => theme.spacing(3, 2)};
`;

const ActionButton = Styled(Link)`
    padding-right: 0;
`;

const Navigator = Styled.View``;

module.exports = function SectionHeader({ navigatorLabel, navigatorAction, children }) {

    return (
        <Container>
            <H1>{children}</H1>
            {navigatorLabel && (
                <Navigator>
                    <ActionButton
                        adorn
                        onPress={navigatorAction}
                    >{navigatorLabel}</ActionButton>
                </Navigator>
            )}
        </Container>
    );
};

module.exports.propTypes = {
    navigatorLabel: T.string,
    navigatorAction: T.func,
    children: T.any
};
