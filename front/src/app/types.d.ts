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