exports.RECIPES = [
    {
        id: 1,
        name: 'Avocado Toast',
        ingredientsAvailable: 5,
        prepTime: { duration: 5, unit: 'minutes' },
        cookTime: { duration: 5, unit: 'minutes' },
        ingredients: [
            { id: 1, name: '1 slice thick cut bread', isInStock: false },
            { id: 2, name: '1/2 large ripe avocado', isInStock: false },
            { id: 3, name: '1-2 tsp lemon juice', isInStock: true },
            { id: 4, name: 'kosher salt', isInStock: true },
            { id: 5, name: 'black pepper', isInStock: false }
        ],
        instructions: [
            'Toast the piece of bread until the bread is just golden brown, about 2-3 minutes depending on the thickness of the bread.',
            'For the halved avocado, remove the pit from the avocado and discard. Remove the avocado from the skin and place the avocado flesh into a medium bowl and mash it with a fork and a squeeze of the fresh lemon juice. Season with salt and pepper as needed.',
            'Slather the mashed avocado on top of the toast. Add more salt and pepper is desired and serve immediately.'
        ]
    },
    {
        id: 2,
        name: 'Spaghetti & Meatballs',
        ingredientsAvailable: 3,
        prepTime: { duration: 5, unit: 'minutes' },
        cookTime: { duration: 20, unit: 'minutes' },
        ingredients: [
            { id: 1, name: '1 lb spaghetti', isInStock: false },
            { id: 2, name: '1 jar spaghetti sauce', isInStock: false },
            { id: 3, name: '8 meatballs', isInStock: true }
        ],
        instructions: [
            'Put a large pot of water over high heat and bring to a boil',
            'In a small saucepan heat the spaghetti sauce over low heat',
            'Put the meatballs in the oven'
        ]
    },
    {
        id: 3,
        name: 'Pepperoni Pizza',
        ingredientsAvailable: 3,
        prepTime: { duration: 10, unit: 'minutes' },
        cookTime: { duration: 15, unit: 'minutes' },
        ingredients: [
            { id: 1, name: '1 pizza dough', isInStock: false },
            { id: 2, name: '1 cup marinara sauce', isInStock: false },
            { id: 3, name: '2 cups mozzarella', isInStock: true },
            { id: 4, name: '1 cup pepperoni', isInStock: true }
        ]
    }
];

exports.PANTRY = [
    {
        id: 1,
        name: 'All-Purpose Flour',
        quantity: '300g',
        threshold: 1
    },
    {
        id: 2,
        name: 'Long Grain Rice',
        quantity: '1 lb',
        threshold: 1
    },
    {
        id: 3,
        name: 'Bread',
        quantity: '18 slices',
        threshold: 0.75
    }
];
