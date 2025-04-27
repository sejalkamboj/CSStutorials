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
                // First, remove the old container if it exists
                bat 'docker rm -f my-website-container || exit 0'
                // Then, run a fresh container
                bat 'docker run -d -p 8080:80 --name my-website-container %DOCKER_IMAGE%'
            }
        }
    }
    post {
        always {
            echo 'Cleaning up...'
            // (You can optionally clean dangling images or stopped containers here too)
        }
    }
}
