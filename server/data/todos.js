const todos = [
  {
    title: "Fix Broken Code",
    description: "I have been stuck on this code for too long, fix it!",
    task_date: new Date(),
    status: "inProgress",
    priority: "high",
  },
  {
    title: "Push Broken Code",
    description: "I think this code works, lets push to production",
    task_date: new Date(),
    status: "inProgress",
    priority: "low",
  },
  {
    title: "Commit Broken Code",
    description: "This code definitely doesn't work but lets commit anyways",
    task_date: new Date(),
    status: "completed",
    priority: "normal",
  },
  {
    title: "Un Commit Broken Code",
    description: "This code definitely broke production, lets un commit",
    task_date: new Date(),
    status: "inProgress",
    priority: "normal",
  },
];

export default todos;
