import { Link } from "react-router-dom";

export default function Newsletter({ title, subtitle, p1, p2, button }) {
    return (
        <section className="article newsletter">
            <h1>{title}</h1>
            <span>{subtitle}</span>

            <div>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>

            <form action="" className="newsletter_form">

                <div>
                    <label htmlFor="">
                        First Name
                        <input type="text" placeholder="First name" />
                    </label>
                    <label htmlFor="">
                        Email
                        <input type="text" placeholder="Email Address" />
                    </label>
                </div>

                <label htmlFor="">
                    <input type="checkbox" name="" id="" />
                    <p>
                        I agree to receive e-mails from promotions, news and pre-launchs of this artist.
                    </p>
                </label>
                
                <button>Sign Me Up</button>
            </form>
        </section>
    )
}