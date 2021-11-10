const React = require('react');
const T = require('prop-types');
const Caption = require('./Caption');

const internals = {};

exports.renderCaption = function renderCaption({ name, errors }) {

    return (
        <>
            {!!errors[name] && (
                <Caption status='danger'>{internals.getMessageFromError(errors[name])}</Caption>
            )}
        </>
    );
};

exports.renderCaption.propTypes = {
    name: T.string.isRequired,
    errors: T.object.isRequired
};

internals.getMessageFromError = (error) => {

    if (error.message) {
        return error.message;
    }

    if (error.type === 'required') {
        return `${error.ref.name} is required`;
    }
};
