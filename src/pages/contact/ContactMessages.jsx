import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

// ✅ Base URLs
const LOCAL_URL = 'http://localhost:5000';
const PROD_URL = 'https://radharidhani.in';

// ✅ Use the one you want
const BASE_URL = PROD_URL; // switch to PROD_URL for production

export default function ContactMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/api/contact-messages`)
      .then(res => setMessages(res.data.messages))
      .catch(err => console.error('Error fetching contact messages:', err));
  }, []);

  return (
    <Paper sx={{ p: 3, m: 2 }}>
      <Typography variant="h5" gutterBottom>
        Contact Messages
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact No</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Submitted At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((msg) => (
            <TableRow key={msg.id}>
              <TableCell>{msg.full_name}</TableCell>
              <TableCell>{msg.email}</TableCell>
              <TableCell>{msg.contact_no || '-'}</TableCell>
              <TableCell>{msg.message}</TableCell>
              <TableCell>{new Date(msg.submitted_at).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
