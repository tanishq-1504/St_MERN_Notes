import express from "express";
import demoRouter from "./routes/demoRoute";
import connectMangoDb from "./config/mango-db";
import userRouter from "./routes/userRoute";
import bookRouter from "./routes/bookRoute";

const app = express();

app.use(express.json());

app.use("/demo",demoRouter)
app.use("/users",userRouter)
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