{
  session: {
    currentUser: {
      id: 1,
      username: "test-user"
    }
  },
  tracks: {
    1: {
      title: "Sample Track",
      text: "Hey hey hi hi hi hello",
      artist: "Test Artist",
      user_id: 1,
      year: "1992",
      album: "The Best Album"
      type: "Lyric"
    },
    errors: []
  },
  annotations: {
    1: {
      body: "The artist is addressing the listener",
      user_id: 1,
      track_id: 1,
      start_idx: 0,
      end_idx: 8,
      total_score: 15
    }
  }
  comments: {
    1: {
      body: "The artist is actually addressing a third person",
      user_id: 2,
      total_score: -1,
      annotation_id: 1,
    }
  }
}
