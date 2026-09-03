package com.airesume.ai_analyzer.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AnalysisRequest {

    @NotBlank(message = "Resume text can't be empty")
    private String resumeText;

    @NotBlank(message = "Job_description can't be empty")
    private String jobDescription;
}
