const artist = [
    {
        key: "KRMA",
        img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/KARMA_ARTIST.jpeg",
        name: "Karma"
    },
    {
        key: "BHRG",
        img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/BHARG.jpeg",
        name: "Bharg"
    },
    {
        key: "TAJUM",
        img: "https://i.pinimg.com/736x/d2/95/fc/d295fc77c71aed2a7bda8bf5a0b37613.jpg",
        name: "Talha Anjum"
    },
    {
        key: "RAWL",
        img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Rawal-artist.jpeg",
        name: "Rawal"
    },
    {
    key: "KR$NA",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Kr%24na.jpeg",
    name: "Kr$na"
},
{
    key: "SPRMNK",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Supermanikk.jpeg",
    name: "SuperManikk"
},
{
    key: "EMYBTA",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Emiway+Bantai.jpeg",
    name: "Emiway Bantai"
},
{
    key: "SEDMUT",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Seedhe+maut.jpeg",
    name: "Seedhe Maut"
},
{
    key: "TPROC",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Theprophc.jpeg",
    name: "The PropheC"
},
{
    key: "RFTAR",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Raftaar_artist.jpeg",
    name: "Raftaar"
},
{
    key: "PATHR",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/PANTHER.webp",
    name: "Panther"
},

{
    key: "SAPU",
    img: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Artist/Saar_pUnch_artist.jpeg",
    name: "Saar Punch"
},
]
//https://youtu.be/VKMw2it8dQY?si=A4prnxF8KdUg-OJe INTRO
const all = [
    {
        key: "6sUBq9mTfeY",
        seq: 11,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/KARMA+x+Sez+On+The+Beat+-+BHAGWAAN++OFFICIAL+VISUALIZER++2023.mp3",
        img: "https://img.youtube.com/vi/6sUBq9mTfeY/maxresdefault.jpg",
        title: "BHAGWAAN - KARMA x Sez On The Beat",
        artist: "KARMA",
        artistkey: ['KRMA'],
        genre: "",
        album: "",
    },
    {
        key: "9CxYG79GTOw",
        seq: 11,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Maykhana+-+Saar+Punch%2C+%40Bharg++Official+Music+Video.mp3",
        img: "https://img.youtube.com/vi/9CxYG79GTOw/maxresdefault.jpg",
        title: "Maykhana - Saar Punch, @Bharg",
        artist: "Saar Punch",
        artistkey: ['SAPU', 'BHRG'],
        genre: "",
        album: "Oopar Neeche",
    },
    {
        key: "9-Vc4xmTZKk",
        seq: 11,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Downers%20At%20Dusk%20-%20Talha%20Anjum%20%20Prod.%20by%20Umair%20%28Official%20Music%20Video%29.mp3",
        img: "https://img.youtube.com/vi/9-Vc4xmTZKk/maxresdefault.jpg",
        title: "Downers At Dusk",
        artist: "Talha Anjum",
        artistkey: ['TAJUM'],
        genre: "",
        album: "Open Letter",
    },
    {
        key: "AwhyFo5N0cg",
        seq: 11,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Blowing+UP+Kr%24na.mp3",
        img: "https://img.youtube.com/vi/AwhyFo5N0cg/maxresdefault.jpg",
        title: "Blowing Up",
        artistkey: ['KR$NA'],
        artist: "KR$NA",
        genre: "Delhi Scene",
        album: "",
    },
    {
        key: "hsYblpKpJF8",
        seq: 2,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/BADMAN+(Official+Video)+-+%40SuperManikk+%26+%40wickedsunnyyy+++2023.mp3",
        img: "https://img.youtube.com/vi/hsYblpKpJF8/maxresdefault.jpg",
        title: "Badman Ft WickedSunnyy",
        artistkey: ['SPRMNK'],
        artist: "SuperManikk",
        genre: "Delhi Scene",
        album: "",
    },
    {
        key: "q_D3K1mnXXM",
        seq: 3,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/KING+OF+INDIAN+HIP+HOP.mp3",
        img: "https://i3.ytimg.com/vi/q_D3K1mnXXM/maxresdefault.jpg",
        title: "KING OF INDIAN HIP HOP (PROD BY Babz beats)",
        artist: "Emiway Bantai",
        artistkey: ['EMYBTA'],
        genre: "Mumbai Scene",
        album: "King Of The Streets",
    },
    {
        key: "7pNo-geT_MA",
        seq: 4,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Brand+New++Seedhe+Maut.mp3",
        img: "https://i.ytimg.com/vi/7pNo-geT_MA/0.jpg",
        title: "Brand New",
        artistkey: ['SEDMUT'],
        artist: "Seedhe Maut",
        genre: "Delhi Scene",
        album: "LunchBreak",
    },
    {
        key: "Q5r9-k7xYGw",
        seq: 5,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/11K+-+Seedhe+Maut.mp3",
        img: "https://i.ytimg.com/vi/Q5r9-k7xYGw/0.jpg",
        title: "11K - Seedhe Maut",
        artist: "Seedhe Maut",
        artistkey: ['SEDMUT'],
        genre: "Delhi Scene",
        album: "LunchBreak",
    },
    {
        key: "jEfUeVlauJ4",
        seq: 35,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Shiv+Kumar+Batalvi+-+Ki+Pushde+o+haal+Fakiran+da+(Prod.+By+Wazir+Patar).mp3",
        img: "https://i.ytimg.com/vi/jEfUeVlauJ4/0.jpg",
        title: "Ki Pushde o haal Fakiran da",
        artist: "Shiv Kumar Batalviya",
        genre: "Poetry",
        album: "",
    },
    {
        key: "jcPC7AHQMKs",
        seq: 36,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/MERE+BINA++%40KSHMRmusic++The+PropheC++%40TalhaAnjum+++Official+Audio++%23Karam.mp3",
        img: "https://i.ytimg.com/vi/jcPC7AHQMKs/0.jpg",
        title: "Mere Bina @KSHMRmusic The PropheC @TalhaAnjum",
        artistkey: ['TPROC', 'TAJUM'],
        artist: "The PropheC",
        genre: "Lyrical",
        album: "Karam",
    },
    {
        key: "qot0iPHozdk",
        seq: 37,
        src: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Galat+Karam.mp3",
        img: "https://i.ytimg.com/vi/qot0iPHozdk/0.jpg",
        title: "Panther X Raga - Galat Karam",
        artist: "Panther",
        artistkey: ['PATHR'],
        genre: "Rage",
        album: "",
    },
]
const playlist = [
    {
        id: "yashraj_ladkeconvict",
        albumtitle: "Ladke Convict",
        artist: "Yashraj",
        albumicon: "https://ihhplayer.s3.ap-south-1.amazonaws.com/Posters/Ladke%20Conict.jpg",
        songs: [
            {
                key: "sddd",
                title: " THATS A FACT!",
                src: "ddcsdc",
            }
        ]

    },
]

export {all, artist};