const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
require('dotenv').config(); // Configure dotenv to load in the .env file

// Configure AWS SDK v3 with your credentials
const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const S3_BUCKET = process.env.AWS_S3_BUCKET || process.env.bucket;

// Export function to get a signed URL for S3 uploads
exports.sign_s3 = async (req, res) => {
  try {
    const fileName = req.body.fileName;
    const fileType = req.body.fileType;
    
    // Set up the payload for the S3 API with PutObject command
    const command = new PutObjectCommand({
      Bucket: S3_BUCKET,
      Key: fileName,
      ContentType: fileType,
      ACL: 'public-read'
    });
    
    // Get a signed URL (valid for 500 seconds)
    const signedRequest = await getSignedUrl(s3Client, command, { expiresIn: 500 });
    
    // Return the signed URL and the file location
    const returnData = {
      signedRequest: signedRequest,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    
    res.json({ success: true, data: { returnData } });
  } catch (err) {
    console.error('Error generating signed URL:', err);
    res.json({ success: false, error: err.message });
  }
};