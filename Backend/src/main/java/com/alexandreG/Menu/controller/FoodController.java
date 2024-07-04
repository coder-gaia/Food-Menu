/**
 * @author alexandre.gaia
 */

package com.alexandreG.Menu.controller;

import com.alexandreG.Menu.DTO.FoodRequestDTO;
import com.alexandreG.Menu.DTO.FoodResponseDTO;
import com.alexandreG.Menu.model.Food;
import com.alexandreG.Menu.repository.IfoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/food")
public class FoodController {

    @Autowired
    private IfoodRepository foodRepository;

    @GetMapping
    public List<FoodResponseDTO> getAll(){
        return foodRepository.findAll().stream().map((FoodResponseDTO::new)).toList();
    }

    @PostMapping("/create")
    public void createFood(@RequestBody FoodRequestDTO data){
        Food foodData = new Food(data);
        foodRepository.save(foodData);
        return;
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable String id){
        foodRepository.deleteById(id);
    }

}
