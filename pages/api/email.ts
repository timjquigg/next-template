// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sendEmail from "@/lib/mailService";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  sendEmail(req.body)
    .then(() => {
      res.status(200).send("Email sent");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
}
