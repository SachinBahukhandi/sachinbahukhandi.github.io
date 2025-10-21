
import React, { useState } from 'react';
import { INav } from '../types/INav';
import TabButtons from './TabButtons';
import TabbedContent from './TabbedContent';
import { IPortfolio } from '../types/IPortfolio';

type Props = {
    navItems: Array<INav>,
    portFolioData: IPortfolio
};

const MainContent: React.FunctionComponent<Props> = ({ navItems, portFolioData }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className="main-content">
            {/*
  - #NAVBAR
*/}
            <TabButtons navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabbedContent activeTab={activeTab} navItem={navItems[activeTab].name} portfolioData={portFolioData}/>

        </div>
    );
};

export default MainContent;