
package com.portfolio.repository;

import com.portfolio.entity.Project;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProjectRepository extends MongoRepository<Project, String> {}