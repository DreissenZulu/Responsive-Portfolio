# Unit 02 CSS and Bootstrap Homework: Responsive Portfolio
Original portfolio, but with a mobile friendly responsive format

## Description
This version of the portfolio is the same as the original, but elements have been adjusted to be responsive, allowing
for easier browsing in a mobile environment.

## Challenges
### Header
The header proved to be the most challenging part of the project. I first decided to use a single row to separate the name block
from the navigation bar, but my problem was having the name block stretch to fit the width of the viewport in mobile mode. I 
struggled with this for a while until I realized my columns were changing too soon, due to using col-lg instead of col-md. My 
final solution required the use of media queries, forcing the header to remove all margins and padding and allowing the name bar
to stretch to fill the empty space. I also used media queries to increase the height to fill the space the navbar wrapped down to.

### Navigation Bar
My second challenge was matching the center formatting of the navbar in the example. The navbar drops down below the name in mobile
mode, centering itself on the screen, and in desktop mode it is justified to the right, flush with the main body content. My solution 
was to have the navbar column fill 12 spaces when the screen size is small, allowing it to wrap the full width. Then, using media 
queries again, I had the navbar fill the width of the screen in mobile mode, and in doing so allowed me to justify content to 
center properly.