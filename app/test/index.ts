

const obj: Array<string> = []
obj.push("1")

const func = (): number =>{
    return 1
}

interface IUser {
    id: number,
    name : string | number,
}

const user: IUser = {
    id: 1,
    name: "John"
}

const getUser = (id:number): IUser =>{
    return {id:1, name: 123_2/23}
}

getUser(1)

type animal = "cat" | "dog"

const myPet: animal = "dog"

console.log(user.name)
