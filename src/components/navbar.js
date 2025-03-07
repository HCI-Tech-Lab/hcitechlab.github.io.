import Link from 'next/link';
import Image from 'next/image';
import { usePathname, userPathname } from 'next/navigation';

const NavBar = () => {
    const path = usePathname();

    return (
        <div className = "container">
            <nav className = "navbar navbar-expand-lg navbar-light px-3 fixed-top bg-white shadow-sm">
                <div style={{ width: "110px"}}>

                </div>
                <Link href = '/' className = 'navbar-brand'>
                    <Image alt = "logo" src = "Logo_White.png" width = {240} height = {60} className = "d-none d-sm-block"/>
                </Link>
                <div>
                    <ul className = "navbar-nav me-auto">
                    {[
                        { path: '/publications', label: 'Publications' },
                        { path: '/team', label: 'Team' },
                        { path: '/courses', label: 'Courses' },
                        { path: '/gallery', label: 'Gallery' },
                        { path: '/contact', label: 'Contact' },
                        { path: '/news', label: 'News' },
                    ].map((item) => (
                    <li className="nav-item" key = {item.path}> <Link href={item.path} className={`nav-link ${path == item.path ? "active" : ""}`}> {item.label} </Link> </li>
                    ))}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;