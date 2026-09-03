package com.airesume.ai_analyzer.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "analyses")
public class Analysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT")
    private String resumeText;

    @Column(columnDefinition = "TEXT")
    private String jobDescription;


    private int matchPercentage;

    @Column(columnDefinition = "TEXT")
    private String analysisResult;


    @CreationTimestamp
    private LocalDateTime createdAt;



}
