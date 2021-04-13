import colors from '../../styles/colors-palette';

const progressBarCss = {
    container: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        backgroundColor: colors.ligthGrey,
    },
    ball: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        backgroundColor: colors.ligthBlue,
        color: colors.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        width: 30,
        height: 3,
        backgroundColor: colors.ligthBlue,
    },
    focusedBall: {
        backgroundColor: colors.darkBlue,
        boxShadow: `0 1px 7px 2px ${colors.blackTransparent}`,
        width: 38,
        height: 38,
    },
    anteriorStep: {
        backgroundColor: colors.red,
    },
    triangle: {
        width: 0,
        height: 0,
        borderRight: '15px solid transparent',
        borderLeft: '15px solid transparent',
        borderBottom: `13px solid ${colors.white}`,
        position: 'relative',
        top: 34,
        right: 33,
        marginRight: -30,
    },
};

export default progressBarCss;
