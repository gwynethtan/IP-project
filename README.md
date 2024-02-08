# Role Models
 
This is for our IP project
 
In Ngee Ann polytechnic, there are students have been struggling 3D modelling or students who are passionate in it. For students who have been struggling in 3D modelling, it is not easy for them to search for solutions online specific to their project. Although they ask their 3D modelling teacher questions, teachers can get busy and is unable to answer their question promptly. For students who are passionate in it, there aren’t much suitable opportunities for them to expand their knowledge in it or may be unable to form a group with sufficient members to join a competition. That is why a platform that can cater to both students’ needs is required to guide them.
 
Role Models is a platform where students can upload their 3d models to ask questions on how to improve it. Students can comment solutions and gain upvotes to win points. Students can join competitions. The points earned can be used to redeem vouchers.
 
With this app features, students are motivated to use this app for their own individual purposes. Students will develop their love and knowledge for 3D modelling.
 
## Design Process
This website is for Immersive Media Ngee Ann polytechnic students. They want to achieve help regarding 3D modelling from other students, challenge their thinking in 3D modelling and want to redeem vouchers with no monetary costs.
 
This app is the best way to achieve that as students can post 3d modelling, join competitions and redeem vouchers according to the points they have earned
 
User stories
- As a student struggling in 3D modelling, I want to post questions and flawed 3D models so that people can find solutions to my problems
 
- As a student who wants to improve, I want to post models so that people can give feedback on it
 
- As a student who enjoys vouchers, I want the app to give me opportunity to claim vouchers so that I can get vouchers
 
- As a student who has a competitive nature, i want the app to have a point and reward system so that I can get acknowledged for my hard work
 
- As a student who wants to challenge their thinking, I want the app to have competition gallery so that I can see what competitions to join.
 
- As a student who has complains for this app, i want the app to have a contact form so that I can communicate to the company on what I can improve on
 
https://www.figma.com/file/6ocN4g1ZqIweOciGRhsZcG/Untitled?type=design&node-id=0-1&mode=design&t=5ui6SeMwQnihTaLW-0
 
## User Design Rationale
 
Primary Colors: Blue and Yellow
> Representing the main colors of NgeeAnn
> Associating RoleModels using yellow and blue will help establish our brand as part of NgeeAnn and further familiarize users as they use it bit by bit.
 
Objective: Minimalistic Design promoting clarity and focus
 
1. Continuous Scrolling Experience
> The continuous scrolling feature in the feed allow users to browse through effortlessly, broadening their search and learning within the 3D space.
 
2. Rounded boxes
> Rounded boxes impart a softer and more elegant aesthetic compared to sharp corners. This design is implemented as it is pleasing to the eyes, making the overall appearance more friendly. Rounded boxes were used extensively including input boxes, navigation and contact information.
 
3. Icons in strokes
> Stroked icons convey simplicity due to its lightweight appearance, a perfect fit for our theme. Their transparent nature allow itself to adapt to various backgrounds without clashing the surrounding elements. Stroked icons are used for our navigation bar, main feed (comment and like button) and lottie animation.
 
4. Using blue as the background instead of yellow
> Using a darker shade like blue instead of yellow provides high contrast and improves legibility. It helps emphasis the visuals and text we are trying to convey. This can be seen in our "Joined" and "Sent" page.
 
## Features
### Existing Features
- Feature 1-allows users to login by filling out login form
 
- Feature 2- allow users to find improvements in their model by posting 3D models using the embedded code
 
- Feature 3-allows to express the usefulness of the question that can help others by liking models. Users can choose to dislike it afterwards.
 
- Feature 4-allow users to give solutions to questions by commenting on 3D models
 
- Feature 5-allow users to vote which commented solution is the most helpful by upvote comments
 
- Feature 6-allow users to find solutions to their models without posting by viewing others 3D models and comments
 
- Feature 7-allow users to find teammates for competitions by posting competitions to join and competition circular photo will be based on difficulty level selected
 
- Feature 8-allow users to stretch their thinking in 3d modelling by joining competitions and gain points from it based on difficulty level as shown in green, orange or red circular photo for the competition.
 
- Feature 9-allow users to get vouchers by redeeming vouchers and deduct points based on it
 
- Feature 10-allow users' hard work to be acknowledged by the given gold, brown or silver border color according to how many points they gain and it will be shown at everywhere which can see the user profile photo
 
- Feature 11-allow users to get additional points (+1,+2,+3) for joining competitions by the border color they have
 
- Feature 12-allow users to complain about the app by filling out the contact form
 
- Feature 13-allow administrator to see responses from contact form by viewing data in restDB
 
### Features Left to Implement
- allow users to post more than once
 
## Technologies Used
 
1. Languages used 
    - HTML
    - CSS
    - Javascript
 
