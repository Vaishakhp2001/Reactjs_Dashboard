import {
  Typography,
  Button,
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  ButtonGroup,
  List,
  ListItem,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import profile from "../assets/sample_profile.jpg";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Doughnut, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend);

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const useStyles = makeStyles({
  flexRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
  dashboardBg: {
    background: "#F5F7F8",
    padding: "20px 50px",
  },
  firstRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  firstRowButtons: {
    display: "flex",
    justifyContent: "center",
    gap: '30px'
  },
  button: {
    width: "200px",
  },
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
  card: {
    borderRadius: "10px !important",
  },
  invoicingItem: {
    height: '50%', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center'
  }
});
export const Dashboard = () => {
  const classes = useStyles();

  const data = {
    labels: ["#f0f8ff	", "Blue"],
    datasets: [
      {
        label: "My First Dataset",
        data: [55, 45],
        backgroundColor: ["blue", "#f0f8ff"],
        // borderWidth: 50,
        // borderColor: "white",
        borderRadius: 20,
        cutout: "80%",
        radius: "150",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      const xCoor = chart.getDatasetMeta(0).data[0].x;
      const yCoor = chart.getDatasetMeta(0).data[0].y;
      ctx.save();
      ctx.font = "bolder 40px sans-serif";
      ctx.fillStyle = "blue";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${data.datasets[0].data[0]}% `, xCoor, yCoor - 15);

      ctx.font = "15px sans-serif";
      ctx.fillStyle = "grey";
      ctx.fillText("Of all incoming jobs", xCoor, yCoor + 25);

      ctx.font = "15px sans-serif";
      ctx.fillStyle = "grey";
      ctx.fillText("that were assigned", xCoor, yCoor + 40);
    },
  };

  
  const lineChartData = {
    labels: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN" ],
    datasets: [{
      data: [10, 17, 16, 22, 27, 24, 16, 18],
      // backgroundColor: 'transparent',
      // background: 'rgb(141,135,242)',
      // backgroundColor: 'linear-gradient(90deg, rgba(141,135,242,1) 0%, rgba(243,244,245,1) 100%, rgba(0,212,255,1) 100%)',
      backgroundColor: (context) => {
        const bgColor = [
          'rgba(141,135,242,1)',
          'rgba(243,244,245,1)',
          'rgba(0,212,255,1)',
        ];
        if(!context.chart.chartArea) {
          return;
        }
        console.log(context.chart.chartArea);
        const { ctx, data, chartArea: {top, bottom}} = context.chart;
        const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
        gradientBg.addColorStop(0, bgColor[0])
        gradientBg.addColorStop(0.5, bgColor[1])
        gradientBg.addColorStop(1, bgColor[2])
        return gradientBg;

      },
      // borderColor: 'blue',
      borderColor: [
        'rgba(141,135,242,1)',
        'rgba(243,244,245,1)',
        'rgba(0,212,255,1)',
      ],
      pointBorderColor: 'transparent',
      pointBorderWidth: 1,
      tension: 0.3,
      pointBackgroundColor: 'transparent',
      pointHoverBorderColor: 'blue',
      pointHoverBorderWidth: '5',
      fill: true,
    }]
  }

  // tooltip
  const titleTooltip = (tooltipItems) => {
    return 'New Jobs';
  }

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: false,
      labels: {
        font: {
          size: 20
        }
      },
      tooltip: {
        yAlign: 'bottom',
        displayColors: false,
        callbacks: {
          title: titleTooltip
        },
        backgroundColor: 'blue',
        bodyAlign: 'center',
        titleFont: {
          size: 15,
          weight: '900'
        },
        bodyFont: {
          size: 15,
          weight: '900'
        }
      },
      labels: {
        render: 'label',
        precision: 1,
        arc: false,
        position: 'border',
        fontSize: '30',
        fontColor: [

        ]

      }
    },
    scales: {
      x: {
        grid: {
          display: true
        },
        min: 0
      },
      y: {
        min: 0,
        max: 60,
        // ticks: {
        //   stepSize: 2,
        //   callback: (value) => value + 'K'
        // },
        grid: {
          borderDash: [10]
        }
      }
    }
  }

  return (
    <div className={classes.dashboardBg}>
      <Grid container className={classes.firstRow}>
        <Grid item xs={8}>
          <Typography variant="h5">Thursday 12 May</Typography>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.firstRowButtons}>
            <Button variant="outlined" className={classes.button}>
              Auto Questionaire
            </Button>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={<AddIcon />}
            >
              Add Job
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={3}>
          <Card className={classes.card}>
            <CardHeader
              title="Upcoming Jobs"
              className={"MuiCardHeader-title"}
              action={
                <IconButton>
                  <FilterAltIcon style={{ color: "blue" }} />
                </IconButton>
              }
            />
            <Divider />
            <CardContent style={{ height: "320px", overflow: "hidden" }}>
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
                style={{ background: "blue" }}
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
            </CardContent>
            <Button variant="text" fullWidth>
              View All
            </Button>
          </Card>
          <Card style={{ marginTop: "20px" }} className={classes.card}>
            <CardHeader
              title="Jobs Assigned"
              className={"MuiCardHeader-title"}
              action={
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  size="small"
                >
                  <Button variant="contained">Today</Button>
                  <Button>This Week</Button>
                  <Button>This Month</Button>
                </ButtonGroup>
              }
            />
            <Divider />
            <CardContent>
              <div>
                <Doughnut
                  data={data}
                  options={options}
                  plugins={[textCenter]}
                />
              </div>
              <div className={classes.flexRow}>
                <div
                  className={classes.flexRow}
                  style={{ gap: "10px", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "50%",
                      background: "blue",
                    }}
                  ></div>
                  <Typography>
                    Total Assigned
                    <br></br>Jobs
                  </Typography>
                </div>
                <div
                  className={classes.flexRow}
                  style={{ gap: "10px", alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      borderRadius: "50%",
                      background: "#f0f8ff",
                    }}
                  ></div>
                  <Typography>
                    Total Assigned
                    <br></br>Jobs
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.card} style={{ marginLeft: "20px", height: '460px' }}>
            <CardHeader
              title="Today's stats"
              className={"MuiCardHeader-title"}
            />
            {/* <Divider/> */}
            <List>
              <ListItem style={{ background: "#F5F7F8" }}>
                <Typography>Money</Typography>
              </ListItem>
              <Divider />
              <ListItem
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Money Earned</Typography>
                <Typography>$120.00</Typography>
              </ListItem>
              <Divider />
              <ListItem
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Money Collected</Typography>
                <Typography>$61.00</Typography>
              </ListItem>
              <Divider />
              <ListItem
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Money Refunded</Typography>
                <Typography>$24.00</Typography>
              </ListItem>
              <Divider />
              <ListItem style={{ background: "#F5F7F8" }}>
                <Typography>Jobs</Typography>
              </ListItem>
              <Divider />
              <ListItem
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Jobs Completed</Typography>
                <Typography>14</Typography>
              </ListItem>
              <Divider />
              <ListItem
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Jobs Assigned</Typography>
                <Typography>10</Typography>
              </ListItem>
              <Divider />
              <ListItem
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Jobs Created</Typography>
                <Typography>23</Typography>
              </ListItem>
            </List>
          </Card>
          <Card
            className={classes.card}
            style={{ marginLeft: "20px", marginTop: "20px", minHeight: '61vh' }}
          >
            <CardHeader title="Invoicing" className={"MuiCardHeader-title"} />
            <Divider />
            <CardContent>
              <div style={{ display: "flex" }}>
                <div className={classes.flexColumn} style={{ width: '50%', height: '400px'}}>
                  <div  className={classes.invoicingItem}>
                    <Typography variant="h5" fontWeight={'bold'} color={'red'}>$176,772</Typography>
                    <Typography>Due</Typography>
                  </div>
                  <Divider style={{ marginRight: '15px'}}/>
                  <div className={classes.invoicingItem}>
                    <Typography variant="h5" fontWeight={'bold'}>49</Typography>
                    <Typography style={{ textAlign: 'center'}}>Currently invoices due</Typography>
                  </div>
                </div>
                <Divider orientation="vertical" flexItem/>
                <div className={classes.flexColumn} style={{ width: '50%', height: '400px'}}>
                  <div className={classes.invoicingItem}>
                    <Typography variant="h5" fontWeight={'bold'} color={'green'}>$122,644</Typography>
                    <Typography >Paid</Typography>
                  </div>
                  <Divider style={{ marginLeft: '15px'}}/>
                  <div className={classes.invoicingItem}>
                    <Typography variant="h5" fontWeight={'bold'}>543</Typography>
                    <Typography style={{ textAlign: 'center'}}>All time paid invoices</Typography>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card} style={{ marginLeft: '20px', }}>
            <CardHeader
              title="Incoming Jobs"
              className={"MuiCardHeader-title"}
              style={{ padding: '20px 50px 0px 50px' }}
              action={
                <ButtonGroup
                  variant="outlined"
                  aria-label="outlined button group"
                  size="small"
                >
                  <Button variant="contained">Today</Button>
                  <Button>This Week</Button>
                  <Button>This Month</Button>
                </ButtonGroup>
              }
            />
            {/* <Divider/> */}
            <div style={{ padding: '120px 40px' }}>
              <Line data={lineChartData} options={lineChartOptions}></Line>
            </div>
          </Card>
          <Grid container>
              <Grid item xs={4}>
                <Card className={classes.card} style={{ marginTop: '20px', marginLeft: '20px' }}>
                  <div className={classes.flexRow} style={{ justifyContent: "center", gap: '20px', padding: '40px 30px', alignItems: "flex-start"}}>
                    <div style={{ height: '20px', width: '20px', background: '#FFE4D6', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '50%', padding: '10px'}}>
                      <AttachMoneyIcon style={{ color: 'orange'}}/>
                    </div>
                    <div className={classes.flexColumn}>
                      <Typography variant="h5" fontWeight={'bolder'}>$400.00</Typography>
                      <Typography variant="body2">In Transit</Typography>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.card} style={{ marginTop: '20px', marginLeft: '20px' }}>
                  <div className={classes.flexRow} style={{ justifyContent: "center", gap: '20px', padding: '40px 30px', alignItems: "flex-start"}}>
                    <div style={{ height: '20px', width: '20px', background: '#CEE6F3', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '50%', padding: '10px'}}>
                      <AttachMoneyIcon style={{ color: 'blue'}}/>
                    </div>
                    <div className={classes.flexColumn}>
                      <Typography variant="h5" fontWeight={'bolder'}>$400.00</Typography>
                      <Typography variant="body2">In Transit</Typography>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card className={classes.card} style={{ marginTop: '20px', marginLeft: '20px' }}>
                  <div className={classes.flexRow} style={{ justifyContent: "center", gap: '20px', padding: '40px 30px', alignItems: "flex-start"}}>
                    <div style={{ height: '20px', width: '20px', background: '#FFCACC', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '50%', padding: '10px'}}>
                      <AttachMoneyIcon style={{ color: 'red'}}/>
                    </div>
                    <div className={classes.flexColumn}>
                      <Typography variant="h5" fontWeight={'bolder'}>$400.00</Typography>
                      <Typography variant="body2">In Transit</Typography>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.card} style={{ marginTop: '20px', marginLeft: '20px' }}>
                  <div className={classes.flexRow} style={{ justifyContent: "center", gap: '20px', padding: '60px 20px', alignItems: "flex-start"}}>
                    <div style={{ height: '30px', width: '30px', background: '#CDFAD5', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '50%', padding: '10px'}}>
                      <AttachMoneyIcon style={{ color: '#16FF00'}}/>
                    </div>
                    <div className={classes.flexColumn}>
                      <Typography variant="h4" fontWeight={'bolder'}>$1 342.00</Typography>
                      <Typography variant="body2">In Transit</Typography>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card className={classes.card} style={{ marginTop: '20px', marginLeft: '20px' }}>
                  <div className={classes.flexRow} style={{ justifyContent: "center", gap: '20px', padding: '60px 20px', alignItems: "flex-start"}}>
                    <div style={{ height: '30px', width: '30px', background: '#FFCACC', display: "flex", alignItems: "center", justifyContent: "center", borderRadius: '50%', padding: '10px'}}>
                      <AttachMoneyIcon style={{ color: 'red'}}/>
                    </div>
                    <div className={classes.flexColumn}>
                      <Typography variant="h4" fontWeight={'bolder'}>$125.77</Typography>
                      <Typography variant="body2">In Transit</Typography>
                    </div>
                  </div>
                </Card>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
