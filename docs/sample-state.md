{
  session: {
    currentUser: {
      id: 1,
      username: "test-user"
    }
  },
  artwork: {
    1: {
      title: "Wanderer above the Sea of Fog",
      description: "The figure in the painting stands in contemplation of the sea fog.",
      artist: "Caspar David Friedrich",
      user_id: 1,
      year: "1818",
      link: "google.com"
    }
  },
  errors: {
    1: {}
  }
  annotations: {
    1: {
      body: "The fog represents the sublime",
      user_id: 1,
      artwork_id: 1,
      x_pos: 200,
      y_pos: 30,
      total_score: 15
    }
  }
  comments: {
    1: {
      body: "The painting is a self-portrait",
      user_id: 2,
      total_score: 3,
      artwork_id: 1,
    }
  }
  votes: {
    1: {
      user_id: 1,
      annotation_id: 1,
      comment_id: null,
      value: 1
    }
  }
}
