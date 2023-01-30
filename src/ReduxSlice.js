import {createSlice} from "@reduxjs/toolkit"
import LevisIcon from "./images/levis-icon.png";
import LevisTshirts from "./images/levis-tshirt.png";
import ShirtImage from "./images/shirtImage.png";
import TShirtImage from "./images/tshirtImage.png";

export const ReduxSlice = createSlice({
    name: 'counter',
    initialState: {
      data: [
        {
            icon:LevisIcon,
            title:"Levi's®",
            hashTag:"LEVIS",
            date:"2022 03 17",
            description:"Sprint is in the air, and so is festival season. Get The Ultimate Guide to Festival Season Dressing.",
            link:"https://xd.adobe.com/view/8de827fe-1b32-4707-bcac-28340142fb6d-d8bb/screen/8fea7f3a-24e4-4008-935b-e5162ba4cc72?fullscreen",
            image:LevisTshirts,
            comment:34,
            like:9,
            heart:58,
            name:"New Original Sweatshirt",
            price:'80.88'
        },
        {
            icon:LevisIcon,
            title:"Levi's®",
            hashTag:"MONTEE CARLO",
            date:"2022 09 12",
            description:"Sprint is in the air, and so is festival season. Get The Ultimate Guide to Festival Season Dressing.",
            link:"https://xd.adobe.com/view/8de827fe-1b32-4707-bcac-28340142fb6d-d8bb/screen/8fea7f3a-24e4-4008-935b-e5162ba4cc72?fullscreen",
            image:ShirtImage,
            comment:12,
            like:39,
            heart:78,
            name:"New Original Shirt",
            price:'50.80'
        },
        {
            icon:LevisIcon,
            title:"Levi's®",
            hashTag:"NIKE",
            date:"2022 03 17",
            description:"Sprint is in the air, and so is festival season. Get The Ultimate Guide to Festival Season Dressing.",
            link:"https://xd.adobe.com/view/8de827fe-1b32-4707-bcac-28340142fb6d-d8bb/screen/8fea7f3a-24e4-4008-935b-e5162ba4cc72?fullscreen",
            image:TShirtImage,
            comment:87,
            like:36,
            heart:8,
            name:"Women T-Shirt",
            price:'10.50'
        }
    ],
    selectedItem:{},
    addresses:[],
    deliveryAddress:{}
    },
    reducers: {
    updateSelectedItem:(state,action) => {
        state.selectedItem = action.payload;
    },
    updateAddresses:(state,action) => {
        state.addresses = action.payload;
    },
    updateDeliveryAddress:(state,action) => {
        state.deliveryAddress = action.payload;
    }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { updateSelectedItem, updateAddresses, updateDeliveryAddress} = ReduxSlice.actions
  
  export default ReduxSlice.reducer