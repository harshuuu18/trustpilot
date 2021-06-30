const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const { GoogleSpreadsheet } = require('google-spreadsheet');


const fs = require('fs');


const RESPONSES_SHEET_ID = '1M_ZY48Q2p43Vx4K56AFhJdGlv__CkJTBIwhcgGHlirk';


const doc = new GoogleSpreadsheet(RESPONSES_SHEET_ID);


const CREDENTIALS = JSON.parse(fs.readFileSync('cred.json'));

app.use(express.json())
app.get('/',(req,res)=>{
    res.send("hell")
})
app.get('/read', async (req,res)=>{
    
    
    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });
    
    
    await doc.loadInfo();
    
    
    let sheet = doc.sheetsByIndex[0];
    
    
    let rows = await sheet.getRows();
    
    const row = rows.map((i,id)=>{
        return {
            id:id,
            date: i.date,
            domain: i.domain,
            name: i.name,
            link: i.link,
            reply: i.reply,
            status: i.status
        }
    })
    res.json({row})

    
    
    
})
app.post('/update', async (req,res)=>{

    const {id} = req.body

    await doc.useServiceAccountAuth({
        client_email: CREDENTIALS.client_email,
        private_key: CREDENTIALS.private_key
    });

    await doc.loadInfo();

    
    let sheet = doc.sheetsByIndex[0]

    let rows = await sheet.getRows()

    console.log(id)
    rows[id].status = "Done"
    rows[id].save()
    

    
})

if(process.env.NODE_ENV == 'production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(port,()=>{
    console.log("server is running on port");
})
