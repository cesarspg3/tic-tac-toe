import colors from '../../../styles/colors-palette';

export const boardCss = {
    container: {
        backgroundColor: colors.background,
        width: 450,
        height: 450,
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'center',
    },
    box: {
        width: 150,
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: `5px solid ${colors.borderBoard}`,
        boxSizing: 'border-box',
        fontSize: 100,
        paddingBottom: 20,
        '&:hover': {
            backgroundColor: colors.boxHover,
        },
    },
    machineBox: {
        color: colors.machineBox,
    },
    userBox: {
        color: colors.userBox,
    },
};

export default boardCss;
