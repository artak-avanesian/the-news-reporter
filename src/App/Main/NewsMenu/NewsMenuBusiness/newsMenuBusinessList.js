const newsMenuBusinessList = [
    {
        newsMenuBusinessId: `newsMenuBusiness-1`,
        newsMenuBusinessTitle: `Jeff Bezos: Amazon boss accuses National Enquirer of blackmail`,
        newsMenuBusinessImg: `news-menu-business-img-1`,
        newsMenuBusinessArticle: `The world's richest man, Amazon founder Jeff Bezos, has accused the owner of a US gossip magazine of trying to blackmail him over private pictures.

        He said the National Enquirer's parent company, American Media Inc (AMI), wanted him to stop investigating how they had obtained his private messages.
        
        Hours after Mr Bezos announced his divorce last month, the magazine published details, including private messages, of an extramarital affair.
        
        AMI says the company "acted lawfully".
        
        "American Media believes fervently that it acted lawfully in the reporting of the story of Mr Bezos. Further, at the time of the recent allegations made by Mr Bezos, it was in good faith negotiations to resolve all matters with him," the company said in a statement.
        
        "Nonetheless, in light of the nature of the allegations published by Mr Bezos, the Board has convened and determined that it should promptly and thoroughly investigate the claims. Upon completion of that investigation, the Board will take whatever appropriate action is necessary."`,
    },
    {
        newsMenuBusinessId: `newsMenuBusiness-2`,
        newsMenuBusinessTitle: `Nord Stream 2: EU agrees tighter rules for Russian pipeline`,
        newsMenuBusinessImg: `news-menu-business-img-2`,
        newsMenuBusinessArticle: `EU ambassadors have agreed to toughen regulations on a controversial gas pipeline from Russia to Germany, but they have decided not to back plans that might threaten its completion.

        Work on the 1,225km (760-mile) Nord Stream 2 pipeline under the Baltic Sea is already well under way and is set to be finished by the end of 2019.
        
        The EU wants to bring pipelines coming into the bloc under its energy rules.
        
        Germany feared that would make the pipeline uneconomic and unviable.
        
        In the end 27 of the bloc's 28 ambassadors reportedly agreed with a Franco-German compromise, which meant that Germany could remain as lead negotiator on the Nord Stream 2 project.
        
        What are the worries with Nord Stream 2?
        Russia currently supplies around 40% of the EU's gas supplies, just ahead of Norway, which is not in the EU but takes part in the bloc's single market.
        
        For years, the 28-member bloc has been concerned about reliance on Russian gas.`,
    },
    {
        newsMenuBusinessId: `newsMenuBusiness-3`,
        newsMenuBusinessTitle: `How has business been affected by Brexit so far?`,
        newsMenuBusinessImg: `news-menu-business-img-3`,
        newsMenuBusinessArticle: `With two months to go until the UK is due to leave the EU, how are firms and the UK economy faring?

        The economy's "resilience through the turbulence of the Brexit process has been particularly noteworthy", according to Chancellor Philip Hammond.
        
        But some businesses claim to have been put under unprecedented pressure.
        
        What is going on?
        
        It's impossible to put absolute numbers on how jobs, output and investment have been affected so far.
        
        No one knows how these will have fared had the outcome to the referendum in 2016 been different.
        
        Other factors have influenced the business environment - not least slower growth in the likes of China and Europe
        
        But there is a range of evidence that can give us an idea of how UK companies are faring.
        
        Have companies cut or moved jobs?
        On the face of it: no.
        
        The number of people employed is at an all-time high. But there's a lot going on under the surface.
        
        Banks' contingency plans mean setting up alternative bases in the likes of Frankfurt, Paris or Dublin. Individual banks are coy about revealing too much.
        
        But reports about banks such as Morgan Stanley, Barclays and Bank of America moving, or creating, hundreds rather than thousands of jobs at those sites suggest the total affected in the City is much smaller than the 65,000 or so predicted by some immediately after the referendum.`,
    },
    {
        newsMenuBusinessId: `newsMenuBusiness-4`,
        newsMenuBusinessTitle: `China banks on lending to ease slowdown`,
        newsMenuBusinessImg: `news-menu-business-img-4`,
        newsMenuBusinessArticle: `Build stuff or buy stuff? China has long been a believer in the former to deal with a slowdown in its economy. Now it's trying to shift the emphasis to the latter.

        This year will be a big test of how far it's come in the transition from state-backed investment to domestic consumption as the main driver of growth.
        
        China's President Xi Jinping has warned of a "struggle" as his country faces an economic slowdown, the likes of which it hasn't seen for almost 30 years.
        
        A series of stimulus measures have been unveiled by the government not to boost the economy, but to manage the slowdown.
        
        "China's goal is not growth, it's stability," says economist Andy Xie.
        
        "The option for stimulated growth again, that is not on the table. The debt level is simply too high, not like in 2008."`,
    },
];

export const getNewsMenuBusinessMap = (array) => {
    return array.reduce((map, article) => ({
        ...map,
        [article.newsMenuBusinessId]: article
    }), {})
}

export default newsMenuBusinessList