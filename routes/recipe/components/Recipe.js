const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { ScrollView, Image } = require('react-native');
const CooperHeader = require('components/CooperHeader');
const Stat = require('components/Stat');
const IngredientsList = require('components/IngredientsList');
const InstructionsList = require('components/InstructionsList');
const { H2 } = require('components/Type');

const Stats = Styled.View`
    flex-direction: row;
    padding: ${({ theme }) => theme.spacing(3, 1)};
`;

const Ingredients = Styled.View`
    padding: ${({ theme }) => theme.spacing(0, 2)};
`;

const Gallery = Styled(ScrollView)`
    padding: ${({ theme }) => theme.spacing(2, 2)};
`;

const GalleryImage = Styled(Image)`
    width: 100px;
    height: 100px;
    margin-right: 16px;
`;

const Instructions = Styled.View`
    padding: ${({ theme }) => theme.spacing(2, 2, 0)};
`;

module.exports = function Recipe({ route }) {

    const recipe = route?.params?.recipe;

    const { cookTime, prepTime } = recipe;

    return <>
        <CooperHeader>{recipe.name}</CooperHeader>
        <Stats>
            <Stat label='Prep Time' value={`${prepTime.duration} ${prepTime.unit}`} />
            <Stat label='Cook Time' value={`${cookTime.duration} ${cookTime.unit}`} />
        </Stats>
        <Ingredients>
            <H2>Ingredients</H2>
            <IngredientsList items={recipe.ingredients} />
        </Ingredients>
        <Gallery horizontal>
            {/* TODO: Get images from recipe */}
            <GalleryImage source={{ uri: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' }} />
            <GalleryImage source={{ uri: 'https://images.unsplash.com/photo-1578830610378-23b3b0edef93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=658&q=80' }} />
            <GalleryImage source={{ uri: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }} />
            <GalleryImage source={{ uri: 'https://images.unsplash.com/photo-1590301157172-7ba48dd1c2b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=976&q=80' }} />
            <GalleryImage source={{ uri: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' }} />
        </Gallery>
        <Instructions>
            <H2>Instructions</H2>
            <InstructionsList items={recipe.instructions} />
        </Instructions>
    </>;
};

module.exports.propTypes = {
    route: T.object.isRequired
};
