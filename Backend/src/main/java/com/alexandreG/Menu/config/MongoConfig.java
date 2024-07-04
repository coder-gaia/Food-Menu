/**
 * @author alexandre.gaia
 */

package com.alexandreG.Menu.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@Configuration
@EnableMongoRepositories(basePackages = "com.alexandreG.Menu.repository")
public class MongoConfig {

}

