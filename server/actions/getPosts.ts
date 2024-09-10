"use server"

import { db } from "../index"



const getPosts = async () => {
    const posts = await db.query.posts.findMany();

    if(!posts){
        return {error : "no posts found"}
    }
    return {success : posts}
}
export default getPosts;