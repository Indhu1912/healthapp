const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple hardcoded user
const user = {
  username: 'admin',
  password: '123456',
};

mongoose.connect('mongodb://localhost:27017/healthapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  doctorName: String,
  date: String,
  time: String,
  reason: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === user.username && password === user.password) {
    res.send({ success: true, message: 'Login successful' });
  } else {
    res.status(401).send({ success: false, message: 'Invalid credentials' });
  }
});

// Appointments API
app.post('/appointments', async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.send({ message: 'Appointment booked!' });
});

app.get('/appointments', async (req, res) => {
  const appointments = await Appointment.find();
  res.send(appointments);
});

// Cancel appointment
app.delete('/appointments/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.findByIdAndDelete(id);
    res.send({ message: 'Appointment cancelled' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to cancel appointment' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));
