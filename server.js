const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 2,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 3,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 4,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 5,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 6,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 7,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 8,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
        {
            id: 9,
            name: '신승헌',
            studentId: '201621751',
            department: '컴공',
            gender: '남자',
            etc: '-',
        },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
