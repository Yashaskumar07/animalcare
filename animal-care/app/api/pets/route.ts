import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const pet = await prisma.pet.create({
      data: {
        name: body.name,
        species: body.species,
        age: body.age,
        imageUrl: body.imageUrl,
        description: body.description,
        status: body.status,
      },
    });

    return NextResponse.json(pet, { status: 201 });
  } catch (error) {
    console.error("Error creating pet:", error);
    return NextResponse.json({ error: "Failed to create pet" }, { status: 500 });
  }
}
