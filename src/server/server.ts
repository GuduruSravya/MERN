import express from "express"

const server = express();
server.use(express.static("dist"));
server.set("view engine","ejs")
server.use("/",(req,res)=>{
    res.render("index",{
        "content":"<em>sravya</em>"
    });               //This will be the view page.
})

server.listen("8081","localhost",()=>{
    console.info("Express server is successfully up and running on http://localhost:8081");
});