import TheTop from "../Components/TheTop";

export default function Contact() {
    return (
        <div>
            <TheTop />
            <main class="contactMain">
            </main>

            <aside>


                <form class="form">
                    <h2>CONTACT US</h2>
                    <p type="Name:"><input placeholder="Write your name here.."></input></p>
                    <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
                    <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
                    <button>Send Message</button>
                    <div>
                        <span class="fa fa-phone"></span>001 1023 567
                        <span class="fa fa-envelope-o"></span> contact@mod.arch.com
                    </div>
                </form>

            </aside>

        </div>
    );
}