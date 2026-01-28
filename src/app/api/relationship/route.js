import connectDB from "@/lib/mongodb";
import Relationship from "@/models/Relationship";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const newRelation = await Relationship.create({
      from: body.from,
      to: body.to,
      relation: body.relation
    });
    const dataWithNames = await Relationship.findById(newRelation._id)
      .populate("from", "name")
      .populate("to", "name");

    return NextResponse.json(
      {
        success: true,
        data: dataWithNames,
        message: "Relationship added successfully"
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

// relationShip GET  Method

export async function GET() {
  try {
    await connectDB();

    const relations = await Relationship.find()
      .populate("from", "name") // Gets name for the 'from' person
      .populate("to", "name"); // CHANGED THIS: 'form' -> 'to'

    return NextResponse.json(
      { message: "relation fetch", data: relations },
      { status: 200 } // Use 200 for successful fetching (201 is for creating)
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Relation failed",
        error: error.message // Use error.message to see the actual error string
      },
      { status: 500 } // Use 500 for server errors
    );
  }
}
