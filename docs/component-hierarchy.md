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
* ArtworkIndexContainer
  * ArtworkIndex
  * ArtworkIndexItem
    * Artwork title
    * Artwork artist
    * Artwork image

**ArtworkContainer**
* Artwork
  * Artwork details
  * AnnotationContainer
    * Annotation
    * VotesContainer
      * Votes
  * CommentsContainer
    * Comments
    * VotesContainer
      * Votes

**AnnotationFormContainer**
* AnnotationForm

**CommentFormContainer**
* CommentForm

**ArtworkFormContainer**
* ArtworkForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/artwork/:artwork_id" | "ArtworkContainer" |
| "/new-artwork" | "ArtworkFormContainer" |
