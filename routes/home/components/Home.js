const { useState, ...React } = require('react');
const T = require('prop-types');
const SectionHeader = require('components/SectionHeader');
const List = require('components/List');
const PillMenu = require('components/PillMenu');
const NewPantryItem = require('components/NewPantryItem');
const { RECIPES, PANTRY } = require('utils/mock-data');
const { recipeToListItem, pantryToListItem } = require('utils/list');
const { useDrawer } = require('../../../hooks/use-drawer');

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

module.exports = function Home({ navigation }) {

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

    return <>
        <SectionHeader
            navigatorLabel='See all recipes'
            navigatorAction={() => navigation.navigate('/recipes')}
        >
            Recipes
        </SectionHeader>
        <PillMenu items={pillItems} />
        <List
            items={RECIPES.map(recipeToListItem)}
            onPress={(recipe) => navigation.navigate('/recipe', { recipe })}
        />
        <SectionHeader
            adornment='plus'
            navigatorLabel='Add items'
            navigatorAction={() => openDrawer(() => {

                return (
                    <NewPantryItem
                        autoFocus
                        onSubmit={handleAddPantryItem}
                        onClose={closeDrawer}
                    />
                );
            })}
        >
            Pantry
        </SectionHeader>
        <List items={PANTRY.map(pantryToListItem)} />
    </>;
};

module.exports.propTypes = {
    navigation: T.object.isRequired
};
