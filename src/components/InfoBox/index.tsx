import React from 'react';
import { createUseStyles } from 'react-jss';
import ProgressBar from '../ProgressBar';
import { useSelector } from 'react-redux';
import { State } from '../../redux/models';
import Loading from '../Loading';
import Footer from '../Footer';
import infoBoxCss from './infoBoxCss';

const useStyles = createUseStyles(infoBoxCss);

type InfoBoxProps = {
    children: React.ReactNode;
    handleNext?: Function;
    navigate?: boolean;
};

const InfoBox: React.FC<InfoBoxProps> = ({ children, handleNext, navigate }) => {
    const { loading = false, device } = useSelector((state: State) => state.app);
    const classes = useStyles({ device });

    return (
        <>
            <ProgressBar />
            <div className={classes.seaparator}></div>
            <div className={classes.container}>
                <div>{children}</div>
            </div>
            <Footer onClick={handleNext} navigate={navigate} />
            {loading && <Loading />}
        </>
    );
};

export default InfoBox;
