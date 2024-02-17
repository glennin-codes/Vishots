export interface VideoModel {
    id: number;
    channelName: string;
    uri: string;
    caption: string;
    musicName: string;
    likes: number;
    comments: number;
    avatarUri: string;
  }
  
const  VideoDatas:VideoModel[]= [
  {
    id: 1,
    channelName: 'meow',
    uri: 'https://v.pinimg.com/videos/mc/720p/11/05/2c/11052c35282355459147eabe31cf3c75.mp4',
    caption: 'Doggies eating candy #cute #puppy',
    musicName: 'Song #2',
    likes: 2411,
    comments: 1222,
    avatarUri: 'https://wallpaperaccess.com/thumb/266770.jpg',
  },
    {
      id: 2,
      channelName: 'best-music',
      uri: 'https://mediaglens.s3.amazonaws.com/94d0479c8d07/videos/75260fdc-9a11-4cdb-b5cf-aca0ecde3a0f.mp4',
      caption: 'Cute dog shaking hands #cute #puppy',
      musicName: 'Song #R',
      likes: 4321,
      comments: 2841,
      avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
    
    {
      id: 3,
      channelName: 'cutedog',
      uri: 'https://v.pinimg.com/videos/mc/720p/f6/88/88/f68888290d70aca3cbd4ad9cd3aa732f.mp4',
      caption: 'Cute dog shaking hands #cute #puppy',
      musicName: 'Song #1',
      likes: 4321,
      comments: 2841,
      avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
    },
  
    {
      id: 4,
      channelName: 'yummy',
      uri: 'https://v.pinimg.com/videos/mc/720p/c9/22/d8/c922d8391146cc2fdbeb367e8da0d61f.mp4',
      caption: 'Brown little puppy #cute #puppy',
      musicName: 'Song #3',
      likes: 3100,
      comments: 801,
      avatarUri: 'https://wallpaperaccess.com/thumb/384178.jpg',
    },
    {
      id: 5,
    channelName: 'cutedog',
    uri: 'https://mediaglens.s3.amazonaws.com/94d0479c8d07/videos/75260fdc-9a11-4cdb-b5cf-aca0ecde3a0f.mp4',
    caption: 'Some cool music you may wanna view to #music #cool #vibes',
    musicName: 'Song #1',
    likes: 4321,
    comments: 2841,
    avatarUri: 'https://wallpaperaccess.com/full/1669289.jpg',
  },
   
    
  ];
  export default VideoDatas;