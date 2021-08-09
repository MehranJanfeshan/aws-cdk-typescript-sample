import * as cdk from '@aws-cdk/core'
import * as S3 from '@aws-cdk/aws-s3'
import * as sns from '@aws-cdk/aws-sns'

export class MyNewStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new S3.Bucket(this, 'MyBucket', {
      bucketName: "test-cdk-first-bucket"
    })

    new sns.Topic(this, 'Topic', {
      displayName: 'my-sns-topic-cdk'
    });
    // The code that defines your stack goes here
  }
}
