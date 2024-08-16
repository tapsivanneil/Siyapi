import { Item } from "./Item";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function ItemHolder(){
    
    const items = [
        { itemName: 'Wireless Headphones', itemImageSource: 'src/assets/ItemImages/wireless-headphones.webp', itemPrice: 89.99, itemSold: 200 },
        { itemName: 'Bluetooth Speaker', itemImageSource: '#', itemPrice: 29.99, itemSold: 150 },
        { itemName: 'Smartphone Case', itemImageSource: '#', itemPrice: 14.99, itemSold: 350 },
        { itemName: '4K Monitor', itemImageSource: '#', itemPrice: 299.99, itemSold: 80 },
        { itemName: 'Laptop Stand', itemImageSource: '#', itemPrice: 39.99, itemSold: 120 },
        { itemName: 'Gaming Mouse', itemImageSource: '#', itemPrice: 59.99, itemSold: 180 },
        { itemName: 'Mechanical Keyboard', itemImageSource: '#', itemPrice: 79.99, itemSold: 95 },
        { itemName: 'Smart Watch', itemImageSource: '#', itemPrice: 149.99, itemSold: 220 },
        { itemName: 'Portable Charger', itemImageSource: '#', itemPrice: 24.99, itemSold: 300 },
        { itemName: 'Smart Thermostat', itemImageSource: '#', itemPrice: 199.99, itemSold: 60 },
        { itemName: 'Home Security Camera', itemImageSource: '#', itemPrice: 129.99, itemSold: 110 },
        { itemName: 'E-Book Reader', itemImageSource: '#', itemPrice: 89.99, itemSold: 140 },
        { itemName: 'Digital Camera', itemImageSource: '#', itemPrice: 499.99, itemSold: 50 },
        { itemName: 'VR Headset', itemImageSource: '#', itemPrice: 349.99, itemSold: 70 },
        { itemName: 'Bluetooth Earbuds', itemImageSource: '#', itemPrice: 69.99, itemSold: 160 },
        { itemName: 'Laptop Backpack', itemImageSource: '#', itemPrice: 49.99, itemSold: 200 },
        { itemName: 'External Hard Drive', itemImageSource: '#', itemPrice: 119.99, itemSold: 85 },
        { itemName: 'Action Camera', itemImageSource: '#', itemPrice: 229.99, itemSold: 45 },
        { itemName: 'Wireless Mouse', itemImageSource: '#', itemPrice: 29.99, itemSold: 275 },
        { itemName: 'USB-C Hub', itemImageSource: '#', itemPrice: 39.99, itemSold: 90 },
        { itemName: 'Desk Lamp', itemImageSource: '#', itemPrice: 34.99, itemSold: 150 }
      ];
    
    return(
        <>
            <div className="d-flex flex-wrap justify-content-evenly">
                {items.map((item, index)=>{ return (<Item key={index} itemName={item.itemName} itemImageSource={items.itemImageSource} itemPrice={items.itemPrice} itemSold={items.itemSold}/>)})}
            </div>
        </>
    )
}