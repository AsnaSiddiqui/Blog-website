import Main from "../components/main";
import Footer from "../components/footer";


export default function Contact(){
    return(
 
        <div className="">
            <Main/>

        <div className="contact scale-up-center">
        <div className="container1">
            <h1>Get In Touch</h1>
            <p>Have a question, suggestion, or just want to say hello? I’d love to hear from you! Whether you’re curious about a destination, 
               have feedback on the blog, or want to collaborate, feel free to reach out. Your thoughts and ideas are always welcome!</p>

             <h2>Share Your Layover Story</h2>
             <p>I'm always eager to hear about your own travel experiences, especially those short, memorable layovers! 
                If you've had a great layover adventure or have tips you'd like to share with the Layover community, 
                drop me a message. Who knows, it might even get featured in an upcoming blog post!</p>  
        </div>
        
        <div className="container2">
            <h1>Contact</h1>

            <div className="form">

                <div className="lab">
                <label htmlFor="firstname">First name:</label>
                <br />
                <input type="text" id="firstname" placeholder="Enter your first name" required />

                <br />

                <label htmlFor="lastname">Last name </label>
                <br />
                <input type="text" id="lastname" placeholder="Enter your last name" required />

                <br />

                <label htmlFor="gmail"> Gmail:</label>
                <br />
                <input type="Gmail" id="gmail" placeholder="Enter your gmail" required />

                <br />

                <label htmlFor="phone"> Phone:</label>
                <br />
                <input type="number" id="phone" placeholder="Enter your number" required />

                <br />

                <label htmlFor="message"> Type your message:</label>
                <br />
                <textarea name="" id="message" rows={3} cols={30}></textarea>

                <br />

                <div className="sendd">
                <button className="send" type="submit">Send</button>

               </div>

                </div>
        
        </div>
        </div>
        </div>
        <Footer/>
        </div>

    )
}