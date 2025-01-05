# Build Stage

FROM gradle:8.11.1-jdk21 AS builder

WORKDIR /app

COPY gradle/wrapper /app/gradle/wrapper
COPY gradlew /app/gradlew
COPY gradlew.bat /app/gradlew.bat
COPY build.gradle.kts /app/build.gradle.kts
COPY settings.gradle.kts /app/settings.gradle.kts
COPY src /app/src

RUN gradle clean build --no-daemon --no-build-cache

# Run Stage

FROM openjdk:21-jdk-oracle

COPY --from=builder /app/build/libs/*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
