


const { S3Client } = require("@aws-sdk/client-s3");
import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";
const { AWS_ACCES_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_REGION, S3_BUCKET } = process.env;

const s3Client = new S3Client({
    region: S3_REGION,
    credentials: {
        accessKeyId: AWS_ACCES_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
})

export async function POST(req: NextRequest) {
    const formData = await req.formData();
    console.log(formData)
    const image = formData.get("image");

    if (image && typeof image === "object" && image.name) {
        const Body = (await image.arrayBuffer()) as Buffer;
        const params = {
            Bucket: S3_BUCKET,
            Key: image.name,
            Body,
            ContentType: image.type
        };
        const command = new PutObjectCommand(params);
        await s3Client.send(command)

        const getObjectParams = {
            Bucket: S3_BUCKET,
            Key: image.name,
            ACL: "private"
        }

        const getCommand = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3Client, getCommand, {
            expiresIn: 50000,
        })

        return NextResponse.json({
            success: true,
            message: "successfuly image uploaded",
            data:{
                url,
            }
        })
    }

    return NextResponse.json({
        success: false,
        message: "Image is required",
        data: null
    })
}