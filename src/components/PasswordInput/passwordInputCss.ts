import colors from '../../styles/colors-palette';

const passwordInputCss = {
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 70,
        marginRight: 32,
    },
    title: {
        color: colors.darkBlue,
        marginBottom: 6,
    },
    input: {
        padding: '4px 40px 2px 12px',
        fontSize: 28,
        width: 210,
        border: `1px solid ${colors.ligthGrey}`,
        color: colors.darkBlue,
        borderRadius: 2,
        letterSpacing: 1.5,
    },
    smallSize: {
        padding: '10px 40px 9.5px 12px',
        fontSize: 16,
        letterSpacing: 1,
    },
    eye: {
        width: 25,
        position: 'relative',
        top: -28,
        left: 230,
    },
    showPassword: {
        opacity: 0.6,
    },
    focusLine: {
        width: 55,
        borderTop: `4px solid ${colors.orange}`,
        position: 'relative',
        top: -30,
        marginLeft: 0,
    },
};

export default passwordInputCss;
