# Hack the North 2019 - Front End Challenge  ⚙️

## See The Work  👀
1. `cd` into the directory
2. `npm install`
3. `npm start`
4. Access at http://localhost:3000

## Product Vision and Design  🔨

**Given Additional Time:**

1. Validate that emails, locations and GitHub profiles are entered correctly using regular expressions. Of course, savvy users could circumvent these checks on the front-end to submit invalid data. On the server-side, back-end developers should validate and sanitize the data. Regardless of an error on the front-end or back-end, the error should be presented to the user.

2. Prompt users to save their answers if they click "Next Set" or "Home" after entering answers and saving. I did some light user testing with my family and friends and that was a key pain point.

3. Prompt users with which fields were incorrectly filled out after checks fail.

4. The "disabled" state of the select has a black text-color. I couldn't find a cross-browser way to set the first child to grey. 😡

5. This front-end should sync with a back-end to support refreshing and saving of semi-completed applications.

6. User creation and sign in

7. Implement [Redux](https://redux.js.org/) or [MobX](https://mobx.js.org/) - this won't scale without some state container.

8. Write tests using [Jest](https://jestjs.io/) and [react-testing-library](https://github.com/kentcdodds/react-testing-library#review-weyert)


**Extra Functionality:**

Extra functionality includes changing the "Begin" text in the button to "Edit" once some changes have been made, even if the question set isn't completed.

**Things to Consider:**

> What are some useful performance metrics for this application and why?
Useful performance metrics include:
1. Loading time
2. Time spent on entire application
3. Time spent on each question set
4. Number of incomplete submissions
5. Misclicks

If the average load time is high, this indicates your application isn't working as expected and probably needs refactoring. It may be fast on your machine, but not so quick on others.

Time spent on entire application and each question set indicates how long people are thinking about your questions. Perhaps the questions are too hard. This lends itself to the number of incomplete submissions. The difficulty of the questions may lead to a great reduction in the number of applications submitted. The team likely wants to strike a balance with questions -- not too hard and not too easy.

Misclicks are important because they inform the designers. Are users clicking where we expected them to click? If not, we can make changes on the fly to make the UX better.

> How could the api schema be extended to allow for more question types? Data validations?

API schema should include a type for file attachments (resumes, GIFs, etc).

Like I mentioned before, on the back-end we would need to validate and sanitize the data. There are plenty of packages on GitHub to aid the back-end team here. I've used [Express Validator](https://express-validator.github.io/docs/) in the past.

>How easy would it be to reflect the changes above in your codebase? How could you restructure/componentize your code to make this easier?

It would fairly easy. I conditionally render elements based on their question type, so I would:
1. Create a new styled component to style appropriately
2. Create an if else to render this question type

> Could this data be useful for building any features / products for sponsors and/or other parties of Hack the North?

This data raw would not be very useful. However, since Hack the North has a data science position someone in that role could definitely take this data and generate insights for sponsors or other parties of Hack the North. To sponsors, we could promote what type of hackers come to Hack the North. To other parties and for Hack the North itself, we could deliver insights into which skills are most popular amongst students right now. It'd be neat if we could enable users to upload resumes and then analyze those. Resumes usually give a better picture of someone's skills and experiences.