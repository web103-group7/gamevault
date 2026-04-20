# Milestone 3

This document should be completed and submitted during **Unit 7** of this course. You **must** check off all completed tasks in this document in order to receive credit for your work.

## Checklist

This unit, be sure to complete all tasks listed below. To complete a task, place an `x` between the brackets.

You will need to reference the GitHub Project Management guide in the course portal for more information about how to complete each of these steps.

- [x] In your repo, create a project board. 
  - *Please be sure to share your project board with the grading team's GitHub **codepathreview**. This is separate from your repository's sharing settings.*
- [x] In your repo, create at least 5 issues from the features on your feature list.
- [x] In your repo, update the status of issues in your project board.
- [x] In your repo, create a GitHub Milestone for each final project unit, corresponding to each of the 5 milestones in your `milestones/` directory. 
  - [x] Set the completion percentage of each milestone. The GitHub Milestone for this unit (Milestone 3 - Unit 7) should be 100% completed when you submit for full points.
- [x] In `readme.md`, check off the features you have completed in this unit by adding a ✅ emoji in front of the feature's name.
  - [x] Under each feature you have completed, include a GIF showing feature functionality.
- [x] In this documents, complete all five questions in the **Reflection** section below.

## Reflection

### 1. What went well during this unit?

Our Game Library page is now implemented end-to-end for the core read flow. We connected the frontend to the backend `GET /games` route, render game cards in a responsive grid, and included useful UI states for loading, empty results, and fetch errors. Search also works for both title and genre, which made the page feel much more usable during demos.


### 2. What were some challenges your group faced in this unit?

One challenge was coordinating frontend and backend expectations for the game data shape (especially IDs, dates, and image fields). We also spent time aligning styling and component behavior so the page looked consistent and still handled edge cases like empty data or failed API calls.


### Did you finish all of your tasks in your sprint plan for this week? If you did not finish all of the planned tasks, how would you prioritize the remaining tasks on your list?

We finished most of the sprint tasks tied to the Game Library view (display + search + navigation into inventory). The highest-priority remaining item is wiring the `+ Add Game` button to a complete create-game flow, because it blocks users from expanding their library directly from this page. After that, we would prioritize the remaining 2 pages and the remaining CRUD operations for each of those pages.


### Which features and user stories would you consider “at risk”? How will you change your plan if those items remain “at risk”?

The features currently most at risk are Item Management and Universal Loadouts, since they depend on multiple CRUD paths and tighter integration across pages. If these remain at risk, we will narrow scope to a stable MVP first: reliable item create/read/update/delete, then add only one polished loadout flow before optional enhancements. We will also break work into smaller tickets and validate each API + UI slice earlier to reduce late-stage blockers.


### 5. What additional support will you need in upcoming units as you continue to work on your final project?

We would benefit most from support around integration testing strategy for React + Express + PostgreSQL workflows, plus guidance on prioritizing features under time constraints. Targeted feedback on schema design and API contracts would also help us avoid rework as we build the remaining item and loadout functionality.
