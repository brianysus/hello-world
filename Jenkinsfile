node {
    currentBuild.result = "SUCCESS"

    try {
        def repo = "brianysus/sandbox"
        def imageTag = "helloworld-1.0.${env.BUILD_ID}"
        def nodeHome = tool 'Node 7.9'
        env.PATH="${env.PATH}:${nodeHome}/bin"
        def dockerHome = tool 'Latest Docker'
        env.PATH="${env.PATH}:${dockerHome}/bin"

        stage('Checkout'){
            checkout scm
        }

        stage('Build'){
            sh "npm --version"
            sh "npm install"
            sh "npm run build"
        }

        stage('Test') {
             print "Could run tests here"
        }

        stage('Publish'){
            sh "sudo docker version"
            sh "sudo docker build -t ${repo}:${imageTag} ."
            sh "sudo docker push ${repo}:${imageTag}"
        }

        stage('Deploy') {
             print "Could deploy here"
        }

        stage('Cleanup'){
            sh "npm prune"
            sh "rm node_modules -rf"
            sh "sudo docker rmi \$(sudo docker images -f dangling=true -q) || true"
            sh "sudo docker images | grep ${imageTag} | awk '{print \$3}' | xargs sudo docker rmi || true"
        }
    }
    catch (err) {
        currentBuild.result = "FAILURE"
        echo err
        throw err
    }

}