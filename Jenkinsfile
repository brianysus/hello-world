node {

    currentBuild.result = "SUCCESS"

    try {
        def nodeHome = tool 'Node 7.9'
        env.PATH="${env.PATH}:${nodeHome}/bin"
        def dockerHome = tool 'Latest Docker'
        env.PATH="${env.PATH}:${dockerHome}/bin"
        print "PATH: ${env.PATH}"

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
            docker.withRegistry('https://index.docker.io/v1/', 'Brians-Docker') {
                sh 'docker --version'
                sh 'which docker'
                sh 'docker build -t brianysus/sandbox:helloworld-1.0.1 .'
                sh 'docker push brianysus/sandbox:helloworld-1.0.1'
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