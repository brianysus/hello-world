pipeline {
    agent any

    tools {
        nodejs 'Node 6.x'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                sh 'npm --version'
                sh 'npm build'
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