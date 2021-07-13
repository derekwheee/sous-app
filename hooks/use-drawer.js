const { useContext } = require('react');
const { DrawerContext } = require('components/Drawer');

exports.useDrawer = function useDrawer() {

    const { openDrawer, closeDrawer } = useContext(DrawerContext);

    return [openDrawer, closeDrawer];
};
