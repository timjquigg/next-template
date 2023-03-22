// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/lib/mailService";

async function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  if (req.method === "POST") {
    try {
      await sendEmail(req.body);
      return res.status(200).send("Email sent");
    } catch (err) {
      console.log(err);
      return res.status(500).send("Error");
    }
  }
}

export default handler;
