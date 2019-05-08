pipeline{
    agent any
    environment {
      HOME = '.'
    }
    stages { 
      stage ('Install front Dependecies') {
        steps {
          dir ("front/") {
            sh 'npm install'
          }
        }
      }
      stage ('Test front') {
        steps {
          dir ("front/") {
            sh 'npm run test:unit'
          }
        }
      }
      stage ('Deploy front') {
        steps {
          dir ("front/") {
              sh 'chmod +x ./scripts/deploy.sh'
              sh './scripts/deploy.sh'
            
          }
        }
      }
      stage ('Install back Dependecies') {
        steps {
          dir ("back/") {
            sh 'pip3 install -r requirements.txt'
          }
        }
      }
      stage ('Test backend') {
        steps {
          dir ("back/") {
            sh 'python3 manage.py test'
          }
        }
      }
      stage ('Deploy backend') {
        steps {
          dir ("back/") {
              sh 'python3 manage.py runserver &'
            
          }
        }
      }
    }
    post {
      success {
        slackSend (color: '#00FF00', message: "SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
      }
      failure {
        slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
      }
    }
}