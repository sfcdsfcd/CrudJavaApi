FROM maven:latest as builder

COPY src /app/src
COPY pom.xml /app 

WORKDIR /app

RUN mvn clean package -DskipTests

COPY src ./src

RUN mvn package -Dmaven.test.skip

FROM openjdk:17-jdk-alpine

COPY --from=builder /app/target/*.jar /app/

WORKDIR /app

CMD ["java", "-jar", "/app/demo-0.0.1-SNAPSHOT.jar"]