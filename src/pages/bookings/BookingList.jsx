import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterDate, setFilterDate] = useState('');
  const navigate = useNavigate();

  const fetchBookings = async () => {
    try {
      const response = await axios.get('https://radharidhani.in/api/bookings');
      setBookings(response.data.bookings || []);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const filteredBookings = filterDate
    ? bookings.filter((b) => b.checkin.startsWith(filterDate))
    : bookings;

  return (
    <Box p={2}>
      <Typography variant="h5" mb={2}>All Bookings</Typography>

      <TextField
        label="Filter by Check-in Date"
        type="date"
        value={filterDate}
        onChange={(e) => setFilterDate(e.target.value)}
        sx={{ mb: 2 }}
        InputLabelProps={{ shrink: true }}
      />

      {loading ? (
        <CircularProgress />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Booking ID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Check-in</TableCell>
                <TableCell>Check-out</TableCell>
                <TableCell>Room ID</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.id}</TableCell>
                  <TableCell>{booking.full_name}</TableCell>
                  <TableCell>{booking.checkin}</TableCell>
                  <TableCell>{booking.checkout}</TableCell>
                  <TableCell>{booking.room_id}</TableCell>
                  <TableCell>₹{booking.total}</TableCell>
                  <TableCell>
                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => navigate(`/bookings/${booking.id}`)}
                    >
                      View Summary
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
}
