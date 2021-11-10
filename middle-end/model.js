const SecureStore = require('expo-secure-store');
const MiddleEnd = require('strange-middle-end');
const Schema = require('./schema');

const internals = {};

const TYPES = MiddleEnd.createTypes('model', {
    REGISTER: MiddleEnd.type.async,
    FETCH_RECIPES: MiddleEnd.type.async,
    CREATE_RECIPE: MiddleEnd.type.async
});

module.exports = (m) => {

    const { createAction, createReducer, createEntityReducer } = MiddleEnd;

    const entityReducer = createEntityReducer({ schema: Schema });
    const bothReducers = (r1, r2) => {

        return (state, action) => r2(r1(state, action), action);
    };

    return {
        schema: Schema,
        actions: {
            register: createAction(TYPES.REGISTER, {
                index: true,
                async handler(payload) {

                    const existing = await SecureStore.getItemAsync('access_token');

                    if (existing) {
                        return existing;
                    }

                    /** @type {App} */
                    const { client } = m.mods.app;

                    const { data } = await client.post('/register', payload);

                    await SecureStore.setItemAsync('access_token', data);

                    return data;
                }
            }),
            fetchRecipes: createAction(TYPES.FETCH_RECIPES, {
                schema: [Schema.recipe],
                async handler() {

                    /** @type {App} */
                    const { client } = m.mods.app;

                    const { data } = await client.get('/recipes');

                    console.log({ data });

                    return data;
                }
            }),
            createRecipe: createAction(TYPES.CREATE_RECIPE, {
                async handler(recipe) {

                    /** @type {App} */
                    const { client } = m.mods.app;

                    await client.post('/recipes', recipe);
                }
            })
        },
        reducer: bothReducers(entityReducer, createReducer({ mutable: true }, {}, {})),
        selectors: {
            getToken: ({ model }) => {

                const { [TYPES.REGISTER.BASE]: index = {} } = model.indexes;
                const { result = null } = index;

                return result;
            },
            getRecipes: ({ model }) => {

                const { [TYPES.FETCH_RECIPES.BASE]: index } = model.indexes;
                const { recipes } = model.entities;

                return index?.result?.map((id) => recipes[id]) || [];
            }
        }
    };
};
