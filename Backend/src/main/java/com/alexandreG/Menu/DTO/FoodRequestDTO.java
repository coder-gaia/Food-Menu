package com.alexandreG.Menu.DTO;

import com.alexandreG.Menu.repository.IfoodRepository;
import org.springframework.beans.factory.annotation.Autowired;

public record FoodRequestDTO(String title, String image, Integer price) {

    @Autowired
    private static IfoodRepository ifoodRepository;

}
