import express from "express";
import demoRouter from "./src/routes/demoRoute.js";
import connectMangoDb from "./src/config/mango-db.js";
import userRouter from "./src/routes/userRoute.js";
import bookRouter from "./src/routes/bookRoute.js";

const app = express();

app.use(express.json());

app.use("/demo",demoRouter)
app.use("/user",userRouter)
app.use("/books",bookRouter)

const PORT = 3000;

async function startBackendApplication(){
    await connectMangoDb();
    startHttpServer()
}

function startHttpServer(){
    app.listen(PORT,async()=>{
        console.log("server is running!!!!!!!!!!")
    })
}

startBackendApplication();