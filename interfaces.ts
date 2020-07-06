export interface User {
    'id': string,
    'username': string,
    'name': string,
    'first_name': string,
    'last_name': string,
    'instagram_username': string,
    'twitter_username': string,
    'portfolio_url': null,
    'total_likes': number,
    'total_photos': number,
    'total_collections': number,
    'profile_image': {
        'small': string
        'medium': string
        'large': string
    },
    'links': {
        'self': string
        'html': string
        'photos': string
        'likes': string
    }
}
