node('node') {

    currentBuild.result = "SUCCESS"

    try {
        tools {
            nodejs 'Node 7.9'
        }

       stage('Checkout'){

          checkout scm
       }

       stage('Build'){

            env.NODE_ENV = "build"

            print "Environment: ${env.NODE_ENV}"

            echo "Running ${env.BUILD_ID}"
            sh 'npm --version'
            sh 'pwd'
            sh 'ls'
            sh 'npm install'
            sh 'npm run build'

       }

       stage('Publish Docker Image'){

            docker.withRegistry('registry.hub.docker.com', 'Brian-Docker-Registry') {

                def hwImage = docker.build("brianysus/sandbox:helloworld-1.0.${env.BUILD_TAG}", '.')
                hwImage.push();
            }
       }

       stage('Cleanup'){

         sh 'npm prune'
         sh 'rm node_modules -rf'

         mail body: 'project build successful',
                     from: 'brian.sherwood@infor.com',
                     replyTo: 'brian.sherwood@infor.com',
                     subject: 'project build successful',
                     to: 'briansherwood@mac.com'
       }



    }
    catch (err) {

        currentBuild.result = "FAILURE"

            mail body: "project build error is here: ${env.BUILD_URL}" ,
            from: 'brian.sherwood@infor.com',
            replyTo: 'brian.sherwood@infor.com',
            subject: 'project build failed',
            to: 'briansherwood@mac.com'

        throw err
    }

}