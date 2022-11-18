import MenuItem from "../MenuItem/MenuItem";
import "./menu.css";

function Menu(props){
    return(<header className="menu-wrapper">
        <nav>
            <ul className="menu">
                <MenuItem
                    text="Home"
                    link="/"
                />
                <MenuItem
                    text="Characters"
                    link="/characters"
                />
                <MenuItem
                    text="Quotes"
                    link="/quotes"
                />
                <MenuItem
                    text="Episodes"
                    link="/episodes"
                />
            </ul>
        </nav>
    </header>

    );
}

export default Menu;