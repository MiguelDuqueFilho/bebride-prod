import aws from 'aws-sdk';

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION
});

const deleteS3 = async (key: string) => {
  const s3 = new aws.S3();
  const params: aws.S3.DeleteObjectRequest = {
    Bucket: process.env.AWS_BUCKET,
    Key: key
  };
  await s3.deleteObject(params).promise();
};

export default deleteS3;
