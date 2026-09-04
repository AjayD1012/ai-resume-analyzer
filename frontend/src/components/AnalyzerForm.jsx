import { useState } from "react"
import axios from "axios"

function AnalyzerForm({ setResult, setLoading }) {
  const [resumeText, setResumeText] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async () => {
    if (!resumeText || !jobDescription) {
      setError("Both fields are required.")
      return
    }
    setError("")
    setLoading(true)
    try {
      const response = await axios.post("http://localhost:8080/api/analyze", {
        resumeText,
        jobDescription
      })
      setResult(response.data)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 font-medium">Resume Text</label>
        <textarea
          className="w-full h-40 bg-gray-800 text-white rounded-xl p-3 outline-none border border-gray-700 focus:border-blue-500"
          placeholder="Paste your resume here..."
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 mb-2 font-medium">Job Description</label>
        <textarea
          className="w-full h-40 bg-gray-800 text-white rounded-xl p-3 outline-none border border-gray-700 focus:border-blue-500"
          placeholder="Paste job description here..."
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>
      {error && <p className="text-red-400 mb-3">{error}</p>}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition"
      >
        Analyze Resume
      </button>
    </div>
  )
}

export default AnalyzerForm