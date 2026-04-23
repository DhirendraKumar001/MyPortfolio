package com.portfolio.controller;

import com.portfolio.dto.ContactRequest;
import com.portfolio.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final EmailService emailService;

    @PostMapping
    public ResponseEntity<String> contact(@RequestBody ContactRequest request) {
        emailService.sendContactEmail(request);
        return ResponseEntity.ok("Message sent successfully!");
    }
}
