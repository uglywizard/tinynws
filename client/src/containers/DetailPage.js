import Card from "../components/Card";
import React, { Component } from "react";

class DetailPage extends Component {
  state = {
    id: this.props.match.params.id,
    goBack: this.props.history.goBack,
    item: {},
  };

  fetchHttpRequestDetail = async (id) => {
    const url = process.env.REACT_APP_BACKEND_API_URL;
    let response = await fetch(url + `detail/${id}`);
    const data = await response.json();

    this.setState({
      item: data,
    });
  };

  componentDidMount() {
    this.fetchHttpRequestDetail(this.state.id);
  }

  render() {
    return (
      <div className="container-card-detail">
        <Card item={this.state.item}>
          <p name="estimated-diameter">
            <b>Estimated diameter:</b> {this.state.item.estimated_diameter_min}{" "}
            km - {this.state.item.estimated_diameter_max} km
          </p>
          <p name="relative-velocity">
            <b>Relative velocity:</b> {this.state.item.relative_velocity} km/h
          </p>
          <p name="url">
            <b>Url:</b>{" "}
            <a name="nasa-api-url" href={this.state.item.nasa_jpl_url}>
              {this.state.item.nasa_jpl_url}
            </a>
          </p>
        </Card>
        <button
          className='back-button'
          type='button'
          variant='contained'
          color='primary'
          onClick={() => this.state.goBack()}>
          Back
        </button>
      </div>
    );
  }
}

export default DetailPage;
