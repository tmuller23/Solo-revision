const express = require('express');
const app = express();
const mongoose = require('mongoose');
// const {Model} = require('./models/model.js');
const cors = require('cors');
const { SquareModel } = require('./models/model.js');

app.use(cors());
app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://tmuller23:wVUqfDl2QkJg54xP@sudoku.kdqezp3.mongodb.net/test',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database: ', err));

SquareModel.deleteMany({}).then((result) => {
  console.log('deleted all');
  SquareModel.create({ boxId: 'square00', number: 5 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square10', number: 3 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square40', number: 7 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square01', number: 6 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square31', number: 1 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square41', number: 9 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square51', number: 5 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square12', number: 9 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square22', number: 8 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square72', number: 6 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square03', number: 8 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square43', number: 6 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square83', number: 3 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square04', number: 4 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square34', number: 8 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square54', number: 3 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square84', number: 1 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square05', number: 7 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square45', number: 2 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square85', number: 6 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square16', number: 6 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square66', number: 2 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square76', number: 8 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square37', number: 4 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square47', number: 1 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square57', number: 9 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square87', number: 5 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square48', number: 8 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square78', number: 7 }).then((result) => {
    console.log('AllGood');
  });
  SquareModel.create({ boxId: 'square88', number: 9 }).then((result) => {
    console.log('AllGood');
  });
});

app.post('/gridValues', (req, res) => {
  const boxId = req.body.boxId;
  const number = req.body.number;
  SquareModel.create({ boxId, number }).then((result) => {
    res.send('New entry created');
  })
  .catch(error => {
    SquareModel.findOneAndUpdate({ boxId },{number}).then((result) => {
        res.send('Entry updated');
    })
  })
});

app.get('/gridValues', (req, res) => {
  SquareModel.find({}).then((result) => {
    res.send(result);
  });
});

app.delete('/gridValues', (req, res) => {
    const boxId = req.body.boxId;
    SquareModel.deleteOne({ boxId }).then((result) => {
        res.send('Entry deleted');
    });
})
app.listen(3001, () => {
  console.log('Yay, your server is running on port 3001');
});
