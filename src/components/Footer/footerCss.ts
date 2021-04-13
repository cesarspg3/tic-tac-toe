import colors from '../../styles/colors-palette';

export const footerCss = {
    container: {
        boxShadow: `0 -5px 2px -5px ${colors.blackTransparent}`,
        width: '100%',
        height: 100,
        backgroundColor: colors.white,
        borderTop: `1px solid ${colors.grey}`,
        display: 'flex',
        flexDirection: 'row',
        '& > div': {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
        },
        '& > div:first-child': {
            marginLeft: 32,
        },
        '& > div:last-child': {
            flexDirection: 'row-reverse',
            marginRight: 32,
        },
    },
    button: {
        padding: '8px 16px 8px 16px',
        borderRadius: 3,
        fontWeight: 'bold',
        '&:hover': {
            opacity: 0.8,
            cursor: 'pointer',
        },
    },
    nextButton: {
        backgroundColor: colors.darkBlue,
        color: colors.white,
    },
    cancelButton: {
        backgroundColor: colors.white,
        color: colors.darkBlue,
    },
};

export default footerCss;
