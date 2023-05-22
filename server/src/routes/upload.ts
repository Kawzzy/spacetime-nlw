import { randomUUID } from "node:crypto";
import { FastifyInstance } from "fastify";
import { extname, resolve } from "node:path";
import { createWriteStream } from "node:fs";
import { pipeline } from "node:stream";
import { promisify } from "node:util";

const pump = promisify(pipeline);

export async function uploadRoutes(app: FastifyInstance) {
  app.post("/upload", async (request, response) => {
    const upload = await request.file({
      limits: {
        fileSize: 5_242_880, // 5MB
      },
    });

    if (!upload) {
      return response.status(400).send();
    }

    const mimeTypeRegex = /^(image|video)\/[a-zA-Z]+/;
    const isFileFormatValid = mimeTypeRegex.test(upload.mimetype);

    if (!isFileFormatValid) {
      return response.status(400).send();
    }

    const fileId = randomUUID();
    const extension = extname(upload.filename);

    const fileName = fileId.concat(extension);

    const writeStream = createWriteStream(
      resolve(__dirname, "../../uploads", fileName)
    );

    await pump(upload.file, writeStream);

    const fullUrl = request.protocol.concat("://").concat(request.hostname);
    const fileUrl = new URL(`/uploads/${fileName}`, fullUrl).toString();
  });
}
