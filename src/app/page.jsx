"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    phoneNo: "",
    email: "",
    dateOfBirth: "",
    birthPlace: ""
  });

  const [persons, setPersons] = useState([]);
  const [fromPerson, setFromPerson] = useState("");
  const [toPerson, setToPerson] = useState("");
  const [relation, setRelation] = useState("");
  // const [relationshipData, setRelationshipData] = useState([]);
  // console.log(relationshipData);

  // ---------------- PERSON ----------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addPerson = async (e) => {
    e.preventDefault();

    await fetch("/api/persons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm({
      name: "",
      gender: "",
      phoneNo: "",
      email: "",
      dateOfBirth: "",
      birthPlace: ""
    });

    fetchPersons();
  };

  const fetchPersons = async () => {
    const res = await fetch("/api/persons");
    const data = await res.json();
    setPersons(data.data);
  };

  // ---------------- RELATIONSHIP ----------------
  const addRelationship = async () => {
    if (!fromPerson || !toPerson || !relation) {
      alert("Select all fields");
      return;
    }

    await fetch("/api/relationship", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromPerson,
        to: toPerson,
        relation
      })
    });

    alert("Relationship Added");
    setFromPerson("");
    setToPerson("");
    setRelation("");
  };

  // fetch relationships

  // async function fetchRelationship() {
  //   const res = await fetch("/api/relationship");
  //   const data = await res.json();
  //   setRelationshipData(data.data);
  // }

  useEffect(() => {
    fetchPersons();
    // fetchRelationship();
  }, []);

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-10">
      {/* ADD PERSON */}
      <form onSubmit={addPerson} className="space-y-3 border p-6 rounded ">
        <h2 className="text-xl font-bold">Add Person</h2>

        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 w-full"
        />
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          name="phoneNo"
          value={form.phoneNo}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 w-full"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full"
        />
        <input
          type="date"
          name="dateOfBirth"
          value={form.dateOfBirth}
          onChange={handleChange}
          className="border p-2 w-full"
        />
        <input
          name="birthPlace"
          value={form.birthPlace}
          onChange={handleChange}
          placeholder="Birth Place"
          className="border p-2 w-full"
        />

        <button className="bg-green-700 text-white px-4 py-2 rounded">
          Add Person
        </button>
      </form>

      {/* ADD RELATIONSHIP */}
      <div className="border p-6 rounded space-y-3">
        <h2 className="text-xl font-bold">Add Relationship</h2>

        <select
          value={fromPerson}
          onChange={(e) => setFromPerson(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">From Person</option>
          {persons.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <select
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">Relation</option>
          <option value="FATHER">Father</option>
          <option value="MOTHER">Mother</option>
          <option value="SON">Son</option>
          <option value="DAUGHTER">Daughter</option>
          <option value="HUSBAND">Husband</option>
          <option value="WIFE">Wife</option>
        </select>

        <select
          value={toPerson}
          onChange={(e) => setToPerson(e.target.value)}
          className="border p-2 w-full"
        >
          <option value="">To Person</option>
          {persons.map((p) => (
            <option key={p._id} value={p._id}>
              {p.name}
            </option>
          ))}
        </select>

        <button
          onClick={addRelationship}
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Save Relationship
        </button>
      </div>

      {/* PERSON LIST */}
      <div className="border p-6 rounded">
        <h2 className="text-xl font-bold mb-3">All Family Members</h2>
        {persons.map((p) => (
          <div key={p._id} className="border-b py-2">
            {p.name} ({p.gender})
          </div>
        ))}
      </div>
      {/* show relationships  */}
      {/* <div>
        <table className="min-w-full border">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="p-2 text-left">Person A</th>
              <th className="p-2 text-left">Relation</th>
              <th className="p-2 text-left">Person B</th>
            </tr>
          </thead>
          <tbody>
            {relationshipData.map((rel) => (
              <tr key={rel._id} className="border-b">
                <td className="p-2">{rel.from?.name}</td>
                <td className="p-2 font-bold text-blue-500">{rel.relation}</td>
                <td className="p-2">{rel.to?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Page;
