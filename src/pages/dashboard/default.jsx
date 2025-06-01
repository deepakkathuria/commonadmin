import { useEffect, useState } from 'react';
import axios from 'axios';

// material-ui
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// project imports
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

// ✅ API base URLs
const LOCAL_URL = 'http://localhost:5000';
const PROD_URL = 'https://radharidhani.in';
const BASE_URL = PROD_URL; // Switch to PROD_URL when deploying

export default function DashboardDefault() {
  const [todayCount, setTodayCount] = useState(0);
  const [tomorrowCount, setTomorrowCount] = useState(0);
  const [upcomingCount, setUpcomingCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchBookingStats = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/booking-summary-dashboard`);
        const { today, tomorrow, totalUpcoming, total } = response.data;

        setTodayCount(parseInt(today) || 0);
        setTomorrowCount(parseInt(tomorrow) || 0);
        setUpcomingCount(parseInt(totalUpcoming) || 0);
        setTotalCount(parseInt(total) || 0);
      } catch (error) {
        console.error('Error fetching booking stats:', error);
      }
    };

    fetchBookingStats();
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4">Dashboard</Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnalyticEcommerce
          title="Total Bookings"
          count={totalCount}
          extra="All bookings made till date"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnalyticEcommerce
          title="Today's Bookings"
          count={todayCount}
          extra="Bookings for today"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnalyticEcommerce
          title="Tomorrow's Bookings"
          count={tomorrowCount}
          extra="Bookings for tomorrow"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <AnalyticEcommerce
          title="Upcoming Bookings"
          count={upcomingCount}
          extra="From today onwards"
        />
      </Grid>
    </Grid>
  );
}
