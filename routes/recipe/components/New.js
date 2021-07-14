const { useState, ...React } = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { ScrollView } = require('react-native');
const { TextInput } = require('components/FormFields');
const { Link } = require('components/Buttons');
const { PressableImage } = require('components/Image');
const { H4 } = require('components/Type');
const Stat = require('components/Stat');

const Container = Styled.View`
    padding: ${({ theme }) => theme.spacing(2)}px;
`;

const ImportLink = Styled(Link)`
    padding-left: 0;
`;

const Stats = Styled.View`
    flex-direction: row;
    margin: ${({ theme }) => theme.spacing(0, -1)};
    padding: ${({ theme }) => theme.spacing(3, 0)};
`;

const Gallery = Styled(ScrollView)`
    padding: ${({ theme }) => theme.spacing(2, 2)};
`;

const GalleryImage = Styled(PressableImage)`
    width: 100px;
    height: 100px;
    margin-right: 16px;
`;

module.exports = function Recipe({ route }) {

    const [name, setName] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [images, setImages] = useState([
        'https://i.stack.imgur.com/y9DpT.jpg',
        'https://i.stack.imgur.com/y9DpT.jpg',
        'https://i.stack.imgur.com/y9DpT.jpg'
    ]);

    const handleAddImage = () => {

        console.log('Add an image');
    };

    return (
        <Container>
            <TextInput
                autoFocus
                placeholder='name your recipe...'
                variant='header'
                value={name}
                onChangeText={setName}
            />
            <ImportLink
                startAdornment='link'
                textProps={{ align: 'left' }}
            >
                Import a recipe
            </ImportLink>
            <Stats>
                <Stat label='Prep Time' value={prepTime} onChange={setPrepTime} />
                <Stat label='Cook Time' value={cookTime} onChange={setCookTime} />
            </Stats>
            <H4>Photos</H4>
            <Gallery horizontal>
                <GalleryImage
                    source={{ uri: 'https://i.stack.imgur.com/y9DpT.jpg' }}
                    onPress={handleAddImage}
                />
                {images.map((uri, index) => <GalleryImage source={{ uri }} key={index + uri} />)}
            </Gallery>
            <H4>Ingredients</H4>
            <H4>Instructions</H4>
        </Container>
    );
};

module.exports.propTypes = {
    route: T.object.isRequired
};
