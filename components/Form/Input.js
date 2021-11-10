const React = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');
const { TextInput } = require('react-native');
const { Controller } = require('react-hook-form');
const Label = require('./Label');
const { renderCaption } = require('./helpers');
const { getBaseStyles } = require('components/Type');
const Theme = require('theme');

const internals = {};

module.exports = React.forwardRef(({ name, defaultValue, control, rules, errors, ...props }, ref) => {

    const { StyledInput } = internals;

    return (
        <Controller
            name={name}
            defaultValue={defaultValue}
            control={control}
            rules={rules}
            render={({ field: { onChange, onBlur, value } }) => (

                <StyledInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    caption={() => renderCaption({ name, errors })}
                    ref={ref}
                    {...props}
                />
            )}
        />
    );
});

module.exports.displayName = 'Input';

module.exports.propTypes = {
    name: T.string.isRequired,
    control: T.object.isRequired,
    errors: T.object.isRequired,
    label: T.string.isRequired,
    rules: T.object,
    defaultValue: T.string,
    gutterBottom: T.bool
};

internals.StyledInput = Styled(TextInput).attrs(({ label }) => ({
    label: () => Label({ label }),
    onFocus: ({ currentTarget }) => {

        currentTarget.setNativeProps({
            style: { borderColor: Theme.palette.primary[500] }
        });
    },
    onBlur: ({ currentTarget }) => {

        currentTarget.setNativeProps({
            style: { borderColor: Theme.palette.slate[500] }
        });
    }
}))`
    ${({ theme }) => getBaseStyles(theme)}
    margin-bottom: ${({ theme, gutterBottom }) => (gutterBottom ? theme.spacing(3) : 0)}px;
    padding: ${({ theme }) => theme.spacing(1.5, 3)}
    border: 1px solid ${({ theme }) => theme.palette.slate};
    border-radius: ${({ theme }) => theme.spacing(4)}px;

    ${({ theme, variant }) => {

        if (variant === 'header') {
            return `
                padding: ${theme.spacing(1.5, 0)};
                border-width: 0;
                font-family: 'Poppins_400Regular';
                font-size: ${theme.spacing(4.5)}px;
            `;
        }
    }}
`;
