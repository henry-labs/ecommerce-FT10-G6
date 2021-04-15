/*eslint-disable*/
import axios from "axios"
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import '../../../../scss/components/_editProducts.scss';

function EditProduct() {

    const {id} = useParams();

    const dispatch = useDispatch()

    const allArtist = useSelector((store) => store.reducerArtist.allArtistCache)
    const allCategories = useSelector((store) => store.reducerCategories.allCategoriesCache)
    const allSeries = useSelector((store) => store.reducerSeries.allSeriesCache)
    const allProducts = useSelector((store) => store.reducerProduct.allProductCache)

    const [product, setProduct] = useState({
        id: 1,
        name: "",
        description: "",
        price: 0,
        available: true,
        fileLink: "",
        preview: "",
        categories: [],
        authorId: 1,
        seriesId: null
    })
    const [authorName, setAuthorName] = useState("")
    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        const findProduct = allProducts.find(f => f.id === Number(id))
 
        if (findProduct?.id) {
          
            setProduct({
                id: findProduct.id,
                name: findProduct.name,
                description: findProduct.description,
                price: findProduct.price,
                available: findProduct.available,
                fileLink: findProduct.fileLink,
                preview: findProduct.preview,
                categories: findProduct.categories,
                authorId: findProduct.author.id,
                seriesId: findProduct.seriesId,
            })
            const findArtist = allArtist.find(g => g.id == findProduct.author.id)
            setAuthorName(findArtist.name) 
        }
        
    }, [id])

    function handleInputChange(event) {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }

    //Handle input para price
    function handleInputChangePri(event) {
        setProduct({ ...product, [event.target.name]: Number(event.target.value) })
    }

    //Handle input para available
    function handleInputChangeAv(event) {
        event.preventDefault();
        var option;
        if (event.target.value === "Yes") option = true;
        if (event.target.value === "No") option = false;
        setProduct({ ...product, [event.target.name]: option })
    }

    //Handle input para artist
    function handleInputChangeAr(event) {
        event.preventDefault();
 
        setProduct({ ...product, [event.target.name]: allArtist.find(a => event.target.value === a.idAuthors) })
    }

    //Handle input para categories
    function handleInputChangeCa(event) {

        var cat = product.categories
        if (cat.find(c => c?.id != event.target.value)) {
  
            axios.put(`http://localhost:3001/put/product/${product.id}/category/${event.target.value}`)
            cat.push(allCategories.find(c => c.id == Number(event.target.value)))
        }
        else if (cat[0] == undefined) {
     
            axios.put(`http://localhost:3001/put/product/${product.id}/category/${event.target.value}`)
            cat.push(allCategories.find(c => c.id == Number(event.target.value)))
        }
        //borra los repetidos
        cat = cat.filter((thing, index, self) => index === self.findIndex((t) => (t?.id === thing?.id)))
        setProduct({ ...product, [event.target.name]: cat })
    }

    //Handle input para borrar categoria
    function handleInputDeleteCa(event, id) {

        var cat = product.categories
        axios.delete(`http://localhost:3001/delete/product/${product.id}/category/${id}`)
        cat = cat.filter(c => c?.id != Number(id))
        setProduct({ ...product, categories: cat })
    }

    function submitForm(event) {
 
        axios.put(`http://localhost:3001/put/product/${product.id}`, product)
    }
    const deleteProduct = () => {
        setBoolean(true)
    }
    const Yes = () => {

        if(product.id){
            axios.delete(`http://localhost:3001/delete/product/${product.id}`);
        }
        setBoolean(false);
    }
    const No = () => {
        setBoolean(false);
    }

    var key = 1;

    return (
        <div className="mainDivEP">
            <h2 className="title">Edit Product</h2>
            <div className="divEP">
                <form 
                    className="formEP" 
                    onSubmit={submitForm} >
                    <div>
                        Name: 
                        <input 
                            className="input" type="text" 
                            onChange={handleInputChange} value={product.name} name="name" 
                        />
                    </div>
                    <div>
                        Description: 
                        <input
                            className="input" 
                            type="text" 
                            onChange={handleInputChange} 
                            value={product.description} 
                            name="description" 
                        />
                    </div>
                    <div>
                        Price: 
                        <input 
                            className="input"
                            type="text" 
                            onChange={handleInputChangePri} 
                            value={product.price} 
                            name="price" 
                        />
                    </div>
                    <div>
                        Available:
                        <select 
                            name="available" 
                            id="selectorAvEP" 
                            value={product.available ? "Yes" : "No"} 
                            onChange={handleInputChangeAv}
                        >
                            <option key={`EP${key++}`} value="Yes">Yes</option>
                            <option key={`EP${key++}`} value="No">No</option>
                        </select>
                    </div>
                    <div>
                        FileLink: 
                        <input 
                            className="input"
                            type="text" 
                            onChange={handleInputChange} 
                            value={product.fileLink} 
                            name="fileLink" 
                        />
                    </div>
                    <div>
                        Preview: 
                        <input 
                            className="input"
                            type="text" 
                            onChange={handleInputChange} 
                            value={product.preview} 
                            name="preview" 
                        />
                    </div>
                    <div>
                        Artist:
                        <select 
                            name="author" 
                            id="selectorArEP" 
                            onChange={handleInputChangeAr}
                        >
                            <option key={`EP${key++}`}>
                                {authorName!=="" ? authorName : ""}
                            </option>
                                {allArtist.map(a => <option key={`EP${key++}`} value={a.idAuthors}>{a.name}
                            </option>)}
                        </select>
                    </div>
                    <div>
                        Series:
                        <select name="series" id="selectorSeAP" >
                            {allSeries.map(s => <option key={`EP${key++}`} value={s.id}>
                                {s.name}
                            </option>)}
                        </select>
                    </div>
                    <div>
                        Categories:
                        <select 
                            name="categories" 
                            id="selectorCaAP" 
                            value={""} 
                            onChange={handleInputChangeCa}
                        >
                            <option key={`EP${key++}`}> </option>
                                {allCategories.map(c => <option key={`EP${key++}`} value={c.id}>
                                    {c.name}
                                </option>)}
                        </select>
                        {product.categories.map(p => <h4 className="productCategories" key={`EP${key++}`} onClick={(event) => handleInputDeleteCa(event, p?.id)} >{p?.name}</h4>)}
                    </div>
                    <input 
                        className="EditOrDelete" 
                        type="submit" 
                        value="Edit" 
                    />
                    <input 
                        className="EditOrDelete"
                        type="button" 
                        value="Delete" 
                        onClick={deleteProduct} 
                    />
                </form>
            </div>
                {boolean === true ? 
                    <div className="divDelete">Do you want to delete this product?
                        <br/>
                        <button className="Yes" type="button" onClick={Yes}>Yes</button>
                        <button className="No" type="button" onClick={No}>No</button>
                    </div> : null
                }
        </div>
    );
}

export default EditProduct
