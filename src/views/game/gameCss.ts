import colors from '../../styles/colors-palette';

export const gameCss = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },
    restartBtm: {
        padding: '15px 35px',
        cursor: 'pointer',
        border: `solid 2px ${colors.borderBoard}`,
        borderRadius: 15,
        marginTop: 50,
        color: colors.fontColor,
        fontWeight: 'bold',
        '&:hover': {
            opacity: 0.5,
        },
    },
};

export default gameCss;
