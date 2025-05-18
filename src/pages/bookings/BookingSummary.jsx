import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Typography, Paper, Stack, Divider, CircularProgress
} from '@mui/material';
import axios from 'axios';

export default function BookingSummary() {
  const { id } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBooking = async () => {
    try {
      const res = await axios.get(`https://radharidhani.in/api/booking-summary/${id}`);
      setBooking(res.data.booking);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooking();
  }, [id]);

  if (loading) return <CircularProgress />;
  if (!booking) return <Typography>No booking found.</Typography>;

  return (
    <Paper sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h5" mb={2}>Booking Summary</Typography>
      <Divider sx={{ mb: 2 }} />

      <Stack spacing={1}>
        <Typography><strong>Booking ID:</strong> {booking.id}</Typography>
        <Typography><strong>Customer:</strong> {booking.full_name} ({booking.email})</Typography>
        <Typography><strong>Mobile:</strong> {booking.mobile}</Typography>
        <Typography><strong>GST No:</strong> {booking.gst_number || 'N/A'}</Typography>
        <Typography><strong>Room Type:</strong> {booking.room_type}</Typography>
        <Typography><strong>Base Price:</strong> ₹{booking.base_price}</Typography>
        <Typography><strong>Check-in:</strong> {booking.checkin}</Typography>
        <Typography><strong>Check-out:</strong> {booking.checkout}</Typography>
        <Typography><strong>Adults:</strong> {booking.adults}</Typography>
        <Typography><strong>Children:</strong> {booking.children}</Typography>
        <Typography><strong>Special Request:</strong> {booking.special_request || 'None'}</Typography>
        <Typography><strong>Addons:</strong> {(booking.addons || []).join(', ')}</Typography>
        <Typography><strong>Subtotal:</strong> ₹{booking.subtotal}</Typography>
        <Typography><strong>Tax:</strong> ₹{booking.tax}</Typography>
        <Typography><strong>Total:</strong> ₹{booking.total}</Typography>
      </Stack>
    </Paper>
  );
}
