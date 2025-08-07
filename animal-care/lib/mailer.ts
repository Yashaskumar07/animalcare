import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail", // or use "smtp.ethereal.email" for testing
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVetAppointmentEmails = async (
  userEmail: string,
  doctorEmail: string,
  appointmentDetails: {
    petName: string;
    ownerName: string;
    contact: string;
    species: string;
    date: string;
    time: string;
    reason: string;
  }
) => {
  const mailOptionsUser = {
    from: `"Animal Care" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject: "Appointment Confirmation",
    text: `Hello ${appointmentDetails.ownerName},

Your appointment for ${appointmentDetails.petName} has been booked successfully on ${appointmentDetails.date} at ${appointmentDetails.time}.

- Species: ${appointmentDetails.species}
- Reason: ${appointmentDetails.reason}
- Contact: ${appointmentDetails.contact}

Thank you for using our platform.
`,
  };

  const mailOptionsDoctor = {
    from: `"Animal Care" <${process.env.EMAIL_USER}>`,
    to: doctorEmail,
    subject: "New Vet Appointment Booked",
    text: `Doctor,

A new appointment has been booked:

- Pet Name: ${appointmentDetails.petName}
- Owner: ${appointmentDetails.ownerName}
- Contact: ${appointmentDetails.contact}
- Species: ${appointmentDetails.species}
- Date: ${appointmentDetails.date}
- Time: ${appointmentDetails.time}
- Reason: ${appointmentDetails.reason}

Please check your dashboard for details.
`,
  };

  await transporter.sendMail(mailOptionsUser);
  await transporter.sendMail(mailOptionsDoctor);
};
