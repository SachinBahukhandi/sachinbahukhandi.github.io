import React from "react";
import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Portfolio from "./tabs/Portfolio";
import Blog from "./tabs/Blog";
import Contact from "./tabs/Contact";
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
                ||
                navItem == 'portfolio' && <Portfolio active={true}/>
                ||
                navItem == 'blog' && <Blog active={true}/>
                ||
                navItem == 'contact' && <Contact active={true}/>
            }

        </>
    );
};

export default TabbedContent;