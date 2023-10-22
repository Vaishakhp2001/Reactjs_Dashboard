import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { makeStyles } from "@mui/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import PostAddIcon from "@mui/icons-material/PostAdd";
import profile from "../assets/sample_profile.jpg";
import Drawer from "@mui/joy/Drawer";
import ModalClose from "@mui/joy/ModalClose";
import DialogTitle from "@mui/joy/DialogTitle";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const useStyles = makeStyles({
  firstRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dashboardBg: {
    background: "#F5F7F8",
    padding: "20px 50px",
  },
  card: {
    borderRadius: "10px !important",
  },
  cardHead: {
    padding: "50px 30px 20px 30px",
  },
  cardTitle: {
    marginBottom: "10px !important",
  },
  customButtonGrp: {},
  profile: {
    borderRadius: "50%",
  },
  profileImage: {
    height: "40px",
    width: "40px",
    borderRadius: "50%",
  },
  upcomingJobsCard: {
    padding: "15px",
    borderRadius: "10px",
    color: "#FFFFFF",
    marginTop: "10px",
  },
  form: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "20px",
  },

  textField: {
    background: "#F5F5F5",
    // borderRadius: '10px'
  },
});

export const Jobs = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);


  
    const [phone, setPhone] = useState("+934 45346383");
    const [jobId, setJobId] = useState("433 564 346");
    const [firstName, setfirstName] = useState("Alexander");
    const [lastName, setLastName] = useState("Willowberg");
    const [streetAddress, setAddress] = useState("Chimney Rock");
    const [buildingNumber, setBuildingNumber] = useState("1 B");
    const [apartmentNumber, setApartmentNumber] = useState("128");
    const [zipCode, setZipCode] = useState("086765");
    const [jobType, setJobType] = useState("Washing Machine Fix");
    const [jobTitle, setJobTitle] = useState("Engine Fix");
    const [jobDetails, setJobDetails] = useState("The engine suddently stopped working :(");
    const [date, setDate] = useState("21 May");
    const [time, setTime] = useState("4:00 PM");
  

  const openModal = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    // setFormData()
  };

  return (
    <div className={classes.dashboardBg}>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <div
          style={{
            paddingLeft: "30px",
            paddingRight: "30px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              gap: "25%",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            <Button size="medium" style={{ background: "#F5F5F5" }}>
              <DeleteOutlineIcon style={{ color: "red" }} />
            </Button>

            <Typography variant="body2" style={{ textAlign: "center"}}>
              Id Number<br></br>
              <span>
                <Typography variant="body1" fontWeight={'500'}>432 YFV ZX12</Typography>
              </span>
            </Typography>

            <div style={{ position: "absolute", top: 30, right: "0" }}>
              <ModalClose />
            </div>
          </div>

          <div>
            <form className={classes.form}>
              <FormControl className={classes.formControl}>
                <label>Phone</label>
                <TextField
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Job Id</label>
                <TextField
                  id="jobId"
                  name="jobId"
                  value={jobId}
                  onChange={(e) => setJobId(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              {/* <Typography>Personal Information</Typography> */}
              <FormControl className={classes.formControl}>
                <label>First Name</label>
                <TextField
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Last Name</label>
                <TextField
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Street Number</label>
                <TextField
                  id="streetNumber"
                  name="streetNumber"
                  value={streetAddress}
                  onChange={(e) => setAddress(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Building Number</label>
                <TextField
                  id="buildingNumber"
                  name="buildingNumber"
                  value={buildingNumber}
                  onChange={(e) => setBuildingNumber(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Apartment Number</label>
                <TextField
                  id="apartmentNumber"
                  name="apartNumber"
                  value={apartmentNumber}
                  onChange={(e) => setApartmentNumber(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Zip Code</label>
                <TextField
                  id="zipCode"
                  name="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Job Type</label>
                <TextField
                  id="jobType"
                  name="jobType"
                  value={jobType}
                  onChange={(e) => setJobType(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <label>Job Title</label>
                <TextField
                  id="jobTitle"
                  name="jobTitle"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  id="date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <TextField
                  id="time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={classes.textField}
                />
              </FormControl>
              <Button
                variant="contained"
                style={{ background: "#F5F5F5", color: "blue", gap: "10px", marginTop: '20px', marginBottom: '20px' }}
              >
                <KeyboardBackspaceIcon />
                Job Details
              </Button>
              <br></br>
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained">Save</Button>
            </form>
          </div>
        </div>
      </Drawer>
      <Grid container className={classes.firstRow}>
        <Grid item xs={9}>
          <Typography variant="h5">Thursday 21 May</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <div className={classes.cardHead}>
              <Typography className={classes.cardTitle}>
                Unassigned Jobs(12)
              </Typography>
              <div className={classes.flexRow}>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  size="small"
                  className={classes.customButtonGrp}
                >
                  <Button variant="contained">Today</Button>
                  <Button>This Week</Button>
                  <Button>This Month</Button>
                </ButtonGroup>
                <FilterAltIcon style={{ color: "blue" }} />
              </div>
            </div>
            <Divider />
            <CardContent style={{ height: "520px", overflow: "hidden" }}>
              <Card
                className={classes.upcomingJobsCard}
                style={{ background: "#FFF" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      006 AAA AA01
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <IconButton>
                      <PostAddIcon fontSize="large" style={{ color: "blue" }} />
                    </IconButton>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      4:00 PM, 21 May
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "#EEF2E6" }}
                      disableElevation
                    >
                      <Typography
                        variant="caption"
                        fontWeight={"500"}
                        color={"#171717"}
                      >
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card
                className={classes.upcomingJobsCard}
                style={{ background: "#FFF" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      006 AAA AA01
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <IconButton>
                      <PostAddIcon fontSize="large" style={{ color: "blue" }} />
                    </IconButton>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      4:00 PM, 21 May
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "#EEF2E6" }}
                      disableElevation
                    >
                      <Typography
                        variant="caption"
                        fontWeight={"500"}
                        color={"#171717"}
                      >
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card
                className={classes.upcomingJobsCard}
                style={{ background: "#FFF" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      006 AAA AA01
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <IconButton>
                      <PostAddIcon fontSize="large" style={{ color: "blue" }} />
                    </IconButton>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      4:00 PM, 21 May
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "#EEF2E6" }}
                      disableElevation
                    >
                      <Typography
                        variant="caption"
                        fontWeight={"500"}
                        color={"#171717"}
                      >
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card
                className={classes.upcomingJobsCard}
                style={{ background: "#FFF" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      006 AAA AA01
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <IconButton>
                      <PostAddIcon fontSize="large" style={{ color: "blue" }} />
                    </IconButton>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2" fontWeight={"500"}>
                      4:00 PM, 21 May
                    </Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "#EEF2E6" }}
                      disableElevation
                    >
                      <Typography
                        variant="caption"
                        fontWeight={"500"}
                        color={"#171717"}
                      >
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </Card>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <div className={classes.cardHead}>
              <Typography className={classes.cardTitle}>
                Assigned Jobs(4)
              </Typography>
              <div className={classes.flexRow}>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  size="small"
                  className={classes.customButtonGrp}
                >
                  <Button variant="contained">Today</Button>
                  <Button>This Week</Button>
                  <Button>This Month</Button>
                </ButtonGroup>
                <FilterAltIcon style={{ color: "blue" }} />
              </div>
            </div>
            <Divider />
            <CardContent style={{ height: "520px", overflow: "hidden" }}>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#FF9B50" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                      onClick={openModal}
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#6D67E4" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                      onClick={openModal}
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#45CFDD" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                      onClick={openModal}
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#E19898" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                      onClick={openModal}
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <div className={classes.cardHead}>
              <Typography className={classes.cardTitle}>
                Finished Jobs(4)
              </Typography>
              <div className={classes.flexRow}>
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  size="small"
                  className={classes.customButtonGrp}
                >
                  <Button variant="contained">Today</Button>
                  <Button>This Week</Button>
                  <Button>This Month</Button>
                </ButtonGroup>
                <FilterAltIcon style={{ color: "blue" }} />
              </div>
            </div>
            <Divider />
            <CardContent style={{ height: "520px", overflow: "hidden" }}>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#FF9B50" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#6D67E4" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#45CFDD" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className={classes.upcomingJobsCard}
                style={{ background: "#E19898" }}
              >
                <div className={classes.flexRow}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Id</Typography>
                    <Typography variant="body2">006 AAA AA01</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <div className={classes.flexColumn}>
                      <Typography variant="body2">Jay Simpson</Typography>
                      <Typography variant="caption">
                        +9 494 453 43 22
                      </Typography>
                    </div>
                    <div className={classes.profile}>
                      <img
                        src={profile}
                        alt="profile"
                        className={classes.profileImage}
                      />
                    </div>
                  </div>
                </div>
                <div className={classes.flexRow} style={{ marginTop: "10px" }}>
                  <div className={classes.flexColumn}>
                    <Typography variant="caption">Job Scheduled</Typography>
                    <Typography variant="body2">4:00 PM, 21 May</Typography>
                  </div>
                  <div className={classes.flexRow}>
                    <Button
                      variant="contained"
                      size="small"
                      style={{ background: "rgba(0, 0, 0, .25)" }}
                      disableElevation
                    >
                      <Typography variant="caption">
                        Washing Machine Fix
                      </Typography>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
