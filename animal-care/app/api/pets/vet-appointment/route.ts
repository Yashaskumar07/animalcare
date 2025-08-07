import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendVetAppointmentEmails } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      petName,
      ownerName,
      email,
      species,
      date,
      time,
      reason,
    } = body;

    console.log("Received appointment data:", body);

    // Validate all fields
    const missingFields = [];

    if (!petName?.trim()) missingFields.push("petName");
    if (!ownerName?.trim()) missingFields.push("ownerName");
    if (!email?.trim()) missingFields.push("email");
    if (!species?.trim()) missingFields.push("species");
    if (!date?.trim()) missingFields.push("date");
    if (!time?.trim()) missingFields.push("time");
    if (!reason?.trim()) missingFields.push("reason");

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Missing fields: ${missingFields.join(", ")}` },
        { status: 400 }
      );
    }

    // Save to DB
    const appointment = await prisma.vetAppointment.create({
      data: {
        petName,
        ownerName,
        email,
        species,
        date: new Date(date),
        time,
        reason,
      },
    });

    // Send confirmation emails to owner and doctor
    await sendVetAppointmentEmails(
      email,
      process.env.DOCTOR_EMAIL!,
      {
        petName,
        ownerName,
        contact: email,
        species,
        date,
        time,
        reason,
      }
    );

    return NextResponse.json({ success: true, appointment }, { status: 201 });

  } catch (error: any) {
    console.error("Vet Appointment Error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to book appointment." },
      { status: 500 }
    );
  }
}
