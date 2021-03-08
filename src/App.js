import React, { Component } from "react";
import fetchImg from "./service/service";
import Searchbar from "./components/Searchbar";
import Button from "./components/Button";
import ImageGallery from "./components/ImageGallery";
import Modal from "./components/Modal";
import Spinner from "./components/Loader/Loader";

import styles from "./App.module.css";

class App extends Component {
  state = {
    page: 1,
    items: [],
    search: "",
    loading: false,
    totalItems: 0,
    error: null,
    modalImg: "",
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchItems();
    }
  }

  onSubmit = (query) => {
    this.setState({ page: 1, items: [], search: query });
  };

  fetchItems = () => {
    const { search, page } = this.state;
    const options = {
      search,
      page,
    };

    this.setState({ loading: true });
    fetchImg(options)
      .then((data) => {
        this.setState((prevState) => ({
          page: prevState.page + 1,
          items: [...prevState.items, ...data.hits],
          totalItems: data.totalHits,
        }));
      })
      .catch((error) => this.setState({ error }))
      .finally(this.finallyLoading);
  };
  finallyLoading = () => {
    if (this.state.totalItems === 0) {
      alert("Sorry, but  your  request  incorrect");
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    this.setState({ loading: false });
  };

  openModal = (e) => {
    if (e.target.nodeName === "IMG") {
      this.setState(() => ({
        showModal: true,
        modalImg: e.target.dataset.source,
      }));
    }
  };

  closeModal = () => {
    this.setState(() => ({
      showModal: false,
    }));
  };

  render() {
    const { loading, items, totalItems, showModal, modalImg } = this.state;
    const shouldRenderButton =
      items.length >= 12 && items.length !== totalItems && !loading;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery items={items} showModal={this.openModal} />
        {shouldRenderButton && <Button onClick={this.fetchItems} />}
        {loading && <Spinner />}
        {showModal && (
          <Modal onClose={this.closeModal}>
            <img src={modalImg} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
