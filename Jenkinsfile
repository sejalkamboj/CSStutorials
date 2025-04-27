pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "my-static-website:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out code...'
                // In real projects, you would checkout the repo here
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t %DOCKER_IMAGE% .'
            }
        }
        stage('Run Docker Container') {
            steps {
                echo 'Running Docker container...'
                bat 'docker rm -f my-website-container || exit 0'
                bat 'docker run -d -p 8080:80 --name my-website-container %DOCKER_IMAGE%'
            }
        }
        stage('Test Website') {
            steps {
                echo 'Testing if website is live...'
                bat '''
                curl -s http://localhost:8080 > nul
                if %errorlevel% neq 0 exit 1
                '''
            }
        }
    }
    post {
        always {
            echo 'Cleaning up...'
            // Optional: Clean up things
        }
    }
}
