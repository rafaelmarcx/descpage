'use client';

import Image from 'next/image';
import styles from './page.module.css';

const ProductPage = ({ params }) => {
  const frequentlyBoughtProducts = [
    {
      name: 'Premium Grocery Collection',
      price: '$250.00',
      oldPrice: '$162.50',
      imageUrl: '/images/grocery-collection.png',
    },
    {
      name: 'Premium Grocery Pack',
      price: '$250.00',
      oldPrice: '$162.50',
      imageUrl: '/images/grocery-pack.png',
    },
    {
      name: 'Fresh&Real CHole Masala',
      price: '$250.00',
      oldPrice: '$162.50',
      imageUrl: '/images/masala.png',
    },
    {
      name: 'Gum Pack',
      price: '$250.00',
      oldPrice: '$162.50',
      imageUrl: '/images/gum-pack.png',
    },
  ];

  return (
    <div className={styles['product-page']}>
      <h1>Silver High Neck Sweater</h1>
      <div className={styles['product-details']}>
        <Image
          src="/public/images/jojomanga.jpg"
          alt="Silver High Neck Sweater"
          width={500}
          height={500}
        />
        <div className={styles['product-info']}>
          <span>Rated: ⭐⭐⭐☆☆ (0 reviews)</span>
          <div className={styles['options']}>
            <p>Option:</p>
            <button>option 1</button>
            <button>option 2</button>
            <button>option 3</button>
            <button>option 4</button>
          </div>
          <div className={styles['types']}>
            <p>Type:</p>
            <button>type 1</button>
            <button>type 2</button>
            <button>type 3</button>
          </div>
          <h2>$258.00</h2>
          <button className={styles['add-to-cart']}>Add To Cart</button>
          <p>Stock Available</p>
          <p>Sold by: Scroll Through</p>
        </div>
      </div>
      <div className={styles['product-description']}>
        <h3>Specification:</h3>
        <ul>
          <li>Brand: Beats</li>
          <li>Model: S450</li>
          <li>Wireless Bluetooth Headset</li>
          <li>FM Frequency Response: 87.5 - 108 MHz</li>
          <li>Feature: FM Radio, Card Supported (Micro SD / TF)</li>
          <li>Made in China</li>
        </ul>
      </div>

      <div className={styles['frequently-bought-together']}>
        <h2>Frequently Bought Together</h2>
        <div className={styles['products']}>
          {frequentlyBoughtProducts.map((product, index) => (
            <div key={index} className={styles['product-card']}>
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={150}
                height={150}
              />
              <h3>{product.name}</h3>
              <p>
                <span className={styles['price']}>{product.price}</span>
                <span className={styles['old-price']}>{product.oldPrice}</span>
              </p>
            </div>
          ))}
        </div>
        <div className={styles['total-price']}>
          <p>
            <span>$2,500.00</span>
            <small>Save $500.00</small>
          </p>
          <button className={styles['add-to-cart']}>Add To Cart</button>
          <button className={styles['add-to-list']}>Add To List</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
