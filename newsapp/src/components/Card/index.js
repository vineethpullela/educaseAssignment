import { IoTimeOutline } from "react-icons/io5";
import {PostCardCategory, PostCardChannelImg, PostCardChannelName, PostCardContainer, PostCardDescription, PostCardDetailsContainer, PostCardImg, PostCardInfoContainer, PostTime, PostTimeContainer} from "./styledComponents"


const Card =(props)=>{
    const {data}=props
    const {urlToImage,title,author,publishedAt}=data
const desc= title.slice(0,70)
const date=new Date(publishedAt)
console.log()




return( <PostCardContainer>
    <PostCardImg src={urlToImage} alt="img"/>
    <PostCardDetailsContainer>
        <PostCardCategory>{author}</PostCardCategory>
        <PostCardDescription>{desc}</PostCardDescription>
        <PostCardInfoContainer>
            <PostCardChannelImg src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716234884/png-clipart-bbc-news-logo-area-text-brand-bbc-news-text-logo-thumbnail_tpuxo6.png" alt="img"/>
            <PostCardChannelName>BBC News</PostCardChannelName>
            <PostTimeContainer>
                
<IoTimeOutline size={10}/>
            <PostTime>{date.toDateString()}</PostTime>
        </PostTimeContainer>
        </PostCardInfoContainer>
        
    </PostCardDetailsContainer>
</PostCardContainer>)
}


export default Card