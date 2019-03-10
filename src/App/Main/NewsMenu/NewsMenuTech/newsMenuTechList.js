const newsMenuTechList = [
    {
        newsMenuTechId: `newsMenuTech-1`,
        newsMenuTechTitle: `Huawei and 5G: Decision time`,
        newsMenuTechImg: `news-menu-tech-img-1`,
        newsMenuTechArticle: [
            `It's called the Supply Chain Review and sounds very dull but it could determine the UK's hi-tech future. As the political temperature around Huawei's role in the UK rises, mobile phone operators await a decision from the government on whether they can continue to use the Chinese giant's equipment.`,
            `They expect that ruling to come in late March or early April, when the review of the supply chain of UK telecoms networks to ensure their security and resilience is due to be published. According to the Department of Digital, Culture, Media and Sport, which is leading the review, it is about far more than Huawei's role in the next generation 5G mobile networks. But that is the only issue about which the mobile operators care.`,
            `The operators fear that pressure from politicians concerned about the alleged security threat posed by Huawei, will result in a severe curtailment of their choice of suppliers. In background briefings with three of the major operators, there has been a constant theme - we know we need to keep Huawei out of the most sensitive parts of our networks, but a blanket ban would be a disaster for the roll-out of 5G and for the UK's role in a vital technology.`,
            `Their preparations for the commercial launch of their 5G networks towards the end of this year are well advanced and they are all planning to use plenty of Huawei equipment, not in their core networks but at their phone mast sites and in the kit to link them to the central brain.`,
        ]
    },
    {
        newsMenuTechId: `newsMenuTech-2`,
        newsMenuTechTitle: `Apple to pay teenager who found FaceTime bug`,
        newsMenuTechImg: `news-menu-tech-img-2`,
        newsMenuTechArticle: [
            `A US teenager who discovered a security flaw in Apple's FaceTime video-calling system has been given a bug bounty.
            Apple has not revealed the exact amount it is giving 14-year-old Grant Thompson but it is believed to include money to help pay for his education.`,
            `The teenager found a bug that meant he could briefly eavesdrop on recipients to a group FaceTime call.
            The reward comes as one security researcher refused to tell Apple about a bug because no bounty was on offer.`,
            `Information about the bug first emerged in late January and revealed that some Apple users could secretly listen to people they called via FaceTime even if the recipient did not accept the call. Apple deemed it so serious that it disabled the group FaceTime feature while it investigated and produced a fix.`,
            `News reports about the problem initially said it was just being discussed on social media and did not credit any individual with its discovery. Later, it emerged that Apple had been warned about it earlier in January by Grant and his mother. The teenager uncovered the problem when using FaceTime to talk about strategies for the Fortnite game with friends.`,
            `Mrs Thompson sent several emails and other messages to Apple warning about the vulnerability but initially got no response. Now, Apple has credited Grant, who's from Catalina, in Arizona, with finding the flaw. News about his reward came on the day that Apple issued a software update that fixed the bug.`,
        ]
    },
    {
        newsMenuTechId: `newsMenuTech-3`,
        newsMenuTechTitle: `Microsoft: What went right under Satya Nadella?`,
        newsMenuTechImg: `news-menu-tech-img-3`,
        newsMenuTechArticle: [
            `On Monday, it will be five years since Satya Nadella was announced as Microsoft's chief executive. Since taking charge he has turned the tech firm's fortunes around, making it the most valuable company in the world for the first time since 2002.`,
            `Go on, admit it. You thought Microsoft was so last century, didn't you? In the late 80s and 90s, the company's Windows operating system ruled the world.`,
            ` But where Bill Gates - chief executive from 1975 to 2000 - caught the wave of personal computing, so Steve Ballmer - 2000 to 2014 - failed to do likewise with mobiles. Although the Surface tablet is a modest success, Microsoft's smartphones have flopped despite the firm paying more than 5.4bn euros ($6.2bn; £4.7bn) for Nokia's handset business. Apple's iPhone, and then Google's Android left Microsoft in the dust.`,
        ]
    },
    {
        newsMenuTechId: `newsMenuTech-4`,
        newsMenuTechTitle: `Do money apps make us better or worse with our finances?`,
        newsMenuTechImg: `news-menu-tech-img-4`,
        newsMenuTechArticle: [
            `Finance apps are proving increasingly popular, but are they making us better at managing our money or encouraging us to spend more? Kerry Hudson, 28, spent her childhood living in poverty in Scotland with her single mother, in "a succession of council estates, bed and breakfasts for the homeless, and caravan parks".`,
            `She lived in seven different places before she was 15, and attended 14 schools. "I was always the new girl with the weird accent and the wrong, cheap clothes," she recalls. "I was bullied every single day of secondary school."`,
            `She found solace in books and the peace of the library, eventually growing up to become a prizewinning writer. Her most recent book, Lowborn, is about people growing up without money. But although her childhood experiences gave her a constant, gnawing fear of slipping back into poverty, Kerry found managing her finances difficult.`,
            `She says she was "perpetually running out" of money before payday, "because I wasn't keeping track, which is obviously OK when there is a payday but you can't do that when you're freelance." So she sought help in the form of a money app from Revolut, the financial technology start-up currently under fire for an insensitive marketing campaign.`,
        ]
    },
    {
        newsMenuTechId: `newsMenuTech-5`,
        newsMenuTechTitle: `Self-harm, suicide and social media: Can you talk about them online safely?`,
        newsMenuTechImg: `news-menu-tech-img-5`,
        newsMenuTechArticle: [
            `The boss of Instagram is meeting England's Health Secretary to discuss ways of handling content about self-harm and suicide. Teenager Molly Russell took her own life in 2017 and links have been made between her death and content she was looking at on social media.`,
            `The UK government is urging social media companies to take more responsibility for harmful online content. But some say talking about mental health problems on social media in an honest way can sometimes help recovery.`,
            `So is there a responsible way to post about self-harm or suicide?`,
        ]
    },
];

export const getNewsMenuTechMap = (array) => {
    return array.reduce((map, article) => ({
        ...map,
        [article.newsMenuTechId]: article
    }), {})
}

export default newsMenuTechList