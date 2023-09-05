import bcryptjs from "bcryptjs";

//while production just using a dummy user for now
const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcryptjs.hashSync("password", 10),
    isAdmin: true,
  },
  {
    name: "John User",
    email: "john@email.com",
    password: bcryptjs.hashSync("password", 10),
    isAdmin: false,
  },
];

export default users;
