import api, { IResponse } from "../config/request-config";
import { IHeroModel } from "../model/hero.model";

export interface IHeroService {
    getHeroesByName: (name: string) => IResponse<IHeroModel[]>;
}

const heroService: IHeroService = {
    getHeroesByName: (name: string): IResponse<IHeroModel[]> => {
        return api.get<IHeroModel[]>("", {
            params: {
                name,
            }
        });
    }
};

export default heroService;