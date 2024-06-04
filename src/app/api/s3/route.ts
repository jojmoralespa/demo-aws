


const { S3Client } = require("@aws-sdk/client-s3");

import { PutObjectCommand, ObjectCannedACL } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid"
//import { GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { NextRequest, NextResponse } from "next/server";

const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_REGION, S3_BUCKET } = process.env;

const s3Client = new S3Client({
    region: S3_REGION,
    credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY
    }
})

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        console.log(formData)
        const image = formData.get("image");

        if (image && typeof image === "object" && image.name) {
            const Body = (await image.arrayBuffer()) as Buffer;
            const imageName = uuidv4() + "_" + image.name
            const params = {
                ACL: ObjectCannedACL.public_read,
                Bucket: S3_BUCKET,
                Key: imageName
                ,
                Body: Body,
                ContentType: image.type
            };
            const command = new PutObjectCommand(params);

            const response = await s3Client.send(command)

            console.log(response)
            debugger
            return NextResponse.json({
                success: true,
                message: "successfuly image uploaded",
                data: `https://${S3_BUCKET}.s3.amazonaws.com/${encodeURIComponent(imageName)}`

            })
        }

        return NextResponse.json({
            success: false,
            message: "Image is required",
            data: null
        })
    } catch (error) {
        console.error("Error uploading image to S3:", error);
        return NextResponse.error();
    }
}