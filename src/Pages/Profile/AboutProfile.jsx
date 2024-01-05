import { ProfileComponent } from "./ProfileComponent"

export const AboutProfile = ({profileDetails}) => {
    const Profile = [
        
        {
            head: 'Full Name',
            type: 'text',
            content: profileDetails.firstName + ' ' + profileDetails.lastName + ' ' + profileDetails.middleName,
            icon: 'person'
        },
        {
            head: 'Role',
            type: 'text',
            content: profileDetails.role,
            icon: 'person'
        },
        {
            head: 'Bio',
            type: 'text',
            content: profileDetails.bio,
            icon: 'person'
        },
        {
            head: 'Location',
            type: 'text',
            content: profileDetails.location,
            icon: 'geo'
        },
        {
            head: 'Skills',
            type: 'list',
            content: ['HTML', 'CSS', 'JAVASCRIPT', 'React', 'Tailwindcss', 'Bootstrap', 'Rest API'],
            icon: 'hdd-rack'
        },
        {
            head: 'Education',
            type: 'text',
            content: 'B.SC Computer Science - Protestant University of West Africa',
            icon: 'book'
        },
        {
            head: 'Certification',
            type: 'text',
            content: profileDetails.certification,
            icon: 'award'
        },
        {
            head: 'Interests',
            type: 'list',
            content: ['Web Development', 'Tech', 'Art', 'Music', 'Geology', 'AI', 'Design', 'UI/UX'],
            icon: 'heart'
        },
       
       
    ]

    return(
       <ProfileComponent Item={Profile}/>
    )
}