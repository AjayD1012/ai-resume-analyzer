package com.airesume.ai_analyzer.service;

import com.airesume.ai_analyzer.ai.ResumeAnalysisResult;
import com.airesume.ai_analyzer.dto.AnalysisRequest;
import com.airesume.ai_analyzer.dto.AnalysisResponse;
import com.airesume.ai_analyzer.entity.Analysis;
import com.airesume.ai_analyzer.repository.AnalysisRepository;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.converter.BeanOutputConverter;
import org.springframework.stereotype.Service;

@Service
public class AnalysisService {

    private final AnalysisRepository repository;
    private final ChatClient chatClient;

    public AnalysisService(AnalysisRepository repository, ChatClient.Builder builder) {
        this.repository = repository;
        this.chatClient = builder.build();
    }

    public AnalysisResponse analyze(AnalysisRequest request) {

        BeanOutputConverter<ResumeAnalysisResult> converter =
                new BeanOutputConverter<>(ResumeAnalysisResult.class);

        String prompt = """
                You are an expert resume analyzer.
                Analyze the following resume against the job description.
                
                RESUME:
                %s
                
                JOB DESCRIPTION:
                %s
                
                Return a JSON response with exactly these fields:
                - matchPercentage (int 0-100)
                - matchingSkills (list of strings)
                - missingSkills (list of strings)
                - suggestions (list of strings)
                - recommendedSkills (list of strings)
                - interviewQuestions (list of 5 strings)
                - summary (string)
                
                %s
                """.formatted(request.getResumeText(), request.getJobDescription(), converter.getFormat());

        ResumeAnalysisResult result = chatClient.prompt()
                .user(prompt)
                .call()
                .entity(ResumeAnalysisResult.class);

        // Save to database
        Analysis analysis = new Analysis();
        analysis.setResumeText(request.getResumeText());
        analysis.setJobDescription(request.getJobDescription());
        analysis.setMatchPercentage(result.matchPercentage());
        analysis.setAnalysisResult(result.toString());
        repository.save(analysis);

        // Map to response
        AnalysisResponse response = new AnalysisResponse();
        response.setMatchPercentage(result.matchPercentage());
        response.setMatchingSkills(result.matchingSkills());
        response.setMissingSkills(result.missingSkills());
        response.setSuggestions(result.suggestions());
        response.setRecommendedSkills(result.recommendedSkills());
        response.setInterviewQuestions(result.interviewQuestions());
        response.setSummary(result.summary());
        return response;
    }
}