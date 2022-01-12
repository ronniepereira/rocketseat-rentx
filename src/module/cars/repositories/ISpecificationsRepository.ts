interface ICreateSpecificationDTO {
    name: string,
    description: string
}

interface ISpecificationsRepository {
    create({ description, name }: ICreateSpecificationDTO)
    findByName(name: string)
}

export { ISpecificationsRepository, ICreateSpecificationDTO }