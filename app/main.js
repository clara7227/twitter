window.addEventListener('load', () => {
    renderTweets();
    renderForm();
    tweetEvents();
    formEvents();
    renderAside();
})

/*ARRAY TWEETS*/
const tweets = [
    {s')
    let trashDeleteAll = deleteAll.querySelector('.fa-trash');
    console.log(trashDeleteAll);
    tweetBox.forEach((tweet, i) => {
        const trash = tweet.querySelector('.fa-trash')
        trash.addEventListener('click', () => {
            tweets.splice(i, 1);
            renderTweets()
        })
        const fillHeart = tweet.querySelector('.fa-heart')
        let likedTweet = false;
        let toLikeTweet = () => {
            tweets[i].likes++;
            likedTweet = true;
            tweets[i].likedByMe = "liked_By_Me";
            console.log(likedTweet);  // El estado de likedTweet cambia a `true` pero no se ejecuta la sentencia de likedTweet. 
        }
        let toUnlikeTweet = () => {
            tweets[i].likes--;
            likedTweet = false;
            console.log(likedTweet);
            tweets[i].likedByMe = "";
        }
        fillHeart.addEventListener('click', () => {
            if (!likedTweet) {
                toLikeTweet();
                console.log(tweets[i].likedByMe);
                console.log(tweets[i].likes);
                console.log(tweets);
            } else {
                toUnlikeTweet();
                console.log(tweets[i].likedByMe);
                console.log(tweets[i].likes);
                console.log(tweets);
            }
            tweets[i].likes;
            renderTweets();
        })


        /*FILL FUNCIONA*/ /*
        const like = tweet.querySelector('.fa-heart')
        let likedTweet = false;
        like.addEventListener('click', ()=> {
            let toLikeTweet = () => {
            like.classList.add('fill');
            tweets[i].likes++;
            console.log(tweets);
            likedTweet = true;
        }
        let toUnlikeTweet = () => {
            like.classList.remove('fill');
            tweets[i].likes--;
            likedTweet = false;
        }
           if (!likedTweet){
                toLikeTweet();
                console.log('hola') 
           } else {
                toUnlikeTweet();
                console.log('holsa')
           }
           renderTweets()
        })*/
        /*Funciona pero sin hacer fill */
        /*const fillHeart = tweet.querySelector('.fa-heart')
        let likedTweet = false;
        let toLikeTweet = () => {
            fillHeart.classList.add('fill');
            tweets[i].likes++;

            console.log(likedTweet)
        }
        let toUnlikeTweet = () => {
            fillHeart.classList.remove('fill');
            tweets[i].likes--;

            console.log(likedTweet)
        }
    
        console.log(tweets) 
        fillHeart.addEventListener('click', () => {
            if (!likedTweet) {
                toLikeTweet();
                tweets[i].likedByMe = "liked_By_Me";
                console.log(tweets[i].likedByMe);
                console.log(tweets[i].likes);
                console.log(tweets);
                likedTweet = true
            } else if(likedTweet) {
                toUnlikeTweet();
                tweets[i].likedByMe = "";
                console.log(tweets[i].likedByMe);
                console.log(tweets[i].likes);
                console.log(tweets);
                likedTweet = false
                ; 
            } else {

            }
            tweets[i].likes ;
            renderTweets()
        })*/
    })
}