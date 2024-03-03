import React from "react";
import { INav } from "../types/INav";

type Props = {
    navItems: Array<INav>
};
const NavBar: React.FunctionComponent<Props> = ({ navItems }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                {navItems.map((navItem, index) => (
                    <button className={`navbar-link ${index==0? 'active': ''}`} data-nav-link="">
                        {navItem.name}
                    </button>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;