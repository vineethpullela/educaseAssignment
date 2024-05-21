import { useNavigate } from "react-router-dom";
import {useState,useEffect} from "react"
import Card from "../Card";
import { PiBellLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { AiOutlineControl } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import Headers from "../Headers";
import { HomeAppContainer, HomeHeaders, HomeLogo, HomePostsContainer, HomePostsTabsContainer, HomePostsTabsElement, IconButton, NavBar, PostCardCategory, PostCardChannelImg, PostCardChannelName, PostCardContainer, PostCardDescription, PostCardDetailsContainer, PostCardImg, PostCardInfoContainer, PostTime, PostTimeContainer, PostsCardsContainer, SearchContainer, SearchInput, SearchInputContainer, SeeAll, TrendCardCategorie, TrendCardContainer, TrendCardContentContainer, TrendCardDetails, TrendCardImage, TrendCardInfo, TrendChannelImg, TrendChannelName, TrendHeadline, TrendTime, TrendTimeContainer, TrendingContainer, TrendingHeader, TrendingHeading } from "./styledComponents"





const Home =()=>{
    const [apiData,setApiData]=useState([])
    ///const [trendData,setTrendData]=useState(null)
    const navigate=useNavigate()

    const onClickNavigate=()=>{
        navigate("/profile")
    }
    
    const onClickHome=()=>{
        navigate("/onboard")
    }

    

    useEffect(()=>{


        const getApiData=async()=>{
            const url="https://newsapi.org/v2/everything?q=tesla&from=2024-04-20&sortBy=publishedAt&apiKey=351d2c6730c844348ab9fbe0307d9563";
        const options={
            Method:"GET",
        }

        const response= await fetch(url,options)
        const responseData= await response.json()
        const data= responseData["articles"]
        const sliced_data= await data.slice(0,10)
        // setApiData(data.slice(0,10))
        setApiData(sliced_data)
        /// const randomNumber=Math.random()*10
       
        ///   setTrendData(...data.slice(randomNumber-1,randomNumber))
        
      



        }
        
        getApiData()
    },[])
    


    return(
    <HomeAppContainer>
        <Headers/>
        <HomeHeaders>
            <HomeLogo src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716210407/Vector_1_zxavuw.png" alt="Logo"/>
            <PiBellLight size={25}/>
        </HomeHeaders>
        <SearchContainer>
            <SearchInputContainer>
            <CiSearch size={20}/>
            <SearchInput type="search" placeholder="Search"/>
            <AiOutlineControl size={20}/>
            </SearchInputContainer>
        </SearchContainer>
        <TrendingContainer>
            <TrendingHeader>
                <TrendingHeading>Trending</TrendingHeading>
                <SeeAll>See all</SeeAll>
            </TrendingHeader>
            <TrendCardContainer>
                <TrendCardImage src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716225287/News_Images_xw9imw.png" alt="img"/>
            </TrendCardContainer>
            <TrendCardContentContainer>
<TrendCardCategorie>Europe</TrendCardCategorie>
<TrendHeadline>Russian Warship: Moskva sinks in Black Sea</TrendHeadline>
<TrendCardDetails>
    <TrendCardInfo>
    <TrendChannelImg src="https://res.cloudinary.com/dj2tk6c0s/image/upload/v1716234884/png-clipart-bbc-news-logo-area-text-brand-bbc-news-text-logo-thumbnail_tpuxo6.png" alt="img"/>
    <TrendChannelName>BBc News</TrendChannelName>
    </TrendCardInfo>
    <TrendTimeContainer>
        <IoTimeOutline size={10}/>
        <TrendTime>6h ago</TrendTime>
    </TrendTimeContainer>    
</TrendCardDetails>
            </TrendCardContentContainer>
        </TrendingContainer>
        <HomePostsContainer>       
        <TrendingHeader>
            <TrendingHeading>Latest</TrendingHeading>
            <SeeAll>See all</SeeAll>
        </TrendingHeader>
        <HomePostsTabsContainer>
            <HomePostsTabsElement>All</HomePostsTabsElement>
            <HomePostsTabsElement>Sports</HomePostsTabsElement>
            <HomePostsTabsElement>Politics</HomePostsTabsElement>
            <HomePostsTabsElement>Bussiness</HomePostsTabsElement>
            <HomePostsTabsElement>Health</HomePostsTabsElement>
            <HomePostsTabsElement>Travel</HomePostsTabsElement>
        </HomePostsTabsContainer>
        <PostsCardsContainer>
            {apiData.map(each=> <Card key={each.source.id} data={each}/>)}
            <PostCardContainer>
                <PostCardImg src="" alt="img"/>
                <PostCardDetailsContainer>
                    <PostCardCategory>Europe</PostCardCategory>
                    <PostCardDescription>Ukraine's President Zelensky to BBC: Blood money being paid...</PostCardDescription>
                    <PostCardInfoContainer>
                        <PostCardChannelImg src="" alt="img"/>
                        <PostCardChannelName>BBC News</PostCardChannelName>
                    </PostCardInfoContainer>
                    <PostTimeContainer>
                        <PostTime>12H ago</PostTime>
                    </PostTimeContainer>
                </PostCardDetailsContainer>
            </PostCardContainer>
        </PostsCardsContainer>
        </HomePostsContainer>
<NavBar>
    <IconButton type="button" onClick={onClickHome}><GoHome  size={25} color="#1877F2"/>Home</IconButton>
   <IconButton type="button"> <MdOutlineExplore size={25} color="#1877F2"/> Explore</IconButton>
   <IconButton type="button"> <FaRegBookmark size={25} color="#1877F2"/> Bookmark</IconButton>
   <IconButton type="button" onClick={onClickNavigate}> <CgProfile  size={25} color="#1877F2"/> Profile</IconButton>
</NavBar>
    </HomeAppContainer>
)
}

export default Home
