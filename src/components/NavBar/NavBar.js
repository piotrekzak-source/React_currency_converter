
import classes from "./NavBar.css";

const NavBar = (props) => {

    const onClick = (page) => {
        props.setCurrentPage(page);
    }
    return (<nav>
        <ol class="lista">
            <li><button>Tabela</button></li>
            <li><button>Przelicznik</button></li>
            <li><button>Kontakt</button></li>
        </ol>

    </nav>);
}

export default NavBar;