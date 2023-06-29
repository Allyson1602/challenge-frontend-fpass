export interface IThumbnail {
    path: string;
    extension: string;
}

export interface ISummary {
    name: string;
    resourceURI: string;
}

export interface IItemList  {
    available: number;
    returned: number;
    collectionURI: string;
    items: ISummary[];
}

export interface ICharacter {
    id: number;
    name: string;
    description: string;
    modified: Date | null;
    resourceURI: string;
    urls: string[];
    thumbnail: IThumbnail;
    comics: IItemList;
    stories: IItemList;
    events: IItemList;
    series: IItemList;
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