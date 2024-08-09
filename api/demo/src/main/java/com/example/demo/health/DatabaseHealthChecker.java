package com.example.demo.health;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.SQLException;

@Component
public class DatabaseHealthChecker implements CommandLineRunner {

    private final DataSource dataSource;

    public DatabaseHealthChecker(DataSource dataSource) {
        this.dataSource = dataSource;
    }

    @Override
    public void run(String... args) throws Exception {
        boolean databaseUp = false;
        while (!databaseUp) {
            try (Connection connection = dataSource.getConnection()) {
                databaseUp = true;
                System.out.println("Database is up and running");
            } catch (SQLException e) {
                System.err.println("Database is not available, retrying...");
                Thread.sleep(5000); // Aguarda 5 segundos antes de tentar novamente
            }
        }
    }
}
