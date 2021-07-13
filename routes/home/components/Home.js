const React = require('react');
const T = require('prop-types');
const SectionHeader = require('components/SectionHeader');
const List = require('components/List');

const RECIPES = [
    {
        status: 'success',
        left: 'Avocado Toast',
        right: '12 / 12'
    },
    {
        status: 'success',
        left: 'Spaghetti & Meatballs',
        right: '12 / 12'
    },
    {
        status: 'success',
        left: 'Spaghetti & Meatballs',
        right: '3 / 3'
    },
    {
        status: 'warning',
        left: 'Spaghetti & Meatballs',
        right: '2 / 3'
    },
    {
        left: 'Spaghetti & Meatballs',
        right: '0 / 3'
    }
];

const PANTRY = [
    {
        status: 'success',
        left: 'All-Purpose Flour',
        right: '300g'
    },
    {
        status: 'success',
        left: 'All-Purpose Flour',
        right: '300g'
    },
    {
        status: 'warning',
        left: 'All-Purpose Flour',
        right: '300g'
    },
    {
        left: 'All-Purpose Flour',
        right: '300g'
    },
    {
        left: 'All-Purpose Flour',
        right: '300g'
    }
];

module.exports = function Home({ navigation }) {

    return <>
        <SectionHeader
            navigatorLabel='See all recipes'
            navigatorAction={() => {}}
        >
            Recipes
        </SectionHeader>
        <List items={RECIPES} />
        <SectionHeader
            navigatorLabel='Add items'
            navigatorAction={() => {}}
        >
            Pantry
        </SectionHeader>
        <List items={PANTRY} />
    </>;
};

module.exports.propTypes = {
    navigation: T.object.isRequired
};
