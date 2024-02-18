import React, { Component } from "react";
import "./App.css";

class App extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, message } = event.target.elements;
    console.log("Email submitted:", email.value);
    console.log("Message submitted:", message.value);
    email.value = "";
    message.value = "";
  };

  render() {
    return (
      <div className="container">
        <div className="content">
          <h1>Welcome to Joy World School</h1>
          <p>Explore the world of knowledge and joy!.....</p>
          <div className="links">
            <form onSubmit={this.handleSubmit}>
              <label>Email:</label>
              <input type="email" name="email" placeholder="Enter your email" className="email-input" required />
              <br />
              <label>Message:</label>
              <textarea name="message" rows="4" placeholder="Enter your message" className="message-input" required></textarea>
              <br />
              <button type="submit" className="enter-button"><h1>Submit</h1></button>
            </form>{" "}
            <br />
          </div>
          <button className="explore-button">
            <h1>Explore</h1>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
