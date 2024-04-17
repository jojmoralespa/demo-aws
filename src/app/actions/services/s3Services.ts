"use server"
const { S3Client } = require("@aws-sdk/client-s3");
const {AWS_ACCES_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_REGION, S3_BUCKET} = process.env;

const s3Client = new S3Client({
    region: S3_REGION,
    credentials:{
        accessKeyId: AWS_ACCES_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
})

export async function uploadS3(image: Buffer){

}