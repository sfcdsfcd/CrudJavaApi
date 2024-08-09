# Use uma imagem base do OpenJDK
FROM openjdk:17-jdk-slim

# Defina o diretório de trabalho
WORKDIR /app

# Copie o arquivo JAR do Spring Boot para o contêiner
COPY CrudJavaApi.jar /app/app.jar

# Defina o comando para executar o aplicativo
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

# Exponha a porta na qual a aplicação estará ouvindo
EXPOSE 8080