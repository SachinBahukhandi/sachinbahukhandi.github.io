export interface IPortfolio{
    about: IAbout
}

export interface IAbout{
    headline: string,
    stacks: Array<IStacks>
}

export interface IStacks {
    key: string,
    description: string,
    icon: IIconComponent
}

export interface IIconComponent {
    key: string,
    color?: string
}
