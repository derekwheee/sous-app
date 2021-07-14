exports.recipeToListItem = (recipe) => {

    const { name, ingredientsAvailable, ingredients } = recipe;

    const ingredientRatio = ingredientsAvailable / ingredients.length;

    let status = null;

    if (ingredientRatio >= 0.75) {
        status = 'warning';
    }

    if (ingredientRatio >= 0.9) {
        status = 'success';
    }

    return {
        status,
        left: name,
        right: `${ingredientsAvailable} / ${ingredients.length}`,
        ...recipe
    };
};

exports.pantryToListItem = (pantry) => {

    const { name, quantity, threshold } = pantry;

    let status = null;

    if (threshold >= 0.75) {
        status = 'warning';
    }

    if (threshold >= 0.9) {
        status = 'success';
    }

    return {
        status,
        left: name,
        right: quantity,
        ...pantry
    };
};
