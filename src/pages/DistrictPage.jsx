import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function DistrictPage() {
  const { id } = useParams()
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-white/10 rounded"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-green-400">
        Details Page
      </h1>

      <p className="mt-4 text-white/70">
        You clicked item with ID: {id}
      </p>

      <p className="mt-2 text-white/50">
        (You can expand this page later with full temple/festival info)
      </p>

    </div>
  )
}