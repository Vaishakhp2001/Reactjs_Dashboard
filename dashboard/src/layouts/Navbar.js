import GridViewIcon from "@mui/icons-material/GridView";
import AssignmentIcon from "@mui/icons-material/Assignment";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupIcon from "@mui/icons-material/Group";
import DescriptionIcon from "@mui/icons-material/Description";
import { makeStyles } from "@mui/styles";
import { Grid, Typography, Select } from "@mui/material";
import { Link } from "react-router-dom";

import profile from "../assets/sample_profile.jpg";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  navbar: {
    padding: "20px 40px",
  },
  defaultIcon: {
    color: "grey",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  navName: {
    color: "grey",
  },
  navItems: {
    display: "flex",
  },
  profile: {
    borderRadius: "50%",
  },
  profileImage: {
    height: "50px",
    width: "50px",
    borderRadius: "50%",
  },
  current: {
    color: "blue",
  },
});

export const Navbar = () => {
  const classes = useStyles();

  const [current, setCurrent] = useState("Dashboard");
  


  return (
    <Grid container className={classes.navbar}>
      <Grid
        item
        xs={10}
        md={10}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={classes.navItem} onClick={() => setCurrent('Dashboard')}>
            <GridViewIcon
              className={
                current === "Dashboard" ? classes.current : classes.defaultIcon
              }
              style={{}}
            />
            <Typography
              variant="h5"
              className={
                current === "Dashboard" ? classes.current : classes.navName
              }
            >
              Dashboard
            </Typography>
          </div>
        </Link>
        <div className={classes.navItem} onClick={() => setCurrent('Jobs')}>
          <AssignmentIcon
            className={
              current === "Jobs" ? classes.current : classes.defaultIcon
            }
          />
          <Link to="/jobs" style={{ textDecoration: "none" }}>
            <Typography
              variant="h5"
              className={current === "Jobs" ? classes.current : classes.navName}
            >
              Jobs
            </Typography>
          </Link>
        </div>
        <div className={classes.navItem}>
          <IndeterminateCheckBoxIcon className={classes.defaultIcon} />
          <Typography variant="h5" className={classes.navName}>
            Technicians
          </Typography>
        </div>
        <div className={classes.navItem}>
          <CalendarMonthIcon className={classes.defaultIcon} />
          <Typography variant="h5" className={classes.navName}>
            Calender
          </Typography>
        </div>
        <div className={classes.navItem}>
          <GroupIcon className={classes.defaultIcon} />
          <Typography variant="h5" className={classes.navName}>
            Customers
          </Typography>
        </div>
        <div className={classes.navItem}>
          <DescriptionIcon className={classes.defaultIcon} />
          <Typography variant="h5" className={classes.navName}>
            Invoices & Payments
          </Typography>
        </div>
      </Grid>
      <Grid
        item
        xs={2}
        md={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"end"}
      >
        <div className={classes.profile}>
          <img src={profile} alt="profile" className={classes.profileImage} />
        </div>
        <Select
          style={{ border: "none" }}
          variant={"standard"}
          disableUnderline
        />
      </Grid>
    </Grid>
  );
};
