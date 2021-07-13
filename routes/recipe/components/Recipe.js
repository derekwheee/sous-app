const React = require('react');
const T = require('prop-types');
const SectionHeader = require('components/SectionHeader');

module.exports = function Recipe({ navigation, route }) {

    const recipe = route?.params?.recipe;

    return <>
        <SectionHeader>{recipe.left}</SectionHeader>
    </>;
};

module.exports.propTypes = {
    navigation: T.object.isRequired,
    route: T.object.isRequired
};
