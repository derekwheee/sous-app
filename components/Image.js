const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { Image } = require('react-native');

const Container = Styled.Pressable``;

exports.PressableImage = function PressableImage({ source, style, ...props }) {

    return (
        <Container {...props}>
            <Image source={source} style={style} />
        </Container>
    );
};

exports.PressableImage.propTypes = {
    source: T.any.isRequired,
    style: T.array
};
