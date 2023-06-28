import api, { IResponse } from "../config/request-config";
import { ICharacterDataWrapper } from "../model/hero.model";

export interface IHeroService {
    getHeroesByName: (name: string) => IResponse<ICharacterDataWrapper>;
}

const heroService: IHeroService = {
    getHeroesByName: (name: string): IResponse<ICharacterDataWrapper> => {
        return api.get<ICharacterDataWrapper>("", {
            params: {
                // name,
            }
        });
    }
};

export default heroService;