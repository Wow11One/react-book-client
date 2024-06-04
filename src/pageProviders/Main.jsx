import MainPage from 'pages/main';
import React from 'react';

import PageContainer from './components/PageContainer';

const Main = (props) => {
    return (
        <PageContainer>
            <MainPage {...props} />
        </PageContainer>
    );
};

export default Main;
