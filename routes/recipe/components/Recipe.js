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

    if (!recipe) {
        return null;
    }

    const {
        name,
        cookTime,
        prepTime,
        ingredients = [],
        images = [
            'https://i.stack.imgur.com/y9DpT.jpg',
            'https://i.stack.imgur.com/y9DpT.jpg',
            'https://i.stack.imgur.com/y9DpT.jpg'
        ],
        instructions = []
    } = recipe;

    return <>
        <CooperHeader>{name}</CooperHeader>
        <Stats>
            <Stat label='Prep Time' value={`${prepTime.duration} ${prepTime.unit}`} />
            <Stat label='Cook Time' value={`${cookTime.duration} ${cookTime.unit}`} />
        </Stats>
        <Ingredients>
            <H2>Ingredients</H2>
            <IngredientsList items={ingredients} />
        </Ingredients>
        <Gallery horizontal>
            {images.map((uri, index) => <GalleryImage source={{ uri }} key={index + uri} />)}
        </Gallery>
        <Instructions>
            <H2>Instructions</H2>
            <InstructionsList items={instructions} />
        </Instructions>
    </>;
};

module.exports.propTypes = {
    route: T.object.isRequired
};
