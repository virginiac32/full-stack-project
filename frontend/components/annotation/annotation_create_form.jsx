import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class AnnotationCreateForm extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = this.props.state.session.currentUser;
    const currentArtwork = this.props.state.artworks.currentArtwork;
    this.state = {
        body:"",
        total_score:0,
        user_id: currentUser.id,
        artwork_id: currentArtwork,
        x_pos:null,
        y_pos:null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    window.history.back();
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createAnnotation({annotation: this.state})
      .then(data => { this.props.history.push(`/annotations/${data.annotation.id}`);});
  }

  render() {
    return (
      <div className="annotation-create-update">
        <form className="annotation-form" onSubmit={this.handleSubmit}>
          <h1>Annotate</h1>
          <ul className="annotation-form-list">
            <li>
              <input className="input" value={this.state.body} onChange={this.update('body')} placeholder="This aspect of the artwork represents..." />
            </li>
            <li>
              <button className="submit-button">Submit</button>
            </li>
          </ul>
        </form>
        <button onClick={this.goBack}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(AnnotationCreateForm);
