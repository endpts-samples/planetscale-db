import { connect } from "@planetscale/database";
import type { Route } from "@endpts/types";

const db = await connect({
  host: process.env.DATABASE_HOST,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
});

export default {
  method: "GET",
  path: "/users",
  async handler(req) {
    const { rows } = await db.execute("SELECT * FROM users");

    return Response.json(rows);
  },
} satisfies Route;
