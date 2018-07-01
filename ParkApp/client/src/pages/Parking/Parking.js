import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Parking extends Component {
  state = {
    parking: [],
    title: "",
    location: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadParking();
  }

  loadParking = () => {
    API.getParking()
      .then(res =>
        this.setState({ parking: res.data, title: "", location: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteParking = id => {
    API.deleteParking(id)
      .then(res => this.loadParking())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.location) {
      API.saveParking({
        title: this.state.title,
        location: this.state.location,
        synopsis: this.state.synopsis,
      })
        .then(res => this.loadParking())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Tell us about a new parking spot.</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="title (required)"
              />
              <Input
                value={this.state.location}
                onChange={this.handleInputChange}
                name="location"
                placeholder="Location (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
            {/*NEEDS  A PULLUP/OPTION BOXES MENU FOR STARS */}          

              <Input
                value={this.state.rating}
                onChange={this.handleInputChange}
                name="rating"
                placeholder="rating (required)"
              />  
              {/*NEEDS  A PULLUP/OPTION BOXES MENU */}          
              <Input
                value={this.state.parkingType}
                onChange={this.handleInputChange}
                name="parkingType"
                placeholder="parkingType (required)"
              />
              <Input
                value={this.state.crossStreet}
                onChange={this.handleInputChange}
                name="crossStreet"
                placeholder="crossStreet (optional)"
              />
              {/*NEEDS  A PULLUP/OPTION BOXES MENU $ $$ $$$*/}          

              <Input
                value={this.state.price}
                onChange={this.handleInputChange}
                name="price"
                placeholder="price (required)"
              />
              <Input
                value={this.state.lighting}
                onChange={this.handleInputChange}
                name="lighting"
                placeholder="lighting (optional)"
              />
              <Input
                value={this.state.businessHours}
                onChange={this.handleInputChange}
                name="businessHours"
                placeholder="businessHours (optional)"
              />
              <Input
                value={this.state.eventPricing}
                onChange={this.handleInputChange}
                name="eventPricing"
                placeholder="eventPricing (optional)"
              />
              <Input
                value={this.state.safety}
                onChange={this.handleInputChange}
                name="safety"
                placeholder="safety (optional)"
              />
              <Input
                value={this.state.zipCode}
                onChange={this.handleInputChange}
                name="zipCode"
                placeholder="zipCode (required)"
              />              
              <FormBtn
                disabled={!(this.state.location && this.state.title && this.state.zipCode && this.state.price)}
                onClick={this.handleFormSubmit}
              >
                Submit Parking
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Parking On My List</h1>
            </Jumbotron>
            {this.state.parking.length ? (
              <List>
                {this.state.parking.map(parking => (
                  <ListItem key={parking._id}>
                    <Link to={"/parking/" + parking._id}>
                      <strong>
                        {parking.title} by {parking.location}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteParking(parking._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Parking;
