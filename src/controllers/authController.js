const knex = require("knex");
const knexConfig = require("../../knexfile");
const knexConnection = knex(knexConfig.development);
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) {
    res.status(401).send("Empty field(s).");
    return;
  }

  try {
    const data = await knexConnection
      .select([
        "users.id",
        "users.name",
        "users.password",
        "users.admin",
        "jobs.name as job_name",
        "jobs.id as job_id",
      ])
      .from("users")
      .where({ login })
      .leftJoin("jobs", "users.job", "jobs.id");
    if (data.length === 0) {
      res.status(400).send({
        code: 400,
        message: "This user doesn't exist.",
      });
      return;
    }

    let permission = bcrypt.compareSync(password, data[0].password);

    if (!permission) {
      res.status(401).send("Invalid password.");
      return;
    }

    const token = jwt.sign(
      { login: data[0].login, admin: data[0].admin, id: data[0].id },
      process.env.SECRET,
      {
        expiresIn: 86400,
      }
    );
    console.log(data[0]);
    return res.send({
      name: data[0].name,
      job: data[0].job_name,
      job_id: data[0].job_id,
      token: token,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send("Something got in the way.");
  }
};
