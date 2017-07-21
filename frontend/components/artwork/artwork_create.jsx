import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';

// const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/'+ENV['CLOUD_NAME']+'/upload';
// const UPLOAD_PRESET = $;

class ArtworkCreate extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.state.session.currentUser;
    // console.log(window.cloudinary_options);
    const cloudinaryUploadUrl = 'https://api.cloudinary.com/v1_1/'+window.cloudinary_options.cloud_name+'/upload';
    this.state = {
        title:"",
        description:"",
        artist:"",
        user_id: currentUser.id,
        year:"",
        link:"",
        uploadedFile: null
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.goBack = this.goBack.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(this.cloudinaryUploadUrl)
                        .field('upload_preset', window.cloudinary_options.upload_preset)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          link: response.body.secure_url
        });
      }
    });
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

  render() {
    return (
      <div>
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
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            <li>
              <button className="create-button">Submit</button>
            </li>
          </ul>
        </form>
        <div>
          {this.state.link === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.link} />
          </div>}
        </div>
        <button onClick={this.goBack}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(ArtworkCreate);
