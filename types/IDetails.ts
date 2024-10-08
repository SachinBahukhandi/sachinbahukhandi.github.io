export interface IDetails{
    name: string;
    email: string;
    designation: string;
    phone: string;
    dob: string;
    location: string;
    socialLinks?: SocialLinks,
    profilePicture: string
}

export interface SocialLinks{
    linkedin: string,
    stackoverflow: string,
    github: string

}