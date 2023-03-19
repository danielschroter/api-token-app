import { withMethods } from "@/lib/api-middlewares/with-methods";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const reqSchema = z.object({});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {};

export default withMethods(["POST"], handler);
