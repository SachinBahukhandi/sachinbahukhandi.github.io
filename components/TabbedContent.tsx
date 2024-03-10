import React from "react";
import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Portfolio from "./tabs/Portfolio";
import Blog from "./tabs/Blog";
import Contact from "./tabs/Contact";
import { IPortfolio } from "../types/IPortfolio";
type Props = {
    activeTab: Number,
    navItem: string,
    portfolioData: IPortfolio
};
const TabbedContent: React.FunctionComponent<Props> = ({ activeTab, navItem, portfolioData }) => {
    navItem = navItem.toLowerCase();
    return (
        <>
            {
                navItem == 'about' && <About active={true} data={portfolioData[navItem]}/>
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