import { Item } from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import wirelessHeadphonesImg from '../assets/ItemImages/wireless-headphones.webp';

export function ItemHolder(){
    
    const items = [
        { itemName: 'Wireless Headphones', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 89.99, itemSold: 200 },
        { itemName: 'Bluetooth Speaker', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 29.99, itemSold: 150 },
        { itemName: 'Smartphone Case', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 14.99, itemSold: 350 },
        { itemName: '4K Monitor', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 299.99, itemSold: 80 },
        { itemName: 'Laptop Stand', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 39.99, itemSold: 120 },
        { itemName: 'Gaming Mouse', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 59.99, itemSold: 180 },
        { itemName: 'Mechanical Keyboard', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 79.99, itemSold: 95 },
        { itemName: 'Smart Watch', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 149.99, itemSold: 220 },
        { itemName: 'Portable Charger', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 24.99, itemSold: 300 },
        { itemName: 'Smart Thermostat', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 199.99, itemSold: 60 },
        { itemName: 'Home Security Camera', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 129.99, itemSold: 110 },
        { itemName: 'E-Book Reader', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 89.99, itemSold: 140 },
        { itemName: 'Digital Camera', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 499.99, itemSold: 50 },
        { itemName: 'VR Headset', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 349.99, itemSold: 70 },
        { itemName: 'Bluetooth Earbuds', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 69.99, itemSold: 160 },
        { itemName: 'Laptop Backpack', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 49.99, itemSold: 200 },
        { itemName: 'External Hard Drive', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 119.99, itemSold: 85 },
        { itemName: 'Action Camera', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 229.99, itemSold: 45 },
        { itemName: 'Wireless Mouse', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 29.99, itemSold: 275 },
        { itemName: 'USB-C Hub', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 39.99, itemSold: 90 },
        { itemName: 'Desk Lamp', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 34.99, itemSold: 150 }
      ];
    
    return(
        <>
            <div className="container text-center">
                <div class="row">
                    {items.map((item, index)=>{ return (<Item key={index} itemName={item.itemName} itemImageSource={item.itemImageSource} itemPrice={item.itemPrice} itemSold={item.itemSold}/>)})}
                </div>
            </div>
        </>
    )
}