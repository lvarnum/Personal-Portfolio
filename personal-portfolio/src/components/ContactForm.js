import React from "react";

function ContactForm() {
    return (
        <div className="container contact bg-dark">
            <div className="row mb-3">
                <div className="col">
                    <h2 className="text-white">- Contact Me -</h2>
                </div>
            </div>
            <form>
                <div className="row mb-3">
                    <div className="col">
                        <label className="text-white">First Name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <div className="col">
                        <label className="text-white">Last Name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="text-white">Email address</label>
                        <input type="email" className="form-control" placeholder="name@example.com" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="text-white">Subject</label>
                        <input type="text" className="form-control" id="email" placeholder="Subject" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <label className="text-white">Message</label>
                        <textarea className="form-control" id="email" placeholder="Message" rows="6" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <button type="submit" className="btn btn-success">Send Message</button>
                    </div>
                </div>
            </form>
            <div className="row email bg-primary">
                <div className="col">
                    <p className="text-white"><i className="fa fa-envelope-o mr-3 mb-3" />laynah.varnum98@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;