import colors from '../../styles/colors-palette';

const inputCss = {
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 70,
        marginBottom: 16,
    },
    title: {
        color: colors.darkBlue,
        marginBottom: 6,
    },
    input: {
        padding: '10px 40px 9.5px 12px',
        fontSize: 16,
        maxWidth: '100%',
        border: `1px solid ${colors.ligthGrey}`,
        color: colors.darkBlue,
        borderRadius: 2,
    },
    eye: {
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
        top: -31,
        marginLeft: 0,
    },
    length: {
        color: colors.ligthGrey,
        width: '100%',
        textAlign: 'end',
        fontSize: 12,
        marginTop: 4,
    },
};

export default inputCss;
