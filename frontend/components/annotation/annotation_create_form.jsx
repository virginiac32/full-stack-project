import React from 'react';
import {withRouter, Link} from 'react-router-dom';

class AnnotationCreateForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        body:""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //
  // }

  componentWillReceiveProps(nextProps) {
    this.props.fetchAnnotation(nextProps.match.params.annotationId);
    console.log("nextProps",nextProps);
  }



  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  renderSubmit() {
    if (this.props.currentUser === null) {
      return (
        <Link className="login-link" to="/login">Login to Annotate</Link>
      );
    } else {
      return (
        <button className="submit-button">Annotate</button>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const currentUser = this.props.currentUser.id;
    const currentArtwork = this.props.match.params.artworkId;
    this.props.createAnnotation({annotation: {
      body:this.state.body,
      total_score:0,
      user_id: currentUser,
      artwork_id: currentArtwork,
      x_pos:this.props.position[0],
      y_pos:this.props.position[1]
    }});
    this.props.closeAnnotation();
  }

  render() {
    // let style = this.props.style;
    // style[top] = style[top]-($("#annotation-create-update").height()/2);
    //
    return (
      <div style={this.props.style} className="annotation-create-update" id="annotation-create-update">
        <form className="annotation-form" onSubmit={this.handleSubmit}>
          <ul className="annotation-form-list">
            <li className="exit-icon">
              <i className="fa fa-times fa-lg" aria-hidden="true" onClick={this.props.closeAnnotation}></i>
            </li>
            <li>
            <textarea className="comment-form" rows="6"
                ref="comment_body" value={this.state.body}
                onChange={this.update('body')} placeholder="Make an annotation..." />
            </li>
            <li>
              {this.renderSubmit()}
            </li>
          </ul>
        </form>
        <button onClick={this.props.closeAnnotation}>Cancel</button>
      </div>
    );
  }
}

export default withRouter(AnnotationCreateForm);
