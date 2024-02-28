import { api } from "@/convex/_generated/api";
import { auth, currentUser } from "@clerk/nextjs";
import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";


const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
const liveblocks = new Liveblocks({
    secret: "sk_dev_9N_7jlyKuzFtlvTq4q3_t6H-b2r07fxQOzDVWwjEkFnSp85ub1z2b0g02U_SrXvY",
});

export async function POST(request: Request) {
    // Get the current user from your database

    const authorization = auth()
    const user = await currentUser();
    if (!authorization || !user) return new Response("Unothorized", { status: 403 })
    const { room } = await request.json();
    const board = await convex.query(api.board.getBoardById, { id: room })

    if (board?.orgId !== authorization.orgId) {
        return new Response("Unothorized to access this organization", { status: 403 })
    }

    const userInfo = {
        name: user.username ? user.username : (user.firstName + " " + user.lastName),
        avatar: user.imageUrl
    }

    const session = liveblocks.prepareSession(
        user.id,
        { userInfo }
    );
    if (room) {
        session.allow(room, session.FULL_ACCESS);
    }

    const { status, body } = await session.authorize();
    return new Response(body, { status });
}