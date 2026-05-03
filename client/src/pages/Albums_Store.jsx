import React, { useState, useEffect } from 'react'
import Store_Albums_Article from '../components/subcomponents/Store_Albums_Article';

// useEffect: al cargar pagina muestra los datos sin necesitar presionar algo.
function Albums_Store() {

  const [products, setProductos] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");
  const [img, setImg] = useState("");

  /* http://fullstacks.atwebpages.com/queries.php */

  useEffect(() => {
    const showProducts = async () => {
      const res = await fetch("http://localhost/singer_artist/server/queries.php");
      const data = await res.json();
      setProductos(data);
    }

    showProducts();
  }, []) // [] significa, ejecuta solo una vez cuando la pagina carga, porque sino hara muchas peticiones.

  const insertProducts = async () => {
    const request = await fetch("http://localhost/singer_artist/server/queries.php", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, description: description, price: price, year: year, img: img })
    });
    const data = await request.json();

    if (data.success) {
      setTitle("");
      setPrice("");
      setDescription("");
      setYear("");
      setImg("");
    } else {
      alert(data.error)
    }
  }

  return (
    <div className='albums_purchases_page'>

      <h1>Welcome to Albums Store</h1>
      <section>
        <ul>
          {products.map((p) => (
            <li key={p.id}>
              <Store_Albums_Article
                title={p.title}
                description={p.description}
                edition={"ALBUM"}
                img={p.img}
                version={"Midnights Album Moonlight Edition"}
                price={p.price}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* HIDDEN WITH PROJECT IN COURSE: */}

      {/*
      <input
        placeholder='title'
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} />

      <input
        placeholder="description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)} />

      <input
        placeholder="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)} />

      <input
        placeholder="year"
        type="text"
        value={year}
        onChange={(e) => setYear(e.target.value)} />

      <input
        placeholder="image"
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)} />

      <button onClick={insertProducts}>Insert</button>

      */}
    </div>
  )
}

export default Albums_Store