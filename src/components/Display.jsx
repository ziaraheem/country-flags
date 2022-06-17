import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function Display(props) {
  const [country, setCountry] = useState(null);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <Box sx={{ maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country-Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country ? country : ""}
            label="Country-Name"
            onChange={handleChange}
          >
            {props.data.map((item) => (
              <MenuItem key={item.code} value={item}>
                {item.name}
                {/* <img
                  src={item.image}
                  style={{ width: "50px", height: "30px" }}
                ></img> */}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {country ? (
        <img src={country.image} alt="image of a country"></img>
      ) : (
        <p>select a country</p>
      )}
    </div>
  );
}
export default Display;
