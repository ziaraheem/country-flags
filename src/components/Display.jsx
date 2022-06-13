import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

function Display(props) {
  const [countryName, setName] = useState("");
  const [conName, setCname] = useState(null);

  const handleChange = (event) => {
    setName(event.target.value);
    setCname(event.target.value);
  };
  var result = props.data.filter(function (item) {
    return item.name === conName;
  });

  return (
    <div>
      <Box sx={{ maxWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country-Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={countryName}
            label="Country-Name"
            onChange={handleChange}
          >
            {props.data.map((item) => (
              <MenuItem key={item.code} value={item.name}>
                {item.name}
                <img
                  src={item.image}
                  style={{ width: "50px", height: "30px" }}
                ></img>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      {conName ? (
        <img src={result[0].image} alt="jhbaz"></img>
      ) : (
        <p>select a country</p>
      )}
    </div>
  );
}
export default Display;
