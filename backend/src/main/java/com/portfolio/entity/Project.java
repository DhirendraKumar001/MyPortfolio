package com.portfolio.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

@Document(collection = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    private String id;

    private String title;
    private String description;
    private String techStack;
    private String githubUrl;
    private String liveUrl;
    private String imageUrl;
}