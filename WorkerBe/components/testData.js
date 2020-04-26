import { Images } from "../constants";
const profilePicture = Images.ProfilePic2;
const profilePictureTwo = Images.PersonPic;
const profilePictureThree = Images.PersonPic2;
const profilePictureFour = Images.PersonPic3;

// Data schema for messaging functionality???

export const users = [
  {
    "user_id": "01",
    "name": "John Doe",
    "email": "john@doe.com",
    "phone": "(111) 222 - 3333",
    "location": "Seattle, WA",
    "image": profilePicture,
    "linkedin": "",
    "job": "Digital Analyst",
    "company": "Accenture",
    "board_members": [
      {"user_id": "02"},
      {"user_id": "03"},
      {"user_id": "04"}
    ],
    "boards_on": [
      {"user_id": "02"},
      {"user_id": "03"}
    ],
    "sign_up_date": "01-01-2020"
  },
  {
    "user_id": "02",
    "name": "Kris Moon",
    "email": "kris@moon.com",
    "phone": "(222) 333 - 4444",
    "location": "Seattle, WA",
    "image": profilePictureTwo,
    "linkedin": "",
    "job": "Programmer",
    "company": "Amazon",
    "board_members": [
      {"user_id": "03"}
    ],
    "boards_on": [
      {"user_id": "01"},
      {"user_id": "03"},
      {"user_id": "04"}
    ],
    "sign_up_date": "02-02-2020"
  },
  {
    "user_id": "03",
    "name": "Jenna Harding",
    "email": "jenna@harding.com",
    "phone": "(333) 444 - 5555",
    "location": "Los Angeles, CA",
    "image": profilePictureThree,
    "linkedin": "",
    "job": "Writer",
    "company": "Freelance",
    "board_members": [
      {"user_id": "02"},
      {"user_id": "04"}
    ],
    "boards_on": [
      {"user_id": "01"}
    ],
    "sign_up_date": "03-03-2020"
  },
  {
    "user_id": "04",
    "name": "Tania Sun",
    "email": "tania@sun.com",
    "phone": "(444) 555 - 6666",
    "location": "Chicago, IL",
    "image": profilePictureFour,
    "linkedin": "",
    "job": "Marketing Consultant",
    "company": "Kellogg's",
    "board_members": [

    ],
    "boards_on": [

    ],
    "sign_up_date": "04-04-2020"
  }
]

export const goals = [
  {
    "goal_id": "01",
    "goal_name": "Write Every Week",
    "goal_desc": "This goal is about writing one 1,000 word article every week for the entire year. I need to do this publicly. That will mostly take the form of Medium & LinkedIn.",
    "goal_start": "01-01-2020",
    "goal_end": "02-02-2020",
    "goal_progress": 0.5,
    "goal_steps": [
      {
        "step_name": "Ideate",
        "step_desc": "First come up with the idea to write about.",
        "step_check": true
      },
      {
        "step_name": "Write a Draft",
        "step_desc": "Make a first pass at a rough draft. Only spend 1 hour on it, tops. Aim to get the main points outlined. Goal is 800 - 1000 words.",
        "step_check": false
      }
    ],
    "owner_id": "01",
    "board_member_ids": [
      {"user_id": "02"}
    ],
    "date_created": "01-01-2020"
  },
  {
    "goal_id": "02",
    "goal_name": "Learn SQL",
    "goal_desc": "This goal is about learning to manipulate data and setup a relational database.",
    "goal_start": "02-02-2020",
    "goal_end": "03-03-2020",
    "goal_progress": 0.2,
    "goal_steps": [
      {
        "step_name": "Research Courses",
        "step_desc": "Get an understanding of what online learning opportunities exist.",
        "step_check": true
      },
      {
        "step_name": "Pick a Course",
        "step_desc": "Choose the online platform/course I will be using.",
        "step_check": false
      },
      {
        "step_name": "Do One Lesson a Day more text",
        "step_desc": "",
        "step_check": false
      }
    ],
    "owner_id": "01",
    "board_member_ids": [
      {"user_id": "03"},
      {"user_id": "04"}
    ],
    "date_created": "02-02-2020"
  },
  {
    "goal_id": "03",
    "goal_name": "Baking Sourdough",
    "goal_desc": "Surviving quarantine and being basic.",
    "goal_start": "03-03-2020",
    "goal_end": "04-04-2020",
    "goal_progress": 0.9,
    "goal_steps": [
      {
        "step_name": "Make Bread",
        "step_desc": "This seems thorough...",
        "step_check": true
      }
    ],
    "owner_id": "01",
    "board_member_ids": [

    ],
    "date_created": "03-03-2020"
  },
  {
    "goal_id": "04",
    "goal_name": "Starting a Blog",
    "goal_desc": "Making a voice for myself.",
    "goal_start": "04-04-2020",
    "goal_end": "05-05-2020",
    "goal_progress": 0.1,
    "goal_steps": [
      {
        "step_name": "Pick a Topic",
        "step_desc": "This seems thorough...",
        "step_check": true
      },
      {
        "step_name": "Choose a domain name",
        "step_desc": "More descriptions...",
        "step_check": false
      }
    ],
    "owner_id": "03",
    "board_member_ids": [
      {"user_id": "01"},
      {"user_id": "04"}
    ],
    "date_created": "03-03-2020"
  }
]
