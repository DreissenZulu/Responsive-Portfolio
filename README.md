# Unit 02 CSS and Bootstrap Homework: Responsive Portfolio
Original portfolio, but with a mobile friendly responsive format

## Description
This version of the portfolio is the same as the original, but elements have been adjusted to be responsive, allowing
for easier browsing in a mobile environment. The goal was to keep the webpage format as close to the original as possible, 
while also allowing the page to look clean in a mobile viewport.

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

I found that I had a major issue with the styling in mobile format. When the screen size got smaller I ended up with empty space beside my 
header, which only showed up sometimes and in certain browsers. In order to consistently remove the space caused by this, I applied a 
margin and padding reset to the media query when the screen width got below 768px. This solved the issue of an empty space beside the header.

### Portfolio Items
The final challenge was in centering the icons on the portfolio page. The ideal was to show two rows of three icons on a full page, two 
icon rows on a tablet, and one column in mobile, with all icons spaced evenly. I opted to use a single row and allow the icons to 
wrap around in individual columns, creating the two row look on desktop. My problem then was to have the icons center themselves in their 
individual columns. Eventually, it was pointed out that I needed a d-flex class on the column itself to allow justify-content-center to work 
properly. This allowed me to apply the flex property properly to the columns, achieving the desired look.