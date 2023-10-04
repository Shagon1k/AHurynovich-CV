import { useSelector } from 'react-redux';

import { selectSourceCodeUrl } from '@slices/content-config/content-config.selector';

import Footer from './Footer.component';

const FooterContainer: React.FC = () => {
    const sourceCodeUrl = useSelector(selectSourceCodeUrl);

    return <Footer sourceCodeUrl={sourceCodeUrl} />;
};

export default FooterContainer;
