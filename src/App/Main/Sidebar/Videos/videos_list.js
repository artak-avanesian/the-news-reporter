const videos_list = [
    {
        video_id:'video-1',
        video_title: "Video shows Dartmoor Zoo staff in tiger tug-of-war",
        picture_of_video: 'picture-of-video-1',
        video_article: [
            `A video shows staff at Dartmoor Zoo demonstrating a tug-of-war with a tiger that animal rights groups has branded as disrespectful to animals.`,
            `Visitors are charged £15 to try and pull a piece of meat out of the mouth of either a lion or a tiger.`,
            `The zoo said visitor engagement is an "important part of developing empathy with and respect for zoo animals".`,
            `Well-managed big cat tug-of-war activities offer lions the opportunities to engage in a physically and mentally challenging activity.`,
            `"Such activities are a well recognised part of the evolving improvements in animal welfare that we see in modern zoo facilities," the zoo added.`
        ],
        video_link: `videos/video-1.mp4`
    },
    {
        video_id:'video-2',
        video_title: "Police have video of Robert Kraft 'receiving alleged acts'",
        picture_of_video: 'picture-of-video-2',
        video_article: [
            `The billionaire owner of the New England Patriots has been charged with soliciting prostitution in a Florida massage parlour, police say.`,
            `Robert Kraft, 77, is accused of two misdemeanour charges in Jupiter. He has denied the allegation.`,
            `The owner of the Super Bowl-winning franchise allegedly paid for sexual services at the Orchids of Asia Day Spa in the beach resort, police said.`,
            `Mr Kraft's net worth is estimated at $6.6bn (£5bn).`,
            `The tycoon was snared as part of a human-trafficking sting operation in Jupiter about a month ago, said police.`,
            `Jupiter Police chief Daniel Kerr said at a press conference on Friday that the charges stem from "two different visits" to the spa, resulting in two counts of "soliciting another to commit prostitution".`,
            `A spokesperson for Mr Kraft said in a statement to the BBC: "We categorically deny that Mr Kraft engaged in any illegal activity.`,
            `"Because it is a judicial matter, we will not be commenting further."`
        ],
        video_link: `videos/video-2.mp4`
    },
    {
        video_id:'video-3',
        video_title: "Alesha killer's YouTube video game channel removed",
        picture_of_video: 'picture-of-video-3',
        video_article: [
            `The YouTube channel set up by the teenager convicted of murdering Alesha MacPhail has been removed.`,
            `YouTube said it has taken down videos created by Aaron Campbell as a mark of respect for his six-year-old victim and her family.`,
            `The content on the channel was mainly 16-year-old Campbell playing and commentating on violent video games.`,
            `Campbell is facing a life sentence after being found guilty of killing Alesha on the Isle of Bute last year.`,
            `'Addicted to gaming'`,
            `During the trial the court heard Campbell had wanted to be a YouTube star and the teenager's mother was reported as saying her son was "addicted" to gaming.`,
            `Among the videos covered on the channel is a horror game called Slender Man which focuses on a tall and faceless character who lives in the woods and stalks children.`,
            `On the videos now removed, Campbell is seen talking viewers through what is happening in the game.`,
            `Other videos posted on the channel showed the teenager showing off his parkour skills on a trampoline.`
        ],
        video_link: `videos/video-3.mp4`
    },
    {
        video_id:'video-4',
        video_title: "Video games to tackle mental health stigma",
        picture_of_video: 'picture-of-video-4',
        video_article: [
            `Three video games featuring characters with mental health conditions have been created to fight the social stigma.`,
            `Scientists, game developers and mental health advocates came together in Cardiff to tackle "prejudiced" mental health portrayal in gaming, said researcher Antonio Pardinas.`,
            `Munzir Quraishy, who offered his own experience of OCD for one of the games, said it could help people empathise.`,
            `Mind Cymru said more representation would help patients deal with stigma.`,
            `The three games - Picturesque, The Interview and Get Help - took 48 hours to design at a Cardiff University gaming jam.`,
            `Munzir Quraishy, who has obsessive-compulsive Disorder (OCD), depression and an eating disorder, offered his experiences for the game Picturesque.`,
            `Mr Quraishy, who is studying medicine at Cardiff University, said the game shows OCD is not just about cleanliness, but is "the process of having an intrusive thought and trying to relieve it".`,
            `The character is tasked with photographing an extinct animal, but his OCD and intrusive thoughts make this difficult.`,
            `The 24-year-old from London said games help him to "get into the shoes" of different mental health conditions.`,
            `"Just because I have a mental health problem, doesn't mean I understand all mental health problems," he said.`,
            `"But this can help people empathise and understand some of what people are going through."`
        ],
        video_link: `videos/video-4.mp4`
    },
];

export const getVideosMap = (array) => {
    return array.reduce((map, article) => ({
        ...map, 
        [article.video_id]: article
    }), {})
}

export default videos_list