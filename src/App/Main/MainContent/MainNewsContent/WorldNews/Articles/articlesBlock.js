const articlesBlock = [
    {
        id:"world-news-article-1",
        img: "world-news-img-1",
        favouriteClass: 'fav-world-news-img-1',
        link: '/world-news-articles/world-news-article-1',
        title:"Trump announced when the US unveils the name of the killer journalist Hashoggi",
        description:"US President Donald Trump said the full report on the murder of Saudi journalist Jamal Hashoggi will be published on November 20.",
        world_news_article: [
            `States are preparing a detailed report on this case. US President Donald Trump said the full report on the murder of Saudi journalist Jamal Hashoggi will be published on November 20. The words of Trump were transmitted by journalists from the White House press pool, who accompanied him during his trip to California, where fires broke out.`,
            `Trump emphasized that the report will identify those who killed the journalist. "There was a terrible thing - the murder of a journalist. We will have a full report within the next two days, possibly on Monday or Tuesday, "the head of state said. Later, the US president clarified that it was going to be on Tuesday.`,
            `Trump also confirmed that he had a telephone conversation with Director of the Central Intelligence Agency (CIA) Gina Hespel on Saturday on his aircraft. He added that the information that appeared on the CIA on Friday in the media was "preliminary". "They (CIA) have not yet determined anything. It's too early, "he explained.`,
            `As it was reported, 59-year-old Hashoggi was killed on October 2 at the Consulate General of Saudi Arabia in Istanbul, when he went there to pick up the documents required for the future wedding. His bride was not allowed to enter the institution and after five hours of waiting she was informed that Hashoggi had already left the consulate.`,
            `The journalist had long ties to the royal family of Saudi Arabia, but he critically wrote about the current government and Crown Prince Mohammed bin Salman. In Turkey, they suspect that her husband was questioned, tortured, and then killed and dismembered. For this purpose, 15 officers of the Saudi security services flew to Istanbul on that day.`,
            `The investigation has sound recordings. After several weeks of objections and under heavy pressure from the West, the Saudi authorities still admitted that the journalist was killed in their consulate. Subsequently, the Turkish authorities reported that, a few days after the assassination of Hashoggi, Saudi Arabia sent a group of 11 experts to Turkey, including a chemist and a toxicologist who had to "cover the traces" of the crime.`
        ]
    },
    {
        id:"world-news-article-2",
        img: "world-news-img-2",
        favouriteClass: 'fav-world-news-img-2',
        link: '/world-news-articles/world-news-article-2',
        title:"California in the fire: a powerful fire destroys forests, houses and cars",
        description:"Several people were injured in the fire. In California, tens of thousands of people are forced to leave their homes because of severe forest fires.",
        world_news_article: [
            `Several people were injured in the fire. In California, tens of thousands of people are forced to leave their homes because of severe forest fires.`,
            `Fires in the north of the state, the fire has already destroyed several hundred buildings. However, it is not possible to estimate the damage precisely by officials, because they can not reach the damaged areas of the region.`,
            `The fire and people were injured - two firefighters and several residents of the state received injuries. Firefighters say the fire is spreading very quickly, because California is blowing strong winds.`
        ]
    },
    {
        id:"world-news-article-3",
        img: "world-news-img-3",
        favouriteClass: 'fav-world-news-img-3',
        link: '/world-news-articles/world-news-article-3',
        title:"In London, three people were injured as a result of firing",
        description:"The wounded were hospitalized. In London, the capital of Great Britain, on Saturday night, November 17, there was a shooting.",
        world_news_article: [
            `The wounded were hospitalized. In London, the capital of Great Britain, on Saturday night, November 17, there was a shooting. This is reported by The Sun. It is noted that three people were injured during the incident. Two of them were injured precisely because of the use of weapons. In total, the police noticed four people on the spot.`,
            `It is reported that law enforcement officers have not detained anyone. The wounded were hospitalized. Recall Turkey's investigative bodies completed an investigation into the assassination of Russian ambassador Karliv completed an investigation into the murder of Russian Ambassador Andriy Charlev, who was shot dead in 2016.`,
            `The indictment was sent to the Ankara Public Prosecutor's Office, Anadolu.`
        ]
    },
];

export const getWorldNewsMap = (array) => {
    return array.reduce((map, article) => ({
        ...map,
        [article.id]: article
    }), {})
}

export default articlesBlock