import React from "react";
import { Link, Outlet } from "react-router-dom";


const Header = () => {

    const id = 42
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to ="formulaire">toDoList</Link>
                        </li>
                        <li>
                            <Link to ="countertime">Counter</Link>
                        </li>
                        <li>
                            <Link to ="cycle">Cycle</Link>
                        </li>
                        <li>
                            <Link to ="parent">Parent</Link>
                        </li>
                        <li>
                            <Link 
                                to={{ pathname: `article/${id}`}}        
                                state={{ title: 'Page Article 🛍️' }}
                            >
                                Article
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </header>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    )
}

export default Header