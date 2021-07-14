const React = require('react');
const T = require('prop-types');
const SectionHeader = require('components/SectionHeader');
const List = require('components/List');
const { RECIPES } = require('utils/mock-data');
const { recipeToListItem } = require('utils/list');

module.exports = function Recipes({ navigation }) {

    return <>
        <SectionHeader
            endAdornment='plus'
            navigatorLabel='Add recipe'
            navigatorAction={() => navigation.navigate('/recipe/new')}
        >
            Recipes
        </SectionHeader>
        <List
            items={RECIPES.map(recipeToListItem)}
            onPress={(recipe) => navigation.navigate('/recipe', { recipe })}
        />
    </>;
};

module.exports.propTypes = {
    navigation: T.object.isRequired
};
