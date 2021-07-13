const { createContext, useState, useCallback, ...React } = require('react');
const T = require('prop-types');
const { default: Styled } = require('styled-components/native');

const Container = Styled.View`
    height: ${({ open }) => open ? '300px' : '0'};
    border: 1px solid ${({ theme }) => theme.palette.primary}
    background: ${({ theme }) => theme.palette.slate[100]};
`;

const DrawerContext = createContext(null);

exports.DrawerContext = DrawerContext;

exports.DrawerProvider = function DrawerProvider({ children }) {

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(null);

    const openDrawer = useCallback((content) => {

        setContent(content);
        setOpen(true);
    }, []);

    const closeDrawer = useCallback(() => {

        setOpen(false);
        setContent(null);
    }, []);

    return (
        <DrawerContext.Provider value={{ openDrawer, closeDrawer, open }}>
            {children}

            <Container open={open}>
                {content}
            </Container>
        </DrawerContext.Provider>
    );
};

exports.DrawerProvider.propTypes = {
    children: T.any
};
