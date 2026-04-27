package com.example.demo.controller;

import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ProfileController {

    @GetMapping("/profile")
    public Map<String, Object> profile(OAuth2User principal) {
        return Map.of(
                "name", principal.getAttribute("name"),
                "email", principal.getAttribute("email")
        );
    }
}