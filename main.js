const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);
const app = {
    songs : [
        {
            name: 'Whats make you beautiful',
            singer: 'One Direction',
            path: './assets/music/1.mp3',
            image: './assets/img/1.jpg'
        },
        {
            name: 'Halo',
            singer: 'Beyonce',
            path: './assets/music/2.mp3',
            image: './assets/img/2.jpg'
        },
        {
            name: '7 Rings',
            singer: 'Ariana Grande',
            path: './assets/music/3.mp3',
            image: './assets/img/3.jpg'
        },
        {
            name: 'Sorry',
            singer: 'Justin Bieber',
            path: './assets/music/4.mp3',
            image: './assets/img/4.jpg'
        },
        {
            name: 'Wildest Dream',
            singer: 'Taylor Swift',
            path: './assets/music/5.mp3',
            image: './assets/img/5.jpg'
        },
        {
            name: 'We Cant Stop',
            singer: 'Miley Cyrus',
            path: './assets/music/6.mp3',
            image: './assets/img/6.jpg'
        },
        {
            name: 'Deja Vu',
            singer: 'Olivia Rodrigo',
            path: './assets/music/7.mp3',
            image: './assets/img/7.jpg'
        },
        {
            name: 'Bad Liar',
            singer: 'Imagine Dragons',
            path: './assets/music/2.mp3',
            image: './assets/img/2.jpg'
        }
    ],
    render: function(){
        const htmls = this.songs.map(song =>{
            return `
            
            `
        })
    },
    start: function (){

    }
}
app.start()
