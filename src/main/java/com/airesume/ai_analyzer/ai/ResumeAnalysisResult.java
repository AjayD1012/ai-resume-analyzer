package com.airesume.ai_analyzer.ai;

import java.util.List;

public record ResumeAnalysisResult(
        int matchPercentage,
        List<String> matchingSkills,
        List<String> missingSkills,
        List<String> suggestions,
        List<String> recommendedSkills,
        List<String> interviewQuestions,
        String summary
) {}