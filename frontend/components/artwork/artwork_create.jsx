import React from 'react';
import {withRouter} from 'react-router-dom';

class ArtworkCreate extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const currentUser = this.props.state.session.currentUser;
    this.state = { artwork:
      {
        title:"",
        description:"",
        artist:"",
        user_id: currentUser.id,
        year:"",
        link:"test"
      }
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({artwork: {[property]: e.target.value}});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.createArtwork(this.state)
      .then(data => this.props.history.push(`/artworks/${data.id}`));
  }

  render() {
    return (
      <form className="artwork-form" onSubmit={this.handleSubmit}>
        <h1>Add New Artwork</h1>
        <ul className="artwork-form-list">
          <li>
            <label>Title:
              <input className="input" value={this.state.title} onChange={this.update('title')} />
            </label>
          </li>
          <li>
            <label>Artist:
              <input className="input" value={this.state.body} onChange={this.update('artist')} />
            </label>
          </li>
          <li>
            <label>Date:
              <input className="input" value={this.state.body} onChange={this.update('year')} />
            </label>
          </li>
          <li>
            <label>Description:
              <input className="input" value={this.state.body} onChange={this.update('description')} />
            </label>
          </li>
          <li>
            <button className="create-button">Submit</button>
          </li>
        </ul>
      </form>
    );
  }
}

export default withRouter(ArtworkCreate);
