plugins {
	java
	id("org.springframework.boot") version "3.4.1"
	id("io.spring.dependency-management") version "1.1.7"
}

group = "com.chatweb"
version = "0.0.1-SNAPSHOT"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-data-jdbc:3.4.1")
	implementation("org.springframework.boot:spring-boot-starter-web:3.4.1")
	implementation("mysql:mysql-connector-java:8.0.33")
	testImplementation("org.springframework.boot:spring-boot-starter-test:3.4.1")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher:1.11.4")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
