const { useState, ...React } = require('react');
const T = require('prop-types');
const SectionHeader = require('components/SectionHeader');
const List = require('components/List');
const PillMenu = require('components/PillMenu');
const NewPantryItem = require('components/NewPantryItem');
const { recipeToListItem, pantryToListItem } = require('utils/list');
const { useDrawer } = require('../../../hooks/use-drawer');
const { Button } = require('components/Buttons');
const { PaddedView } = require('components/Views');

const internals = {};

const PILLS = [
    {
        label: 'Things I can make'
    },
    {
        label: 'Under 30 minutes'
    },
    {
        label: 'Vegatarian'
    }
];

module.exports = function Home({ recipes, pantry, navigation }) {

    const [activePill, setActivePill] = useState(PILLS[0].label);
    const [openDrawer, closeDrawer] = useDrawer();

    const pillItems = PILLS.map((pill) => {

        return {
            ...pill,
            color: pill.label === activePill ? 'primary' : 'slate',
            onPress: () => setActivePill(pill.label)
        };
    });

    const handleAddPantryItem = (item) => {

        closeDrawer();
        console.log(item);
    }

    const newPantryDrawer = <NewPantryItem
                    autoFocus
                    onSubmit={handleAddPantryItem}
                    onClose={closeDrawer}
                />;

    return <>
        <SectionHeader
            navigatorLabel='See all recipes'
            navigatorAction={() => navigation.navigate('recipes')}
        >
            Recipes
        </SectionHeader>
        {!!recipes.length && (
            <>
                <PillMenu items={pillItems} />

                <List
                    items={recipes.map(recipeToListItem)}
                    onPress={(recipe) => navigation.navigate('recipe', { recipe })}
                />
            </>
        )}
        {!recipes.length && (
            <PaddedView>
                <Button
                    onPress={() => navigation.navigate('recipe/new')}
                >
                    Add your first recipe
                </Button>
            </PaddedView>
        )}
        <SectionHeader
            adornment='plus'
            navigatorLabel='Add items'
            navigatorAction={() => openDrawer(() => newPantryDrawer)}
        >
            Pantry
        </SectionHeader>
        {!!pantry.length && (
            <List items={pantry.map(pantryToListItem)} />
        )}
        {!pantry.length && (
            <PaddedView>
                <Button
                    onPress={() => openDrawer(() => newPantryDrawer)}
                >
                    Add your first ingredient
                </Button>
            </PaddedView>
        )}
    </>;
};

module.exports.propTypes = {
    navigation: T.shape({
        navigate: T.func.isRequired
    }).isRequired,
    recipes: T.arrayOf(T.object),
    pantry: T.arrayOf(T.object)
};
