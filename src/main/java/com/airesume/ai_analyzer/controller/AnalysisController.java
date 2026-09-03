package com.airesume.ai_analyzer.controller;

import com.airesume.ai_analyzer.dto.AnalysisRequest;
import com.airesume.ai_analyzer.dto.AnalysisResponse;
import com.airesume.ai_analyzer.service.AnalysisService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AnalysisController {

    private final AnalysisService service;


    public AnalysisController(AnalysisService service) {
        this.service = service;
    }

    @PostMapping("/analyze")
    public AnalysisResponse analyze(@RequestBody @Valid AnalysisRequest request){
        service.analyze(request);

        return service.analyze(request);
    }
}
