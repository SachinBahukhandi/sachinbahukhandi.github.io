
import React, { useState } from 'react';
import { INav } from '../types/INav';
import TabButtons from './TabButtons';
import TabbedContent from './TabbedContent';

type Props = {
    navItems: Array<INav>
};

const MainContent: React.FunctionComponent<Props> = ({ navItems }) => {
    const [activeTab, setActiveTab] = useState<number>(0);
    return (
        <div className="main-content">
            {/*
  - #NAVBAR
*/}
            <TabButtons navItems={navItems} activeTab={activeTab} setActiveTab={setActiveTab} />
            <TabbedContent activeTab={activeTab} navItem={navItems[activeTab].name} />

        </div>
    );
};

export default MainContent;