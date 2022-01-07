const restaurantReviews = [
    {
        place: 'Cravings',
        reviewScore: 9,
        isOpenLate: 'Yes'
    },

    {
        place: 'Waffle House',
        reviewScore: 4,
        isOpenLate: 'Yes'
    },

    {
        place: 'Ellens',
        reviewScore: 7,
        isOpenLate: 'No'
    },

    {
        place: 'Chubbys Restaurant',
        reviewScore: 2,
        isOpenLate: 'No'
    }
]

const restaurantRatings = restaurantReviews.map(restaurantReviews => (
    console.log(`${'Competitors rating out of 10'} - ${restaurantReviews.place} - ${restaurantReviews.reviewScore}`)
))