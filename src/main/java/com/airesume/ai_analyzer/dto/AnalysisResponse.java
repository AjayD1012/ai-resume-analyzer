package com.airesume.ai_analyzer.dto;

import lombok.Data;

import java.util.List;

@Data
public class AnalysisResponse {
    
    private int matchPercentage;
    private List<String> matchingSkills;
    private List<String> missingSkills;
    private List<String> suggestions;
    private List<String> recommendedSkills;
    private List<String> interviewQuestions;
    private String summary;
    


}
