function ResultsDisplay({ result }) {
  return (
    <div className="mt-10 space-y-6">

      {/* Match Score */}
      <div className="bg-gray-900 rounded-2xl p-6 text-center">
        <h2 className="text-gray-400 mb-2">Match Score</h2>
        <div className="text-6xl font-bold text-blue-400">
          {result.matchPercentage}%
        </div>
      </div>

      {/* Summary */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-3">Summary</h2>
        <p className="text-gray-300">{result.summary}</p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Matching Skills */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-green-400 mb-3">Matching Skills</h2>
          <ul className="space-y-2">
            {result.matchingSkills.map((skill, i) => (
              <li key={i} className="bg-green-900 text-green-300 px-3 py-1 rounded-lg">
                ✅ {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Missing Skills */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-red-400 mb-3">Missing Skills</h2>
          <ul className="space-y-2">
            {result.missingSkills.map((skill, i) => (
              <li key={i} className="bg-red-900 text-red-300 px-3 py-1 rounded-lg">
                ❌ {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Suggestions */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-yellow-400 mb-3">Suggestions</h2>
          <ul className="space-y-2">
            {result.suggestions.map((s, i) => (
              <li key={i} className="text-gray-300">💡 {s}</li>
            ))}
          </ul>
        </div>

        {/* Recommended Skills */}
        <div className="bg-gray-900 rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-purple-400 mb-3">Recommended Skills</h2>
          <ul className="space-y-2">
            {result.recommendedSkills.map((skill, i) => (
              <li key={i} className="text-gray-300">⭐ {skill}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Interview Questions */}
      <div className="bg-gray-900 rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-blue-400 mb-3">Interview Questions</h2>
        <ol className="space-y-3 list-decimal list-inside">
          {result.interviewQuestions.map((q, i) => (
            <li key={i} className="text-gray-300">{q}</li>
          ))}
        </ol>
      </div>

    </div>
  )
}

export default ResultsDisplay