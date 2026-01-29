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
  const [showForm, setShowForm] = useState(false);
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
    setShowForm(false);
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

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <div className="p-10 max-w-4xl mx-auto space-y-10 pt-22">
      <div className="border rounded p-6 bg-green-50 space-y-3">
        <h1 className="text-2xl font-bold text-green-800">
          Vanshavali – Family Tree
        </h1>

        <p className="text-gray-700">
          Vanshavali is a digital family tree application that helps you store
          and manage information about your family members in one place.
        </p>

        <p className="text-gray-700">
          You can add each person to the family tree and define relationships
          such as <strong>Father, Mother, Son,Brother, and Daughter</strong>.
        </p>

        <p className="text-gray-700">
          This makes it easy to understand your complete family lineage and view
          relationships across multiple generations.
        </p>
      </div>

      {/* ADD PERSON */}

      <button
        onClick={() => setShowForm(true)}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Add User
      </button>

      {showForm && (
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
      )}

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
          <option value="BROTHER">Brother</option>
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
      <div className="border rounded p-6 ">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          All Family Members
        </h2>

        {/* Scrollable list */}
        <div className="divide-y max-h-[240px] overflow-y-auto">
          {persons.map((p) => (
            <div
              key={p._id}
              className="py-3 px-2 flex justify-between hover:bg-white rounded-lg transition"
            >
              <div>
                <p className="text-base font-medium text-gray-900">{p.name}</p>
                <p className="text-sm text-gray-500">{p.gender}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
