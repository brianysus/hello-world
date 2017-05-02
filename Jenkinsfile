pipeline {
    agent any

    tools {
        nodejs 'Node 7.9'
    }
    node {
        checkout scm
        stages {
            stage('Build') {
                steps {
                    echo 'Building..'
                    echo "Running ${env.BUILD_ID} on ${env.JENKINS_URL}"
                    sh 'npm --version'
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
}