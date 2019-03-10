const newsMenuEntertainmentList = [
    {
        newsMenuEntertainmentId: `newsMenuEntertainment-1`,
        newsMenuEntertainmentTitle: `Woody Allen sues Amazon for $68m for dropping A Rainy Day in New York`,
        newsMenuEntertainmentImg: `news-menu-entertainment-img-1`,
        newsMenuEntertainmentArticle: [
            `Woody Allen has launched legal action against Amazon Studios, accusing it of breaching their contract by refusing to distribute his latest film.
            The 83-year-old is seeking more than $68m (£52m) in damages, alleging the company backed out of a multi-picture deal without cause.`,
            `Amazon released two of Allen's films and also distributed his TV series, Crisis in Six Scenes. But it dropped his most recent movie, A Rainy Day in New York.`,
            `The BBC contacted Amazon Studios for comment, but did not receive an immediate reply.
            According to a lawsuit filed on Thursday in New York, Allen claims Amazon backed out of the deal in June 2018 because of an old accusation that the director had molested his adopted daughter Dylan Farrow in 1992.`,
            `The legal action said Amazon knew about "a 25-year old, baseless" allegation when it entered into deals with the director and that it "does not provide a basis for Amazon to terminate the contract". A Rainy Day in New York was shot in 2017 with a cast including Jude Law, Rebecca Hall, Selena Gomez and Timothée Chalamet.`,
        ]
    },
    {
        newsMenuEntertainmentId: `newsMenuEntertainment-2`,
        newsMenuEntertainmentTitle: `Juliette Binoche says Harvey Weinstein has 'had enough'`,
        newsMenuEntertainmentImg: `news-menu-entertainment-img-2`,
        newsMenuEntertainmentArticle: [
            `Oscar-winning actress Juliette Binoche has called for the public censure of Harvey Weinstein to end, saying "justice has to do its work".
            Binoche, who is head of the jury at Berlin Film Festival, said: "I'm trying to put my feet in his shoes. He's had enough, I think."`,
            `She added she had had no problems working with the movie mogul on Chocolat and The English Patient.`,
            `Weinstein is accused by more than 80 women of sexual misconduct.`,
            `The allegations go back decades and Weinstein has admitted in the past that his behaviour has "caused a lot of pain", but denies any non-consensual sex and has described many allegations against him as "patently false".`,
            `Weinstein is currently facing criminal charges on five counts of sexual abuse, including rape, relating to two accusers - charges he also denies.`,
        ]
    },
    {
        newsMenuEntertainmentId: `newsMenuEntertainment-3`,
        newsMenuEntertainmentTitle: `Sir Lenny Henry says his mum was racially abused`,
        newsMenuEntertainmentImg: `news-menu-entertainment-img-3`,
        newsMenuEntertainmentArticle: [
            `Sir Lenny Henry has spoken about the racial abuse his mother faced when she arrived in the UK, at the launch of a BBC show about the Windrush generation.`,
            `"People followed her down the street and asked her where her tail was," the actor revealed at a screening of Soon Gone: A Windrush Chronicle this week.`,
            `"This is the stuff our grandparents and parents experienced," he continued.`,
            `Yet Henry said people like his Jamaican parents also received kindness and that that should be recognised as well.`,
            `"It's also important to talk about the good things - the people who were nice, who were kind, that facilitated relationships and working experiences," he told an audience in east London on Tuesday.`,
            `"We've tried to do that with this story by telling the story of one particular family."`,
        ]
    },
];

export const getNewsMenuEntertainmentMap = (array) => {
    return array.reduce((map, article) => ({
        ...map,
        [article.newsMenuEntertainmentId]: article
    }), {})
}

export default newsMenuEntertainmentList