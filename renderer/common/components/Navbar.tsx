import React from "react";
import Link from "next/link";
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    return (
        <div>
            <style>
                {`
                nav {
                    // position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 60px;
                    background-color: #000;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 1rem;
                }

                .nav-links {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    width: 10%;
                    background-color: transparent;
                }
                `}
            </style>
            <nav>
                <div className="logo">
                    <p>Hey</p>
                </div>
                <div className="nav-links">
                    <Link href="/settings">
                        <SettingsIcon style={{ backgroundColor: 'transparent' }} />
                    </Link>
                    <Link href="/home">
                        <HomeIcon style={{ backgroundColor: 'transparent' }} />
                    </Link>
                </div>

            </nav>
        </div>

    );
}

export default Navbar;