exports.recipeToListItem = (recipe) => {

    const { name, ingredientsAvailable, ingredientsCount } = recipe;

    const ingredientRatio = recipe.ingredientsAvailable / recipe.ingredientsCount;

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
        right: `${ingredientsAvailable} / ${ingredientsCount}`,
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
