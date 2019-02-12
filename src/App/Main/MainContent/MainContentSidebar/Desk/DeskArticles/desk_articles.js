const desk_articles = [
    {
        desk_art_id:"desk-1",
        desk_art_title:"A prison where the inmates have to go and find jobs",
        desk_art_img: 'desk-img-1',
        desk_art_description:"At Sanganer prison, in the Indian city of Jaipur, inmates get a roof over their head, but no money and no food.",
        desk_art_article: `At Sanganer prison, in the Indian city of Jaipur, inmates get a roof over their head, but no money and no food. This means they must go to work and earn their living beyond the prison gates, writes Masuma Ahuja - as labourers, factory workers, drivers, even yoga teachers.

        Ramchand drives a school bus. His wife, Sugna, works at a garment factory. On a recent hot afternoon, I drink a cup of tea with them in their one-room house, which has yellow walls and a corrugated metal roof, a fridge and a TV, a lunchbox hanging in the corner next to photos of gods and a stack of newspapers. From their door, you can see cars zooming by on a nearby highway and beyond that, a skyline of modern high-rises.
        
        This is how they tell their story: he was lonely, her family had left her. Their neighbours wanted to set them up and arrange their marriage, so she wouldn't be a woman living alone, so he would have someone to take care of him, cook for him and make him rotis. "I can make my own rotis," he says. He married her because he fell for her.`,
        update_time:"3 hours",     
    },
    {
        desk_art_id:"desk-2",
        desk_art_title:"Why some Japanese pensioners want to go to jail",
        desk_art_img: 'desk-img-2',
        desk_art_description:"Japan is in the grip of an elderly crime wave - the proportion of crimes committed by people over the age of 65 has been steadily increasing for 20 years.",
        desk_art_article: `Japan is in the grip of an elderly crime wave - the proportion of crimes committed by people over the age of 65 has been steadily increasing for 20 years. The BBC's Ed Butler asks why.

        At a halfway house in Hiroshima - for criminals who are being released from jail back into the community - 69-year-old Toshio Takata tells me he broke the law because he was poor. He wanted somewhere to live free of charge, even if it was behind bars.
        
        "I reached pension age and then I ran out of money. So it occurred to me - perhaps I could live for free if I lived in jail," he says.
        
        "So I took a bicycle and rode it to the police station and told the guy there: 'Look, I took this.'"
        
        The plan worked. This was Toshio's first offence, committed when he was 62, but Japanese courts treat petty theft seriously, so it was enough to get him a one-year sentence.
        
        Small, slender, and with a tendency to giggle, Toshio looks nothing like a habitual criminal, much less someone who'd threaten women with knives. But after he was released from his first sentence, that's exactly what he did.
        
        "I went to a park and just threatened them. I wasn't intending to do any harm. I just showed the knife to them hoping one of them would call the police. One did."`,
        update_time:"3 hours",     
    },
    {
        desk_art_id:"desk-3",
        desk_art_img: 'desk-img-3',
        desk_art_title:"‘Welcome to my high-fashion, trash shopping mall’",
        desk_art_description:"Anna Bergstrom had a dilemma.",
        desk_art_article: `Anna Bergstrom had a dilemma. She loved the glitzy world of high fashion, but had also come to feel that it was unsustainable and bad for the planet. She's now found peace of mind by running a stylish shopping mall in Sweden, where everything is second-hand.

        "Do you notice the smell?" Anna Bergstrom says, as she surveys her mall from the mezzanine level. "It smells nice here, doesn't it?"
        
        It's very important to Anna that this place is enticing, because she feels it is making a statement. Everything for sale here, in 14 specialist shops covering everything from clothes to DIY tools, is recycled.
        
        She is usually turned off by the smell of second-hand stores, she explains, even though she adores vintage fashion.
        
        For most people flea-markets and charity shops carry a stigma, she thinks - a mark left by countless bad experiences. Too often they are worthy but depressing, Anna says. Her mission is to bring second-hand shopping into the mainstream.`,
        update_time:"3 hours",     
    },
];

export const getDeskArticlesMap = (array) => {
    return array.reduce((map, deskArticle) => ({
        ...map,
        [deskArticle.desk_art_id]: deskArticle
    }), {})
}

export default desk_articles