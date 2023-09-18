/* eslint-disable react/jsx-key */
/* eslint-disable react-refresh/only-export-components */

import Link from "../Link/Link";


const NAVBAR = () => {
    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/services', name: 'Services', id: 3 },
        { path: '/contact', name: 'Contact', id: 4 },
        { path: '/dashboard', name: 'Dashboard', id: 5 }
      ];
    return (
        <nav>
            <ul className="flex-row md:flex gap-[30px] mt-[20px] ">
            {
                routes.map(Singleroute=> <Link route={Singleroute}></Link> )
            }
            </ul>
        </nav>
    );
};

export default NAVBAR;