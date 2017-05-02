pipeline {
    agent any

    tools {
        nodejs 'Node 7.9'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm --version'
                sh 'pwd'
                sh 'ls'
                sh 'npm install build'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                echo "${currentBuild.result}"
            }
        }
    }
}