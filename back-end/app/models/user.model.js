const db = require("./db");

// constructor
const User = function (user) {
  this.email = user.email;
  this.username = user.username;
  this.password = user.password;
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.role = user.role;
};

User.create = (newUser, result) => {
  const sql = "INSERT INTO users SET ?";
  db.query(sql, newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.findById = (userId, result) => {
  const sql = `SELECT * FROM users WHERE id = ${userId}`;
  db.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found users: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found user with the id
    result({ kind: "not_found" }, null);
  });
};

User.getAll = (result) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("users: ", res);
    result(null, res);
  });
};

User.updateById = (id, user, result) => {
  const sql =
    "UPDATE users SET email = ?, username = ?, password = ? firstname = ? lastname = ? role = ? WHERE id = ?";
  db.query(
    sql,
    [user.email, user., user.phone, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found user with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

User.remove = (id, result) => {
  const sql = "DELETE FROM users WHERE id = ?";
  db.query(sql, id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found user with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted user with id: ", id);
    result(null, res);
  });
};

module.exports = User;
