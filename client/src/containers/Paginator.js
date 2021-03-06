import React, { Component } from "react";
import List from "../components/List";
import Loader from "../components/Loader";

// Sorry for the frankestein monster style function, but is the
// first time that I code a paginator and...
// the next will be better:)
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
      current_page: data.page_number,
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
        <button
          type='button'
          key={num}
          style={{ padding: "0.2em" }}
          onClick={() => this.fetchHttpRequestPage(num)}>
          {num}
        </button>
      );
    });

    const nextPage = () => {
      if (this.state.current_page !== this.state.page_count)
        return this.state.current_page + 1;
      else return this.state.current_page;
    };

    const previousPage = () => {
      if (this.state.current_page !== 1) return this.state.current_page - 1;
      else return this.state.current_page;
    };

    return (
      <div className='container'>
        <blockquote>page {this.state.current_page}</blockquote>
        <ListLoading
          isLoading={this.state.is_loading}
          collection={this.state.collection}
        />
        <div className='container-paging-controls'>
          <span
            className='container-paging-controls-arrow'
            onClick={() => this.fetchHttpRequestPage(previousPage())}>
            &laquo;
          </span>
          <span className='container-paging-controls-numbers'>
            {renderNumbers}
          </span>
          <span
            className='container-paging-controls-arrow'
            onClick={() => this.fetchHttpRequestPage(nextPage())}>
            &raquo;
          </span>
        </div>
      </div>
    );
  }
}

export default Paginator;
