import { Link, Outlet } from "react-router-dom";
import './estilo.css';

function Layout() {
    return (
        <div>
            
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/lista">Lista</Link>
                    </li>

                    <li>
                        <Link to="/imagens">Imagem</Link>
                    </li>

                    <li>
                        <Link to="/automovel">Automóvel</Link>
                    </li>

                    <li>
                        <Link to="/api">Api</Link>
                    </li>
                </ul>
            </nav>
           
            <Outlet />
        </div>
    );
}

export default Layout;