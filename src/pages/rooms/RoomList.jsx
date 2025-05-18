// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Box,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Typography,
//   IconButton,
//   TableContainer,
//   Paper,
//   Modal,
//   TextField,
//   Button,
//   Stack
// } from '@mui/material';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';

// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   borderRadius: 2,
//   boxShadow: 24,
//   p: 4
// };

// export default function RoomList() {
//   const [rooms, setRooms] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [currentRoom, setCurrentRoom] = useState(null);

//   const fetchRooms = async () => {
//     try {
//       const res = await axios.get('https://radharidhani.in/api/available-room-types');
//       setRooms(res.data.rooms);
//     } catch (error) {
//       console.error('Error fetching rooms:', error);
//     }
//   };

//   const deleteRoom = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this room?')) return;
//     try {
//       await axios.delete(`https://radharidhani.in/api/rooms/${id}`);
//       fetchRooms();
//     } catch (error) {
//       console.error('Error deleting room:', error);
//     }
//   };

//   const openEditModal = (room) => {
//     setCurrentRoom({
//       ...room,
//       addons: Array.isArray(room.addons) ? room.addons.join(', ') : ''
//     });
//     setOpen(true);
//   };

//   const handleUpdate = async () => {
//     if (!currentRoom?.id) {
//       console.warn("Room ID is missing for update.");
//       return;
//     }

//     try {
//       console.log("Updating room ID:", currentRoom.id);

//       await axios.put(`https://radharidhani.in/api/rooms/${currentRoom.id}`, {
//         room_type: currentRoom.room_type,
//         base_price: currentRoom.base_price,
//         addons: currentRoom.addons
//           ? currentRoom.addons.split(',').map((a) => a.trim())
//           : []
//       });

//       setOpen(false);
//       fetchRooms();
//     } catch (error) {
//       console.error('Error updating room:', error);
//     }
//   };

//   useEffect(() => {
//     fetchRooms();
//   }, []);

//   return (
//     <Box>
//       <Typography variant="h4" mb={2}>
//         Rooms
//       </Typography>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>ID</strong></TableCell>
//               <TableCell><strong>Type</strong></TableCell>
//               <TableCell><strong>Price</strong></TableCell>
//               <TableCell><strong>Addons</strong></TableCell>
//               <TableCell><strong>Actions</strong></TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rooms.map((room) => (
//               <TableRow key={room.id}>
//                 <TableCell>{room.id}</TableCell>
//                 <TableCell>{room.room_type}</TableCell>
//                 <TableCell>₹{parseFloat(room.base_price).toFixed(2)}</TableCell>
//                 <TableCell>{room.addons?.join(', ')}</TableCell>
//                 <TableCell>
//                   <IconButton color="primary" onClick={() => openEditModal(room)}>
//                     <EditIcon />
//                   </IconButton>
//                   <IconButton color="error" onClick={() => deleteRoom(room.id)}>
//                     <DeleteIcon />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//             {rooms.length === 0 && (
//               <TableRow>
//                 <TableCell colSpan={5} align="center">
//                   No rooms found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Edit Modal */}
//       <Modal open={open} onClose={() => setOpen(false)}>
//         <Box sx={modalStyle}>
//           <Typography variant="h6" mb={2}>Edit Room</Typography>
//           <Stack spacing={2}>
//             <TextField
//               label="Room Type"
//               fullWidth
//               value={currentRoom?.room_type || ''}
//               onChange={(e) =>
//                 setCurrentRoom({ ...currentRoom, room_type: e.target.value })
//               }
//             />
//             <TextField
//               label="Base Price"
//               fullWidth
//               type="number"
//               value={currentRoom?.base_price || ''}
//               onChange={(e) =>
//                 setCurrentRoom({ ...currentRoom, base_price: e.target.value })
//               }
//             />
//             <TextField
//               label="Addons (comma-separated)"
//               fullWidth
//               value={currentRoom?.addons || ''}
//               onChange={(e) =>
//                 setCurrentRoom({ ...currentRoom, addons: e.target.value })
//               }
//             />
//             <Button variant="contained" color="primary" onClick={handleUpdate}>
//               Save Changes
//             </Button>
//           </Stack>
//         </Box>
//       </Modal>
//     </Box>
//   );
// }






import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  IconButton,
  TableContainer,
  Paper,
  Modal,
  TextField,
  Button,
  Stack
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4
};

export default function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);

  const fetchRooms = async () => {
    try {
      const res = await axios.get('https://radharidhani.in/api/available-room-types');
      setRooms(res.data.rooms);
    } catch (error) {
      console.error('Error fetching rooms:', error);
    }
  };

  const deleteRoom = async (id) => {
    if (!window.confirm('Are you sure you want to delete this room?')) return;
    try {
      await axios.delete(`https://radharidhani.in/api/rooms/${id}`);
      fetchRooms();
    } catch (error) {
      console.error('Error deleting room:', error);
    }
  };

  const openEditModal = (room) => {
    setCurrentRoom({
      ...room,
      addons: Array.isArray(room.addons) ? room.addons.join(', ') : '',
      total_inventory: room.total_inventory
    });
    setOpen(true);
  };

  const handleUpdate = async () => {
    if (!currentRoom?.id) {
      console.warn("Room ID is missing for update.");
      return;
    }

    try {
      await axios.put(`https://radharidhani.in/api/rooms/${currentRoom.id}`, {
        room_type: currentRoom.room_type,
        base_price: currentRoom.base_price,
        total_inventory: parseInt(currentRoom.total_inventory),
        addons: currentRoom.addons
          ? currentRoom.addons.split(',').map((a) => a.trim())
          : []
      });

      setOpen(false);
      fetchRooms();
    } catch (error) {
      console.error('Error updating room:', error);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <Box>
      <Typography variant="h4" mb={2}>
        Rooms
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Type</strong></TableCell>
              <TableCell><strong>Price</strong></TableCell>
              <TableCell><strong>Inventory</strong></TableCell>
              <TableCell><strong>Addons</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell>{room.id}</TableCell>
                <TableCell>{room.room_type}</TableCell>
                <TableCell>₹{parseFloat(room.base_price).toFixed(2)}</TableCell>
                <TableCell>{room.total_inventory}</TableCell>
                <TableCell>{room.addons?.join(', ')}</TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => openEditModal(room)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => deleteRoom(room.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {rooms.length === 0 && (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  No rooms found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={modalStyle}>
          <Typography variant="h6" mb={2}>Edit Room</Typography>
          <Stack spacing={2}>
            <TextField
              label="Room Type"
              fullWidth
              value={currentRoom?.room_type || ''}
              onChange={(e) =>
                setCurrentRoom({ ...currentRoom, room_type: e.target.value })
              }
            />
            <TextField
              label="Base Price"
              fullWidth
              type="number"
              value={currentRoom?.base_price || ''}
              onChange={(e) =>
                setCurrentRoom({ ...currentRoom, base_price: e.target.value })
              }
            />
            <TextField
              label="Total Inventory"
              fullWidth
              type="number"
              value={currentRoom?.total_inventory || ''}
              onChange={(e) =>
                setCurrentRoom({ ...currentRoom, total_inventory: e.target.value })
              }
            />
            <TextField
              label="Addons (comma-separated)"
              fullWidth
              value={currentRoom?.addons || ''}
              onChange={(e) =>
                setCurrentRoom({ ...currentRoom, addons: e.target.value })
              }
            />
            <Button variant="contained" color="primary" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Stack>
        </Box>
      </Modal>
    </Box>
  );
}
