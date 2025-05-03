import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack
} from '@mui/material';

export default function RoomForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // for edit
  const [room, setRoom] = useState({
    room_type: '',
    base_price: '',
    addons: ''
  });

  // Fetch room details if editing
  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/rooms/${id}`)
        .then(res => {
          const data = res.data.room;
          setRoom({
            room_type: data.room_type || '',
            base_price: data.base_price || '',
            addons: Array.isArray(data.addons) ? data.addons.join(', ') : ''
          });
        })
        .catch(err => console.error('Error loading room:', err));
    }
  }, [id]);

  const handleChange = (e) => {
    setRoom({
      ...room,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    const payload = {
      room_type: room.room_type,
      base_price: room.base_price,
      addons: room.addons
        ? room.addons.split(',').map(a => a.trim())
        : []
    };

    try {
      if (id) {
        await axios.put(`http://localhost:5000/rooms/${id}`, payload);
        alert("Room updated successfully");
      } else {
        await axios.post('http://localhost:5000/rooms', payload);
        alert("Room added successfully");
      }
      navigate('/rooms');
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save room");
    }
  };

  return (
    <Paper sx={{ p: 4, maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" mb={2}>
        {id ? 'Edit Room' : 'Add New Room'}
      </Typography>
      <Stack spacing={2}>
        <TextField
          name="room_type"
          label="Room Type"
          fullWidth
          value={room.room_type}
          onChange={handleChange}
        />
        <TextField
          name="base_price"
          label="Base Price"
          type="number"
          fullWidth
          value={room.base_price}
          onChange={handleChange}
        />
        <TextField
          name="addons"
          label="Addons (comma separated)"
          fullWidth
          value={room.addons}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {id ? 'Update Room' : 'Add Room'}
        </Button>
      </Stack>
    </Paper>
  );
}
