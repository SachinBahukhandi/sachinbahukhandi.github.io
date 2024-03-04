export interface IDetails{
    name: string;
    email: string;
    designation: string;
    phone: string;
    dob: string;
    location: string;
    socialLinks?: SocialLinks
}

export interface SocialLinks{
    linkedin: String,
    stackoverflow: String,
    github: String

}