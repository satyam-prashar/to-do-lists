const data = [
    {
        "title" : "Buy Groceries",
        "completed" : true,
        "timeCreated" : new Date("2024-10-01T08:30:00Z"),
        "timeUpdated" : new Date("2024-10-01T09:00:00Z"),
        "description" : "Buy milk, eggs, and bread"
    },
    {
        "title" : "Finish Project Report",
        "completed" : false,
        "timeCreated" : new Date("2024-10-02T10:00:00Z"),
        "timeUpdated" : new Date("2024-10-02T15:00:00Z"),
        "description" : "Complete the final draft of the project report"
    },
    {
        "title" : "Call Plumber",
        "completed" : false,
        "timeCreated" : new Date("2024-10-03T11:00:00Z"),
        "timeUpdated" : new Date("2024-10-03T12:00:00Z"),
        "description" : "Fix the leaking kitchen sink"
    },
    {
        "title" : "Read Book",
        "completed" : true,
        "timeCreated" : new Date("2024-10-04T14:00:00Z"),
        "timeUpdated" : new Date("2024-10-04T18:00:00Z"),
        "description" : "Read 'The Great Gatsby'"
    },
    {
        "title" : "Exercise",
        "completed" : false,
        "timeCreated" : new Date("2024-10-05T06:00:00Z"),
        "timeUpdated" : new Date("2024-10-05T07:00:00Z"),
        "description" : "Morning run for 30 minutes"
    },
    {
        "title" : "Attend Meeting",
        "completed" : true,
        "timeCreated" : new Date("2024-10-06T09:00:00Z"),
        "timeUpdated" : new Date("2024-10-06T10:00:00Z"),
        "description" : "Team sync-up meeting"
    },
    {
        "title" : "Clean House",
        "completed" : false,
        "timeCreated" : new Date("2024-10-07T11:00:00Z"),
        "timeUpdated" : new Date("2024-10-07T12:30:00Z"),
        "description" : "Vacuum and dust all rooms"
    },
    {
        "title" : "Pay Bills",
        "completed" : true,
        "timeCreated" : new Date("2024-10-08T08:00:00Z"),
        "timeUpdated" : new Date("2024-10-08T08:30:00Z"),
        "description" : "Pay electricity and water bills"
    },
    {
        "title" : "Grocery Shopping",
        "completed" : false,
        "timeCreated" : new Date("2024-10-09T10:00:00Z"),
        "timeUpdated" : new Date("2024-10-09T11:00:00Z"),
        "description" : "Buy vegetables and fruits"
    },
    {
        "title" : "Doctor Appointment",
        "completed" : true,
        "timeCreated" : new Date("2024-10-10T14:00:00Z"),
        "timeUpdated" : new Date("2024-10-10T15:00:00Z"),
        "description" : "Annual health check-up"
    },
    {
        "title" : "Write Blog Post",
        "completed" : false,
        "timeCreated" : new Date("2024-10-11T16:00:00Z"),
        "timeUpdated" : new Date("2024-10-11T18:00:00Z"),
        "description" : "Draft a new blog post on React hooks"
    },
    {
        "title" : "Plan Vacation",
        "completed" : true,
        "timeCreated" : new Date("2024-10-12T09:00:00Z"),
        "timeUpdated" : new Date("2024-10-12T10:00:00Z"),
        "description" : "Book flights and hotels for vacation"
    },
    {
        "title" : "Study for Exam",
        "completed" : false,
        "timeCreated" : new Date("2024-10-13T18:00:00Z"),
        "timeUpdated" : new Date("2024-10-13T20:00:00Z"),
        "description" : "Prepare for the upcoming certification exam"
    },
    {
        "title" : "Gardening",
        "completed" : true,
        "timeCreated" : new Date("2024-10-14T07:00:00Z"),
        "timeUpdated" : new Date("2024-10-14T08:30:00Z"),
        "description" : "Plant new flowers and trim bushes"
    },
    {
        "title" : "Watch Movie",
        "completed" : false,
        "timeCreated" : new Date("2024-10-15T20:00:00Z"),
        "timeUpdated" : new Date("2024-10-15T22:00:00Z"),
        "description" : "Watch 'Inception' on Netflix"
    }
];

function createUUID() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  );
}

data.forEach(item => {
  item.guid = createUUID();
});

console.log(data);

export default data;
