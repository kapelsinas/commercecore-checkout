import Divider from 'components/helper/Divider';

const cartItems = [
  {
    id: 1,
    name: 'LogoIpsum IPL',
    price: 299.97,
    image: 'cart/product.png',
    quantity: 3,
  },
];

type CartItem = (typeof cartItems)[number];

const CartItem = ({ item }: { item: CartItem }) => {
  return (
    <div className="relative flex flex-col gap-4 text-[#333333]">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="relative ">
            <img
              src={item.image}
              className="w-16 h-16 border-[1px] rounded-[4px] border-[#E0E0E0]"
              alt={item.name}
            />
            {item.quantity > 0 && (
              <div className="absolute top-[-10.5px] right-[-10.5px] bg-[#5C5C5C] text-white w-[21px] h-[21px] flex items-center justify-center rounded-full text-xs">
                {item.quantity}
              </div>
            )}
          </div>
          <p className="text-small-body font-bold">{item.name}</p>
        </div>
        <p className="text-small-body font-[500]">${item.price.toFixed(2)}</p>
      </div>
      <Divider />
    </div>
  );
};

const CartItems = () => {
  return (
    <div className="flex flex-col">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CartItems;
