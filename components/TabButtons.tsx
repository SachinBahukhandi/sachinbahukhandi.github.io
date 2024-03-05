import React from "react";
import { INav } from "../types/INav";

type Props = {
    navItems: Array<INav>,
    activeTab: Number,
    setActiveTab: Function
};
const TabButtons: React.FunctionComponent<Props> = ({ navItems, activeTab, setActiveTab }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map((navItem, index) => (
                    <button className={`${index === activeTab && "active"} navbar-link`} data-nav-link="" onClick={() => setActiveTab(index)}>
                        {navItem.name}
                    </button>
                ))}
            </ul>
        </nav>
    );
};

export default TabButtons;