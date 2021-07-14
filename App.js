const React = require('react');
const { default: AppLoading } = require('expo-app-loading');
const { StatusBar } = require('expo-status-bar');
const { ThemeProvider } = require('styled-components');
const { NavigationContainer } = require('@react-navigation/native');
const { createStackNavigator } = require('@react-navigation/stack');
const ReactRedux = require('react-redux');
const MiddleEnd = require('strange-middle-end');
const { KeyboardAvoidingView, Platform } = require('react-native');
const Eva = require('@eva-design/eva');
const { ApplicationProvider } = require('@ui-kitten/components');
const M = require('middle-end');
const Theme = require('theme');
const Routes = require('routes');
const { DrawerProvider } = require('components/Drawer');
const { useFonts: useCustomFonts } = require('expo-font');
const {
    useFonts,
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic
} = require('@expo-google-fonts/poppins');

const middleEnd = M.create({
    logErrors: process.env.NODE_ENV !== 'test'
}).initialize();

const Stack = createStackNavigator();

module.exports = function App() {

    const [fontsLoaded] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic
    });

    const [customFontsLoaded] = useCustomFonts({
        Cooper: require('assets/cooper.ttf')
    });

    if (!fontsLoaded || !customFontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={Theme}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{ flex: 1 }}
            >
                <DrawerProvider>
                    <ApplicationProvider {...Eva} theme={{ ...Eva.light, ...Theme }}>
                        <MiddleEnd.Provider middleEnd={middleEnd}>
                            <ReactRedux.Provider store={middleEnd.store}>
                                <NavigationContainer>
                                    <Stack.Navigator
                                        screenOptions={{
                                            headerStyle: {
                                                backgroundColor: Theme.palette.brand[500]
                                            },
                                            headerTitle: 'sous',
                                            headerTitleStyle: {
                                                fontFamily: 'Cooper',
                                                fontSize: Theme.spacing(4.5),
                                                color: Theme.palette.etch[300]
                                            },
                                            headerBackTitle: ''
                                        }}
                                    >
                                        {Routes.map(({ path, component, options }) => {

                                            return (
                                                <Stack.Screen
                                                    key={path}
                                                    name={path}
                                                    component={component}
                                                    options={options}
                                                />
                                            );
                                        })}
                                    </Stack.Navigator>
                                </NavigationContainer>
                                <StatusBar style="auto" />
                            </ReactRedux.Provider>
                        </MiddleEnd.Provider>
                    </ApplicationProvider>
                </DrawerProvider>
            </KeyboardAvoidingView>
        </ThemeProvider>
    );
};
