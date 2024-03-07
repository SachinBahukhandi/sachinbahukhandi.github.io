import React from "react";
import About from "./tabs/About";
import Resume from "./tabs/Resume";
type Props = {
    activeTab: Number,
    navItem: String
};
const TabbedContent: React.FunctionComponent<Props> = ({ activeTab, navItem }) => {
    navItem = navItem.toLowerCase();
    return (
        <>
            {
                navItem == 'about' && <About active={true}/>
                ||
                navItem == 'resume' && <Resume active={true}/>
            }

        </>
    );
};

export default TabbedContent;