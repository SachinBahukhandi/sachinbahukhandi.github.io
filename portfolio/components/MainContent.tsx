
import React from 'react';

type Props = {

};
const MainContent: React.FunctionComponent<Props> = () => {
    return (
        <>
            <div className="main-content">
                <nav className="navbar">

                    <ul className="navbar-list">

                        <li className="navbar-item">
                            <button className="navbar-link  active" data-nav-link>About</button>
                        </li>

                        <li className="navbar-item">
                            <button className="navbar-link" data-nav-link>Resume</button>
                        </li>

                        <li className="navbar-item">
                            <button className="navbar-link" data-nav-link>Portfolio</button>
                        </li>

                        <li className="navbar-item">
                            <button className="navbar-link" data-nav-link>Blog</button>
                        </li>

                        <li className="navbar-item">
                            <button className="navbar-link" data-nav-link>Contact</button>
                        </li>

                    </ul>
                </nav>
            </div>
        </>
    );
};

export default MainContent;