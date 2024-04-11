export interface Repos {
    name:string,
    full_name:string,
    description:string,
    owner:Owner,
    languages_url:string
}

export interface Owner{
    login:string,
    avatar_url:string
}
