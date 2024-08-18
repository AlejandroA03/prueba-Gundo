export interface IUser{
    id: number,
    name: string,
    preferences: {
			glutenIntolerant: boolean,
			lowCarb: boolean,
			coffeSensitive: boolean,
			vitaminCDeficiency: boolean,
			lactoseIntolerant: boolean,
			highProtein: boolean
		}
}

export interface IStored{
    login: boolean,
    user: IUser
}

export interface ILogin{
    username:string,
    password:string
}

export interface IProduct{
    name: string,
	kcal: number,
	prot: number,
	carbo: number,
	fats: number,
	tags: string[]
}

export interface IRecommendation {
    nutrient: string;
    recommended_foods?: string[];
    avoid_foods?: string[];
}

export interface IUserRecommendation {
    user_id: number;
    recommendations: IRecommendation[];
}

export interface IRecommendProduct{
    product: IProduct,
    reason: string
}