import React from "react";
import  ReactDOM  from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
           <div className="logo"> 
                <img width="100px" src="https://img.freepik.com/premium-vector/online-food-app-icon-food-shop-location-logo-also-online-resturent-location-template_608547-155.jpg?w=2000"/>
            </div> 
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroCard = (props) => {
const {resData} = props;

const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data
    return (
        <div className="restro-card">
            <div className="restro-card-inner">
                <div className="restro-img">
                    <img     width = "254px" height= "160px" 
                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId}/>
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

const resObj = [
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "405636",
        "name": "Biryani & Bowls",
        "uuid": "26efad79-423c-406f-8b44-402a8a482c4e",
        "city": "1",
        "area": "New BEL Road",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "fm6as0pv9ya3ctdo5u5t",
        "cuisines": [
        "Biryani",
        "Beverages",
        "Juices",
        "Fast Food",
        "Snacks"
        ],
        "tags": [],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "slaString": "45 MINS",
        "lastMileTravel": 9.199999809265137,
        "slugs": {
        "restaurant": "bangalore-biryani-rajarajeshwari-nagar-rajarajeshwari-nagar",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "1st floor above udupa cafe,NO.453, OLD NO. 12, 2ND CROSS, Landmark - Above Udupa cafe,NEW BEL ROAD, RMV 2ND STAGE, BANGALORE, Yeshwanthapura , B.B.M.P North, Karnataka - 560094",
        "locality": "Ms Ramaiah Nagar",
        "parentId": 266206,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 8700,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 8700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8700",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "9.1 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "405636",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 9.199999809265137,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 100,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "536015",
        "name": "Rollsking",
        "uuid": "31ba02b0-ba4f-44f0-a22c-9fc0d020dc59",
        "city": "1",
        "area": "New BEL Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "rrozfuykh1lumwcg23dp",
        "cuisines": [
        "North Indian",
        "Fast Food",
        "Beverages"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 9.399999618530273,
        "slugs": {
        "restaurant": "rolls-king-sanjay-nagar,-new-bel-road-sanjay-nagar,-new-bel-road",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "2nd, 3rd floor, municipal no.193, MH Chandrappa near Gowri Apartments, New Bel road, Mathikere, Bangalore, B.B.M.P North Karnataka",
        "locality": "New BEL  Road",
        "parentId": 4697,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
        {
        "meta": "40% off | Use GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹100 | Use code GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹100 | Use code GUILTFREE",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "distance",
        "fee": 8700,
        "message": ""
        },
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 8700,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8700",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "9.3 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "536015",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 9.399999618530273,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "174211",
        "name": "Five Star Chicken",
        "uuid": "7b1c888a-657d-4c88-8f9a-5d9ff9ea961f",
        "city": "1",
        "area": "R T Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "jxs68vadqravuphaqhxp",
        "cuisines": [
        "Snacks"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 8.5,
        "slugs": {
        "restaurant": "five-star-chicken-kanakanagar-rt-nagar",
        "city": "bangalore"
        },
        "cityState": "1",
        "address": "Five star chicken, K R Enterprises, no 46/ 5, site number 1&2, 7th cross,khb main road, kanakaNagar,r t nagar post , Bangalore 560032",
        "locality": "KanakaNagar",
        "parentId": 376,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "chain": [],
        "feeDetails": {
        "fees": [
        {
        "name": "time",
        "fee": 0,
        "message": ""
        },
        {
        "name": "distance",
        "fee": 8000,
        "message": ""
        },
        {
        "name": "special",
        "fee": 0,
        "message": ""
        }
        ],
        "totalFees": 8000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8000",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": "Closes soon"
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "8.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "174211",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 8.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.0",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        }
]

const Body = () => {
    return (
        <div className="body"> 
            <div className="searchBar">Search</div>
            <div className="restContainer">
                { resObj.map(restaurant => <RestroCard key={restaurant.data.id} resData = {restaurant}/>) } 
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
    <div  className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);