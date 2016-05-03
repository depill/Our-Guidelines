node {
    checkout scm
    echo "${pwd()}".toString()
    def branchName = env.BRANCH_NAME
    env.IMAGE_TAG = "${branchName.replace('/','-')}-${env.BUILD_NUMBER}".toString()
    sh 'export'
}
