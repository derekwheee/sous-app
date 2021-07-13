const React = require('react');
const { default: Styled } = require('styled-components/native');
const {
    KeyboardAvoidingView,
    ScrollView,
    Keyboard,
    Platform
} = require('react-native');

const HeaderSpacer = Styled.View`
    background: ${({ theme }) => theme.palette.brand};
    height: ${({ theme }) => theme.spacing(1)}px;
`;

const Scroller = Styled(ScrollView)`
    background: ${({ theme }) => theme.palette.slate[300]};
`;

module.exports = function LayoutHOC(Component) {

    return function Layout(props) {

        return (
            <>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <HeaderSpacer />
                    <Scroller onPress={Keyboard.dismiss}>
                        <Component {...props} />
                    </Scroller>
                </KeyboardAvoidingView>
            </>
        );
    };
};
