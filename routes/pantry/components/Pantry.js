const React = require('react');
const T = require('prop-types');
const SectionHeader = require('components/SectionHeader');
const List = require('components/List');
const NewPantryItem = require('components/NewPantryItem');
const { pantryToListItem } = require('utils/list');
const { PANTRY } = require('utils/mock-data');
const { useDrawer } = require('../../../hooks/use-drawer');

module.exports = function Pantry({ navigation }) {

    const [openDrawer, closeDrawer] = useDrawer();

    const handleAddPantryItem = (item) => {

        closeDrawer();
        console.log(item);
    };

    return <>
        <SectionHeader
            endAdornment='plus'
            navigatorLabel='Add items'
            navigatorAction={() => {

                return openDrawer(() => {

                    return (
                        <NewPantryItem
                            onSubmit={handleAddPantryItem}
                            onClose={closeDrawer}
                        />
                    );
                });
            }}
        >
            Pantry
        </SectionHeader>
        <List items={PANTRY.map(pantryToListItem)} />
    </>;
};

module.exports.propTypes = {
    navigation: T.object.isRequired
};
