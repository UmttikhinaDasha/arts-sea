
const users = [
  {id: "0", userName: "someName", followers: [1, 2], following: [2], rating: 4.1, wallpaper: `https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`, arts: [{id: 201, src:`https://picsum.photos/200/201`}, {id: 202, src:`https://picsum.photos/200/202`}]},
  {id: "1", userName: "someOtherName", followers: [0, 2], following: [2], rating: 3, wallpaper: `https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`, arts: [{id: 0, src: 'https://picsum.photos/200/209'}, {id: 1, src: 'https://picsum.photos/200/256'}]},
  {id: "2", userName: "otherOtherName", followers: [1], following: [0], rating: 5, wallpaper: `https://picsum.photos/200/${Math.floor(Math.random() * (300 - 200 + 1) + 200)}`, arts: [{id: 0, src: 'https://picsum.photos/200/209'}, {id: 1, src: 'https://picsum.photos/200/256'}]},
]

const pricelist = [{id: 201, src:`https://picsum.photos/200/201`}, {id: 202, src:`https://picsum.photos/200/202`}];

const interlocutors = [
  {id: 0, username: "Gojo Satoru", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZQBfD_3lhmfbNG7RKfmPKry5ZGZxaJoQ2ukUD9PHkkvA9W1I_aVYq3qEmsSzwajSiVQ&usqp=CAU"},
  {id: 1, username: "Ieri Shoko", avatar: "https://i.pinimg.com/564x/77/ef/fa/77effa9b1af4918ab607ca40cf9f6860.jpg"},
  {id: 2, username: "Geto Suguru", avatar: "https://i.pinimg.com/564x/9e/6e/f0/9e6ef0e2b9ffb83c05c2772442235b86.jpg"},
  {id: 3, username: "Fushiguro Toji", avatar: "https://i.pinimg.com/564x/b6/9c/1e/b69c1ee18c2ac5346fb23557e1afc8b6.jpg"},

  // {id: 0, username: "Gojo Satoru", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZQBfD_3lhmfbNG7RKfmPKry5ZGZxaJoQ2ukUD9PHkkvA9W1I_aVYq3qEmsSzwajSiVQ&usqp=CAU"},
  // {id: 1, username: "Ieri Shoko", avatar: "https://i.pinimg.com/564x/77/ef/fa/77effa9b1af4918ab607ca40cf9f6860.jpg"},
  // {id: 2, username: "Geto Suguru", avatar: "https://i.pinimg.com/564x/9e/6e/f0/9e6ef0e2b9ffb83c05c2772442235b86.jpg"},
  // {id: 3, username: "Fushiguro Toji", avatar: "https://i.pinimg.com/564x/b6/9c/1e/b69c1ee18c2ac5346fb23557e1afc8b6.jpg"},
  // {id: 0, username: "Gojo Satoru", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZQBfD_3lhmfbNG7RKfmPKry5ZGZxaJoQ2ukUD9PHkkvA9W1I_aVYq3qEmsSzwajSiVQ&usqp=CAU"},
  // {id: 1, username: "Ieri Shoko", avatar: "https://i.pinimg.com/564x/77/ef/fa/77effa9b1af4918ab607ca40cf9f6860.jpg"},
  // {id: 2, username: "Geto Suguru", avatar: "https://i.pinimg.com/564x/9e/6e/f0/9e6ef0e2b9ffb83c05c2772442235b86.jpg"},
  // {id: 3, username: "Fushiguro Toji", avatar: "https://i.pinimg.com/564x/b6/9c/1e/b69c1ee18c2ac5346fb23557e1afc8b6.jpg"},
];

const bids = [{id:0, username: 'default-name', userPageLink: '#', bidValue: 30, currency: "usd"},
  {id:1, username: 'default-name', userPageLink: '#', bidValue: 35, currency: "usd"},
  {id:2, username: 'Имя_пользователя', userPageLink: '#', bidValue: 40, currency: "usd"},
  {id:3, username: 'default-name', userPageLink: '#', bidValue: 45, currency: "usd"},
  {id:4, username: 'default-name', userPageLink: '#', bidValue: 50, currency: "usd"},
  {id:5, username: 'default-name', userPageLink: '#', bidValue: 55, currency: "usd"},
  {id:6, username: 'Имя_пользователя', userPageLink: '#', bidValue: 60, currency: "usd"},
  {id:7, username: 'default-name', userPageLink: '#', bidValue: 80, currency: "usd"},
  {id:8, username: 'default-name', userPageLink: '#', bidValue: 100, currency: "usd"},];

const comments = [{id:0, username: 'default-name', userPageLink: '#', commContent: "Comment's content"},
  {id:1, username: 'default-name', userPageLink: '#', commContent: "Какой-то там комментарий очень интересный превысокомногорассмотрительствующий просто невероятный"},
  {id:2, username: 'Имя_пользователя', userPageLink: '#', commContent: "Какой-то там комментарий очень интересный просто невероятный"},
  {id:3, username: 'default-name', userPageLink: '#', commContent: "Еще коммент"},
  {id:4, username: 'default-name', userPageLink: '#', commContent: "Какой-то там комментарий"},
  {id:5, username: 'default-name', userPageLink: '#', commContent: "Еще коммент"},
  {id:6, username: 'Имя_пользователя', userPageLink: '#', commContent: "Твой длинный длинный длинный длинный комментарий"},
  {id:7, username: 'default-name', userPageLink: '#', commContent: "Еще коммент"},
  {id:8, username: 'default-name', userPageLink: '#', commContent: "И еще комментарий кто-то настрочил"},];

export const getUserById = (id : string) => {
  const user = users.find(user => user.id === id);
  return user;
}

export const getArts = () => {
  return Array.from({length: 40}).map((_, index) => {
    return {
      id: index,
      src:`https://picsum.photos/200/${Math.floor(
        Math.random() * (300 - 200 + 1) + 200
      )}`
    }
  });
}

export const getBids = () => {
  return bids;
}

export const getComments = () => {
  return comments;
}

export const getInterlocutors = () => {
  return interlocutors;
}

export const getPriceList = () => {
  return pricelist;
}