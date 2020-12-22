import React, { Component } from "react";
import List from "../components/List";
import Loader from "../components/Loader";
import { Button } from "@material-ui/core";

class Paginator extends Component {
  state = {
    collection: [],
    current_page: 1,
    next_page: null,
    prev_page: null,
    page_count: 1,
    is_loading: false,
  };

  fetchHttpRequestPage = async (page) => {
    this.setState({
      is_loading: true,
    });
    const url = process.env.REACT_APP_BACKEND_API_URL + "feed/?page=";
    let response = await fetch(url + `${page}`);
    const data = await response.json();

    this.setState({
      collection: data.results,
      current_page: data.current_page,
      next_page: data.next_page,
      prev_page: data.previous_page,
      page_count: data.page_count,
      is_loading: false,
    });
  };

  componentDidMount() {
    this.fetchHttpRequestPage(this.state.current_page);
  }

  render() {
    const ListLoading = Loader(List);
    let renderNumbers;

    const pageNumbers = [];
    if (this.state.page_count) {
      for (let index = 1; index <= this.state.page_count; index++) {
        pageNumbers.push(index);
      }
    }

    renderNumbers = pageNumbers.map((num) => {
      return (
        <Button
          key={num}
          style={{ padding: "0.2em" }}
          onClick={() => this.fetchHttpRequestPage(num)}>
          {num}
        </Button>
      );
    });

    return (
      <div className='container'>
        <p>
          <ListLoading
            isLoading={this.state.is_loading}
            collection={this.state.collection}
          />
        </p>
        <div className='commandsContainer'>
          <span onClick={() => this.fetchHttpRequestPage(1)}>&laquo;</span>
          <span style={{ padding: "0.2em 0.2em" }}>{renderNumbers}</span>
          <span
            onClick={() => this.fetchHttpRequestPage(this.state.page_count)}>
            &raquo;
          </span>
        </div>
      </div>
    );
  }
}

export default Paginator;
