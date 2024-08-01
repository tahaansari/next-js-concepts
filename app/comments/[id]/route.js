import {comments} from "../data"
export async function GET(Request,context){
    const {params} = context;
    return new Response(JSON.stringify(params))    
}