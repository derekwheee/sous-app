const React = require('react');
const { useMiddleEnd } = require('strange-middle-end');
const NewRecipe = require('../components/New');

module.exports = function NewRecipeContainer(props) {

    const m = useMiddleEnd();

    return (
        <NewRecipe
            onSubmit={m.dispatch.model.createRecipe}
        />
    );
};
