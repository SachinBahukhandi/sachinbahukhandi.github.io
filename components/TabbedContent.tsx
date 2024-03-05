import React from "react";
import About from "./tabs/About";
type Props = {
    activeTab: Number,
    navItem: String
};
const TabbedContent: React.FunctionComponent<Props> = ({ activeTab, navItem }) => {

    return (
        <>
            {
                navItem == 'about' && <About active={true} />

                ||
                navItem && <p>navItem</p>

            }
        </>
    );
};

export default TabbedContent;