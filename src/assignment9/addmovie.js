import React, { Component } from 'react';

class Addmovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MovieId: '',
      MovieName: '',
      LeadActor: '',
      LeadActress: '',
      YearofRelease: '',
      Language: '',
      Collections: '',
    };
    this.handleMovieId = this.handleMovieId.bind(this);
    this.handleMovieName = this.handleMovieName.bind(this);
    this.handleLeadActor = this.handleLeadActor.bind(this);
    this.handleLeadActress = this.handleLeadActress.bind(this);
    this.handleYearofRelease = this.handleYearofRelease.bind(this);
    this.handleLanguage = this.handleLanguage.bind(this);
    this.handleCollections = this.handleCollections.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const {
      MovieId,
      MovieName,
      LeadActor,
      LeadActress,
      YearofRelease,
      Language,
      Collections,
    } = this.state;
    event.preventDefault();

    this.props.parentCallback({
      MovieId: MovieId,
      MovieName: MovieName,
      LeadActor: LeadActor,
      LeadActress: LeadActress,
      YearofRelease: YearofRelease,
      Language: Language,
      Collections: Collections,
    });
  }

  handleMovieId(event) {
    this.setState({
      MovieId: event.target.value,
    });
  }
  handleMovieName(event) {
    this.setState({
      MovieName: event.target.value,
    });
  }
  handleLeadActor(event) {
    this.setState({
      LeadActor: event.target.value,
    });
  }
  handleLeadActress(event) {
    this.setState({
      LeadActress: event.target.value,
    });
  }
  handleYearofRelease(event) {
    this.setState({
      YearofRelease: event.target.value,
    });
  }
  handleLanguage(event) {
    this.setState({
      Language: event.target.value,
    });
  }
  handleCollections(event) {
    this.setState({
      Collections: event.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Movie Id </label>
          <input
            name="MovieId"
            value={this.state.MovieId}
            onChange={this.handleMovieId}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Movie Name</label>
          <input
            name="MovieName"
            value={this.state.MovieName}
            onChange={this.handleMovieName}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Lead Actor</label>
          <input
            name="LeadActor"
            value={this.state.LeadActor}
            onChange={this.handleLeadActor}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Lead Actress</label>
          <input
            name="LeadActress"
            value={this.state.LeadActress}
            onChange={this.handleLeadActress}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Year of Release</label>
          <input
            name="YearofRelease"
            value={this.state.YearofRelease}
            onChange={this.handleYearofRelease}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Language</label>
          <input
            name="Language"
            value={this.state.Language}
            onChange={this.handleLanguage}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <label>Collections</label>
          <input
            name="Collections"
            value={this.state.Collections}
            onChange={this.handleCollections}
          />
          <br></br>
          <br></br>
        </div>
        <div>
          <button>Add Movie</button>
        </div>
      </form>
    );
  }
}

export default Addmovie;
