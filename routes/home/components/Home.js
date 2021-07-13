const React = require('react');
const T = require('prop-types');
const SectionHeader = require('components/SectionHeader');

module.exports = function Home({ navigation }) {

    return <>
        <SectionHeader
            navigatorLabel='See all recipes'
            navigatorAction={() => {}}
        >
            Recipes
        </SectionHeader>
    </>;
};

module.exports.propTypes = {
    navigation: T.object.isRequired
};
