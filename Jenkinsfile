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
            sh "npm --version"
            sh "npm install"
            sh "npm run build"

        }

        def repo = "brianysus/sandbox"
        def imageTag = "helloworld-1.0.${env.BUILD_ID}"
        stage('Publish Docker Image'){
            docker.withRegistry('https://index.docker.io/v1/', 'Brian-Docker-Registry') {
                sh "sudo docker version"
                sh "sudo docker build -t ${repo}:${imageTag} ."
                sh "sudo docker push ${repo}:${imageTag}"
            }
        }

        stage('Cleanup'){
            sh "npm prune"
            sh "rm node_modules -rf"
            sh "sudo docker rmi \$(sudo docker images -f dangling=true -q)"
            sh "sudo docker images | grep ${imageTag} | awk '{print \$3}' | xargs sudo docker rmi"
        }



    }
    catch (err) {
        currentBuild.result = "FAILURE"
        echo err
        throw err
    }

}