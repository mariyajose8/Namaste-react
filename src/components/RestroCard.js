import { CDN_URL } from "../utils/constants";


const RestroCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data
    
        return (
            <div className="restro-card">
                <div className="restro-card-inner">
                    <div className="restro-img">
                        <img     width = "254px" height= "160px" 
                        src={ CDN_URL + cloudinaryImageId}/>
                    </div>
                    <div className="restro-detail">
                        <h3>{name}</h3>
                        <h4>{cuisines.join(",")}</h4>
                        <h4>{avgRating}</h4>
                        <h4>{costForTwo/100} rs for two</h4>
                        <h4>{deliveryTime}</h4>
                    </div>
                
                </div>
            </div>
        )
    }

export default RestroCard