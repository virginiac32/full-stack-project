import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class ArtworkCreate extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.state.session.currentUser;
    this.state = {
        title:"",
        description:"",
        artist:"",
        user_id: currentUser.id,
        year:"",
        link:"",
        thumbnail:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.upload = this.upload.bind(this);
    this.showThumbnail = this.showThumbnail.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createArtwork({artwork: this.state})
      .then(data => { this.props.history.push(`/artworks/${data.artwork.id}`);});
  }

  goBack() {
    window.history.back();
  }

  upload(e) {
    e.preventDefault();
    const that = this;
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, results) {
      if (!error) {
        that.setState({link:results[0].secure_url});
        that.setState({thumbnail:results[0].thumbnail_url});
      }
    });
  }

  showThumbnail() {
    if (this.state.thumbnail) {
      return (
        <img className="artwork-thumbnail" src={this.state.thumbnail} alt={this.state.title} />
      );
    }
  }

  render() {
    return (
      <div className="artwork-create">
        <form className="artwork-form" onSubmit={this.handleSubmit}>
          <h1>Add New Artwork</h1>
          <ul className="artwork-form-list">
            <li>
              <label>Title:
                <input className="input" value={this.state.title} onChange={this.update('title')} placeholder="Title of the artwork" />
              </label>
            </li>
            <li>
              <label>Artist:
                <input className="input" value={this.state.body} onChange={this.update('artist')} placeholder="The artist's full name" />
              </label>
            </li>
            <li>
              <label>Date:
                <input className="input" value={this.state.body} onChange={this.update('year')} placeholder="e.g. 1992" />
              </label>
            </li>
            <li>
              <label>Description:
                <textarea rows="6" cols="50" value={this.state.body} onChange={this.update('description')} />
              </label>
            </li>
            <li>
              <button onClick={this.upload}>Upload Artwork</button>
            </li>
            <li>
              <span>Uploaded Artwork: {this.showThumbnail()}</span>
            </li>
            <li>
              <button className="create-button">Submit</button>
            </li>
          </ul>
        </form>
        <button onClick={this.goBack}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ArtworkCreate);
