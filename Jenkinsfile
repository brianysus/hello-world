node {

    currentBuild.result = "SUCCESS"

    try {
        def nodeHome = tool 'Node 7.9'
        env.PATH="${env.PATH}:${nodeHome}/bin"

        stage('Checkout'){
            checkout scm
        }

        stage('Build'){
            env.NODE_ENV = "build"
            print "Environment: ${env.NODE_ENV}"
            echo "Running ${env.BUILD_ID}"
            sh 'npm --version'
            sh 'npm install'
            sh 'npm run build'

        }

        stage('Publish Docker Image'){
            print "Docker image: brianysus/sandbox:helloworld-1.0.${env.BUILD_TAG}"
            docker.withRegistry('https://cloud.docker.com', 'Brian-Docker-Registry') {
                sh 'pwd'
                sh 'ls'
                def hwImage = docker.build("brianysus/sandbox:helloworld-1.0.${env.BUILD_TAG}", '.')
                hwImage.push();
            }
        }

        stage('Cleanup'){
            sh 'npm prune'
            sh 'rm node_modules -rf'
        }



    }
    catch (err) {
        currentBuild.result = "FAILURE"
        echo err
        throw err
    }

}