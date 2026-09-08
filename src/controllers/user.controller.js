const userService = require("../services/user.service");

function parseUserId(value) {
  const id = Number(value);
  return Number.isInteger(id) && id > 0 ? id : null;
}

async function listUsers(c) {
  const users = await userService.findAllUsers();
  return c.json(users);
}

async function getUser(c) {
  const id = parseUserId(c.req.param("id"));

  if (!id) {
    return c.json({ error: "id must be a positive integer" }, 400);
  }

  const user = await userService.findUserById(id);

  if (!user) {
    return c.json({ error: "user not found" }, 404);
  }

  return c.json(user);
}

async function createUser(c) {
  const body = await c.req.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!name || !email) {
    return c.json({ error: "name and email are required" }, 400);
  }

  const user = await userService.createUser({ name, email });
  return c.json(user, 201);
}

async function deleteUser(c) {
  const id = parseUserId(c.req.param("id"));

  if (!id) {
    return c.json({ error: "id must be a positive integer" }, 400);
  }

  const user = await userService.deleteUserById(id);

  if (!user) {
    return c.json({ error: "user not found" }, 404);
  }

  return c.json({ message: "user deleted", user });
}

module.exports = {
  listUsers,
  getUser,
  createUser,
  deleteUser
};
