const popular_list = [
    {
        popular_id:'popular-1',
        popular_title:'"Good fight": Zelensky first commented on his presidential rating',
        popular_link: 'popular-news/popular-1',
        popular_article: [
            `The showman Vladimir Zelensky has told if he is going to go to the elections.`,
            `Volodymyr Zelensky commented on the ratings of probable candidates in the presidential election for the first time. According to the latest sociological research, he ranks second and goes to the second round with Yulia Tymoshenko.`,
            `Journalists jumped him up during the Women's Quarters rehearsal and asked how he relates to polls and whether he is about to go to the polls. "About the second place: fight, fight so!" - laughs the showman. And immediately he adds: "And what are you to fear here? I have a friend, Tymoshenko, the first. A good fight! So I, as a real man, is just obliged to let a woman go ahead."`,
            `Volodymyr Zelensky first commented on the ratings of probable candidates in the presidential election, according to which he ranks second and goes to the second round with Yulia Tymoshenko. As regards the results of social surveys and whether it is going to go to elections - the famous showman TSN jumped out during the rehearsal of the Women's Quarter.`,
            `To clarify that he does not want to talk seriously and disclose whether he really will run, Zelensky replied: "Everyone has to be kept secret. Otherwise, who is she?" The showman made it clear that he is now busy with his work. "Now I have the" League of laughs "," Evening quarter ", now I am present at the rehearsal, I work with beautiful ladies. Women are the best electorate, and moreover, they are beautiful and with a sense of humor."`,
            `Zelensky promised to give an answer in the future about participation in the elections. "This will leave for the future if possible. In any case, this is my decision, personal," he explained.`
        ],
        date:'Nov 15th 2018',
    },
    {
        popular_id:'popular-2',
        popular_title:'In Israel, scored the funniest goal in the history of football',
        popular_link: 'popular-news/popular-2',
        popular_article: [
            `Habib Habibu assisted a traumatic teammate and timely joined the attack.
            In the match of the 10th round of the Championship of Israel between Maccabi, Netanyahu and Maccabi with Petah Tikva are probably the most fun goal in the history of football.
            He was the author of the attack on Netanyahu team Habib Habib.`,
            `The footballer tried to help the teammate who lay in the free kick when his team attacked. The goalkeeper could not beat the ball and the ball flew towards Habib, he distanced himself from the teammate and scored in the empty goal. Then he returned to his colleague.
            Moreover, this goal was the only one in the match. And after the match, the author of the funny goal wrote on Twitter: "God never sleeps. Help your friend, and the Almighty will give you more."`
        ],
        date:'Nov 12th 2018',
    },
    {
        popular_id:'popular-3',
        popular_link: 'popular-news/popular-3',
        popular_title:'Russian soldier rough reception sent to a knockout at the MMA',
        popular_article: [
            `The lucky haikus was spent by an Israeli.`,
            `Russian soldier Cyril Sidelnikov was knocked out by an Israeli rival, Adam Keresh, at the MMA Bellator 209.`,
            `Keresh used haykik (kicking his head, note), thus sending one of the best heavyweights in deep knockout.`,
            ` After this result, Keresh has two victories and no defeats. As for Sidelnikov, he has already suffered a fifth failure.`
        ],
        date:'Nov 17th 2018',
    },
    {
        popular_id:'popular-4',
        popular_title:'Russia was fouled as a birthday will be expected by a combating child',
        popular_link: 'popular-news/popular-4',
        popular_article: [
            `The animal lives nearby in a private home.`,
            `In Russian Saratov, a video was taken, as a camel pulls an off-road vehicle "Niva", which stuck in the snow and pushed.`,
            `The video appeared on YouTube.`,
            `The frames show that "Niva" can not leave the snow. One of the men living nearby is coming to the rescue. He leads to the place where the car got stuck, his camel. Then ropes are attached to the animal and to the car, and it pulls the car. A camel pulls out the car almost immediately.`
        ],
        date:'Nov 12th 2018',
    },
    {
        popular_id:'popular-5',
        popular_title:'Scientists have named a disease that can kill millions of children over 12 years',
        popular_link: 'popular-news/popular-5',
        popular_article: [
            `Children who live in poverty are most at risk of pneumonia.`,
            `Researchers found that pneumonia could be the cause of the death of 10.8 million children over the next 12 years.`,
            `This is reported by The Telegraph.`,
            `The research was conducted by specialists from Save the Children International and Johns Hopkins University.`,
            `Pneumonia kills more children under the age of five than infectious diseases such as measles, malaria and diarrhea. The last kills nearly one million children each year.
            The disease affects the lungs that are inflamed and filled with fluid. This is due to an infection from bacteria, viruses or parasites, in developed countries mainly affects the elderly.`
        ],
        date:'Nov 12th 2018',
    },
];

export const getPopularNewsMap = (array) => {
    return array.reduce((map, popularArticle) => ({
        ...map,
        [popularArticle.popular_id]: popularArticle,
    }), {})
}

export default popular_list