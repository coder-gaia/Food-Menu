/**
 * @author alexandre.gaia
 */
package com.alexandreG.Menu.repository;

import com.alexandreG.Menu.model.Food;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IfoodRepository extends MongoRepository<Food, String> {
}
