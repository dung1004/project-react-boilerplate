import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <section>
                <div className="tieude">
                <h2>Liên Hệ Với Chúng Tôi</h2>
                </div>
                <form action>
                <div className="form-group">
                    <label htmlFor>Name:</label>
                    <input type="text" placeholder="Họ và tên ..." />
                </div>
                <div className="form-group">
                    <label htmlFor>Email:</label>
                    <input type="mail" placeholder="...@gmail.com" />
                </div>
                <div className="form-group">
                    <label htmlFor>Phone:</label>
                    <input type="number" placeholder="01234567889" />
                </div>
                <button className="btn">Submit</button>
                </form>
            </section>
        );
    }
}

export default Contact;