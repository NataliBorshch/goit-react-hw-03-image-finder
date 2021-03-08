import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleInput = (e) => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };
  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleInput}
          />
          <button className={styles.search_button} type="submit"></button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
