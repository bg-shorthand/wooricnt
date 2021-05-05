import { Products } from "constant/type";
import { getSpecial } from "fb/API";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [state, setState] = useState([] as Products);

  useEffect(() => {
    const getItem = async () => {
      const snapshot = await getSpecial();
      console.log(snapshot.docs.map((product) => product.data()));
      const list = snapshot.docs.map((product) => product.data());
      setState(() => list as Products);
    };
    getItem();
  }, []);

  return (
    <section>
      {state.map((product) => (
        <div>{product.title}</div>
      ))}
    </section>
  );
};

export default Carousel;
