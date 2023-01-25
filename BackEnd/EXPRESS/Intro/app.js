const express= require('express');
const cors = require("cors");
const { url } = require('inspector');
const app =express();
app.use(cors());
const port=8000;


const categories= [
    {
        id: 1,
        name: 'FrontEnd',
        url: 'https://ikon.mn/',
    },
    {
        id: 2,
        name:'BackEnd'
    },
    {
        id: 3,
        name:'FullStack'
    }
];

const article= [
    {
        id: 1,
        name: 'liverpool',
        imageUrl: 'https://www.premierleague.com/resources/prod/v6.111.2-4807/i/default-thumbnails/t14.png',
        description: "Liverpool Football Club is a professional football club based in Liverpool, England. The club competes in the Premier League, the top tier of English football. Founded in 1892, the club joined the Football League the following year and has played its home games at Anfield since its formation."
    },
    {
        id: 2,
        name: 'madrid',
        imageUrl: 'https://media.architecturaldigest.com/photos/57ad893acfc37bc171ad8082/2:1/w_5122,h_2561,c_limit/madrid-travel-guide.jpg',
        description: "Madrid (/məˈdrɪd/ mə-DRID, Spanish: [maˈðɾið])[n. 1] is the capital and most populous city of Spain. The city has almost 3.4 million[7] inhabitants and a metropolitan area population of approximately 6.7 million. It is the second-largest city in the European Union (EU), and its monocentric metropolitan area is the second-largest in the EU.[8][9][10] The municipality covers 604.3 km2 (233.3 sq mi) geographical area.[11]"
    },
    {
        id: 3,
        name: 'paris',
        imageUrl: 'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900',
        description: "Paris (French pronunciation: ​[paʁi] (listen)) is the capital and most populous city of France, with an estimated population of 2,165,423 residents in 2019 in an area of more than 105 km² (41 sq mi),[5] making it the 30th most densely populated city in the world in 2020.[6] Since the 17th century, Paris has been one of the world's major centres of finance, diplomacy, commerce, fashion, gastronomy, and science. For its leading role in the arts and sciences, as well as its very early system of street lighting, in the 19th century it became known as the City of Light.[7] Like London, prior to the Second World War, it was also sometimes called the capital of the world."
    },
    {
        id: 4,
        name: 'seoul',
        imageUrl: 'https://a.storyblok.com/f/112937/567x464/b521a9ee4b/visit_seoul_web.jpg/m/620x0/filters:quality(70)/',
        description: "Seoul (/soʊl/; Korean: [sʰʌul] (listen); lit. 'Capital'), officially known as the Seoul Special City, is the capital and largest metropolis of South Korea.[9] According to the 2020 census, Seoul has a population of 9.9 million people, and forms the heart of the Seoul Capital Area with the surrounding Incheon metropolis and Gyeonggi province. Considered to be a global city and rated as an Alpha – City by Globalization and World Cities Research Network (GaWC),[10] Seoul was the world's fourth largest metropolitan economy in 2014, following Tokyo, New York City and Los Angeles."
    }
];

// const frontEnd= [
//     {
//         id: 1,
//         name: 'React.js',
//         description: 'This is best programming language for FrontEnd'
//     },
//     {
//         id: 2,
//         name: 'Next.js',
//         description: 'This is best programming language for FrontEnd'
//     },
//     {
//         id: 3,
//         name: 'Vue.js',
//         description: 'This is best programming language for FrontEnd'
//     }
// ]

app.get('/', (req, res)=>{
    res.status(200);
    res.json(article);
});

app.get('/categories',(request, response)=>{
    response.status(200);
    response.json(categories);
});

app.get('/categories/:id',(request, response)=>{
   const {id}=request.params;
   response.json(categories[Number(id)-1]);
});

app.get('/article',(req, res)=>{
    res.status(200);
    res.json(article);
});
app.get('/article/:id',(req, res)=>{
    const {id}=req.params;
    res.json(article[Number(id)-1]);
});





app.listen(port, ()=>{
    console.log('http://localhost:'+port);
})