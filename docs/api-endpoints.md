# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `GET /api/users`
- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Tracks

- `GET /api/tracks`
- `POST /api/tracks`
- `GET /api/tracks/:track_id`
- `PATCH /api/tracks/:track_id`
- `DELETE /api/tracks/:track_id`

### Annotations
- `GET /api/annotations/:annotation_id`
- `POST /api/:track_id/annotations`
- `PATCH /api/annotations/:annotation_id`
- `DELETE /api/annotations/:annotation_id`

### Comments
- `GET /api/comments/:comment_id`
- `POST /api/tracks/:track_id/comments`
- `POST /api/annotations/:annotation_id/comments`
- `PATCH /api/comments/:comment_id`
- `DELETE /api/comments/:comment_id`

### Votes
- `POST /api/annotations/:annotation_id/votes`
- `POST /api/comments/:comment_id/votes`
- `PATCH /api/votes/:vote_id`
- `DELETE /api/votes/:vote_id`
