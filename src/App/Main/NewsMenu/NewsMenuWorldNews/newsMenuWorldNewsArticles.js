const newsMenuWorldNewsArticles = [
    {
        newsMenuWorldNewsImg: 'news-menu-world-news-img-1',
        newsMenuWorldNewsTitle: "France recalls ambassador to Italy as diplomatic row deepens",
        newsMenuWorldNewsId: "newsMenuWorldNews_1",
        newsMenuWorldNewsArticle: "A diplomatic row between France and Italy has deepened, with France complaining of 'unfounded attacks and outlandish claims' by Italian leaders. France recalled its ambassador to Italy for talks on Thursday, saying the situation was 'unprecedented' since the end of World War Two. It comes after Italian Deputy PM Luigi Di Maio met French 'yellow-vest' protesters near Paris on Tuesday. France warned him not to interfere in the country's politics. Relations between the two countries - both founding members of the EU - have been tense since Italy's populist Five Star Movement and right-wing League party formed a coalition government in June 2018. The two governments have clashed over a range of issues, including immigration."
    },
    {
        newsMenuWorldNewsImg: 'news-menu-world-news-img-2',
        newsMenuWorldNewsTitle: "South Africa Gloria coal mine explosion 'kills six'",
        newsMenuWorldNewsId: "newsMenuWorldNews_2",
        newsMenuWorldNewsArticle: `Six people have been killed by a gas explosion in an abandoned coal mine in South Africa, the national broadcaster is reporting.

        About 20 others are still trapped at the Gloria coal mine in Middelburg, east of the capital, Pretoria.
        
        A police spokesman said some people had gone into the mine to steal copper wires when a gas pipe exploded.
        
        Local media said rescue efforts were being hampered by dangerously high levels of toxic gas.
        
        Africa live: Real-time updates on this and other stories
        The human cost of South Africa's mining industry
        The illegal gold fuelling gang battles in South Africa
        "We're still waiting for engines and generators to arrive to start putting oxygen into the ground", local government official Speedy Mashilo told South Africa's national broadcaster SABC.
        
        He said that engineers would join the rescue efforts by rigging up lighting in the mine shafts.
        
        The mine was closed after its owners, the Gupta brothers, found it difficult to continue doing business in South Africa following corruption allegations against them.
        
        South Africa's former President Jacob Zuma has become embroiled in the allegations. Both parties have denied any wrongdoing.
        
        Mining accidents are common in South Africa. More than 80 fatalities were recorded in mines across the country in 2017.
        
        Last year, a power cut left 955 gold miners trapped underground for two days before they were eventually freed.`
    },
    {
        newsMenuWorldNewsImg: 'news-menu-world-news-img-3',
        newsMenuWorldNewsTitle: "Black Saturday: The bushfire disaster that shook Australia",
        newsMenuWorldNewsId: "newsMenuWorldNews_3",
        newsMenuWorldNewsArticle: `Ten years ago, Australia experienced its worst-ever bushfire disaster when 173 people died across the state of Victoria. Immediately branded "one of the darkest days in Australia's peacetime history", Black Saturday has left a profound legacy. Sharon Verghis reports.

        "It was like the gates of hell. There is no other way to describe it."
        
        For Tony Thomas, 7 February 2009 began as another ordinary day. It had been a summer of record-breaking temperatures, prompting days of safety warnings.
        
        But Mr Thomas wasn't overly concerned; they had had scorching days like this before.
        
        In the lush, peaceful hills on the outskirts of tiny Marysville, about 90km (55 miles) north-east of Melbourne, he and wife Penni had carved out a fruitful life running a bed and breakfast on a 60-acre property.
        
        His in-laws had arrived for a birthday lunch. It was a pleasant gathering, despite the suffocating heat. But in the late afternoon, they spotted smoke in the west. Going for a closer look, they saw fire.`
    },
    {
        newsMenuWorldNewsImg: 'news-menu-world-news-img-4',
        newsMenuWorldNewsTitle: "India man to sue parents for giving birth to him",
        newsMenuWorldNewsId: "newsMenuWorldNews_4",
        newsMenuWorldNewsArticle: `A 27-year-old Indian man plans to sue his parents for giving birth to him without his consent.

        Mumbai businessman Raphael Samuel told the BBC that it's wrong to bring children into the world because they then have to put up with lifelong suffering.
        
        Mr Samuel, of course, understands that our consent can't be sought before we are born, but insists that "it was not our decision to be born".
        
        So as we didn't ask to be born, we should be paid for the rest of our lives to live, he argues.
        
        A demand like this could cause a rift within any family, but Mr Samuel says he gets along very well with his parents (both of whom are lawyers) and they appear to be dealing with it with a lot of humour.
        
        In a statement, his mother Kavita Karnad Samuel explained her response to "the recent upheaval my son has created".
        
        "I must admire my son's temerity to want to take his parents to court knowing both of us are lawyers. And if Raphael could come up with a rational explanation as to how we could have sought his consent to be born, I will accept my fault," she said.
        
        Mr Samuel's belief is rooted in what's called anti-natalism - a philosophy that argues that life is so full of misery that people should stop procreating immediately.`
    },
    {
        newsMenuWorldNewsImg: 'news-menu-world-news-img-5',
        newsMenuWorldNewsTitle: "Saudi Arabia 'curtailed' Jamal Khashoggi murder probe: UN",
        newsMenuWorldNewsId: "newsMenuWorldNews_5",
        newsMenuWorldNewsArticle: `Saudi Arabia "seriously curtailed" Turkish access to the scene of Jamal Khashoggi's murder, a UN investigator has said.

        A preliminary report into the investigation says Turkey was not allowed into the consul where the journalist was killed for 13 days.
        
        Mr Khashoggi was last seen alive entering the Saudi consulate in Istanbul on 2 October.
        
        The 59-year-old was a prominent critic of Crown Prince Mohammed bin Salman.
        
        US officials have reportedly said such an operation would have needed the prince's approval.
        
        Jamal Khashoggi: The story so far
        The journalist who vanished into a consulate
        Saudi authorities, after denying any knowledge of his whereabouts, later admitted he had been killed, blaming a "rogue agent".
        
        The country has put 11 people on trial for his murder in the capital, Riyadh.
        
        Turkey however says it has evidence Mr Khashoggi was killed by a team of Saudis on orders from the highest levels of state.
        
        Saudi Arabia has refused to extradite its citizens to Turkey after the country issued arrest warrants for several Saudi officials.`
    },
    {
        newsMenuWorldNewsImg: 'news-menu-world-news-img-6',
        newsMenuWorldNewsTitle: "Virginia's attorney general admits wearing blackface in college",
        newsMenuWorldNewsId: "newsMenuWorldNews_6",
        newsMenuWorldNewsArticle: `Virginia Attorney General Mark Herring has acknowledged wearing "brown makeup" to a party, days after the state governor admitting wearing blackface.

        The second-in-line to the governor's seat said in a statement on Wednesday that he wore a costume to a party when he was 19 years old at university.
        
        Mr Herring had joined calls for Governor Ralph Northam to quit over a racist photo and blackface scandal.
        
        The lieutenant governor is meanwhile battling a sex assault claim.
        
        All three men are Democrats. If they were to resign over these controversies, Virginia could be led by the Republican Speaker of the House of Delegates, Kirk Cox.
        
        Behind the legacy of America's blackface
        'There's going to be racism until the day we die'`
    },
];

export const getNewsMenuWorldNewsMap = (array) => {
    return array.reduce((map, article) => ({
        ...map,
        [article.newsMenuWorldNewsId]: article
    }), {})
}

export default newsMenuWorldNewsArticles