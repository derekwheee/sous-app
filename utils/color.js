exports.getContrastColor = (color, light, dark) => {

    return color.alter().isLight() ? dark : light;
};
