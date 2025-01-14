
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


const app = express();
const PORT=3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const transfer = nodemailer.createTransport({
  service:"gmail",
  auth:{//gonderecek kişi
    user:"kvd.19998@gmail.com",
    pass:"ybzp jdzq qeez sqre"
  }
});

app.post('/send-mail',(req,res)=>{
    const {email,message} = req.body;

    const mailbilgi={
      from:"kvd.19998@gmail.com",
      to:"kvd.19998@gmail.com",
      subject: `${email} size bir mesaj yolladı!`,
      text:`Gönderen: ${email}\nMesaj: ${message}`,

  };

  transfer.sendMail(mailbilgi,(error , info)=>{
    if (error) {
      console.error('Hata:', error);
      return res.status(500).json({ message: 'Mail gönderilemedi', error });
    }
    console.log('E-posta gönderildi:', info.response);
    res.status(200).json({ message: 'Mail başarıyla gönderildi!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server çalışıyor: http://localhost:${PORT}`);
});