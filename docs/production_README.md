# Genius Clone

[Genius Clone Site](google.com)

[Genius](genius.com)

## Minimum Viable Product

The Genius Clone will be an app that provides artwork with annotations. Users are allowed to upload their own artwork and annotate parts of the artwork, as well as add comments on the work overall.

By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:


* Hosting on Heroku
* New account creation, login, and guest/demo login
* Production README
* Artwork
* Annotations
* Comments
* Upvotes
* Bonus: Search
* Bonus: Draggable box selection
* Bonus: Tags


## Design Docs

* [Wireframes](./wireframes)
* [API Endpoints](./api-endpoints.md)
* [Component Hierarchy](./component-hierarchy.md)
* [Schema](./schema.md)
* [Sample State](./sample-state.md)

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

Objective: Functioning rails project with front-end Authentication

### Phase 2: Artwork Model, API, and components (1.5 days)

Objective: Artwork can be uploaded, viewed, and destroyed through the API.

### Phase 3: Annotations (2.5 days)

Objective: Annotations belong to specific sections of the artwork (either specific points or a dragged box, as a bonus feature). Annotations can be created, read, edited, and destroyed through the API.

### Phase 4: Comments (1 day)

Objective: Comments belong to artwork. Comments can be created, read, and destroyed through the API.

### Phase 5: Up/Down-Votes (1 day)

Objective: Upvotes and downvotes belong to both comments and annotations. A user can give either a upvote or downvote, and the vote total should update.

### Phase 6: Search by Artwork (1 day)

Objective: Ability to search for artwork by keyword.

### Phase 7: Styling, Overall Look, and Seeding (1 day)

Objective: Have an overall connected look and feel for the app. Add all seed data.

### Bonus Features (TBD)

* Tags
* Draggable box to create a comment on an area of the image (vs. just one point)
* Embed videos
