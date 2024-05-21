import {useNavigate} from "react-router-dom";
import {useState,} from "react"
import { IoIosArrowRoundBack } from "react-icons/io";
import {  Input, InputsContainer, Label, NextButton, ProfileContainer, ProfileContentContainer, ProfileHeading, ProfileImage,  ProfilePhotoContainer,  ProfileTopContainer } from "./styledComponents"
import Headers from "../Headers";
const storedData= JSON.parse(localStorage.getItem("profileData"))

const Profile=()=>{
    const [username,setUsername]=useState(storedData.username===""?"":storedData.username)
    const [fullname,setFullname]=useState(storedData.fullname===""?"":storedData.fullname)
    const [email,setEmail]=useState(storedData.email===""?"":storedData.email)
    const [phone,setPhone]=useState(storedData.phone===""?"":storedData.phone)

    const navigate =useNavigate()

    const onChangeUserName=(event)=>{
        setUsername(event.target.value)
    }

    
    const onChangeFullName=(event)=>{
        setFullname(event.target.value)
    }

    const onChangeEmail=(event)=>{
        setEmail(event.target.value)
    }
    
    const onChangePhone=(event)=>{
        setPhone(event.target.value)
    }
const onClickHome=()=>{
navigate("/home");
}

   const  onSubmitForm =(event)=>{
    event.preventDefault()
    const profilData={username,fullname,email,phone}
    localStorage.setItem("profileData", JSON.stringify(profilData))
   }
    
    return (<ProfileContainer>
        <Headers/>
        <ProfileContentContainer>
            <ProfileTopContainer>
                <IoIosArrowRoundBack size={15} onClick={onClickHome}/>
                <ProfileHeading>Fill your Profile</ProfileHeading>
            </ProfileTopContainer>
           <ProfilePhotoContainer>
                  <ProfileImage src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716278551/Ellipse_13_lm1cud.png" alt="profile"/>
                  
           </ProfilePhotoContainer>
           <InputsContainer onSubmit={onSubmitForm}>
           <Label htmlFor="username">Username</Label>
           <Input type="text" id="username" value={username} onChange={onChangeUserName}/>
           <Label htmlFor="fullname">Full Name</Label>
           <Input type="text" id="fullnamel" value={fullname} onChange={onChangeFullName}/>
           <Label htmlFor="email">EmailAddress*</Label>
           <Input type="text" id="email" value={email} onChange={onChangeEmail}/>
           <Label htmlFor="phone">PhoneNumber</Label>
           <Input type="text" id="phone" value={phone} onChange={onChangePhone}/>
           <NextButton type="submit">Next</NextButton>
           </InputsContainer>
              
        </ProfileContentContainer>
    </ProfileContainer>
)
}



export default Profile;