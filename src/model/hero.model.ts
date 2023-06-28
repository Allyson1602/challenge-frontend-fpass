export interface IThumbnail {
    path: string;
    extension: string;
}

export interface ICharacter {
    id: number;
    name: string;
    description: string;
    modified: Date;
    resourceURI: string;
    urls: string[];
    thumbnail: IThumbnail;
    // comics: IComicList;
    // stories: IStoryList;
    // events: IEventList;
    // series: ISeriesList;
}

export interface ICharacterDataContainer {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: ICharacter[];
}

export interface ICharacterDataWrapper {
    data: ICharacterDataContainer;
}