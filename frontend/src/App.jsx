import { useState } from "react"
import AnalyzerForm from "./components/AnalyzerForm"
import ResultsDisplay from "./components/ResultsDisplay"

function App() {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-400 mb-2">
            AI Resume Analyzer
          </h1>
          <p className="text-gray-400">
            Analyze your resume against any job description instantly
          </p>
        </div>

        {/* Form */}
        <AnalyzerForm setResult={setResult} setLoading={setLoading} />

        {/* Loading */}
        {loading && (
          <div className="text-center mt-10 text-blue-400 text-lg animate-pulse">
            Analyzing your resume...
          </div>
        )}

        {/* Results */}
        {result && !loading && <ResultsDisplay result={result} />}

      </div>
    </div>
  )
}

export default App