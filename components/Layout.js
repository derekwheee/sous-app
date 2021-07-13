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

module.exports = function LayoutHOC(Component) {

    return function Layout(props) {

        return (
            <>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <HeaderSpacer />
                    <ScrollView onPress={Keyboard.dismiss}>
                        <Component {...props} />
                    </ScrollView>
                </KeyboardAvoidingView>
            </>
        );
    };
};
