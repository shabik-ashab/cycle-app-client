import { Button, TextField, Alert } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://safe-oasis-95294.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });

    e.preventDefault();
  };
  return (
    <div>
      <div className="container w-50 mx-auto mt-5">
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "50%" }}
            label="Email"
            type="email"
            onBlur={handleOnBlur}
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Make Admin
          </Button>
        </form>
        {success && (
          <Alert className="mt-3" severity="success">
            Made Admin successfully!
          </Alert>
        )}
      </div>
    </div>
  );
};

export default MakeAdmin;
