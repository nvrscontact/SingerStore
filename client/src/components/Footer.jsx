import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <section className="footer">
            <ul className="link">
                <li>
                    <Link to="" href="">
                        <img src="/img/youtube.svg" alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="" href="">
                        <img src="/img/spotify.svg" alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="" href="">
                        <img src="/img/tik-tok.svg" alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="" href="">
                        <img src="/img/instagram.svg" alt="" />
                    </Link>
                </li>
                <li>
                    <Link to="" href="">
                        <img src="/img/x.svg" alt="" />
                    </Link>
                </li>
            </ul>

            <nav>
                <details>
                    <summary>Artist <img src="/img/arrowDown.svg" alt="" /> </summary>
                    <ul>
                        <li>
                            <Link to="" href="">Contact</Link>
                        </li>
                        <li>
                            <Link to="" href="">Store</Link>
                        </li>
                        <li>
                            <Link to="" href="">Refunds</Link>
                        </li>
                        <li>
                            <Link to="" href="">Tour</Link>
                        </li>
                    </ul>
                </details>
                <details>
                    <summary>Legal and Privacy <img src="/img/arrowDown.svg" alt="" /> </summary>
                    <ul>
                        <li>
                            <Link to="" href="">Contact</Link>
                        </li>
                        <li>
                            <Link to="" href="">Store</Link>
                        </li>
                        <li>
                            <Link to="" href="">Refunds</Link>
                        </li>
                        <li>
                            <Link to="" href="">Tour</Link>
                        </li>
                    </ul>
                </details>
                <details>
                    <summary>Concerts <img src="/img/arrowDown.svg" alt="" /> </summary>
                    <ul>
                        <li>
                            <Link to="" href="">Contact</Link>
                        </li>
                        <li>
                            <Link to="" href="">Store</Link>
                        </li>
                        <li>
                            <Link to="" href="">Refunds</Link>
                        </li>
                        <li>
                            <Link to="" href="">Tour</Link>
                        </li>
                    </ul>
                </details>
            </nav>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi qui unde ea placeat, voluptatum amet recusandae voluptate tempore doloribus ipsam optio, minima iste repellat ratione. Culpa, provident tempora? Excepturi! </p>
            <p>If you have accessibility or payment issues, contact us as soon as possible!</p>

            <span>© 2025 Artist Surname, LLC. <br /> All Rights Reserved</span>

        </section>
    )
}