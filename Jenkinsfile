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
            sh 'docker-compose build'
          }
        }
      }
      stage ('Test backend') {
        steps {
          dir ("back/") {
            sh 'docker-compose run web python manage.py test'
          }
        }
      }
      stage ('Deploy backend') {
        steps {
          dir ("back/") {
              sh 'docker-compose up -d'     
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