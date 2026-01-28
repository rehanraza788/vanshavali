import connectDB from "@/lib/mongodb";
import Persons from "@/models/Persons";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newPerson = new Persons({
      name: body.name,
      gender: body.gender,
      phoneNo: body.phoneNo,
      email: body.email,
      dateOfBirth: body.dateOfBirth,
      birthPlace: body.birthPlace
    });

    await newPerson.save();
    return NextResponse.json(
      {
        success: true,
        data: newPerson,
        message: "person Added Successfully"
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "person not found "
      },
      { status: 401 }
    );
  }
}

// Fetch api

export async function GET() {
  try {
    await connectDB();
    const allPersons = await Persons.find();
    return NextResponse.json(
      {
        data: allPersons,
        message: "data fetch successfully"
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "data fetch failed", error },
      { status: 401 }
    );
  }
}
