// import { useEffect, useState } from 'react';
// import {
//   Box,
//   Button,
//   Grid,
//   MenuItem,
//   TextField,
//   Typography,
//   Autocomplete
// } from '@mui/material';
// import axios from 'axios';

// export default function BookingForm() {
//   const [rooms, setRooms] = useState([]);
//   const [formData, setFormData] = useState({
//     checkin: '',
//     checkout: '',
//     room_id: '',
//     adults: 1,
//     children: 0,
//     full_name: '',
//     email: '',
//     mobile: '',
//     gst_number: '',
//     special_request: '',
//     addons: [],
//     subtotal: '',
//     tax: '',
//     total: ''
//   });

//   // Fetch available room types
//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         const res = await axios.get('https://radharidhani.in/api/available-room-types');
//         setRooms(res.data.rooms || []);
//       } catch (err) {
//         console.error('Failed to fetch rooms', err);
//       }
//     };
//     fetchRooms();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('https://radharidhani.in/api/confirm-booking', {
//         ...formData,
//         addons: formData.addons,
//         room_id: Number(formData.room_id)
//       });
//       alert('✅ Booking confirmed!');
//       setFormData({
//         checkin: '',
//         checkout: '',
//         room_id: '',
//         adults: 1,
//         children: 0,
//         full_name: '',
//         email: '',
//         mobile: '',
//         gst_number: '',
//         special_request: '',
//         addons: [],
//         subtotal: '',
//         tax: '',
//         total: ''
//       });
//     } catch (err) {
//       console.error('Booking failed', err);
//       alert('❌ Booking failed!');
//     }
//   };

//   return (
//     <Box p={3}>
//       <Typography variant="h4" mb={3}>
//         Confirm Booking
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Check-in"
//               type="date"
//               name="checkin"
//               value={formData.checkin}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               fullWidth
//               label="Check-out"
//               type="date"
//               name="checkout"
//               value={formData.checkout}
//               onChange={handleChange}
//               InputLabelProps={{ shrink: true }}
//               required
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               select
//               label="Room"
//               name="room_id"
//               value={formData.room_id}
//               onChange={handleChange}
//               fullWidth
//               required
//             >
//               {rooms.map((room) => (
//                 <MenuItem key={room.id} value={room.id}>
//                   {room.room_type} - ₹{room.base_price}
//                 </MenuItem>
//               ))}
//             </TextField>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               type="number"
//               name="adults"
//               label="Adults"
//               value={formData.adults}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               type="number"
//               name="children"
//               label="Children"
//               value={formData.children}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               name="full_name"
//               label="Full Name"
//               value={formData.full_name}
//               onChange={handleChange}
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               name="email"
//               label="Email"
//               value={formData.email}
//               onChange={handleChange}
//               type="email"
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               name="mobile"
//               label="Mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               type="tel"
//               fullWidth
//               required
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               name="gst_number"
//               label="GST Number"
//               value={formData.gst_number}
//               onChange={handleChange}
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="special_request"
//               label="Special Request"
//               value={formData.special_request}
//               onChange={handleChange}
//               fullWidth
//               multiline
//               rows={2}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Autocomplete
//               multiple
//               freeSolo
//               options={[]}
//               value={formData.addons}
//               onChange={(e, value) => setFormData((prev) => ({ ...prev, addons: value }))}
//               renderInput={(params) => (
//                 <TextField {...params} label="Addons" placeholder="Type and press enter" fullWidth />
//               )}
//             />
//           </Grid>
//           <Grid item xs={4}>
//             <TextField
//               name="subtotal"
//               label="Subtotal"
//               value={formData.subtotal}
//               onChange={handleChange}
//               type="number"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={4}>
//             <TextField
//               name="tax"
//               label="Tax"
//               value={formData.tax}
//               onChange={handleChange}
//               type="number"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={4}>
//             <TextField
//               name="total"
//               label="Total"
//               value={formData.total}
//               onChange={handleChange}
//               type="number"
//               fullWidth
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button variant="contained" color="primary" type="submit">
//               Confirm Booking
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Box>
//   );
// }



