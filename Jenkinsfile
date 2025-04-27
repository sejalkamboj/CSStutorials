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
                bat 'docker run -d -p 8080:80 --name my-website-container %DOCKER_IMAGE%'
            }
        }
    }
    post {
        always {
            echo 'Cleaning up...'
            bat 'docker ps -aq --filter "name=my-website-container" | for /F "tokens=*" %i in (\'more\') do docker rm -f %i'
        }
    }
}
