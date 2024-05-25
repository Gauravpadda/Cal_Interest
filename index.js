const express=require(express)
const app=express();
app.use(express.json())
app.get("/calinterest",(req,res)=>{
  const principal=req.query.principal;
  const rate=req.query.rate;
  const time=req.query.time;
  const ans=(principal*time*rate)/100
  res.status(200).json({
    totalInterest:ans;
  }}
})
app.listen(3000)
