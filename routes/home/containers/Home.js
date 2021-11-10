const React = require('react');
const { useEffect } = require('react');
const { createStackNavigator } = require('@react-navigation/stack');
const { useSelector } = require('react-redux');
const { useMiddleEnd } = require('strange-middle-end');
const Home = require('../components/Home');
const { screenOptions } = require('utils/header');

const Stack = createStackNavigator();

module.exports = function HomeContainer(props) {

    const m = useMiddleEnd();
    const token = useSelector(m.selectors.model.getToken);
    const recipes = useSelector(m.selectors.model.getRecipes);

    useEffect(() => {

        m.dispatch.model.register();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {

        if (token) {
            m.dispatch.model.fetchRecipes();
        }
    }, [token, m]);

    const stack = [
        {
            name: 'home',
            component: function HomeScreen() {

                return <Home
                    recipes={recipes}
                    pantry={[]}
                    {...props}
                />;
            }
        }
    ];

    return (
        <Stack.Navigator
            initialRouteName={stack[0].name}
            screenOptions={screenOptions}
        >
            {stack.map(({ name, component }) => (

                <Stack.Screen
                    key={name}
                    name={name}
                >
                    {component}
                </Stack.Screen>
            ))}
        </Stack.Navigator>
    );
};
