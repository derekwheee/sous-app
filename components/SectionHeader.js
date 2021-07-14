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
    padding: ${({ theme }) => theme.spacing(4, 2, 0)};
`;

const ActionButton = Styled(Link)`
    padding-right: 0;
`;

const Navigator = Styled.View`
    position: relative;
    top: -6px;
`;

module.exports = function SectionHeader({ adornment = 'chevron-right', navigatorLabel, navigatorAction, children }) {

    return (
        <Container>
            <H1>{children}</H1>
            {navigatorLabel && (
                <Navigator>
                    <ActionButton
                        endAdornment={adornment}
                        onPress={navigatorAction}
                    >
                        {navigatorLabel}
                    </ActionButton>
                </Navigator>
            )}
        </Container>
    );
};

module.exports.propTypes = {
    adornment: T.string,
    navigatorLabel: T.string,
    navigatorAction: T.func,
    children: T.any
};
