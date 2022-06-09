import { useLocation } from "react-router";
import "./contact.css";

export default function Contact() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <div class="container-fluid" id="contact">
		    <div class="container">
		        <div class="row">
		            <div class="col-lg-2 left">
		                <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
		            </div>

		            <div class="col-lg-8 offset-lg-1">
		                <h4>Let's get in touch</h4>

		                <form id="form" autocomplete="off" method="post" action="mailto:ishanchadha01@gmail.com">
		                    <div class="firstname">
		                        <input id="firstname" type="text" name="firstname"></input>
		                        <span class="focus-border"></span>
		                        <label class="label" for="firstname">First Name *</label>

		                    </div>

		                    <div class="lastname">
		                        <input id="lastname" type="text" name="lastname"></input>
		                        <span class="focus-border"></span>
		                        <label class="label" for="name">Last Name *</label>

		                    </div>

		                    <div class="email">
		                        <input id="email" type="email" name="email"></input>
		                        <span class="focus-border"></span>
		                        <label class="label" for="email">E-mail *</label>

		                    </div>

		                    <div class="tel">
		                        <input id="phone" type="tel" name="phone"></input>
		                        <span class="focus-border"></span>
		                        <label class="label" for="phone">Telephone</label>

		                    </div>

		                    <div class="subject">
		                        <input id="subject" type="text" name="subject"></input>
		                        <span class="focus-border"></span>
		                        <label class="label" for="subject">Subject *</label>

		                    </div>

		                    <div class="msg">
		                        <textarea id="message" name="message"></textarea>
		                        <span class="focus-border"></span>
		                        <label class="label" for="message">Message *</label>

		                    </div>

		                    <div class="btn-div">
		                        <button type="submit" class="button btn-send">
		                            <i class="fa fa-paper-plane" aria-hidden="true"></i>
		                            Send
		                        </button>
		                    </div>

		                </form>
		            </div>
		        </div>
		    </div>
      </div>
    </>
  );
}