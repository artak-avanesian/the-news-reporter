const articlesList = [
    {
        art_list_id:"latest-article-1",
        lat_art_img: 'latest-articles-img-1',
        artListImg: '/images/latest-articles/latest-articles-1.jpg',
        art_list_title:"Putin will be able to go to Kiev after the construction of 'North Stream-2' - the prime minister of Poland.",
        art_list_description:"Moravetsky believes that the gas pipeline will untie the hands of Russia's aggression. Prime Minister of Poland Mateusz Moravetsky warned that Germany explained why it needed North Stream-2 construction of the North Stream 2 pipeline could contribute to the aggression of the Russian Federation in Ukraine.",
        art_list_article: `Moravetsky believes that the gas pipeline will untie the hands of Russia's aggression.
        Prime Minister of Poland Mateusz Moravetsky warned that
        Germany explained why it needs "North Stream 2"
        the construction of the North Stream 2 pipeline may contribute to the aggression of the Russian Federation in Ukraine.
        This is reported by the SAR, with reference to the words of the minister during the FOTAR conference in Hamburg.
        Moravetsky noted that after the completion of the construction of the "North Stream-2" it turns out that the Ukrainian gas transportation system will become unnecessary for the Russian Federation.
        "I know the position of the German government that this is a business project. However, nobody believes in East of Odra. What will stop Vladimir Putin going to Kiev?" He said.
        Also, the Polish prime minister reminded German colleagues that while Europe pays Russia for gas, it puts these funds in its army.
        "You will be surprised at those whom I quote now, but Lenin once said that the capitalists are so greedy that they" will sell us a rope on which we will hang them, "Moravetsky added.`,
    },
    {
        art_list_id:"latest-article-2",
        lat_art_img: 'latest-articles-img-2',
        artListImg: '/images/latest-articles/latest-articles-2.jpg',
        art_list_title:"In France, a woman poured acid on visitors to the cafe",
        art_list_description:"6 people were injured. Scared eyewitnesses and the police: What looks like a place of bloody massacre in ParisFrench city of Marseilles on a terrace of one of the cafes a woman poured in with hydrochloric acid visitors.",
        art_list_article: `According to French media, six people were injured as a result of the incident. They had to be hospitalized to the hospital, but the lives of the victims did not threaten anything. They were diagnosed with light burns of arms and legs.
        Also, journalists learned that the attack was committed by a homeless woman who had previously had problems with her psyche.
        Recall that in early October, in the Champs Elysees, in Paris,
        In the center of Paris, unknown people started firing. There are victims
        there was a shooting in which two people were injured.`,
    },
    {
        art_list_id:"latest-article-3",
        lat_art_img: 'latest-articles-img-3',
        artListImg: '/images/latest-articles/latest-articles-3.jpg',
        art_list_title:"In Ukraine, you can change the rules of taking photographs on documents.",
        art_list_description:"Changes should take into account the interests of people of different religions. Yesterday, November 22, the Ministry of Internal Affairs at a meeting discussed issues of taking photographs on documents. It is reported by the press service of the Ministry.",
        art_list_article: `Changes should take into account the interests of people of different religions.

        Yesterday, November 22, the Ministry of Internal Affairs at a meeting discussed the issues
        
        For Ukrainians, the procedure for obtaining biometrics has been simplified: how it works
        taking pictures on documents.
        
        It is reported by the press service of the Ministry.
        
        It is noted that for a long time, the Ministry of Internal Affairs received numerous appeals from problematic issues faced by representatives of different faiths. Among other things, it was about photos for various documents.
        Currently, according to the current standard, photographing a passport and other documents in a headgear is forbidden.
        "We must do our best to enable persons belonging to different religious movements and confessions to be photographed on documents without the vulnerability of their religious beliefs. The solution of this issue, on a scale of Ukraine, lies solely in the sphere of changing standards," the Deputy Minister of the Ministry of Internal Affairs Tetyana Kovalchuk.
        
        In his turn, the head of the State Migration Service, Maxim Sokolyuk, added that the Ministry of Internal Affairs, together with the LCA, was set up to resolve the problem. According to him, the only way to solve it is to change the standard.
        
        The Ministry of Internal Affairs and the Ministry of Internal Affairs appealed to the State Enterprise "Ukrainian Research and Training Center for Standardization, Certification and Quality" with a request to revise the standards for taking photographs on documents - this issue is already included in the work plan of the institute.
        
        Recall that Ukraine has issued a 10 million biometric passport. Poroshenko showed his owner - she became a girl who is educated as a political scientist.`,
    },
];

export const getLatestArticlesMap = (array) => {
    return array.reduce((map, latestArticle) => ({
        ...map,
        [latestArticle.art_list_id]: latestArticle
    }), {})
}

export default articlesList