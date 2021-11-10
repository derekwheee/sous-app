const React = require('react');
const { useState } = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components');
const { useForm } = require('react-hook-form');
const { PaddedView } = require('components/Views');
const Form = require('components/Form');
const Input = require('components/Form/Input');
const { Link } = require('components/Buttons');
const { H4 } = require('components/Type');
const { PressableImage } = require('components/Image');

const ImportLink = Styled(Link)`
    padding-left: 0;
`;

const Stats = Styled.View`
    flex-direction: row;
    margin: ${({ theme }) => theme.spacing(0, -1)};
    padding: ${({ theme }) => theme.spacing(3, 0)};
`;

const Gallery = Styled.ScrollView`
    padding: ${({ theme }) => theme.spacing(2, 2)};
`;

const GalleryImage = Styled(PressableImage)`
    width: 100px;
    height: 100px;
    margin-right: 16px;
`;

module.exports = function NewRecipe({ onSubmit }) {

    const { control, handleSubmit, formState: { isDirty, errors, isSubmitting } } = useForm();
    const fieldProps = { control, errors };

    const [images, setImages] = useState([
        'https://i.stack.imgur.com/y9DpT.jpg',
        'https://i.stack.imgur.com/y9DpT.jpg',
        'https://i.stack.imgur.com/y9DpT.jpg'
    ]);

    const handleAddImage = () => {

        console.log('Add an image');
    };

    return (
        <Form
            isDirty={isDirty}
            onSubmit={handleSubmit(onSubmit)}
            disabled={isSubmitting}
        >
            <PaddedView gutterTop>
                <Input
                    variant='header'
                    name='name'
                    placeholder='name your recipe...'
                    rules={{ required: true }}
                    {...fieldProps}
                />
                <ImportLink
                    startAdornment='link'
                    textProps={{ align: 'left' }}
                >
                    Import a recipe
                </ImportLink>
                <Stats>
                    {/* <Stat label='Prep Time' value={prepTime} onChange={setPrepTime} />
                    <Stat label='Cook Time' value={cookTime} onChange={setCookTime} /> */}
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
            </PaddedView>
        </Form>
    );
};

module.exports.propTypes = {
    onSubmit: T.func.isRequired
};
