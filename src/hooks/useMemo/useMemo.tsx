import {useMemo, useRef, useState} from "react";

interface IProduct {
    name: string,
    price: number
}

export function DemoUseMemo(): JSX.Element {
    const [name, setName] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [products, setProducts] = useState<IProduct[]>([]);
    const nameRef = useRef<HTMLInputElement | null>(null);

    const handelAddToCart = () => {
        setProducts(prevProduct => ([
            ...prevProduct,
            {
                name,
                price: +price
            }
        ]));
        setName("");
        setPrice("");
        nameRef.current?.focus();
    };

    const total = useMemo(() => {
        return products.reduce((total, currentValue) => {
            return total + currentValue.price;
        }, 0);
    }, [products]);

    return (
        <div>
            <div>
                <input
                    ref={nameRef}
                    placeholder="Enter name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <input
                    placeholder="Enter price..."
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button onClick={handelAddToCart}>Add to cart</button>
            <h3>Total: {total}</h3>
            {products.map((product, index) => (
                <ul key={index}>
                    <li>{`${product.name} - ${product.price}`}</li>
                </ul>
            ))}
        </div>
    );
}