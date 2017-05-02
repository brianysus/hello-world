pipeline {
    agent any

    tools {
        nodejs 'Node 7.9'
        docker 'Latest Docker'
    }
    stages {
        stage('Build') {
            steps {
                print "Environment: ${env.NODE_ENV}"
                echo "Running ${env.BUILD_ID}"
                sh 'npm --version'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Publish Docker Image') {
            steps {
                echo 'docker build -t helloworld-1.0.${env.BUILD_TAG} .'
                sh 'docker build -t helloworld-1.0.${env.BUILD_TAG} .'
                sh 'docker push brianysus/sandbox:helloworld-1.0.${env.BUILD_TAG}'
            }
        }
        stage('Cleanup'){
            steps {
                sh 'npm prune'
                sh 'rm node_modules -rf'
            }
        }
    }
}