2. Api used
    - [Sketchfab API] (https://docs.sketchfab.com/data-api/v3/index.html)
        - used to get infomation for other people posts, comments, profile photos,title and description to fill up gallery page
 
    - [RestDB] (https://restdb.io/)
        - used to store people's input for contact page
 
## Testing
1. Login form:
    1. Go to the first page shown
    2. Try to submit the form with all inputs valid
 
2. Like post:
    1. Go to the QnA page 
    2. Like a post
    3. Check whether all posts are liked or just that individual post 
    4. Unlike the post 
    5. Check whether all posts are unliked or just that individual post
 
3. Interaction with post comment section:
    1. Go to the QnA page and click one of the post's comment icon 
    2. Check whether border color (if applicable) of profile picture is shown
    3. Click upvote button and check whether did the number of upvote increase
    4. Comment on the post and see whether it appears even after reloading page
 
4. Joining competition:
    1. Go to challenge page and choose a challenge to apply for 
    2. See if it redirects to a verfication page 
    3. Go the reward page and see whether number of points increased 
    4. See if number of points have increased according to challenge difficulty level and border color (if applicable)
 
5. Redeem vouchers:
    1. Go to rewards page
    2. See whether points are shown and whether border color of profile picture is according to the number of points they have
    3. Redeem a voucher and see if the points are deducted 
    4. Check whether for the vouchers they cannot redeem for turn greyish color
 
6. Post models:
    1. Go to the upload page and click QnA
    2. Try to submit empty input and verify whether it is posted 
    3. Try to submit valid input and verify whether it is posted
 
7. Post challenge:
    1. Go to the upload page and click challenge
    2. Try to submit empty input and verify whether it is posted 
    3. Try to submit valid input and verify whether it is posted 
    4. verify whether the difficulty level of input is shown in the color of circular image for the challenge
 
8. Contact form:
    1. Go to the "Get in touch" page
    2. Try to submit the form with all inputs valid and verify that it is stored in restDB
 
The project looks about the same across all different browsers and screen sizes and the functions are all the same.
 
## Credits
 
### Content
- No text content copied
 
### Media
The photos used in this site were obtained from ...
- Close-up of an old black and white soccer ball isolated on a transparent background. Photography, png. Stock Photo. (n.d.). Adobe Stock. https://stock.adobe.com/sg/images/close-up-of-an-old-black-and-white-soccer-ball-isolated-on-a-transparent-background-photography-png/534131506?prev_url=detail&asset_id=534131506

- Login page of NgeeAnn student Image: Log in or sign up to view. (n.d.). https://www.facebook.com/photo/?fbid=771524928344132&set=a.635933798569913

- Nike voucher Image: Redirect notice. (n.d.). https://www.google.com/url?sa=i&url=https%3A%2F%2Fcardtonic.com%2Fread%2F3-things-you-can-do-with-a-nike-gift-card&psig=AOvVaw0GTRmIS9qT8Sil0UXK66s6&ust=1707417822602000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDfop32mYQDFQAAAAAdAAAAABAE

- Grab voucher Image: Redirect notice. (n.d.-b). https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wogi.sg%2Fbuy-gift-cards%2Fgrabgifts-sg&psig=AOvVaw0YykwVuzpViDHkkF0bIWi-&ust=1707417839293000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCODfp532mYQDFQAAAAAdAAAAABAE

- Capitaland voucher image: Redirect notice. (n.d.-c). https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.capitastar.com%2Fsg%2Fen%2Fcapitavoucher%2Fabout-ecapitavoucher.html&psig=AOvVaw1b4I5feqLuG7yD6sZx2sOh&ust=1707417893761000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjVqp72mYQDFQAAAAAdAAAAABAE

- Mcdonalds voucher Image: Redirect notice. (n.d.-d). https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mcdonalds.com.sg%2Fgift-certificates&psig=AOvVaw3VF49mp2UcVaDtlwJ4NTHm&ust=1707417909243000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLD6x5_2mYQDFQAAAAAdAAAAABAE

- NTUC voucher image: Redirect notice. (n.d.-e). https://www.google.com/url?sa=i&url=https%3A%2F%2Fgiftano.com%2Fgift%2Fntuc-fairprice-gift-vouchers-and-cards-online-singapore%2Fntuc-s50-voucher%2F&psig=AOvVaw0LIxOSsUDut6tWB9CyIhn2&ust=1707417961173000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMi_ve3cmoQDFQAAAAAdAAAAABAE

- HYUNDAI – NTU 3D Printing Challenge 2022 for EV IONIQ 5 Image: HYUNDAI – NTU 3D Printing Challenge 2022 for EV IONIQ 5 - DesignSingapore Council. (n.d.). DesignSingapore Council. https://designsingapore.org/events/hyundai-ntu-3d-printing-challenge-2022-for-ev-ioniq-5/

- SUTD 3D printing Design Image: Webmaster, P. (2022, July 22). SUTD 3D Printing and Design Innovation Challenge 2022 - Engineering Product Development (EPD). Engineering Product Development (EPD). https://epd.sutd.edu.sg/news-events/event/competition/sutd-3d-printing-and-design-innovation-challenge-2022/

- 3D Digital Game Art Challenge: 3D Digital Game Art. (n.d.). Worldskills SG. https://www.worldskills.sg/skills/skill-areas/3d-digital-game-art

- AISG-SLA Visual Localisation Challenge: Halim. (2023, October 27). AISG-SLA Visual Localisation Challenge - AI Singapore. AI Singapore. https://aisingapore.org/technology/prize-based-challenges/aisg-sla-visual-localisation-challenge/
 
### Acknowledgements
 
- I receive inspiration from art station and reddit.
