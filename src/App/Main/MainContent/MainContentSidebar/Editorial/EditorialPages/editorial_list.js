const editorial_list = [
    {
        editorial_id:'editorial-1',
        editorial_article: `For two years, Asante McGee was a girlfriend of the now-disgraced R&B superstar, R. Kelly, but in the summer of 2016 she went to live in his house in Georgia. There were other women there, she discovered - and very strict rules.

        Whenever I was in my room alone, that was when I would call home to speak to my children, as when I was with Robert, he didn't want us to have our phones and have contact with the outside world.
        
        When I met Robert, or rather R. Kelly, it wasn't like meeting Prince Charming who swept me off my feet. He didn't wine and dine me, he was just a warm and funny guy. We did normal stuff; he took me shopping and we enjoyed having dinners together.
        
        But there was a moment during a text exchange in 2014 when I think I should have known things weren't what they seemed. It was really early on in our relationship and I texted him, addressing him as Rob and he said: "No, can you just call me Daddy." There was no discussion - he just told me his demand. When I look back at that moment, reading the text message in my car, I should have questioned it. I should have seen his behaviour in that moment as a red flag.
        
        I was first introduced to R. Kelly in September 2013 by a member of his entourage, when he was performing in a club in Atlanta to promote his next tour. However, we had a proper introduction in January 2014.`,
        editorial_img_src: `/images/editorial/editorial-1.jpg`,
        editorial_title: `'R. Kelly insisted I have a sex trainer'`,
    },
    {
        editorial_id:'editorial-2',
        editorial_article: `Anoushka Mutanda Dougherty has been offered a place at Cambridge University, but she's mixed-race and from a state school - and only 3% of students who started at Cambridge in 2017 were black, or mixed-race with black heritage. So is it the best place for her? At this point, she's not sure.

        Cambridge is the second-oldest university in the English-speaking world. Cambridge is the fourth-oldest surviving university in the world. Cambridge has produced, so far, 90 Nobel prize winners - and Cambridge, this educational powerhouse, just might not be where I want to go. At least, that's how I feel right now, a week after finding out that I got a place.
        
        Anoushka's applications provoked some fiery discussions at home
        It was my parents who first encouraged me to try for Cambridge. They see it as a passport to the best jobs and opportunities. But I worry about what life would be like in a university which still admits quite a high proportion of pupils from private schools, and where I would be one of only a handful in my year from a mixed white/Black African family - in 2017 there were just 14. There's no escaping the fact that Cambridge is a majority white and majority posh (!) institution.
        
        My mum, Anjula, is Ugandan and fled from Idi Amin's tyrannical regime in the 1970s. The story of people like her with a mixed Indian and Ugandan background is largely overlooked from accounts of racial tension in Uganda, and there's little understanding of the struggles she and others faced once they arrived in the UK. The experience of minority communities has helped shape my interest in unwritten histories (you try explaining this in a UCAS statement with a limit of 4,000 characters) so it stands to reason that I would focus on racial diversity in the universities I'm considering.
        
        In the mix are Birmingham, Bristol, Cambridge and King's College, London.`,
        editorial_img_src: `/images/editorial/editorial-2.jpg`,
        editorial_title: `I'm mixed-race, is Cambridge University right for me?'`,
    },
    {
        editorial_id:'editorial-3',
        editorial_article: `At the age of 23, Kris Hallenga was diagnosed with terminal breast cancer. On average people given this diagnosis live for two-and-a-half years, but 10 years later she wants people to know that it is possible to beat the odds.

        A tightrope artist walks along the line created by Kris Hallenga's mastectomy scar.
        
        "I got the tattoo maybe three years ago now, it's to represent the balance of any illness with life and everything else," she says.
        
        "I didn't want to cover up the scar, I just wanted it to feature within the art piece."Kris has never tried to hide or deny her condition. Instead she has embraced it as part of her life.

        "What happened to me couldn't really be changed, and I think getting to grips with accepting your situation is going to be much better than fighting something. That's why I don't see the cancer in my body as this enemy, because I don't think that's particularly healthy. I think we need to work with it rather than against it."
        
        When diagnosed with advanced breast cancer in 2009, she decided not to get angry, but instead set up a charity called CoppaFeel, to raise awareness of the disease among young people and encourage them to check their breasts regularly.`,
        editorial_img_src: `/images/editorial/editorial-3.jpg`,
        editorial_title: `'Why I wanted a tattoo on my mastectomy scar`,
    },
    {
        editorial_id:'editorial-4',
        editorial_article: `Just over a year ago, Greek pilot Vasileios Vasileiou checked into a luxury hilltop hotel in Kabul. The Intercontinental was popular with foreign visitors - which is why, on 20 January, Taliban gunmen stormed it, killing at least 40 people. Vasileios explains how he survived.

        I had decided to go for dinner early - at six o'clock - with my friend, another pilot called Michael Poulikakos. It was the first time in the three or four months that I had been coming to the Intercontinental that I'd done this - usually I had dinner at around 8.30pm.
        
        We finished dinner about 7.30pm and then I went up to my room - room 522 - on the top floor, to make some calls. At 8.47pm I was on the phone to Athens when I heard a big explosion down in the lobby.

        I went out on to the balcony. I could see a man on the ground covered in blood and I could hear gunfire coming from inside and outside the hotel. I realised how lucky it was that I wasn't in the restaurant at that moment and said to myself, "OK Vasileios, you have to do something in order to survive."

        I left the balcony door open and locked the door to my room. There were two beds in my suite so I took one of the mattresses and put it against the door to protect myself from grenades, and then I gathered some bed sheets, towels and clothes and made a rope that I could use to get to the fourth floor if I needed to.

        Because I'm a pilot and a trainer I've studied crisis management and decision-making for years, so even if I'm only going to a restaurant or to the theatre I think about sitting by the door, or close to the emergency exit - it's automatic, almost second nature.

        I started thinking about what I was going to do next. I had no idea how many attackers there were or where they were in the building, and jumping from the fifth floor wasn't wise, so I said to myself, "Vasileios, stay inside and try to do as much as possible to protect yourself."

        For some reason I can't really explain, I was unexpectedly calm.`,
        editorial_img_src: `/images/editorial/editorial-4.jpg`,
        editorial_title: `'The bed that saved me from the Taliban'`,
    },
];

export const getEditorialNewsMap = (array) => {
    return array.reduce((map, editorialArticle) => ({
        ...map,
        [editorialArticle.editorial_id]: editorialArticle
    }), {})
}

export default editorial_list