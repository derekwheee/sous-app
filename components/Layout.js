const React = require('react');
const { default: Styled } = require('styled-components/native');
const {
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
    Platform
} = require('react-native');
const { useDrawer } = require('../hooks/use-drawer');

const HeaderSpacer = Styled.View`
    background: ${({ theme }) => theme.palette.brand};
    height: ${({ theme }) => theme.spacing(1)}px;
`;

const Scroller = Styled(ScrollView)`
    background: ${({ theme }) => theme.palette.slate[300]};
`;

exports.withLayout = function withLayout(Component) {

    return function Layout(props) {

        const [, closeDrawer] = useDrawer();

        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <HeaderSpacer />
                <Scroller onScrollBeginDrag={() => {

                    Keyboard.dismiss();
                    closeDrawer();
                }}>
                    <Component {...props} />
                </Scroller>
            </KeyboardAvoidingView>
        );
    };
};