import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Autocomplete
} from '@mui/material';
import axios from 'axios';
import dayjs from 'dayjs';

export default function BookingForm() {
  const [rooms, setRooms] = useState([]);
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    room_id: '',
    adults: 1,
    children: 0,
    full_name: '',
    email: '',
    mobile: '',
    gst_number: '',
    special_request: '',
    addons: [],
    subtotal: '',
    tax: '',
    total: ''
  });

  // Fetch available room types
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get('https://radharidhani.in/api/available-room-types');
        setRooms(res.data.rooms || []);
      } catch (err) {
        console.error('Failed to fetch rooms', err);
      }
    };
    fetchRooms();
  }, []);

  // Auto-calculate price based on room + dates
  useEffect(() => {
    const room = rooms.find((r) => r.id === Number(formData.room_id));
    if (room && formData.checkin && formData.checkout) {
      const nights = dayjs(formData.checkout).diff(dayjs(formData.checkin), 'day');
      if (nights > 0) {
        const discountedBase = room.base_price * 0.5;
        const subtotal = discountedBase * nights;
        const taxRate = 0.12;
        const tax = Math.round(subtotal * (taxRate / (1 + taxRate)));
        const total = subtotal;

        setFormData((prev) => ({
          ...prev,
          subtotal,
          tax,
          total
        }));
      }
    }
  }, [formData.room_id, formData.checkin, formData.checkout, rooms]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (dayjs(formData.checkin).isAfter(dayjs(formData.checkout))) {
      alert("❌ Check-in date cannot be after check-out date.");
      return;
    }

    try {
      const res = await axios.post('https://radharidhani.in/api/confirm-booking', {
        ...formData,
        addons: formData.addons,
        room_id: Number(formData.room_id)
      });
      alert('✅ Booking confirmed!');
      setFormData({
        checkin: '',
        checkout: '',
        room_id: '',
        adults: 1,
        children: 0,
        full_name: '',
        email: '',
        mobile: '',
        gst_number: '',
        special_request: '',
        addons: [],
        subtotal: '',
        tax: '',
        total: ''
      });
    } catch (err) {
      console.error('Booking failed', err);
      alert('❌ Booking failed!');
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Confirm Booking
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Check-in"
              type="date"
              name="checkin"
              value={formData.checkin}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Check-out"
              type="date"
              name="checkout"
              value={formData.checkout}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Room"
              name="room_id"
              value={formData.room_id}
              onChange={handleChange}
              fullWidth
              required
            >
              {rooms.map((room) => (
                <MenuItem key={room.id} value={room.id}>
                  {room.room_type} - ₹{room.base_price}
                </MenuItem>
              ))}
            </TextField>

            {formData.room_id && (
              <Box mt={1}>
                <Typography variant="body2" color="text.secondary">
                  {rooms.find((r) => r.id === Number(formData.room_id))?.room_type} — ₹
                  {rooms.find((r) => r.id === Number(formData.room_id))?.base_price}
                </Typography>
              </Box>
            )}
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="adults"
              label="Adults"
              value={formData.adults}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="number"
              name="children"
              label="Children"
              value={formData.children}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="full_name"
              label="Full Name"
              value={formData.full_name}
              onChange={handleChange}
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="mobile"
              label="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              type="tel"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="gst_number"
              label="GST Number"
              value={formData.gst_number}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="special_request"
              label="Special Request"
              value={formData.special_request}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
            />
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              multiple
              freeSolo
              options={[]}
              value={formData.addons}
              onChange={(e, value) => setFormData((prev) => ({ ...prev, addons: value }))}
              renderInput={(params) => (
                <TextField {...params} label="Addons" placeholder="Type and press enter" fullWidth />
              )}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="subtotal"
              label="Subtotal"
              value={formData.subtotal}
              onChange={handleChange}
              type="number"
              fullWidth
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="tax"
              label="Tax"
              value={formData.tax}
              onChange={handleChange}
              type="number"
              fullWidth
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              name="total"
              label="Total"
              value={formData.total}
              onChange={handleChange}
              type="number"
              fullWidth
              InputProps={{ readOnly: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Confirm Booking
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
