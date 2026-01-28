"use client";
import React, { useEffect, useState } from "react";

const page = () => {
  const [relationshipData, setRelationshipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchRelationship() {
    try {
      setLoading(true);
      const res = await fetch("/api/relationship");
      const data = await res.json();
      setRelationshipData(data.data || []);
      setError(null);
    } catch (err) {
      setError("Failed to load relationships");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRelationship();
  }, []);

  const getRelationBadgeColor = (relation) => {
    const colors = {
      FATHER: "bg-emerald-100 text-emerald-800 border-l-4 border-emerald-700",
      MOTHER: "bg-green-100 text-green-800 border-l-4 border-green-700",
      SON: "bg-teal-100 text-teal-800 border-l-4 border-teal-700",
      BROTHER: "bg-emerald-100 text-emerald-800 border-l-4 border-emerald-700",
      DAUGHTER: "bg-lime-100 text-lime-800 border-l-4 border-lime-700",
      HUSBAND: "bg-cyan-100 text-cyan-800 border-l-4 border-cyan-700",
      WIFE: "bg-green-50 text-green-900 border-l-4 border-green-600"
    };
    return (
      colors[relation] || "bg-gray-100 text-gray-800 border-l-4 border-gray-600"
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mb-4"></div>
          <p className="text-gray-600">Loading relationships...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="text-center text-red-600">
          <p className="text-lg font-semibold">{error}</p>
          <button
            onClick={fetchRelationship}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 pt-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl">🌳</span>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
                Family Relationships
              </h1>
              <p className="text-gray-600 mt-2">
                Discover and explore family connections in Vanshavali
              </p>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {relationshipData.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-16 text-center border-t-4 border-green-700">
            <p className="text-gray-500 text-lg">
              No relationships found. Add relationships to get started!
            </p>
          </div>
        ) : (
          <>
            {/* Stats Section - Only Total Relationships */}
            <div className="mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-emerald-700 hover:shadow-xl transition inline-block w-full md:w-auto">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-semibold">
                      Total Relationships
                    </p>
                    <p className="text-4xl font-bold text-emerald-700 mt-3">
                      {relationshipData.length}
                    </p>
                  </div>
                  <span className="text-5xl ml-6">👥</span>
                </div>
              </div>
            </div>

            {/* List View */}
            <div className="space-y-4">
              {relationshipData.map((rel) => (
                <div
                  key={rel._id}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border-l-4 border-green-700"
                >
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    {/* Person A */}
                    <div className="col-span-1 md:col-span-2 flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {rel.from?.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">
                          {rel.from?.name}
                        </p>
                        <p className="text-xs text-gray-500">Person</p>
                      </div>
                    </div>

                    {/* Relationship Badge */}
                    <div className="col-span-1 flex justify-center">
                      <span
                        className={`inline-block px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap ${getRelationBadgeColor(rel.relation)}`}
                      >
                        {rel.relation}
                      </span>
                    </div>

                    {/* Person B */}
                    <div className="col-span-1 md:col-span-2 flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        {rel.to?.name?.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="font-bold text-gray-800 text-lg">
                          {rel.to?.name}
                        </p>
                        <p className="text-xs text-gray-500">Person</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default page;
