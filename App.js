const React = require('react');
const ReactRedux = require('react-redux');
const Eva = require('@eva-design/eva');
const MiddleEnd = require('strange-middle-end');
const { ApplicationProvider } = require('@ui-kitten/components');
const { ThemeProvider } = require('styled-components');
const { DrawerProvider } = require('components/Drawer');
const { NavigationContainer } = require('@react-navigation/native');
const { createDrawerNavigator } = require('@react-navigation/drawer');
const { StatusBar } = require('expo-status-bar');
const { default: Constants } = require('expo-constants');
const { default: AppLoading } = require('expo-app-loading');
const M = require('middle-end');
const Theme = require('theme');

const Home = require('routes/home/containers/Home');
const Recipes = require('routes/recipes/containers/Recipes');

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
    apiBaseUrl: Constants.manifest.extra.apiBaseUrl
}).initialize();

const Drawer = createDrawerNavigator();

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
            <DrawerProvider>
                <ApplicationProvider {...Eva} theme={{ ...Eva.light, ...Theme }}>
                    <MiddleEnd.Provider middleEnd={middleEnd}>
                        <ReactRedux.Provider store={middleEnd.store}>
                            <NavigationContainer>
                                <Drawer.Navigator
                                    initialRouteName='Home'
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
                                    <Drawer.Screen
                                        name='home'
                                        component={Home}
                                    />
                                    <Drawer.Screen
                                        name='recipes'
                                        component={Recipes}
                                    />
                                </Drawer.Navigator>
                            </NavigationContainer>
                            <StatusBar style="auto" />
                        </ReactRedux.Provider>
                    </MiddleEnd.Provider>
                </ApplicationProvider>
            </DrawerProvider>
        </ThemeProvider>
    );
};
