# Genius Clone

[Genius Clone Site](google.com)

[Genius](genius.com)

## Minimum Viable Product

The Genius Clone will be an app that provides music lyrics, poems, and speeches with annotations. Users are allowed to upload their own tracks and annotate/comment the tracks.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:


* Hosting on Heroku
* New account creation, login, and guest/demo login
* Production README
* Tracks
* Annotations
* Comments
* Upvotes
* Bonus: Tags
* Bonus: Search

## Design Docs

* [Wireframes](./wireframes)
* [API Endpoints](./api-endpoints.md)
* [Component Hierarchy](./component-hierarchy.md)
* [Schema](./schema.md)
* [Sample State](./sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

Objective: Functioning rails project with front-end Authentication

### Phase 2: Tracks Model, API, and components (1 days)

Objective: Track lyrics can be created, read, edited, and destroyed through the API.

### Phase 3: Annotations (2 days)

Objective: Annotations belong to sub-sections of tracks (specific sets of lyrics). Annotations can be created, read, edited, and destroyed through the API. Anotations can have child-annotations as well.

### Phase 4: Comments (1 day)

Objective: Comments belong to tracks. Comments can be created, read, edited, and destroyed through the API.

### Phase 5: Up/Down-Votes (1 day)

Objective: Upvotes and downvotes belong to both comments and annotations. A user can give either a upvote or downvote, and the vote total should update.

### Phase 6: Search by Track (1 day)

Objective: Ability to search for tracks by keyword.

### Phase 7: Styling & Overall Look (1 day)

Objective: Have an overall connected look and feel for the app.

### Bonus Features (TBD)

* Tags
* Embed videos
