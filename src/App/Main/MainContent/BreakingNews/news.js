const news = [
    {
        breaking_news_id: 'breaking-news-show-1',
        breaking_news_title: 'In New York, the trial of the most famous drug baron of the world continues'
    },
    {
        breaking_news_id: 'breaking-news-show-2',
        breaking_news_title: 'In Kyiv, the first snow fell, which immediately caused the maximum traffic in 10 points and forced the tension of utility companies.'
    },
    {
        breaking_news_id: 'breaking-news-show-3',
        breaking_news_title: 'Absolute World Heavyweight Champion Alexander Usik and his rival Toni Belly demonstrated their physical appearance on the eve of the match.'
    },
    {
        breaking_news_id: 'breaking-news-show-4',
        breaking_news_title: 'Victims of large forest fire in California stay nine people'
    },
];

export const getNewsMap = (array) => {
    return array.reduce((map, news) => ({
        ...map,
        [news.breaking_news_id]: news
    }), {})
}

export default news