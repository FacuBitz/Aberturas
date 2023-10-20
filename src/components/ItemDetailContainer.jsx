import React from "react";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [prod, setProd] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();
      const catFilter = data.filter((products) => products.id == id);
      setProd(catFilter);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ItemDetail data={prod} />
    </div>
  );
};

export default ItemDetailContainer;
