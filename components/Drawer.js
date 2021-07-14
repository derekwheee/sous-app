const { createContext, useState, useCallback, useRef, ...React } = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { Animated, Pressable } = require('react-native');

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Overlay = Styled(AnimatedPressable)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background: ${({ theme }) => theme.palette.slate[100]};
`;

const Container = Styled(Animated.View)`
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    height: 90%;
    max-height: 450px;
    border: 1px solid ${({ theme }) => theme.palette.primary}
    background: ${({ theme }) => theme.palette.slate[100]};
    box-shadow: -5px 5px rgba(0, 0, 0, 0.25);
`;

const DrawerContext = createContext(null);

exports.DrawerContext = DrawerContext;

exports.DrawerProvider = function DrawerProvider({ children }) {

    const [content, setContent] = useState(null);

    const overlayAnim = useRef(new Animated.Value(0)).current;
    const containerAnim = useRef(new Animated.Value(1000)).current;

    const openDrawer = useCallback((content) => {

        setContent(content);

        Animated.timing(overlayAnim, {
            toValue: 0.6,
            duration: 300,
            useNativeDriver: true
        }).start();

        Animated.timing(containerAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }, []);

    const closeDrawer = useCallback(() => {

        Animated.timing(overlayAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();

        Animated.timing(containerAnim, {
            toValue: 1000,
            duration: 300,
            useNativeDriver: true
        }).start();

        setTimeout(() => setContent(null), 300);
    }, []);

    return (
        <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
            {children}

            {content && (
                <>
                    <Overlay style={{ opacity: overlayAnim }} onPress={closeDrawer} />
                    <Container style={{
                        transform: [{ translateY: containerAnim }]
                    }}>
                        {content}
                    </Container>
                </>
            )}
        </DrawerContext.Provider>
    );
};

exports.DrawerProvider.propTypes = {
    children: T.any
};
