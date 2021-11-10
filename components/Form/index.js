const { useState, useRef, useEffect, ...React } = require('react');
const T = require('prop-types');
const { Animated } = require('react-native');
const { KeyboardAwareScrollView } = require('react-native-keyboard-aware-scroll-view');
const { useSafeAreaInsets } = require('react-native-safe-area-context');
const { default: Styled } = require('styled-components/native');
const { RoundedButton } = require('components/Buttons');
const Theme = require('theme');

const internals = {};

module.exports = function Form({ isDirty, onSubmit, submitLabel, children, disabled, ...props }) {

    const { Container, Spacer, Footer } = internals;

    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const insets = useSafeAreaInsets();

    const footerAnimationRef = useRef(new Animated.Value(insets.bottom + Theme.spacing(8)));

    const footerVisible = !!onSubmit && isDirty;

    useEffect(() => {

        if (footerVisible) {
            Animated.timing(footerAnimationRef.current, {
                toValue: insets.bottom * -1,
                ...Theme.animation.elastic
            }).start();
        }
    }, [footerVisible, isDirty, insets]);

    return (
        <>
            <KeyboardAwareScrollView
                style={{ position: 'relative' }}
                onKeyboardWillShow={() => setIsKeyboardOpen(true)}
                onKeyboardWillHide={() => setIsKeyboardOpen(false)}
            >
                <Container {...props}>
                    {children}
                    <Spacer $hasHeight={footerVisible && !isKeyboardOpen} />
                </Container>
            </KeyboardAwareScrollView>
            {!!onSubmit && (
                <Footer style={{ transform: [{ translateY: footerAnimationRef.current }] }}>
                    <RoundedButton
                        float={!disabled} // hackily fixes a bizarre issue where the button text is shadowed on disabling, when the button turns translucent gray
                        status='info'
                        onPress={onSubmit}
                        disabled={disabled}
                    >
                        {submitLabel}
                    </RoundedButton>
                </Footer>
            )}
        </>
    );
};

module.exports.propTypes = {
    children: T.any.isRequired,
    onSubmit: T.func,
    isDirty: T.bool,
    disabled: T.bool,
    submitLabel: T.string
};

module.exports.defaultProps = {
    isDirty: false,
    disabled: false,
    submitLabel: 'Save Changes'
};

internals.Container = Styled.ScrollView``;

internals.Spacer = Styled.View`
    height: ${({ theme, $hasHeight }) => theme.spacing($hasHeight ? 6 : 2)}px;
`;

internals.Footer = Styled(Animated.View)`
    position: absolute;
    bottom: 0;
    left: ${({ theme }) => theme.spacing(2)}px;
    right: ${({ theme }) => theme.spacing(2)}px;
    background: transparent;
`;
