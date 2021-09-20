import { validationResult } from "express-validator/check";
import { tokenGenerator } from "../middlewares/middleware";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { user_email, full_name, user_password, admin, role } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    try {
      const user = await client.query(
        "SELECT * FROM users WHERE user_email = $1",
        [user_email]
      );

      if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }

      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(user_password, salt);

      let newUser = await client.query(
        `INSERT INTO users (full_name, user_email, user_password, admin, role) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
        [full_name, user_email, bcryptPassword, admin, role]
      );

      const jwtToken = tokenGenerator(newUser.rows[0]);

      res.status(201).send({
        success: true,
        msg: "Registered successfully!",
        user_id: newUser.rows[0].user_id,
        token: jwtToken,
        expiresIn: "2 hours",
        full_name: newUser.rows[0].full_name,
        role: newUser.rows[0].role
      });

      
    } catch (error) {
      res.send(error);
    }
  }
};

export const loginUser = async (req, res) => {
  const { user_email, user_password } = req.body;

  try {
    const user = await client.query(
      "SELECT * FROM users WHERE user_email = $1",
      [user_email]
    );

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }

    const jwtToken = tokenGenerator(user.rows[0]);

    return res.json({
      msg: "Login successful",
      user_id: user.rows[0].user_id,
       token: jwtToken,
      expiresIn: "2 hours",
     full_name: user.rows[0].full_name,
      role: user.rows[0].role
    });
  } catch (err) {
    res.status(500).send("Server error");
  }
};


