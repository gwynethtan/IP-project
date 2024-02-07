# Your Project's Name

In Ngee Ann polytechnic, there are students have been struggling 3D modelling or students who are passionate in it. For students who have been struggling in 3D modelling, it is not easy for them to search for solutions online specific to their project. Although they ask their 3D modelling teacher questions, teachers can get busy and is unable to answer their question promptly. For students who are passionate in it, there aren’t much suitable opportunities for them to expand their knowledge in it or may be unable to form a group with sufficient members to join a competition. That is why a platform that can cater to both students’ needs is required to guide them. 

Role Models is a platform where students can upload their 3d models to ask questions on how to improve it. Students can comment solutions and gain upvotes to win points. Students can join competitions. The points earned can be used to redeem vouchers. 

With this app features, students are motivated to use this app for their own individual purposes. Students will develop their love and knowledge for 3D modelling. 

## Design Process
 
This website is for Immersive Media Ngee Ann polytechnic students. They want to achieve help regarding 3D modelling from other students,challenge their thinking in 3D modelling and want to redeem vouchers with no monetory costs. 

This app is the best way to achieve that as students can post 3d modelling, join competitions and redeem vouchers according to the points they have earned

User stories
-As a student struggling in 3D modelling, I want to post questions and flawed 3D models so that people can find solutions to my problems 

-As a student who wants to improve, I want to post models so that people can give feedback on it 

-As a student who enjoys vouchers, I want the app to give me opportunity to claim vouchers so that I can get vouchers 

-As a student who has a competitve nature, i want the app to have a point and reward system so that I can get acknowledged for my hard work 

-As a student who wants to challenge their thinking, I want the app to have competition gallery so that I can see what competitions to join. 

-As a student who has complains for this app, i want the app to have a contact form so that I can communicate to the company on what I can improve on 

https://www.figma.com/file/6ocN4g1ZqIweOciGRhsZcG/Untitled?type=design&node-id=0-1&mode=design&t=5ui6SeMwQnihTaLW-0

## Features
 
### Existing Features
- Feature 1-allows users to login by filling out login form 

- Feature 2- allow users to find improvements in their model by posting 3D models using the embedded code 

- Feature 3-allows to express the usefulness of the question that can help others by liking models. Users can choose to dislike it afterwards.

- Feature 4-allow users to give solutions to questions by commenting on 3D models 

- Feature 5-allow users to vote which commented solution is the most helpful by upvote comments

- Feature 6-allow users to find solutions to their models without posting by viewing others 3D models and comments 

- Feature 7-allow users to find teammates for competitions by posting competitions to join and competition circular photo will be based on difficulty level selected 

- Feature 8-allow users to stretch their thinking in 3d modelling by joining competitions and gain points from it based on difficulty level as shown in green,orange or red circular photo for the competition. 

- Feature 9-allow users to get vouchers by redeeming vouchers and deduct points based on it 

- Feature 10-allow users' hardwork to be acknowledged by the given gold, brown or silver border color according to how many points they gain and it will be shown at everywhere which can see the user profile photo

- Feature 11-allow users to get additional points (+1,+2,+3) for joining competitions by the border color they have

- Feature 12-allow users to complain about the app by filling out the contact form

- Feature 13-allow adminstrator to see responses from contact form by viewing data in restDB

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
    2. See if it redirects to a verficication page 
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
- The photos used in this site were obtained from ...

### Acknowledgements

- I recieve inspiration from art station and reddit. 