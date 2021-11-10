const React = require('react');
const { useEffect } = require('react');
const { createStackNavigator } = require('@react-navigation/stack');
const { useSelector } = require('react-redux');
const { useMiddleEnd } = require('strange-middle-end');
const Recipes = require('../components/Recipes');
const NewRecipe = require('../containers/New');
const { screenOptions } = require('utils/header');

const Stack = createStackNavigator();

module.exports = function HomeContainer(props) {

    const m = useMiddleEnd();
    const recipes = useSelector(m.selectors.model.getRecipes);

    useEffect(() => {

        m.dispatch.model.fetchRecipes();
    }, [m]);

    const stack = [
        {
            name: 'recipes',
            component: function RecipesScreen() {

                return <Recipes
                    recipes={recipes}
                    {...props}
                />;
            }
        },
        {
            name: 'recipes/new',
            component: function NewRecipeScreen() {

                return <NewRecipe
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
