# Component Hierarchy

**Entry** -Root

**Root** App

**App**

**NavBarContainer**
* NavBar
* Search

**AuthFormContainer**
* AuthForm

**HomeContainer**
* Home

**TrackIndexContainer**
* TrackIndex
* TrackIndexItem
  * Track title
  * Track artist
  * Track artwork
  * Link to Track

**TrackContainer**
* Track
  * Track details
  * AnnotationContainer
    * Annotation
    * CommentsContainer
      * Comments
        * VotesContainer
          * Votes
    * VotesContainer
      * Votes

**AnnotationFormContainer**
* AnnotationForm

**CommentFormContainer**
* CommentForm

**TrackFormContainer**
* TrackForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/tracks/:track_id" | "TrackContainer" |
| "/new-track" | "TrackFormContainer" |
